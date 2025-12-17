'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import {
  getAllConversionIds,
  getCountryFromPath,
  getGoogleAdsConfig,
  isGoogleAdsLanding,
  isGoogleAdsThankYou,
} from '@/app/config/google-ads';
import {
  initGtagScript,
  trackGoogleAdsPageView,
  trackGoogleAdsViewContent,
  trackGoogleAdsConversion,
} from '@/app/lib/google/gtag';

// Componente interno che usa useSearchParams - DEVE essere wrappato in Suspense
function GoogleAdsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get all conversion IDs for initialization
  const conversionIds = getAllConversionIds();
  const primaryConversionId = conversionIds[0] || null;

  useEffect(() => {
    // Don't track if no conversion IDs are configured
    if (!primaryConversionId) {
      return;
    }

    // Wait for gtag to be available
    const waitForGtag = setInterval(() => {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        clearInterval(waitForGtag);

        // Track PageView on all pages
        trackGoogleAdsPageView(primaryConversionId);

        // Get country from path
        const countryCode = getCountryFromPath(pathname);

        // If on a Google Ads landing page (/gg-*), track ViewContent
        if (isGoogleAdsLanding(pathname) && countryCode) {
          const config = getGoogleAdsConfig(countryCode);
          if (config) {
            console.log('[Google Ads] Landing page detected, tracking ViewContent...');
            trackGoogleAdsViewContent(config);
          } else {
            console.warn(`[Google Ads] No config found for country: ${countryCode}`);
          }
        }

        // If on a Google Ads thank you page (/ty/ty-gg-*), track Conversion (Purchase)
        if (isGoogleAdsThankYou(pathname) && countryCode) {
          const config = getGoogleAdsConfig(countryCode);
          if (config) {
            console.log('[Google Ads] Thank you page detected, tracking Conversion...');

            // Get value from URL params or localStorage
            let value = 0;
            const priceParam = searchParams.get('price');
            if (priceParam) {
              value = parseFloat(priceParam);
            } else if (typeof window !== 'undefined') {
              // Try to get from localStorage (set by the landing page)
              const storedPrice = localStorage.getItem('gg_purchase_value');
              if (storedPrice) {
                value = parseFloat(storedPrice);
              }
            }

            // Get transaction ID from URL or generate one
            const transactionId = searchParams.get('txn') || `txn_${Date.now()}`;

            if (value > 0) {
              trackGoogleAdsConversion(config, value, transactionId);
            } else {
              console.warn('[Google Ads] No value found for conversion tracking');
            }
          } else {
            console.warn(`[Google Ads] No config found for country: ${countryCode}`);
          }
        }
      }
    }, 100);

    // Cleanup after 10 seconds if gtag never loads
    const timeout = setTimeout(() => clearInterval(waitForGtag), 10000);

    return () => {
      clearInterval(waitForGtag);
      clearTimeout(timeout);
    };
  }, [pathname, searchParams, primaryConversionId]);

  return null;
}

// Componente principale esportato
export default function GoogleAdsPixel() {
  // Get all conversion IDs for initialization
  const conversionIds = getAllConversionIds();
  const primaryConversionId = conversionIds[0] || null;

  // Don't render anything if no conversion IDs are configured
  if (!primaryConversionId) {
    return null;
  }

  return (
    <>
      {/* Google Ads gtag.js */}
      <Script
        id="google-ads-gtag-js"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryConversionId}`}
      />
      <Script
        id="google-ads-gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: initGtagScript(conversionIds),
        }}
      />
      {/* IMPORTANTE: Suspense boundary richiesto per useSearchParams in Next.js */}
      <Suspense fallback={null}>
        <GoogleAdsTracker />
      </Suspense>
    </>
  );
}
