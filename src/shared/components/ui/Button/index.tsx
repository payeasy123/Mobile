import { COLORS } from "@/src/shared/utils/colors";
import { createTextStyle } from "@/src/shared/utils/createTextStyle";
import { LinearGradient } from "expo-linear-gradient";
import { useMemo } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ButtonProps } from "./types";

export const Button = (props: ButtonProps) => {
  const {
    title,
    onPress,
    variant = "solid",
    gradientColors = ["#4c669f", "#3b5998", "#192f6a"],
    icon,
    iconPosition = "left",
    disabled = false,
    loading,
    style,
    textStyle,
    spinnerProps,
    gradientProps,
  } = props;

  const getButtonStyles = () => {
    switch (variant) {
      case "gradient":
        return styles.gradientButton;
      case "outline":
        return styles.outlinedButton;
      case "ghost":
        return styles.ghostButton;
      default:
        return styles.solidButton;
    }
  };

  const buttonDisabled = useMemo(() => disabled || loading, [disabled, loading]);

  const renderContent = () => (
    <View style={[styles.contentContainer, iconPosition === "right" && styles.reverseContent]}>
      {(icon || loading) && (
        <View style={styles.iconContainer}>
          {loading && <ActivityIndicator size="small" color={COLORS.primary} style={styles.spinner} {...spinnerProps} />}

          {icon && !loading && icon}
        </View>
      )}

      <Text style={[styles.buttonText, variant === "ghost" && styles.ghostText, textStyle]}>{title}</Text>
    </View>
  );

  if (variant === "gradient") {
    return (
      <TouchableOpacity style={[style, buttonDisabled && { ...styles.disabled, ...styles.gradientButton }]} disabled={buttonDisabled}>
        {disabled && renderContent()}

        {!disabled && (
          <LinearGradient colors={gradientColors} style={[styles.gradientButton, style]} {...gradientProps}>
            {renderContent()}
          </LinearGradient>
        )}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={[getButtonStyles(), style, buttonDisabled && styles.disabled]} disabled={buttonDisabled}>
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
