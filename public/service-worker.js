self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());

importScripts("/uv/uv.bundle.js");

const sw = new UVServiceWorker();
