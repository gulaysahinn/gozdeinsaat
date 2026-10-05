// Site Metrics & Performance Telemetry (GA4 ready, privacy-friendly)
// Named siteMetrics.js to avoid browser adblocker false-positive intercepting (net::ERR_BLOCKED_BY_CLIENT)

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

let isInitialized = false;

/**
 * Checks if user has given cookie consent for analytics.
 */
export function hasAnalyticsConsent() {
  if (typeof window === "undefined" || !window.localStorage) return false;
  try {
    const raw = localStorage.getItem("gozde_cookie_consent");
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    return parsed.type === "all";
  } catch {
    return false;
  }
}

/**
 * Initializes GA4 script dynamically if measurement ID is provided and user has consented.
 */
export function initAnalytics() {
  if (typeof window === "undefined") return;
  // If no GA ID configured, do not load external tracking scripts
  if (!GA_MEASUREMENT_ID || isInitialized) return;

  // Check consent unless running in an environment where consent isn't required
  if (!hasAnalyticsConsent()) {
    // Listen for consent update
    window.addEventListener(
      "gozde:cookie-consent-updated",
      (e) => {
        if (e.detail?.type === "all") {
          initAnalytics();
        }
      },
      { once: true }
    );
    return;
  }

  try {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.onerror = () => {
      // Gracefully handle AdBlocker blocking external script without error in console
      console.warn("[SiteMetrics] External metrics blocked or offline; falling back smoothly.");
    };
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, {
      send_page_view: false,
      anonymize_ip: true,
      cookie_flags: "SameSite=None;Secure",
    });

    isInitialized = true;
    console.info(`[SiteMetrics] GA4 initialized with ID: ${GA_MEASUREMENT_ID}`);
  } catch (err) {
    console.warn("[SiteMetrics] Could not initialize GA4:", err);
  }
}

/**
 * Sends a virtual pageview on SPA route transitions.
 */
export function trackPageView(path, title) {
  if (typeof window === "undefined" || !window.gtag || !GA_MEASUREMENT_ID) return;

  try {
    window.gtag("event", "page_view", {
      page_path: path,
      page_title: title || document.title,
      page_location: window.location.href,
    });
  } catch (e) {
    // Suppress if blocked by client
  }
}

/**
 * Tracks custom conversion events (e.g. form submission, phone call click, whatsapp click).
 */
export function trackEvent(action, category = "Engagement", label = "", value = 0) {
  if (typeof window === "undefined" || !window.gtag) return;

  try {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } catch (e) {
    // Suppress if blocked by client
  }
}
