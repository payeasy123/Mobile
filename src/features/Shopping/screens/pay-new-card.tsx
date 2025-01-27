import { ArrowLongLeft } from "@/assets/icons";
import { Button } from "@/src/shared/components/ui";
import { COLORS } from "@/src/shared/utils/colors";
import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const PayNewCard = () => {
  const [loading, setLoading] = useState(false);
  const onConfirm = () => {
    console.log("added new card");
  };
  const handleBack = () => {
    // router.push("/(app)/pay");
    router.back();
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack}>
            <ArrowLongLeft />
          </TouchableOpacity>
          <Text style={styles.headerText}>Add new card.</Text>
        </View>

        {/* Amount Box */}
        <View style={styles.amountContainer}>
          <Text style={styles.payText}>Pay</Text>
          <Text style={styles.amountText}>₦56,000</Text>
        </View>

        {/* Form Fields */}
        <View style={styles.formContainer}>
          <Text style={styles.fieldText}>Card Number</Text>
          <TextInput style={styles.input} placeholder="Card number" placeholderTextColor="#B2B2B2" keyboardType="number-pad" />
          <View style={styles.row}>
            <View style={styles.smallInput}>
              <Text style={styles.fieldText}>CVV</Text>
              <TextInput style={[styles.input]} placeholder="CVV" placeholderTextColor="#B2B2B2" keyboardType="number-pad" />
            </View>
            <View style={styles.smallInput}>
              <Text style={styles.fieldText}>Expiry Date</Text>
              <TextInput style={[styles.input]} placeholder="MM/YY" placeholderTextColor="#B2B2B2" keyboardType="number-pad" />
            </View>
          </View>
          <Text style={styles.fieldText}>Cardholder name</Text>
          <TextInput style={styles.input} placeholder="Lisa Derek" placeholderTextColor="#B2B2B2" />
          <View style={styles.checkboxContainer}>
            {/* <CheckBox value={false} /> */}
            <Text style={styles.checkboxText}>Save card details for next time</Text>
          </View>
        </View>

        {/* Confirm Button */}
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Confirm payment</Text>
        </TouchableOpacity> */}
        <Button
          variant="gradient"
          title={"Confirm Payment"}
          onPress={onConfirm}
          loading={loading}
          gradientProps={{
            start: { x: 0.5, y: 0 },
            end: { x: 0.5, y: 0.8 },
          }}
          style={{
            width: "100%",
            paddingVertical: 20,
            position: "absolute",
            bottom: 30,
            left: 10,
            right: 10,
          }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default PayNewCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  headerText: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.black100,
    textAlign: "center",
    flex: 1,
  },
  amountContainer: {
    backgroundColor: COLORS.purpleBase,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginVertical: 50,
  },
  payText: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 5,
  },
  amountText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "#000000",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallInput: {
    width: "48%",
  },
  fieldText: {
    color: COLORS.black40,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxText: {
    marginLeft: 8,
    color: "#333333",
  },

  button: {
    backgroundColor: "#8B26F0",
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 18,
  },
});
