export const siteConfig = {
  name: "Apex",
  tagline: "Measure your vert. Track your dunk.",
  url: "https://apexvert.com",
  description:
    "Apex measures your vertical jump from your pocket. No filming, no setup. Just jump and get a number, then track your progress all the way to a dunk.",
  developer: "Thea Apps Inc.",
  supportEmail: "hello@thea.app",
  supportUrl: "https://apexvert.com/support",
  privacyUrl: "https://apexvert.com/privacy",
  termsUrl: "https://apexvert.com/terms",
  bundleId: "app.thea.apex",
  teamId: "PBZ67VMD73",
  appId: "PBZ67VMD73.app.thea.apex",
  // TODO: replace once the App Store listing is live
  appStoreId: "0000000000",
  appStoreUrl: "https://apps.apple.com/app/apex/id0000000000",
  social: {
    instagram: "https://instagram.com/apexvertapp",
    tiktok: "https://tiktok.com/@apex.vert",
  },
} as const;

export type SiteConfig = typeof siteConfig;
