import { StyleSheet } from "react-native";
import { ModelOfTheme } from "../../../../core/themes";

export const styles = (theme: ModelOfTheme) => {
  const {metrics} = theme;
  return StyleSheet.create({
    link: {
      height: metrics.buttonHeight,
      width: metrics.buttonWidth,
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    }
  })
}
