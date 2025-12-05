// Facebook Conversions API helper - Client-side user data storage

export interface UserData {
  nome: string;
  cognome: string;
  telefono: string;
  indirizzo: string;
}

const STORAGE_KEY = 'fb_user_data';

/**
 * Saves user data to localStorage for Facebook tracking
 */
export function saveUserDataToStorage(data: UserData): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('[CAPI] Failed to save user data:', error);
  }
}

/**
 * Retrieves user data from localStorage
 */
export function getUserDataFromStorage(): UserData | null {
  if (typeof window === 'undefined') return null;

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('[CAPI] Failed to get user data:', error);
    return null;
  }
}

/**
 * Clears user data from localStorage
 */
export function clearUserDataFromStorage(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('[CAPI] Failed to clear user data:', error);
  }
}
