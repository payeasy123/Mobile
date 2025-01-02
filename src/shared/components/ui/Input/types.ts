import { TextInputProps, TextStyle, ViewStyle } from "react-native";

type InputVariant = "outlined" | "standard";

interface OptionalProps {
  variant: InputVariant;
  containerStyle: ViewStyle;
  inputStyle: TextStyle;
  iconLeft: React.ReactNode;
  iconRight: React.ReactNode;
  onRightIconPress?: () => void;
  errorMessage: string;
  loading: boolean;
  disabled: boolean;
  required: boolean;
  infoMessage: string;
}

type InputState = "default" | "active" | "disabled" | "error";

interface CustomInputProps extends TextInputProps, Partial<OptionalProps> {
  label: string;
}

export { CustomInputProps, InputState, InputVariant };
