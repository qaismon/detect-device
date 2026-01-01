## Features (v1.1.0)

- Device type detection
- OS & OS version detection
- Browser & browser version detection
- Device brand detection (best-effort)
- Bot & crawler detection

> Note: All detections are best-effort and privacy-safe.



## Usage

const detectDevice = require("detect-device-lite");

const info = detectDevice(req.headers["user-agent"]);
console.log(info);