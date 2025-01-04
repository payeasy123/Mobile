import { COLORS } from "@/src/shared/utils/colors";
import { createTextStyle } from "@/src/shared/utils/createTextStyle";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  gradientButton: {
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  solidButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  outlinedButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.primary,
  },
  ghostButton: {
    backgroundColor: "transparent",
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  ghostText: {
    color: COLORS.primary,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  reverseContent: {
    flexDirection: "row-reverse",
  },
  iconContainer: {
    marginHorizontal: 8,
  },
  buttonText: {
    ...createTextStyle({ color: "white", size: "_16", weight: "bold" }),
  },
  disabled: {
    opacity: 0.5,
    backgroundColor: "#7B7B7B",
  },
  spinner: {
    alignSelf: "center",
  },
});
