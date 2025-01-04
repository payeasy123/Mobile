import { COLORS } from "@/src/shared/utils/colors";
import { SCREEN_WIDTH } from "@/src/shared/utils/screenDimensions";
import { LinearGradient } from "expo-linear-gradient";
import { Animated, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface DataProps {
  id: number;
  image: string;
  header: string;
}

interface OnboardingSliderProps {
  data: DataProps[];
  scrollX: Animated.Value;
  containerStyles?: StyleProp<ViewStyle>;
}

export const OnboardingSlider = ({ data, scrollX, containerStyles }: OnboardingSliderProps) => {
  return (
    <View style={[styles.container, containerStyles]}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * SCREEN_WIDTH, i * SCREEN_WIDTH, (i + 1) * SCREEN_WIDTH];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 40, 8], // Use consistent sizes
          extrapolate: "clamp",
        });

        const isActive = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
          extrapolate: "clamp",
        });

        return (
          <Animated.View key={i} style={[styles.dot, { width: dotWidth }]}>
            <Animated.View
              style={{
                ...StyleSheet.absoluteFillObject,
                opacity: isActive,
              }}
            >
              <LinearGradient
                colors={["#8000FF", "#AB49FF"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  ...StyleSheet.absoluteFillObject,
                  borderRadius: 8,
                }}
              />
            </Animated.View>
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 15,
    alignContent: "center",
    justifyContent: "center",
  },

  dot: {
    height: 8,
    borderRadius: 8,
    marginHorizontal: 4,
    overflow: "hidden",
    backgroundColor: COLORS.grey30,
  },
});
