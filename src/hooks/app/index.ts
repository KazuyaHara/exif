import { Linking, Platform } from 'react-native';

import Constants from 'expo-constants';
import * as IntentLauncher from 'expo-intent-launcher';

export default function useApp() {
  const openSetting = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      IntentLauncher.startActivityAsync(
        IntentLauncher.ActivityAction.APPLICATION_DETAILS_SETTINGS,
        {
          data: `package:${
            Constants.appOwnership === 'expo'
              ? 'host.exp.exponent'
              : Constants.manifest?.android?.package
          }`,
        }
      );
    }
  };

  return { openSetting };
}
