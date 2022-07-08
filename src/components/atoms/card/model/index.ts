import { StyleProp, ViewStyle } from "react-native"
import { ModelOfTheme } from "../../../../core/themes"

export type ModelOfCard = {
  theme: ModelOfTheme,
  style?: StyleProp<ViewStyle>,
}
