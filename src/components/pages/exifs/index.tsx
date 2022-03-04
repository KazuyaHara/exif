import React from 'react';
import { Dimensions } from 'react-native';

import { Box, ScrollView, View } from 'native-base';

import AspectRatioRespectImage from '../../atoms/image/aspectRatioRespect';

type Props = { uri: string };

const IMAGE_HEIGHT = Dimensions.get('window').width * (3 / 4);

export default function Exifs({ uri }: Props) {
  return (
    <>
      <Box bg="white" safeAreaTop />
      <ScrollView bg="white" flex={1}>
        <View alignItems="center">
          <AspectRatioRespectImage alt="EXIF" height={IMAGE_HEIGHT} uri={uri} />
        </View>
      </ScrollView>
    </>
  );
}
