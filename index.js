function detectDevice(userAgent = "") {
  const ua = userAgent.toLowerCase();

  let device = "desktop";
  if (/mobile|iphone|android/.test(ua)) device = "mobile";
  if (/tablet|ipad/.test(ua)) device = "tablet";

  let os = "unknown";
  if (ua.includes("windows")) os = "windows";
  else if (ua.includes("android")) os = "android";
  else if (ua.includes("iphone") || ua.includes("ipad")) os = "ios";
  else if (ua.includes("mac")) os = "macos";
  else if (ua.includes("linux")) os = "linux";

  let browser = "unknown";
  if (ua.includes("chrome") && !ua.includes("edg")) browser = "chrome";
  else if (ua.includes("firefox")) browser = "firefox";
  else if (ua.includes("safari") && !ua.includes("chrome")) browser = "safari";
  else if (ua.includes("edg")) browser = "edge";

  return { device, os, browser };
}

module.exports = detectDevice;
