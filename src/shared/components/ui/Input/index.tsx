import { COLORS } from "@/src/shared/utils/colors";
import { useState } from "react";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
import { IconSymbol } from "../../icons";
import { getStyles, styles } from "./styles";
import { CustomInputProps } from "./types";

const CustomInput = (props: CustomInputProps) => {
  const {
    value,
    onChangeText,
    placeholder = "Enter text",
    variant = "outlined",
    inputStyle = {},
    containerStyle = {},
    iconLeft,
    iconRight,
    onRightIconPress,
    errorMessage = "",
    loading = false,
    disabled = false,
    label,
    infoMessage,
  } = props;

  const [focused, setFocused] = useState(false);

  const getInputState = () => {
    if (disabled) return "disabled";

    if (errorMessage) return "error";

    if (value || focused) return "active";

    return "default";
  };

  const { labelStyles, infoColor, inputTextStyles, placeholderColor, inputContainerStyles } = getStyles(getInputState());

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={labelStyles}>{label}</Text>}

      <View style={inputContainerStyles(variant)}>
        {iconLeft}

        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[inputTextStyles, inputStyle]}
          placeholderTextColor={placeholderColor}
          editable={!disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        {(iconRight || loading) && (
          <View style={styles.iconRight}>
            {loading && <ActivityIndicator size="small" color={COLORS.primary} />}

            {iconRight && !loading && (
              <TouchableOpacity onPress={onRightIconPress} disabled={disabled}>
                {iconRight}
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>

      {infoMessage && (
        <View style={styles.errorContainer}>
          <IconSymbol name="info.circle" color={infoColor} size={18} />

          <Text style={[styles.infoText, { color: infoColor }]}>{infoMessage}</Text>
        </View>
      )}

      {errorMessage && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomInput;
