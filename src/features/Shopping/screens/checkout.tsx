import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { IMAGES } from "@/assets/images";
import { COLORS } from "@/src/shared/utils/colors";
import { Button } from "@/src/shared/components/ui";

const CheckoutScreen = () => {
  const handleViewReceipt = () => {
    console.log("view");
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcomeText}>Scan your Transaction ID at the exit to verify your payment.</Text>

        <View style={styles.logoContainer}>
          <Image source={IMAGES.QrCodeImage} style={styles.logo} resizeMode="contain" />
        </View>

        <Text style={styles.qrCodeText}>ABC 123</Text>

        {/* <TouchableOpacity style={styles.resumeButton}>
          <Text style={styles.resumeButtonText}>View Receipt</Text>
          <MaterialIcons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity> */}
        <Button
          variant="gradient"
          title={"View Receipt"}
          onPress={handleViewReceipt}
          gradientProps={{
            start: { x: 0.5, y: 0 },
            end: { x: 0.5, y: 0.8 },
          }}
          style={{
            width: "100%",
            paddingVertical: 20,
          }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grey10,
    padding: 20,
  },
  welcomeText: {
    fontSize: 16,
    color: COLORS.black40,
    textAlign: "center",
    marginTop: 20,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  logo: {
    width: 310,
    height: 310,
  },
  resumeButton: {
    backgroundColor: "#8B5CF6",
    borderRadius: 25,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  resumeButtonText: {
    color: "white",
    fontSize: 18,
    marginRight: 10,
  },

  qrCodeText: {
    color: "#000",
    fontSize: 18,
    textAlign: "center",
  },
});
