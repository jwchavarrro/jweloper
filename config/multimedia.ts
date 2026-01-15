/**
 * @file multimedia.ts
 * @description Recursos multimedia
 * @module config/multimedia
 */

/**
 * @constant MULTIMEDIA
 * @description Recursos multimedia
 */

const PUBLIC_IMAGES = "/images";

export const MULTIMEDIA = {
  FAVICONS: {
    FAVICON: `${PUBLIC_IMAGES}/favicons/favicon.ico`,
    APPLE_TOUCH_ICON: `${PUBLIC_IMAGES}/favicons/apple-touch-icon.png, ${PUBLIC_IMAGES}/favicons/site.webmanifest`,
    OG_IMAGE: `${PUBLIC_IMAGES}/favicons/og-image.png`,
    ICON_96X96: `${PUBLIC_IMAGES}/favicons/icon-96x96.png`,
    WEB_MANIFEST: `${PUBLIC_IMAGES}/favicons/site.webmanifest`,
    WEB_APP_MANIFEST_192X192: `${PUBLIC_IMAGES}/favicons/web-app-manifest-192x192.png`,
    WEB_APP_MANIFEST_512X512: `${PUBLIC_IMAGES}/favicons/web-app-manifest-512x512.png`,
  },

  LOGOS: {
    ISOTIPO: `${PUBLIC_IMAGES}/logos/isotipo-jweloper.png`,
  },
  BACKGROUNDS: {
    PATH_001: `${PUBLIC_IMAGES}/backgrounds/path-001.png`,
    PHOTO_PROFILE: `${PUBLIC_IMAGES}/backgrounds/photo-profile.png`,
  },
};
