import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PaymentScreenComponent } from "../components/ui/PaymentScreenComponent";
import { router } from "expo-router";

const PayTransfer = () => {
  const handleConfirm = () => {
    // Handle payment confirmation
    console.log("Payment confirmed");
  };
  const handleBackButton = () => {
    router.back();
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <PaymentScreenComponent
        title="Transfer"
        amount="56,000"
        store="Spar"
        subtitle="Transfer to bank."
        accountName="Wema bank"
        accountNumber="98803133355"
        onConfirm={handleConfirm}
        handleBackButton={handleBackButton}
      />
    </View>
  );
};

export default PayTransfer;

const styles = StyleSheet.create({});
