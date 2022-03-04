import * as Localization from 'expo-localization';

import i18n from 'i18n-js';

import translations from './translations';

i18n.fallbacks = true;
i18n.locale = Localization.locale;
i18n.translations = translations;

export default i18n;
