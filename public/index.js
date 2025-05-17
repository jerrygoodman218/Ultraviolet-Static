"use strict";
document.getElementById('proxy-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const url = document.getElementById('url-input').value;
    const encodedUrl = __uv$config.encodeUrl(url);
    document.getElementById('proxy-frame').src = __uv$config.prefix + encodedUrl;
});
