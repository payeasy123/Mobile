import { COLORS } from "@/src/shared/utils/colors";
import { createTextStyle } from "@/src/shared/utils/createTextStyle";
import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

type InputProps = {
  label: string;
  value: string;
  onChange?: any;
  subLabel?: string;
  placeholder?: string;
  rightIcon?: JSX.Element;
  error?: string;
  [props: string]: any;
} & TextInputProps;

export const FormInput = (props: InputProps) => {
  const {
    label,
    subLabel,
    placeholder,
    value,
    onChange,
    error,
    icon,
    ...rest
  } = props;

  const [focused, setFocused] = useState(false);

  const getBorderColor = () => {
    if (error) {
      return COLORS.error0Hex;
    }

    if (focused || value) {
      return COLORS.offBlack;
    } else {
      return COLORS.icon;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label} <Text style={{ color: COLORS.white }}>{subLabel}</Text>
      </Text>

      <View
        style={[
          styles.input_container,
          { ...(icon && { flexDirection: "row", alignItems: "center" }) },
        ]}
      >
        <TextInput
          value={value}
          style={[
            styles.input,
            {
              borderColor: getBorderColor(),
            },
          ]}
          placeholder={placeholder}
          placeholderTextColor="#DEDEDE"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChangeText={onChange}
          {...rest}
        />
        {icon && icon}
      </View>

      {error && (
        <View style={styles.warn_container}>
          <Text style={styles.error}>{error}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    rowGap: 7,
  },
  label: {
    ...createTextStyle({ color: "offBlack", weight: "Regular", size: "_12" }),
  },
  input_container: {
    position: "relative",
  },

  input: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#E0E6E3",
    width: "100%",
    padding: 16,
    ...createTextStyle({ color: "offBlack", weight: "Regular", size: "_14" }),
  },
  error: {
    ...createTextStyle({ weight: "Regular", size: "_12" }),
    color: "red",
  },
  warn_container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 3,
  },
});
