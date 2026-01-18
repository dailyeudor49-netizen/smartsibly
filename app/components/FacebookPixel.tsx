'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { FB_CONFIG } from '@/app/config/facebook';
import {
  initPixelScript,
  trackPageView,
  trackPurchase,
  trackViewContent,
  generateEventId,
  getFbp,
  getFbc,
} from '@/app/lib/facebook/pixel';
import { getUserDataFromStorage, trackLeadCAPI } from '@/app/lib/facebook/capi';

// Storage key per prevenire tracking duplicati
const PURCHASE_TRACKED_KEY = 'fb_purchase_tracked';

/**
 * Verifica se il pathname è una landing page (fb-* o rc-*)
 */
function isLandingPage(pathname: string | null): boolean {
  if (!pathname) return false;
  return pathname.startsWith('/fb-') || pathname.startsWith('/rc-');
}

/**
 * Verifica se il pathname è una thank you page tracciata (fb-* o rc-*)
 */
function isFacebookThankYouPage(pathname: string | null): boolean {
  if (!pathname) return false;
  return pathname.startsWith('/ty/ty-fb-') || pathname.startsWith('/ty/ty-rc-');
}

/**
 * Verifica se dobbiamo caricare il pixel (landing o thank you)
 */
function shouldLoadPixel(pathname: string | null): boolean {
  if (!pathname) return false;
  return isLandingPage(pathname) || isFacebookThankYouPage(pathname);
}

/**
 * Controlla se il purchase è già stato tracciato per questa sessione
 */
function isPurchaseAlreadyTracked(pathname: string): boolean {
  if (typeof window === 'undefined') return false;
  const tracked = sessionStorage.getItem(PURCHASE_TRACKED_KEY);
  return tracked === pathname;
}

/**
 * Segna il purchase come tracciato per questa sessione
 */
function markPurchaseAsTracked(pathname: string): void {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(PURCHASE_TRACKED_KEY, pathname);
}

/**
 * Componente interno che usa useSearchParams - DEVE essere wrappato in Suspense
 */
function FacebookPixelTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Verifica se dobbiamo caricare il pixel
  const shouldLoad = shouldLoadPixel(pathname);

  useEffect(() => {
    console.log('[FB Pixel] Component mounted, pathname:', pathname);
    console.log('[FB Pixel] Should load pixel:', shouldLoad);

    if (!shouldLoad) {
      console.log('[FB Pixel] Skipping tracking - not a tracked page');
      return;
    }

    const eventId = generateEventId();
    console.log('[FB Pixel] Tracking PageView with eventId:', eventId);
    trackPageView(eventId);

    // Se siamo su una landing page (fb-* o rc-*), traccia ViewContent
    if (isLandingPage(pathname)) {
      console.log('[FB Pixel] === LANDING PAGE DETECTED ===');
      const viewContentEventId = generateEventId();
      const priceData = getPriceDataFromLandingPath(pathname);
      const viewContentData = {
        content_name: getContentNameFromLandingPath(pathname),
        content_category: 'landing_page',
        content_ids: getProductIdFromLandingPath(pathname),
        content_type: 'product',
        currency: priceData.currency,
        value: priceData.value,
      };
      console.log('[FB Pixel] ViewContent event data:', viewContentData);
      trackViewContent(viewContentData, viewContentEventId);
    }

    // Se siamo su una thank you page Facebook (/ty/ty-fb-* o /ty/ty-rc-*), traccia Purchase
    if (isFacebookThankYouPage(pathname)) {
      console.log('[FB Pixel] === THANK YOU PAGE DETECTED ===');
      console.log('[FB Pixel] Path:', pathname);

      // Controlla se già tracciato (prevenzione duplicati al refresh)
      if (isPurchaseAlreadyTracked(pathname)) {
        console.log('[FB Pixel] Purchase already tracked for this session, skipping...');
        return;
      }

      const purchaseEventId = generateEventId();
      const purchasePriceData = getPriceDataFromPath(pathname);

      const eventData = {
        content_name: getContentNameFromPath(pathname),
        content_category: 'landing_page',
        content_ids: getProductIdFromPath(pathname),
        content_type: 'product',
        currency: purchasePriceData.currency,
        value: purchasePriceData.value,
        quantity: 1,
      };

      console.log('[FB Pixel] Purchase event data:', eventData);
      console.log('[FB Pixel] Purchase eventId:', purchaseEventId);

      // Traccia Purchase con il pixel (client-side)
      trackPurchase(eventData, purchaseEventId);

      // Traccia Lead via CAPI (server-side via webhook)
      const userData = getUserDataFromStorage();
      console.log('[FB Pixel] User data from storage:', userData);

      trackLeadCAPI(purchaseEventId, userData, eventData).then((success) => {
        console.log('[FB CAPI] Lead event sent to webhook:', success ? 'SUCCESS' : 'FAILED');
      });

      // Segna come tracciato per prevenire duplicati
      markPurchaseAsTracked(pathname);

      // Log riepilogativo
      console.log('[FB Pixel] === TRACKING SUMMARY ===', {
        pathname,
        purchaseEventId,
        fbp: getFbp(),
        fbc: getFbc(),
        hasUserData: Object.keys(userData).length > 0,
        userData,
      });
    }
  }, [pathname, searchParams, shouldLoad]);

  return null;
}

export default function FacebookPixel() {
  const pathname = usePathname();

  // Verifica se dobbiamo caricare il pixel
  const shouldLoad = shouldLoadPixel(pathname);

  // NON renderizzare lo script del pixel se non necessario
  if (!shouldLoad) {
    return null;
  }

  return (
    <>
      {/* Facebook Pixel Base Code */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: initPixelScript(),
        }}
      />

      {/* Noscript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${FB_CONFIG.PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

      {/* IMPORTANTE: Suspense boundary richiesto per useSearchParams in Next.js */}
      <Suspense fallback={null}>
        <FacebookPixelTracker />
      </Suspense>
    </>
  );
}

/**
 * Estrae il nome del contenuto dal path della thank you page
 */
function getContentNameFromPath(pathname: string): string {
  const pathMap: Record<string, string> = {
    // Air Wave Smart landing pages
    '/ty/ty-fb-airwave-pl': 'Air Wave Smart PL',
    '/ty/ty-fb-airwave-hu': 'Air Wave Smart HU',
    '/ty/ty-fb-airwave-hr': 'Air Wave Smart HR',
    '/ty/ty-fb-airwave-cs': 'Air Wave Smart CS',
    // Robot landing pages (Supertrend - rc-*)
    '/ty/ty-rc-robot-cs': 'NovaClean X1 PRO CS',
    '/ty/ty-rc-robot-pl': 'NovaClean X1 PRO PL',
    '/ty/ty-rc-robot-sk': 'NovaClean X1 PRO SK',
    // Secure landing pages
    '/ty/ty-fb-secure-cs': 'SecureDrive CS',
    '/ty/ty-fb-secure-pl': 'SecureDrive PL',
    '/ty/ty-fb-secure-sk': 'SecureDrive SK',
  };

  return pathMap[pathname] || 'Product';
}

/**
 * Estrae l'ID prodotto dal path della thank you page
 */
function getProductIdFromPath(pathname: string): string {
  const idMap: Record<string, string> = {
    // Air Wave Smart landing pages
    '/ty/ty-fb-airwave-pl': 'airwave-smart-pl',
    '/ty/ty-fb-airwave-hu': 'airwave-smart-hu',
    '/ty/ty-fb-airwave-hr': 'airwave-smart-hr',
    '/ty/ty-fb-airwave-cs': 'airwave-smart-cs',
    // Robot landing pages (Supertrend - rc-*)
    '/ty/ty-rc-robot-cs': 'novaclean-x1-pro-cs',
    '/ty/ty-rc-robot-pl': 'novaclean-x1-pro-pl',
    '/ty/ty-rc-robot-sk': 'novaclean-x1-pro-sk',
    // Secure landing pages
    '/ty/ty-fb-secure-cs': 'securedrive-cs',
    '/ty/ty-fb-secure-pl': 'securedrive-pl',
    '/ty/ty-fb-secure-sk': 'securedrive-sk',
  };

  return idMap[pathname] || 'product';
}

/**
 * Estrae il nome del contenuto dal path della landing page
 */
function getContentNameFromLandingPath(pathname: string): string {
  const pathMap: Record<string, string> = {
    // Facebook landing pages
    '/fb-airwave-pl': 'Air Wave Smart PL',
    '/fb-airwave-hu': 'Air Wave Smart HU',
    '/fb-airwave-hr': 'Air Wave Smart HR',
    '/fb-airwave-cs': 'Air Wave Smart CS',
    // Robot landing pages (Supertrend - rc-*)
    '/rc-robot-cs': 'NovaClean X1 PRO CS',
    '/rc-robot-pl': 'NovaClean X1 PRO PL',
    '/rc-robot-sk': 'NovaClean X1 PRO SK',
    // Secure landing pages
    '/fb-secure-cs': 'SecureDrive CS',
    '/fb-secure-pl': 'SecureDrive PL',
    '/fb-secure-sk': 'SecureDrive SK',
  };

  return pathMap[pathname] || 'Product';
}

/**
 * Estrae l'ID prodotto dal path della landing page
 */
function getProductIdFromLandingPath(pathname: string): string {
  const idMap: Record<string, string> = {
    // Facebook landing pages
    '/fb-airwave-pl': 'airwave-smart-pl',
    '/fb-airwave-hu': 'airwave-smart-hu',
    '/fb-airwave-hr': 'airwave-smart-hr',
    '/fb-airwave-cs': 'airwave-smart-cs',
    // Robot landing pages (Supertrend - rc-*)
    '/rc-robot-cs': 'novaclean-x1-pro-cs',
    '/rc-robot-pl': 'novaclean-x1-pro-pl',
    '/rc-robot-sk': 'novaclean-x1-pro-sk',
    // Secure landing pages
    '/fb-secure-cs': 'securedrive-cs',
    '/fb-secure-pl': 'securedrive-pl',
    '/fb-secure-sk': 'securedrive-sk',
  };

  return idMap[pathname] || 'product';
}

/**
 * Ottiene prezzo e valuta per ogni paese dalla landing page
 */
function getPriceDataFromLandingPath(pathname: string): { value: number; currency: string } {
  const priceMap: Record<string, { value: number; currency: string }> = {
    // Facebook landing pages
    '/fb-airwave-pl': { value: 299, currency: 'PLN' },
    '/fb-airwave-hu': { value: 27999, currency: 'HUF' },
    '/fb-airwave-hr': { value: 69.99, currency: 'EUR' },
    '/fb-airwave-cs': { value: 1799, currency: 'CZK' },
    // Robot landing pages (Supertrend - rc-*)
    '/rc-robot-cs': { value: 1999, currency: 'CZK' },
    '/rc-robot-pl': { value: 349, currency: 'PLN' },
    '/rc-robot-sk': { value: 79.99, currency: 'EUR' },
    // Secure landing pages
    '/fb-secure-cs': { value: 699, currency: 'CZK' },
    '/fb-secure-pl': { value: 129, currency: 'PLN' },
    '/fb-secure-sk': { value: 29.99, currency: 'EUR' },
  };

  return priceMap[pathname] || { value: 0, currency: 'EUR' };
}

/**
 * Ottiene prezzo e valuta per ogni paese dalla thank you page
 */
function getPriceDataFromPath(pathname: string): { value: number; currency: string } {
  const priceMap: Record<string, { value: number; currency: string }> = {
    '/ty/ty-fb-airwave-pl': { value: 299, currency: 'PLN' },
    '/ty/ty-fb-airwave-hu': { value: 27999, currency: 'HUF' },
    '/ty/ty-fb-airwave-hr': { value: 69.99, currency: 'EUR' },
    '/ty/ty-fb-airwave-cs': { value: 1799, currency: 'CZK' },
    // Robot landing pages (Supertrend - rc-*)
    '/ty/ty-rc-robot-cs': { value: 1999, currency: 'CZK' },
    '/ty/ty-rc-robot-pl': { value: 349, currency: 'PLN' },
    '/ty/ty-rc-robot-sk': { value: 79.99, currency: 'EUR' },
    // Secure landing pages
    '/ty/ty-fb-secure-cs': { value: 699, currency: 'CZK' },
    '/ty/ty-fb-secure-pl': { value: 129, currency: 'PLN' },
    '/ty/ty-fb-secure-sk': { value: 29.99, currency: 'EUR' },
  };

  return priceMap[pathname] || { value: 0, currency: 'EUR' };
}
