import { StyleSheet } from "react-native";
import { ModelOfTheme } from "../../../../../../core/themes";

export const styles = (theme:ModelOfTheme) => {
  const {metrics,fontFamily,fontSize,colors} = theme;
  return StyleSheet.create({
    container: {
      alignContent: 'center',
      height: '100%',
      padding: metrics.base
    },
    input: {
      fontSize: fontSize.base,
      color: colors.text,
      flex: 1,
    },
    viewInput: { flexDirection: 'row' }
  })
}