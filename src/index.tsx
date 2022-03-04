import React, { useState } from 'react';

import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Fab } from 'native-base';

import EmptyState from './components/organisms/empty';
import Exifs from './components/pages/exifs';
import useImage from './hooks/image';

export default function App() {
  const { launchImageLibrary } = useImage();
  const [imageURI, setImageURI] = useState<string>();

  const handleImage = async () => {
    const result = await launchImageLibrary();
    if (!result) return;
    if (!result.cancelled) setImageURI(result.uri);
  };

  return (
    <>
      <StatusBar style="auto" />
      {imageURI ? <Exifs uri={imageURI} /> : <EmptyState />}
      <Fab
        bg="black"
        bottom={8}
        icon={<FontAwesome color="white" name="camera-retro" size={24} />}
        onPress={handleImage}
        right={8}
      />
    </>
  );
}
