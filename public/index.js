"use strict";
document.getElementById('uv-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const address = document.getElementById('uv-address').value;
  const searchEngine = document.getElementById('uv-search-engine')?.value || 'https://www.google.com/search?q=';

  try {
    await registerSW(); // This ensures service-worker.js is registered
  } catch (err) {
    console.error('Service Worker registration failed:', err);
    return;
  }

  const url = search(address, searchEngine); // Uses Ultraviolet's search() function

  const frame = document.getElementById('uv-frame');
  frame.src = __uv$config.prefix + __uv$config.encodeUrl(url);
  frame.style.display = 'block';
});
