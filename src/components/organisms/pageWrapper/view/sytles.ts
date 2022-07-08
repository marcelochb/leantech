import { StyleSheet } from "react-native";
import { ModelOfTheme } from "../../../../core/themes";

export const styles = (theme: ModelOfTheme) => {
  const {colors, metrics} = theme;
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
    },
    content: {
      flex: 1,
      padding: metrics.base
    },
    scrollView: {
      backgroundColor: colors.background,
      flex: 1,
      paddingHorizontal: metrics.base
    },
    loading: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      marginTop: metrics.largest
    },
    error: {marginBottom: metrics.largest}
  })
}
