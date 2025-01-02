import { LinearGradientProps } from "expo-linear-gradient";
import { ActivityIndicatorProps, GestureResponderEvent, TextStyle, ViewStyle } from "react-native";

export type IVariant = "gradient" | "solid" | "outline" | "ghost";

type OptionalParams = {
  variant: IVariant;
  gradientColors: readonly [string, string, ...string[]];
  iconPosition: "left" | "right";
  icon: React.ReactNode;
  style: ViewStyle;
  textStyle: TextStyle;
  spinnerProps: ActivityIndicatorProps;
  disabled: boolean;
  loading: boolean;
  gradientProps: Omit<LinearGradientProps, "colors">;
};

type ButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
} & Partial<OptionalParams>;

export { ButtonProps };
