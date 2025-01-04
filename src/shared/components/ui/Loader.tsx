import { COLORS } from "@/src/shared/utils/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export const Loader = () => {
  const size = 100;
  const color = "white";

  const middleStrokeOffset = useSharedValue(8);

  useEffect(() => {
    middleStrokeOffset.value = withRepeat(
      withTiming(25, {
        duration: 500,
        easing: Easing.linear,
      }),
      -1,
      true,
    );
  }, [middleStrokeOffset]);

  const animatedProps = useAnimatedProps(() => ({
    d: `M${middleStrokeOffset.value} 23V9`,
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle]}>
        <LinearGradient colors={["#AB49FF", "#8000FF"]} style={styles.gradientCircle} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} />
      </Animated.View>

      <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <Path
          stroke={color}
          strokeWidth={2.6}
          d="M26.667 13.334V12c0-1.24 0-1.86-.137-2.368a4 4 0 0 0-2.828-2.829c-.509-.136-1.129-.136-2.369-.136m5.334 12V20c0 1.24 0 1.86-.137 2.369a4 4 0 0 1-2.828 2.828c-.509.137-1.129.137-2.369.137m-8 0H12c-2.492 0-3.739 0-4.667-.536a4 4 0 0 1-1.464-1.464c-.536-.928-.536-2.175-.536-4.667m8-12H12c-2.492 0-3.739 0-4.667.536A4 4 0 0 0 5.87 8.667c-.536.928-.536 2.174-.536 4.667"
        />

        <AnimatedPath stroke={color} strokeWidth={2.6} animatedProps={animatedProps} />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.grey10,
  },

  circle: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
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
    borderRadius: 100,
  },
});
