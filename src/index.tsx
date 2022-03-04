import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'native-base';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View alignItems="center" bg="white" flex={1} justifyContent="center">
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </>
  );
}
