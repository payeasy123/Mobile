import React, { useCallback, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { IMAGES } from "@/assets/images";
import { COLORS } from "@/src/shared/utils/colors";
import { Button } from "@/src/shared/components/ui";
import { CustomBottomSheetModal } from "@/src/shared/components/ui";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { MaterialIcons } from "@expo/vector-icons";

const CheckoutScreen = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handleViewReceipt = () => {
    console.log("view");
    bottomSheetModalRef.current?.present();
  };

  const handlePresentModalPress = useCallback(() => {}, []);
  const handleClose = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcomeText}>Scan your Transaction ID at the exit to verify your payment.</Text>

        <View style={styles.logoContainer}>
          <Image source={IMAGES.QrCodeImage} style={styles.logo} resizeMode="contain" />
        </View>

        <Text style={styles.qrCodeText}>ABC 123</Text>

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
      <CustomBottomSheetModal ref={bottomSheetModalRef}>
        <View style={styles.sheetContent}>
          <View style={styles.sheetHeader}>
            <View style={styles.sheetHeaderContent}>
              <Text style={styles.successTitle}>Shopping complete.</Text>
              <Text style={styles.successMessage}>Thanks for shopping with us.</Text>
            </View>
            <View style={styles.closeIconContainer}>
              <TouchableOpacity style={styles.closeIcon} onPress={handleClose}>
                <MaterialIcons name="close" size={24} color={COLORS.black40} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.iconWrapper}>
            <View style={styles.iconBackground}>
              <Image source={IMAGES.ShoppingBag} />
            </View>
          </View>

          <Button
            variant="gradient"
            title="View receipt"
            onPress={() => console.log("View Receipt")}
            gradientProps={{
              start: { x: 0, y: 0 },
              end: { x: 1, y: 0 },
            }}
            style={{
              width: "100%",
              paddingVertical: 16,
              marginTop: 20,
            }}
          />
          <TouchableOpacity style={styles.exitButton} onPress={() => console.log("Exit store")}>
            <Text style={styles.exitButtonText}>Exit store →</Text>
          </TouchableOpacity>
        </View>
      </CustomBottomSheetModal>
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
  sheetContent: {
    flex: 1,
    width: "100%",
  },
  sheetHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  sheetHeaderContent: {
    width: "95%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  successTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.black80,
    textAlign: "center",
    marginTop: 20,
  },
  closeIconContainer: {},
  closeIcon: {},

  successMessage: {
    fontSize: 14,
    color: COLORS.black40,
    textAlign: "center",
    marginTop: 8,
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  iconBackground: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  exitButton: {
    marginTop: 16,
    width: "100%",
    borderWidth: 1,
    borderColor: COLORS.purple50,
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: "center",
  },
  exitButtonText: {
    color: COLORS.purple50,
    fontSize: 16,
  },
});
