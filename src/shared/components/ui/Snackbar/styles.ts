import { createTextStyle } from "@/src/shared/utils/createTextStyle";
import { SCREEN_WIDTH } from "@/src/shared/utils/screenDimensions";
import { StyleSheet } from "react-native";

export const SnackBarStyle = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 16,
    width: SCREEN_WIDTH - 32,
  },

  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  IconAndMessageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 0.9,
  },
  MessageContainer: {
    flex: 0.95,
  },
  HeaderText: {
    ...createTextStyle({ size: "_14", weight: "ExtraBold" }),
    color: "#0B0B0B",
  },
  MessageText: {
    ...createTextStyle({ weight: "Light" }),
    color: "#393939",
    marginTop: 4,
  },
  ActionLabel: {
    fontFamily: "Inter-Regular",
    color: "#FFFFFF",
  },
});
