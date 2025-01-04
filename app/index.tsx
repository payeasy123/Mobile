import { OnboardingScreen } from "@/src/features/Authentication/screens";
import { useSession } from "@/src/shared/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import "react-native-reanimated";

const Index = () => {
  const { session, isLoading } = useSession();
  const [completedOnboarding, setCompletedOnboarding] = useState<boolean | null>(null);

  // // Check if onboarding is completed
  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const completed = await AsyncStorage.getItem("@onboardingComplete");
      setCompletedOnboarding(completed === null);
    };

    checkOnboardingStatus();
  }, []);

  // return <OnboardingScreen />;

  // Show onboarding screen before login
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (session) {
    return <Redirect href="/(app)/(tabs)" />;
  }

  if (!completedOnboarding) {
    return <OnboardingScreen />;
  }

  return <Redirect href="/(auth)/sign-in" />;
};

export default Index;
