import { ModelOfTheme } from "../../../../core/themes";

export type ModelOfCardPost = {
  theme: ModelOfTheme,
  label: string,
  onPressTrue: () => void,
  onPressFalse: () => void,
}
