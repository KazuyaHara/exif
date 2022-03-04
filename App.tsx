import React from 'react';

import { NativeBaseProvider } from 'native-base';

import App from './src';

export default function Exifier() {
  return (
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  );
}
