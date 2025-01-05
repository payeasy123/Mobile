import { ReactNode } from "react";
import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import { SCREEN_WIDTH } from "../../utils/screenDimensions";

type ContainerProps = {
  children: ReactNode;
  style?: ViewStyle;
} & ViewProps;

export const Container = ({ children, style, ...rest }: ContainerProps) => {
  return (
    <View style={[styles.container, style]} accessible={true} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: Math.min(500, SCREEN_WIDTH * 0.9),
    margin: "auto",
    width: "100%",
  },
});
