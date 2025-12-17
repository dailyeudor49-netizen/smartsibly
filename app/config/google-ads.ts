// Google Ads Configuration by Country
// Format: 'country_code': { conversionId: 'AW-XXXXXXXXX', conversionLabel: 'XXXXXXXXXXXXXX', currency: 'XXX' }
// Example: 'hr': { conversionId: 'AW-123456789', conversionLabel: 'AbCdEfGhIjKlMnOp', currency: 'EUR' }

export interface GoogleAdsCountryConfig {
  conversionId: string;
  conversionLabel: string;
  currency: string;
}

export const GOOGLE_ADS_BY_COUNTRY: Record<string, GoogleAdsCountryConfig> = {
  // Add your country configurations here
  // 'hr': { conversionId: 'AW-XXXXXXXXX', conversionLabel: 'XXXXXXXXXXXXXX', currency: 'EUR' },
  // 'it': { conversionId: 'AW-XXXXXXXXX', conversionLabel: 'XXXXXXXXXXXXXX', currency: 'EUR' },
  // 'de': { conversionId: 'AW-XXXXXXXXX', conversionLabel: 'XXXXXXXXXXXXXX', currency: 'EUR' },
};

/**
 * Extract country code from pathname
 * Landing pages: /gg-productname-hr -> 'hr'
 * Thank you pages: /ty/ty-gg-productname-hr -> 'hr'
 */
export function getCountryFromPath(pathname: string): string | null {
  const match = pathname.match(/-([a-z]{2})$/i);
  return match ? match[1].toLowerCase() : null;
}

/**
 * Check if the current path is a Google Ads landing page (starts with /gg-)
 */
export function isGoogleAdsLanding(pathname: string): boolean {
  return pathname.startsWith('/gg-');
}

/**
 * Check if the current path is a Google Ads thank you page (starts with /ty/ty-gg-)
 */
export function isGoogleAdsThankYou(pathname: string): boolean {
  return pathname.startsWith('/ty/ty-gg-');
}

/**
 * Get Google Ads config for a specific country
 */
export function getGoogleAdsConfig(countryCode: string): GoogleAdsCountryConfig | null {
  return GOOGLE_ADS_BY_COUNTRY[countryCode.toLowerCase()] || null;
}

/**
 * Get the primary conversion ID (first one in the config, used for gtag initialization)
 */
export function getPrimaryConversionId(): string | null {
  const countries = Object.keys(GOOGLE_ADS_BY_COUNTRY);
  if (countries.length === 0) return null;
  return GOOGLE_ADS_BY_COUNTRY[countries[0]].conversionId;
}

/**
 * Get all unique conversion IDs (for loading multiple gtag configs if needed)
 */
export function getAllConversionIds(): string[] {
  const ids = new Set<string>();
  Object.values(GOOGLE_ADS_BY_COUNTRY).forEach(config => {
    ids.add(config.conversionId);
  });
  return Array.from(ids);
}
