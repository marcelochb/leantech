import { StyleSheet } from "react-native";
import { ModelOfTheme } from "../../../../core/themes";

export const styles = (theme: ModelOfTheme) => {
  const {metrics} = theme;
  return StyleSheet.create({
    container: {
      padding: metrics.largest,
      marginBottom: metrics.large,
      marginHorizontal: metrics.base,
      paddingVertical: metrics.largest
    },
    buttonView: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: metrics.largest
    },
    button: {flex: 1}
  })
}
