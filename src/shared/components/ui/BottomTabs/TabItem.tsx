import { COLORS } from "@/src/shared/utils/colors";
import { PlatformPressable } from "@react-navigation/elements";
import { useLinkBuilder } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { TabIcon } from "./TabIcon";
import { TabLabel } from "./TabLabel";
import { TabItemProps } from "./types";

export const TabItem = ({ route, isFocused, onPress, onLongPress, options }: TabItemProps) => {
  const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

  const renderLabel = () => {
    if (typeof label === "function") {
      return label({
        focused: isFocused,
        color: isFocused ? "red" : COLORS.text,
        position: "below-icon",
        children: route.name,
      });
    }

    return <TabLabel label={label} isFocused={isFocused} />;
  };
  const { buildHref } = useLinkBuilder();

  return (
    <PlatformPressable
      key={route.name}
      href={buildHref(route.name, route.params)}
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarButtonTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabBarItem}
    >
      <TabIcon isFocused={isFocused} routeName={route.name} />

      {renderLabel()}
    </PlatformPressable>
  );
};

const styles = StyleSheet.create({
  tabBarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
});
