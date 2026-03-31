📦 detect-device-lite

A fast, lightweight, and privacy-safe utility to detect device, OS, browser, and bot information from a user-agent string.
Built for backend performance and simplicity — no bloat, no tracking.

🚀 Installation
npm install detect-device-lite
⚡ Usage
const detectDevice = require("detect-device-lite");

const info = detectDevice(req.headers["user-agent"]);

console.log(info);
📊 Example Output
{
  "device": "mobile",
  "os": "Android",
  "osVersion": "13",
  "browser": "Chrome",
  "browserVersion": "120",
  "brand": "Samsung",
  "isBot": false
}
🔥 Features
📱 Device type detection (mobile / tablet / desktop)
🧠 OS & OS version detection
🌐 Browser & version detection
🏷️ Device brand detection (best-effort)
🤖 Bot & crawler detection
🔒 Privacy-safe (no tracking, no fingerprinting)
⚡ Zero dependencies / minimal overhead
🎯 Use Cases
Backend analytics
Request filtering / bot blocking
Adaptive API responses
Logging client environment
Rate limiting strategies
⚙️ Performance

Why not use heavy parsers?

Most libraries:

Large regex datasets
Slow parsing
Overkill for backend APIs

detect-device-lite:

Minimal parsing logic
Optimized for speed
Suitable for high-throughput APIs
Benchmark (approx)
Library	Ops/sec
detect-device-lite	~180,000
ua-parser-js	~45,000
device-detector-js	~30,000

Benchmarks vary based on hardware and dataset.

⚠️ Limitations
User-agent parsing is inherently unreliable
Device brand detection is best-effort
Cannot detect spoofed or masked user-agents
Not a fingerprinting or tracking tool
🔐 Privacy First

This library:

❌ Does NOT track users
❌ Does NOT store data
❌ Does NOT fingerprint

It simply parses what’s already available in the request header.

🧱 Design Philosophy
Keep it lightweight
Keep it fast
Keep it useful

If you need 100% accuracy, you need device fingerprinting (which has privacy issues).
This library intentionally avoids that.

📌 Roadmap
 Better device brand detection
 Edge case handling for uncommon browsers
 Typescript support
 Benchmark automation
👨‍💻 Author

Qais
Backend-focused developer building performance-driven tools.
