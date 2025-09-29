/**
 * Lightweight analytics helper for Plausible events
 * Safe no-op if Plausible script is not loaded.
 */
export type AnalyticsEventProps = Record<string, string | number | boolean>

export const trackEvent = (
  eventName: string,
  props?: AnalyticsEventProps
): void => {
  try {
    // GA4 via gtag
    const gtag = (window as any)?.gtag
    if (typeof gtag === 'function') {
      gtag('event', eventName, props || {})
      return
    }

    // Fallback: Plausible if still present
    const plausible = (window as any)?.plausible
    if (typeof plausible === 'function') {
      if (props && Object.keys(props).length > 0) {
        plausible(eventName, { props })
      } else {
        plausible(eventName)
      }
    }
  } catch {
    // swallow analytics errors
  }
}
