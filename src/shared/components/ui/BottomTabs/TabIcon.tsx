import { ScanIcon, TimeIcon, UserIcon } from "@/assets/icons";
import { COLORS } from "@/src/shared/utils/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { IconName, NavigationTabBarIconProps as IconProps, TabIconProps } from "./types";

export const TabIcon = ({ isFocused, routeName }: TabIconProps) => {
  const scale = useSharedValue(1);
  const translateY = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, { damping: 12 });
    translateY.value = withSpring(isFocused ? -35 : 0, { damping: 12 });
  }, [isFocused]);

  const animatedCircleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value as number }, { translateY: translateY.value as number }],
  }));

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value as number }],
  }));

  const icons: Record<IconName, (props: IconProps) => JSX.Element> = {
    index: (props: IconProps) => <ScanIcon {...props} />,
    history: (props: IconProps) => <TimeIcon {...props} />,
    profile: (props: IconProps) => <UserIcon {...props} />,
  };

  return (
    <View style={styles.iconContainer}>
      <Animated.View style={[styles.circle, animatedCircleStyle]} />
      <Animated.View style={[styles.circle, animatedCircleStyle]}>
        <LinearGradient colors={["#AB49FF", "#8000FF"]} style={styles.gradientCircle} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} />
      </Animated.View>

      <Animated.View style={animatedIconStyle}>
        {icons[routeName as IconName]({
          focused: isFocused,
          color: isFocused ? COLORS.grey10 : COLORS.grey60,
          size: isFocused ? 32 : 28,
        })}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    position: "absolute",
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: COLORS.grey10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 4,
  },

  gradientCircle: {
    flex: 1,
    borderRadius: 32,
  },
});
