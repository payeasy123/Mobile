import { ColorKeys, COLORS } from "@/src/shared/utils/colors";
import { createTextStyle } from "@/src/shared/utils/createTextStyle";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { InputState, InputVariant } from "./types";

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: "100%",
  },

  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 10,
  },

  required: {
    marginLeft: 5,
    ...createTextStyle({
      size: "_18",
      weight: "regular",
      color: "red60",
    }),
  },

  iconLeft: {
    marginRight: 8,
  },

  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginLeft: 10,
  },

  infoText: {
    marginLeft: 5,
    ...createTextStyle({
      size: "_12",
      weight: "regular",
    }),
  },

  errorText: {
    marginLeft: 5,
    ...createTextStyle({
      size: "_12",
      weight: "regular",
      color: "red30",
    }),
  },
});

const getStyles = (inputState: InputState) => {
  const labelStyles = (): TextStyle => {
    let color: ColorKeys;

    switch (inputState) {
      case "error":
        color = "redBase";
        break;

      case "default":
        color = "black40";
        break;

      default:
        color = "blackBase";
        break;
    }

    return {
      ...createTextStyle({
        size: "_12",
        weight: "regular",
        color,
      }),
    };
  };

  const infoColor = (): string => {
    switch (inputState) {
      case "error":
        return COLORS.red30;
      case "disabled":
        return COLORS.greyBase;
      default:
        return COLORS.black40;
    }
  };

  const placeholderColor = (): string => {
    switch (inputState) {
      case "error":
        return COLORS.red60;
      case "disabled":
        return COLORS.grey60;
      default:
        return COLORS.greyBase;
    }
  };

  const inputTextStyles = (): TextStyle => {
    let color: ColorKeys;

    switch (inputState) {
      case "error":
        color = "red60";
        break;

      case "disabled":
        color = "grey60";
        break;

      default:
        color = "blackBase";
        break;
    }

    return {
      flex: 1,
      paddingVertical: 8,
      ...createTextStyle({
        size: "_14",
        weight: "regular",
        color,
      }),
    };
  };

  const inputContainerStyles = (variant: InputVariant): ViewStyle => {
    const baseStyles: ViewStyle = {
      flexDirection: "row",
      position: "relative",
      alignItems: "center",
      paddingHorizontal: 10,
      paddingVertical: 5,
      shadowColor: "#0C0C0D",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
      borderWidth: 1.5,
    };

    switch (inputState) {
      case "disabled":
        baseStyles.backgroundColor = COLORS.grey30;
        baseStyles.borderColor = COLORS.greyBase;
        break;

      case "error":
        baseStyles.backgroundColor = COLORS.red10;
        baseStyles.borderColor = COLORS.red30;
        break;

      case "default":
        baseStyles.borderColor = COLORS.greyBase;
        break;

      default:
        baseStyles.backgroundColor = COLORS.grey20;
        baseStyles.borderColor = COLORS.greyBase;
        break;
    }

    switch (variant) {
      case "standard":
        baseStyles.borderWidth = 0;
        baseStyles.borderBottomWidth = 1;
        break;

      case "outlined":
        baseStyles.borderRadius = 9;
        break;
    }

    return baseStyles;
  };

  return {
    labelStyles: labelStyles(),
    infoColor: infoColor(),
    inputTextStyles: inputTextStyles(),
    placeholderColor: placeholderColor(),
    inputContainerStyles,
  };
};

export { getStyles, styles };
