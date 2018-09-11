import browser from 'webextension-polyfill';
import React from 'react';
import Button from '../../components/button/button';
import sendMessage from '../../services/comunicationManager';

function setGreen() {
  sendMessage('change-color', { color: 'green' });
}

function setRed() {
  sendMessage('change-color', { color: 'red' });
}

async function send() {
  const res = await browser.runtime.sendMessage({ message: 'sended' });
  console.log(res);
}

export default () => (
  <div>
    <Button label="green" action={setGreen} />
    <Button label="red" action={setRed} />
    <Button label="send" action={send} />
  </div>
);
