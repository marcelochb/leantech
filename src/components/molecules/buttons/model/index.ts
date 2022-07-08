import { StyleProp, ViewStyle } from "react-native";
import { ModelOfTheme } from "../../../../core/themes";

export type ModelOfButtons = {
  theme: ModelOfTheme,
  onPress: () => void,
  style?: StyleProp<ViewStyle>;
  alignCenter?: boolean,
}
