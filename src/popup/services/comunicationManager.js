import browser from 'webextension-polyfill';

export default async function sendMessage(message, data) {
  const tabs = await browser.tabs.query({ active: true, currentWindow: true });
  const activeTab = tabs[0];
  browser.tabs.sendMessage(activeTab.id, { action: message, data });
}
