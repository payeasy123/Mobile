import { IconSymbol } from "@/src/shared/components/icons";
import { Button } from "@/src/shared/components/ui";
import CustomInput from "@/src/shared/components/ui/Input";
import { Ionicons } from "@expo/vector-icons"; // For icons
import { useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function App() {
  const handlePress = () => console.log("Button Pressed");
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      Hello
      <Button
        title="Header"
        onPress={handlePress}
        variant="gradient"
        gradientColors={["#0077B6", "#AB49FF"]}
        icon={<Ionicons name="arrow-forward" size={16} color="#fff" />}
        gradientProps={{
          start: { x: 1, y: 0 },
          end: { x: 1, y: 0 },
        }}
      />

      <CustomInput
        label="Header"
        value={value}
        onChangeText={setValue}
        placeholder="Email Address"
        variant="outlined"
        iconLeft="mail"
        iconRight={<IconSymbol size={28} name="checkmark.circle.fill" color="#0D9D31" />}
        onRightIconPress={() => console.log("Icon Pressed")}
        loading={false}
        // borderColor="#AB49FF"
        errorMessage={value.includes("@") ? "" : "Invalid email"}
        infoMessage={value.includes("@") ? "" : "Invalid email"}
        disabled
      />

      <CustomInput
        label="Password"
        value={value}
        onChangeText={setValue}
        placeholder="Password"
        variant="standard"
        iconRight="eye"
        onRightIconPress={() => console.log("Show Password")}
        disabled
        
        // backgroundColor="#f3f4f6"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#fff",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});
