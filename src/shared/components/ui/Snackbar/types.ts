import { ReactNode } from "react";
import { ViewStyle } from "react-native";

type SnackbarType = "success" | "error" | "info" | "warning";

type SharedSnackbarProps = Partial<{
  isVisible: boolean;
  duration: number;
  position: "top" | "bottom";
  onDismiss: () => void;
  onActionPress: () => void;
  isPermanent: boolean;
  containerStyle: ViewStyle;
}>;

type BaseSnackbarProps = SharedSnackbarProps & {
  type?: "base";
  children: ReactNode;
};

type PredefinedSnackbarProps = SharedSnackbarProps & {
  type: SnackbarType;
  message: string;
  heading?: string;
};

type SnackbarProps = PredefinedSnackbarProps | BaseSnackbarProps;

export {
  SnackbarProps,
  SnackbarType,
  PredefinedSnackbarProps,
  BaseSnackbarProps,
};
