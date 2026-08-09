// Centralized configuration for the site. Replace placeholders with real values before public launch.
window.SITE_CONFIG = {
  SITE_URL: "REPLACE_WITH_WEBSITE_BASE_URL", // e.g. https://islantify.com or https://USERNAME.github.io/REPO
  APP_STORE_URL: "REPLACE_WITH_REAL_APP_STORE_URL", // App Store URL (do NOT invent)
  GOOGLE_PLAY_URL: "REPLACE_WITH_REAL_GOOGLE_PLAY_URL", // Google Play URL (do NOT invent)
  PRIVACY_URL: "/privacy/",
  PRIVACY_CHOICES_URL: "/privacy-choices/",
  TERMS_URL: "/terms/",
  CONTACT_EMAIL: "REPLACE_WITH_CONTACT_EMAIL"
};

// Helper: canonical/base that can be used later by templates
(function(){
  if (!window.SITE_CONFIG.SITE_URL || window.SITE_CONFIG.SITE_URL.indexOf('REPLACE_WITH') === 0) {
    window.SITE_CONFIG.BASE = '';
  } else {
    window.SITE_CONFIG.BASE = window.SITE_CONFIG.SITE_URL.replace(/\/$/, '');
  }
})();
