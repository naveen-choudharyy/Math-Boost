/**
 * Lightweight, production-ready event tracking utility.
 * Ready for Google Analytics (GA4 / gtag), Google Tag Manager (dataLayer), or custom logging.
 */
export const trackEvent = (eventName, params = {}) => {
  if (typeof window === "undefined") return;

  const eventPayload = {
    event: eventName,
    ...params,
    timestamp: new Date().toISOString(),
  };

  // 1. Support Google Tag Manager dataLayer if integrated by the user
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventPayload);
  }

  // 2. Support gtag.js if installed
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  // 3. Dispatch standard browser event for testing and custom event listeners
  window.dispatchEvent(
    new CustomEvent("custom_conversion_event", { detail: eventPayload })
  );

  // In development, log cleanly to console
  if (import.meta.env.DEV) {
    console.debug(`[Analytics Event] ${eventName}:`, params);
  }
};
