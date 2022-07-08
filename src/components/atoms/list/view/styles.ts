import { StyleSheet } from "react-native";
import { ModelOfTheme } from "../../../../core/themes";

export const styles = (theme: ModelOfTheme) => {
  const {metrics} = theme;
  return StyleSheet.create({
    container: { padding: metrics.large}
  })
}
