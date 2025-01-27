import React from "react";
import { View } from "react-native";
import { PaymentScreenComponent } from "../components/ui/PaymentScreenComponent";
import { router } from "expo-router";

const PayWallet = () => {
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
        title="Wallet"
        amount="56,000"
        subtitle="Fund your wallet with your virtual account number."
        accountName="Paystack Titan"
        accountNumber="98803133355"
        balance="500,000"
        onConfirm={handleConfirm}
        handleBackButton={handleBackButton}
      />
    </View>
  );
};

export default PayWallet;
