import { COLORS } from "@/src/shared/utils/colors";
import { createTextStyle } from "@/src/shared/utils/createTextStyle";
import { Fonts } from "@/src/shared/utils/fonts";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { TabLabelProps } from "./types";

export const TabLabel = (props: TabLabelProps) => {
  const { label, isFocused } = props;

  const translateY = useSharedValue(0);
  const color = useSharedValue(isFocused ? 1 : 0);

  useEffect(() => {
    translateY.value = withSpring(isFocused ? -15 : 0, { damping: 12 });
    color.value = withTiming(isFocused ? 1 : 0, { duration: 200 });
  }, [isFocused]);

  const animatedTextStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    color: interpolateColor(color.value, [0, 1], [COLORS.grey60, "#AB49FF"]),
    fontSize: withSpring(isFocused ? 14 : 12, { damping: 12 }),
    fontFamily: isFocused ? Fonts.bold : Fonts.regular,
  }));

  return <Animated.Text style={[styles.label, animatedTextStyle]}>{label}</Animated.Text>;
};

const styles = StyleSheet.create({
  label: {
    ...createTextStyle({
      color: "grey20",
      size: "_13",
      weight: "regular",
    }),
  },
});
