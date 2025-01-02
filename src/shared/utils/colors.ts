/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";

export enum COLORS {
  primary = "red",
  white = "white",
  text = "#11181C",
  background = "#fff",
  tint = tintColorLight,
  icon = "#687076",
  tabIconSelected = tintColorLight,
  offBlack = "#1C1C1C",
  error0Hex = "#FFF5F5",
  black = "#0B0B0B",

  // RED
  redBase = "#FF3737",
  red10 = "#FFD7D7",
  red20 = "#FFBCBC",
  red30 = "#FF9B9B",
  red40 = "#FF7979",
  red50 = "#FF5858",
  red60 = "#D42D2D",
  red70 = "#AA2424",
  red80 = "#7F1B1B",
  red90 = "#551212",
  red100 = "#330B0B",

  // Black
  blackBase = "#393939",
  black10 = "#D7D7D7",
  black20 = "#BDBDBD",
  black30 = "#9C9C9C",
  black40 = "#7B7B7B",
  black50 = "#5A5A5A",
  black60 = "#2F2F2F",
  black70 = "#262626",
  black80 = "#1C1C1C",
  black90 = "#131313",
  black100 = "#0B0B0B",

  // Grey
  greyBase = "#D6D6D6",
  grey10 = "#F6F6F6",
  grey20 = "#F1F1F1",
  grey30 = "#EAEAEA",
  grey40 = "#E3E3E3",
  grey50 = "#DDDDDD",
  grey60 = "#B2B2B2",
  grey70 = "#8E8E8E",
  grey80 = "#6B6B6B",
  grey90 = "#464646",
  grey100 = "#2A2A2A",
}

export type ColorKeys = keyof typeof COLORS;
