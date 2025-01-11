import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ReactNode } from "react";
import { ScrollView, StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/screenDimensions";

type ContainerProps = {
  children: ReactNode;
  style?: ViewStyle;
  hasTabBar?: boolean;
} & ViewProps;

export const Container = ({ children, style, hasTabBar, ...rest }: ContainerProps) => {
  if (hasTabBar) {
    const insets = useSafeAreaInsets();
    const tabBarHeight = useBottomTabBarHeight();

    const contentHeight = SCREEN_HEIGHT - insets.top - (tabBarHeight + 30);

    return (
      <View style={[styles.container, style, { height: contentHeight, marginTop: insets.top }]} accessible={true} {...rest}>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          {children}
        </ScrollView>
      </View>
    );
  }

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
