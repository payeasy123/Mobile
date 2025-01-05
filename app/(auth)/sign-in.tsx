import { OnboardingScreen } from "@/src/features/Authentication/screens";
import Login from "@/src/features/Authentication/screens/signin";
import { Loader } from "@/src/shared/components/ui";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function Logins() {
  const [appLoading, setAppLoading] = useState(false);

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

  return <Login />;
}
