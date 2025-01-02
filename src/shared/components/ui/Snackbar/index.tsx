import React, { useEffect, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { IconSymbol } from "../../icons/IconSymbol";
import { SnackBarStyle } from "./styles";
import { BaseSnackbarProps, PredefinedSnackbarProps, SnackbarProps, SnackbarType } from "./types";

const BaseSnackbar = (props: BaseSnackbarProps) => {
  const {
    position = "bottom",
    duration = 60000,
    isPermanent = false,
    isVisible: visible,
    onDismiss,
    onActionPress,
    children,
    containerStyle,
  } = props;

  const [isVisible, setIsVisible] = useState<boolean>(visible ?? false);

  const fadeAnim = useState<Animated.Value>(new Animated.Value(0))[0];

  useEffect(() => {
    if (visible != null) setIsVisible(visible);

    if (visible) showSnackbar();
  }, [visible]);

  const showSnackbar = () => {
    setIsVisible(true);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (!isPermanent) {
        setTimeout(() => {
          hideSnackbar();
        }, duration);
      }
    });
  };

  const hideSnackbar = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsVisible(false);
      onDismiss?.();
    });
  };

  const handleActionPress = () => {
    hideSnackbar();
    onActionPress?.();
  };

  if (!isVisible) return null;

  return (
    <Animated.View style={[SnackBarStyle.container, containerStyle, { opacity: fadeAnim, [position]: 10 }]}>
      <TouchableOpacity onPress={handleActionPress}>
        {typeof children === "string" ? <Text style={SnackBarStyle.MessageText}>{children}</Text> : children}
      </TouchableOpacity>
    </Animated.View>
  );
};

const SNACKBAR_CONFIG: Record<SnackbarType, { icon: React.JSX.Element; color: string; backgroundColor: string }> = {
  success: {
    icon: <IconSymbol size={28} name="checkmark.circle.fill" color="#0D9D31" />,
    color: "#0D9D31",
    backgroundColor: "#e5fcf1",
  },
  error: {
    icon: <IconSymbol size={28} name="x.circle.fill" color="#f14249" />,
    color: "#f14249",
    backgroundColor: "#fdecec",
  },
  info: {
    icon: <IconSymbol size={28} name="info.circle.fill" color="#4c84f5" />,
    color: "#4c84f5",
    backgroundColor: "#edf2fd",
  },
  warning: {
    icon: <IconSymbol size={28} name="info.circle.fill" color="#fccd0d" />,
    color: "#fccd0d",
    backgroundColor: "#fffae8",
  },
};

export const Snackbar = ({ type, ...props }: SnackbarProps) => {
  if (type && type !== "base" && SNACKBAR_CONFIG[type]) {
    const selectedConfig = SNACKBAR_CONFIG[type];

    const predefinedProps = props as PredefinedSnackbarProps;
    return (
      <BaseSnackbar
        {...props}
        containerStyle={{
          borderWidth: 1,
          borderColor: selectedConfig.color,
          backgroundColor: selectedConfig.backgroundColor,
        }}
      >
        <View style={[SnackBarStyle.contentContainer]}>
          <View style={SnackBarStyle.IconAndMessageContainer}>
            {selectedConfig.icon}

            <View style={SnackBarStyle.MessageContainer}>
              {predefinedProps.heading && <Text style={SnackBarStyle.HeaderText}>{predefinedProps.heading}</Text>}

              <Text style={SnackBarStyle.MessageText}>{predefinedProps.message}</Text>
            </View>
          </View>
          <IconSymbol size={16} name="xmark" color={selectedConfig.color} />,
        </View>
      </BaseSnackbar>
    );
  }

  const baseProps = props as BaseSnackbarProps;

  return <BaseSnackbar {...props}>{baseProps.children}</BaseSnackbar>;
};
