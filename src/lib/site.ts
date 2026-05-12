export const siteConfig = {
  name: "Apex",
  tagline: "Measure your vert. Track your dunk.",
  url: "https://apexvert.com",
  description:
    "Apex measures your vertical jump from your pocket. No filming, no setup — just jump and get a number. Track your progress all the way to a dunk.",
  developer: "Thea Apps Inc.",
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
