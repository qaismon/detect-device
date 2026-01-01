const detectDevice = require("./index");

const ua =
  "Mozilla/5.0 (Linux; Android 13; Samsung SM-S918B) AppleWebKit/537.36 Chrome/114.0.0.0 Mobile Safari/537.36";

console.log(detectDevice(ua));
