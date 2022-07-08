import { StyleSheet } from "react-native";
import { ModelOfTheme } from "../../../../core/themes";

export const styles = (theme: ModelOfTheme) =>{
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor: colors.background
    }
  })
}
