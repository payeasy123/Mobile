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
}

export type ColorKeys = keyof typeof COLORS;
