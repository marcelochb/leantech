import { ModelOfTheme } from "../../../../core/themes";

export type ModelOfPageWrapper = {
  theme: ModelOfTheme,
  loading?: boolean,
  isScrollList?: boolean,
  empty?: boolean,
  error?: boolean,
}
