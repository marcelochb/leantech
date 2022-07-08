import { StyleProp, ViewStyle } from 'react-native';
import { ModelOfTheme } from '../../../../core/themes';

export type ModelOfTexts = {
  theme: ModelOfTheme,
  alignCenter?: boolean,
  style?: StyleProp<ViewStyle>;
}
