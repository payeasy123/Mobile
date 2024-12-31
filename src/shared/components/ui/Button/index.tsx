import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { getButtonStyles } from "./style";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    onPress,
    onLongPress,
    title,
    iconLeft,
    iconRight,
    style,
    textStyle,
    disabled,
    activeOpacity,
    loading,
    variant,
  } = props;

  const styles = getButtonStyles(variant);

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[style, disabled ? styles.disabledButton : styles.button]}
    >
      {iconLeft}

      {loading && <ActivityIndicator color="white" />}

      <Text style={[textStyle]}>{title}</Text>

      {iconRight}
    </TouchableOpacity>
  );
};
