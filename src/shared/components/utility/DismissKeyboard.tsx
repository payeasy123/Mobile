import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export const DismissKeyboard = ({ children, onPress }: any) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        onPress;
      }}
    >
      {children}
    </TouchableWithoutFeedback>
  );
};

