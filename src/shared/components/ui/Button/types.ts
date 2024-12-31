import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface ButtonProps {
  onPress?: () => void;
  title: string;
  variant?: IVariant;
  onLongPress?: () => void;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  activeOpacity?: number;
  loading?: boolean;
}

export type IVariant = "contained" | "outlined" | "text";
