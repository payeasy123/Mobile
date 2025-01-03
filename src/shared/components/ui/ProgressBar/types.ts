import { ViewStyle } from "react-native";
import * as Progress from "react-native-progress";

type StepStyles = Partial<{
  circle: ViewStyle;
  completedCircle: ViewStyle;
  activeCircle: ViewStyle;
  overlay: ViewStyle;
}>;

type StepIcons = Partial<{
  completed: React.ComponentType;
  active: React.ComponentType;
  default: React.ComponentType;
}>;

type StepProgressBarProps = Partial<{
  totalSteps: number;
  currentStep: number;
  onStepChange: (step: number) => void;
  stepIcons: StepIcons;
  stepStyles: StepStyles;
  barProps: Progress.BarPropTypes;
  containerStyle: ViewStyle;
}>;

interface UseStepProgressOptions {
  totalSteps: number;
  initialStep?: number;
}

interface UseStepProgressReturn {
  currentStep: number;
  handleNext: () => void;
  handlePrevious: () => void;
  isNextDisabled: boolean;
  isPreviousDisabled: boolean;
  setStep: (step: number) => void;
  totalSteps: number;
}

export { StepProgressBarProps, UseStepProgressOptions, UseStepProgressReturn };