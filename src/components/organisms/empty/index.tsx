import React from 'react';

import { Text, View } from 'native-base';

import Logo from '../../../assets/images/logo.png';
import AspectRatioRespectImage from '../../atoms/image/aspectRatioRespect';
import i18n from '../../../i18n';

export default function EmptyState() {
  return (
    <View alignItems="center" bg="white" flex={1} justifyContent="center">
      <AspectRatioRespectImage source={Logo} />
      <Text mt={4}>{i18n.t('emptyState')}</Text>
    </View>
  );
}
