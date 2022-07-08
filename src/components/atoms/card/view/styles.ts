import { StyleSheet } from "react-native";
import { ModelOfTheme } from "../../../../core/themes";

export const styles = (theme:ModelOfTheme) => {
  const {colors, metrics} = theme;
  return StyleSheet.create({
    container: {
      borderColor: colors.elements,
      borderWidth: metrics.borderWidth,
      backgroundColor: colors.background,
      padding: metrics.large,
    }
  })
}
