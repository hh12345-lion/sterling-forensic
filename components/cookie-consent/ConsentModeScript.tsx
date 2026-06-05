// Inline consent defaults must run before any Google tags load (GDPR / Consent Mode v2).
export function ConsentModeScript() {
  const script = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
      security_storage: 'granted',
      wait_for_update: 500
    });
  `;

  return (
    <script
      id="consent-mode-defaults"
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
}
