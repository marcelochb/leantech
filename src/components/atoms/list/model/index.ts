import { ListRenderItem, StyleProp, ViewStyle } from "react-native";
import { ModelOfTheme } from "../../../../core/themes";

export type ModelOfList<ItemT = any> = {
  theme: ModelOfTheme,
  data?: Array<ItemT>;
  item: ListRenderItem<ItemT> | null | undefined,
  style?: StyleProp<ViewStyle>,
}
