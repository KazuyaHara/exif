import React from 'react';

import { StatusBar } from 'expo-status-bar';

import EmptyState from './components/organisms/empty';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <EmptyState />
    </>
  );
}
