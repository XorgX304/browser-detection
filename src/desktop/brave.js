import $ from '../helpers';
import { detectChromium } from './chromium';

export function detectBrave() {
  var plugins = $.getFeature('navigator.plugins');

  var browser = 'Brave';
  var browserVersion;

  // Brave is based on Chromium
  var chromiumFeatures = detectChromium();
  if (!chromiumFeatures) {
    return;
  }

  // Brave does not support the Native Client plugin (internal-nacl-plugin)
  if ($.hasFeature('navigator.plugins.Native Client')) {
    return;
  }

  var chromiumVersion = chromiumFeatures.browserVersion;

  // Plugins have been introduced in v0.68
  // The number of supported plugins is just 2 and despite other Chromium-based browsers
  if (plugins.length === 2) {
    if (chromiumVersion === 80) {
      browserVersion = 1.3;
    } else if (chromiumVersion === 79) {
      browserVersion = 1.1;
    } else if (chromiumVersion === 78) {
      browserVersion = 1.0;
    } else if (chromiumVersion === 77) {
      browserVersion = 0.69;
    } else if (chromiumVersion === 76) {
      browserVersion = 0.68;
    }
  } else if (plugins.length === 0) {
    if (chromiumVersion === 76) {
      browserVersion = 0.67;
    } else if (chromiumVersion === 75) {
      browserVersion = 0.65;
    } else if (chromiumVersion === 74) {
      browserVersion = 0.63;
    } else if (chromiumVersion === 73) {
      browserVersion = 0.61;
    } else if (chromiumVersion === 72) {
      browserVersion = 0.6;
    }
  } else {
    return;
  }

  return Object.assign(chromiumFeatures, {
    browser: browser,
    browserVersion: browserVersion
  });
}
