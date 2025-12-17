import { GoogleAdsCountryConfig } from '@/app/config/google-ads';

/**
 * Track Google Ads page view event
 */
export function trackGoogleAdsPageView(conversionId: string): void {
  if (typeof window === 'undefined' || !window.gtag) {
    console.warn('[Google Ads] gtag not loaded yet');
    return;
  }

  window.gtag('event', 'page_view', {
    send_to: conversionId,
  });
  console.log('[Google Ads] PageView tracked');
}

/**
 * Track Google Ads view content event (for landing pages)
 */
export function trackGoogleAdsViewContent(config: GoogleAdsCountryConfig): void {
  if (typeof window === 'undefined' || !window.gtag) {
    console.warn('[Google Ads] gtag not loaded yet');
    return;
  }

  window.gtag('event', 'view_item', {
    send_to: `${config.conversionId}/${config.conversionLabel}`,
    currency: config.currency,
  });
  console.log('[Google Ads] ViewContent tracked for:', config.conversionId);
}

/**
 * Track Google Ads conversion (purchase) event
 */
export function trackGoogleAdsConversion(
  config: GoogleAdsCountryConfig,
  value: number,
  transactionId?: string
): void {
  if (typeof window === 'undefined' || !window.gtag) {
    console.warn('[Google Ads] gtag not loaded yet');
    return;
  }

  window.gtag('event', 'conversion', {
    send_to: `${config.conversionId}/${config.conversionLabel}`,
    value: value,
    currency: config.currency,
    transaction_id: transactionId || `txn_${Date.now()}`,
  });
  console.log('[Google Ads] Conversion tracked:', {
    conversionId: config.conversionId,
    value,
    currency: config.currency,
  });
}

/**
 * Initialize gtag script
 */
export function initGtagScript(conversionIds: string[]): string {
  if (conversionIds.length === 0) return '';

  const primaryId = conversionIds[0];
  const additionalConfigs = conversionIds.slice(1).map(id => `gtag('config', '${id}');`).join('\n');

  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${primaryId}');
    ${additionalConfigs}
    console.log('[Google Ads] Initialized with IDs:', ${JSON.stringify(conversionIds)});
  `;
}
