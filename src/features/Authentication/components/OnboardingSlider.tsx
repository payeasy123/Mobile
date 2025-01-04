import { COLORS } from "@/src/shared/utils/colors";
import { SCREEN_WIDTH } from "@/src/shared/utils/screenDimensions";
import { LinearGradient } from "expo-linear-gradient";
import { Animated, StyleSheet, View } from "react-native";

interface DataProps {
  id: number;
  image: string;
  header: string;
}

interface OnboardingSliderProps {
  data: DataProps[];
  scrollX: Animated.Value;
}

export const OnboardingSlider = ({ data, scrollX }: OnboardingSliderProps) => {
  return (
    <View style={styles.container}>
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
                colors={["#0077B6", "#AB49FF"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  ...StyleSheet.absoluteFillObject,
                  borderRadius: 8,
                }}
              />
            </Animated.View>

            {/* <Animated.View
              style={{
                ...StyleSheet.absoluteFillObject,
                opacity: Animated.subtract(1, isActive),
                backgroundColor: COLORS.grey30,
                borderRadius: 100,
                width: 8,
              }}
            /> */}
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
    marginHorizontal: 4, // Adjusted spacing between dots to avoid overlap
    overflow: "hidden", // Ensure child elements don't exceed bounds
    backgroundColor: COLORS.grey30,
  },
});
