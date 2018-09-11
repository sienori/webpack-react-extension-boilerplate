import browser from 'webextension-polyfill';

console.log('started');

const showActiveTabInfo = async () => {
  const tabs = await browser.tabs.query({ active: true });
  console.log(tabs[0]);
};
showActiveTabInfo();

function onMessage(message, sender) {
  console.log(message);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ res: 'received' });
    }, 1000);
  });
}
browser.runtime.onMessage.addListener(onMessage);
