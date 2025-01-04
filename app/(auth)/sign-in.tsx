import { OnboardingScreen } from "@/src/features/Authentication/screens";
import { Loader } from "@/src/shared/components/ui";
import { useSession } from "@/src/shared/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
  const { signIn, isLoading } = useSession();
  const [appLoading, setAppLoading] = useState(isLoading);

  useEffect(() => {
    setAppLoading(isLoading);
  }, [isLoading]);

  const [completedOnboarding, setCompletedOnboarding] = useState<boolean | null>(null);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      setAppLoading(true);
      const completed = await AsyncStorage.getItem("@onboardingComplete");
      setCompletedOnboarding(completed !== null);
      setAppLoading(false);
    };

    checkOnboardingStatus();
  }, []);

  if (appLoading) {
    return <Loader />;
  }

  if (!completedOnboarding) {
    return <OnboardingScreen />;
  }

  const handleLogin = () => {
    //Adicione sua lógica de login aqui
    signIn();
    //Antes de navegar, tenha certeza de que o usuário está autenticado
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome! 🌈 </Text>
      <Text style={styles.paragraph}>
        This is a simple repo that emulates a login authentication workflow using Expo Router, focused on the navigation aspect.
      </Text>
      <View style={styles.separator} />
      <TextInput placeholder="Username(not required)" style={styles.input} />
      <TextInput placeholder="Password(not required)" secureTextEntry style={styles.input} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: "center",
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    margin: 10,
    borderRadius: 4,
  },
});
