// Google Ads Conversion Tracking Module

export interface GoogleAdsConfig {
  conversionId: string;
  conversionLabel: string;
}

export interface ConversionData {
  value: number;
  currency?: string;
  transactionId?: string;
}

// Configuration for each landing page
export const GOOGLE_ADS_CONFIG: Record<string, GoogleAdsConfig> = {
  'g-airwave': {
    conversionId: 'AW-16767546857',
    conversionLabel: 'CMadCIy0w8wbEOnrsbs-',
  },
  'g-climate': {
    conversionId: 'AW-16767546857',
    conversionLabel: 'CMadCIy0w8wbEOnrsbs-',
  },
};

// Storage key for conversion data
const CONVERSION_DATA_KEY = 'g_conversion_data';
const LANDING_SOURCE_KEY = 'g_landing_source';

/**
 * Save conversion data to localStorage before redirecting to thank you page
 */
export function saveConversionData(
  landingSource: string,
  data: ConversionData
): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(CONVERSION_DATA_KEY, JSON.stringify(data));
    localStorage.setItem(LANDING_SOURCE_KEY, landingSource);
  } catch (error) {
    console.error('[GTAG] Failed to save conversion data:', error);
  }
}

/**
 * Retrieve conversion data from localStorage
 */
export function getConversionData(): {
  landingSource: string | null;
  data: ConversionData | null;
} {
  if (typeof window === 'undefined') {
    return { landingSource: null, data: null };
  }

  try {
    const landingSource = localStorage.getItem(LANDING_SOURCE_KEY);
    const dataStr = localStorage.getItem(CONVERSION_DATA_KEY);
    const data = dataStr ? JSON.parse(dataStr) : null;
    return { landingSource, data };
  } catch (error) {
    console.error('[GTAG] Failed to get conversion data:', error);
    return { landingSource: null, data: null };
  }
}

/**
 * Clear conversion data from localStorage after tracking
 */
export function clearConversionData(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(CONVERSION_DATA_KEY);
    localStorage.removeItem(LANDING_SOURCE_KEY);
  } catch (error) {
    console.error('[GTAG] Failed to clear conversion data:', error);
  }
}

/**
 * Get the Google Ads config for a specific landing
 */
export function getGoogleAdsConfig(landingSource: string): GoogleAdsConfig | null {
  return GOOGLE_ADS_CONFIG[landingSource] || null;
}

/**
 * Track Google Ads conversion - call this on the thank you page
 */
export function trackGoogleAdsConversion(
  config: GoogleAdsConfig,
  data: ConversionData
): void {
  if (typeof window === 'undefined') return;

  // Ensure gtag is available
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (!gtag) {
    console.warn('[GTAG] gtag not available');
    return;
  }

  gtag('event', 'conversion', {
    send_to: `${config.conversionId}/${config.conversionLabel}`,
    value: data.value,
    currency: data.currency || 'HUF',
    transaction_id: data.transactionId || `tx_${Date.now()}`,
  });

  console.log('[GTAG] Conversion tracked:', {
    conversionId: config.conversionId,
    value: data.value,
  });
}

/**
 * Generate the Google Ads gtag script tag content
 */
export function getGtagScriptSrc(conversionId: string): string {
  return `https://www.googletagmanager.com/gtag/js?id=${conversionId}`;
}

/**
 * Generate the inline gtag initialization script
 */
export function getGtagInitScript(conversionId: string): string {
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${conversionId}');
  `;
}
