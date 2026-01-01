function detectDevice(userAgent = "") {
  const ua = userAgent.toLowerCase();

  // --------------------
  // BOT DETECTION
  // --------------------
  const bots = [
    "googlebot",
    "bingbot",
    "slurp",
    "duckduckbot",
    "baiduspider",
    "yandexbot",
    "sogou",
    "exabot",
    "facebot",
    "ia_archiver"
  ];

  let isBot = false;
  let botName = null;

  for (const bot of bots) {
    if (ua.includes(bot)) {
      isBot = true;
      botName = bot;
      break;
    }
  }

  // --------------------
  // DEVICE TYPE
  // --------------------
  let device = "desktop";
  if (/tablet|ipad/.test(ua)) device = "tablet";
  else if (/mobile|iphone|android/.test(ua)) device = "mobile";

  // --------------------
  // OS + VERSION
  // --------------------
  let os = "unknown";
  let osVersion = null;

  if (ua.includes("android")) {
    os = "android";
    const match = ua.match(/android\s([\d\.]+)/);
    if (match) osVersion = match[1];
  } else if (ua.includes("iphone") || ua.includes("ipad")) {
    os = "ios";
    const match = ua.match(/os\s([\d_]+)/);
    if (match) osVersion = match[1].replace(/_/g, ".");
  } else if (ua.includes("windows nt")) {
    os = "windows";
    const match = ua.match(/windows nt\s([\d\.]+)/);
    if (match) osVersion = match[1];
  } else if (ua.includes("mac os x")) {
    os = "macos";
    const match = ua.match(/mac os x\s([\d_]+)/);
    if (match) osVersion = match[1].replace(/_/g, ".");
  } else if (ua.includes("linux")) {
    os = "linux";
  }

  // --------------------
  // BROWSER + VERSION
  // --------------------
  let browser = "unknown";
  let browserVersion = null;

  if (ua.includes("edg")) {
    browser = "edge";
    const match = ua.match(/edg\/([\d\.]+)/);
    if (match) browserVersion = match[1];
  } else if (ua.includes("chrome")) {
    browser = "chrome";
    const match = ua.match(/chrome\/([\d\.]+)/);
    if (match) browserVersion = match[1];
  } else if (ua.includes("firefox")) {
    browser = "firefox";
    const match = ua.match(/firefox\/([\d\.]+)/);
    if (match) browserVersion = match[1];
  } else if (ua.includes("safari")) {
    browser = "safari";
    const match = ua.match(/version\/([\d\.]+)/);
    if (match) browserVersion = match[1];
  }

  // --------------------
  // BRAND DETECTION
  // --------------------
  let brand = "unknown";

  if (ua.includes("iphone") || ua.includes("ipad")) brand = "apple";
  else if (ua.includes("samsung")) brand = "samsung";
  else if (ua.includes("huawei")) brand = "huawei";
  else if (ua.includes("xiaomi") || ua.includes("redmi")) brand = "xiaomi";
  else if (ua.includes("oneplus")) brand = "oneplus";
  else if (ua.includes("pixel")) brand = "google";
  else if (ua.includes("oppo")) brand = "oppo";
  else if (ua.includes("vivo")) brand = "vivo";

  return {
    device,
    os,
    osVersion,
    browser,
    browserVersion,
    brand,
    isBot,
    botName
  };
}

module.exports = detectDevice;
