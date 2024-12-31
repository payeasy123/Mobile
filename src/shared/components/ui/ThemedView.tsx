import { View, type ViewProps } from "react-native";

import { ColorKeys } from "../../utils/colors";

type ThemedViewProps = ViewProps & {
  backgroundColor?: ColorKeys | string;
};

export const ThemedView = ({ style, backgroundColor, ...otherProps }: ThemedViewProps) => {
  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
};
