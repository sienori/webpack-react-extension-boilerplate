/* global document */

import browser from 'webextension-polyfill';

function onRequest(request) {
  if (request.action === 'change-color') {
    document.body.style.background = request.data.color;
  }
}

browser.runtime.onMessage.addListener(onRequest);
