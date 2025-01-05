import CustomInput from "@/src/shared/components/ui/Input";
import { useSession } from "@/src/shared/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const handlePress = () => console.log("Button Pressed");
  const [value, setValue] = useState("kljkjk");
  const { signOut } = useSession();

  return (
    <View style={styles.container}>
      <Text
        onPress={async () => {
          // await AsyncStorage.removeItem("@onboardingComplete");

          signOut();
        }}
      >
        Sign Out
      </Text>
      <CustomInput value={value} label="Password" onChange={() => console.log("")} autoCapitalize="none" placeholder="Minumum of 14 Characters" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
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
