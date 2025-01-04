import { BottomTabBarProps, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { useLinkBuilder } from "@react-navigation/native";
import Animated from "react-native-reanimated";

interface NavigationTabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

type IconName = "index" | "history" | "profile";

type TabIconProps = {
  isFocused: boolean;
  routeName: string;
};

type TabLabelProps = {
  label: string;
  isFocused: boolean;
};

type TabItemProps = {
  route: BottomTabBarProps["state"]["routes"][0];
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  options: BottomTabNavigationOptions;
};

export { IconName, NavigationTabBarIconProps, TabIconProps, TabItemProps, TabLabelProps };
