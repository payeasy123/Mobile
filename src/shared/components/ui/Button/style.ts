import { COLORS } from "@/src/shared/utils/colors";
import { StyleSheet, ViewStyle } from "react-native";
import { IVariant } from "./types";

type VariantStyles = Record<IVariant, ViewStyle>;

const stylesByVariant: VariantStyles = {
  contained: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    paddingHorizontal: 22,
    borderRadius: 12,
  },
  outlined: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 22,
    borderRadius: 10,
  },
  text: {
    backgroundColor: "transparent",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
};

export const getButtonStyles = (variant?: IVariant) => {
  return StyleSheet.create({
    button: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      ...(variant ? stylesByVariant[variant] : {}),
    },

    buttonText: {
      color: variant === "contained" ? COLORS.white : COLORS.primary,
      // fontSize: SIZES.medium,
    },

    disabledButton: {
      backgroundColor: "grey",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  });
};
