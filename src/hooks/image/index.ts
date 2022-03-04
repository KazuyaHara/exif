import { Alert } from 'react-native';

import { launchImageLibraryAsync, MediaTypeOptions, useCameraPermissions } from 'expo-image-picker';

import i18n from '../../i18n';
import useApp from '../app';

export default function useImage() {
  const { openSetting } = useApp();
  const [, requestPermission] = useCameraPermissions();

  const launchImageLibrary = async () => {
    const { granted } = await requestPermission();
    if (granted) {
      return launchImageLibraryAsync({ exif: true, mediaTypes: MediaTypeOptions.Images });
    }
    return Alert.alert(
      i18n.t('imageLibraryPermissions.title'),
      i18n.t('imageLibraryPermissions.message'),
      [
        { style: 'cancel', text: i18n.t('imageLibraryPermissions.cancel') },
        {
          onPress: () => openSetting(),
          text: i18n.t('imageLibraryPermissions.submit'),
        },
      ]
    );
  };

  return { launchImageLibrary };
}
