# detect-device-lite

Lightweight Node.js utility to detect device, OS, and browser from user-agent.

## Install

```bash
npm install detect-device-lite



## Usage

const detectDevice = require("detect-device-lite");

const info = detectDevice(req.headers["user-agent"]);
console.log(info);