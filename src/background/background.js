import 'babel-polyfill';
import browser from 'webextension-polyfill';

console.log('started');

const showActiveTabInfo = async () => {
  const tabs = await browser.tabs.query({ active: true });
  console.log(tabs[0]);
};
showActiveTabInfo();
