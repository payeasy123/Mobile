import { ArrowLongLeft, CopyIcon } from "@/assets/icons";
import { Button } from "@/src/shared/components/ui";
import { COLORS } from "@/src/shared/utils/colors";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface PaymentCardProps {
  amount?: string;
  title?: string;
  subtitle?: string;
  accountNumber?: string;
  accountName?: string;
  balance?: string;
  store?: string;
  onConfirm: () => void;
}

export const PaymentScreenComponent = ({ amount, title, subtitle, accountNumber, accountName, balance, store, onConfirm }: PaymentCardProps) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          {" "}
          <ArrowLongLeft />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.amountContainer}>
        <Text style={styles.label}>Pay</Text>
        <Text style={styles.amount}>₦{amount}</Text>
      </View>

      {balance && (
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>Wallet Balance: ₦{balance}</Text>
        </View>
      )}
      {store && (
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>Store: {store}</Text>
        </View>
      )}

      <Text style={styles.subtitle}>{subtitle}</Text>

      <View style={styles.accountContainer}>
        <Text style={styles.accountName}>{accountName}</Text>
        <View style={styles.accountNumberContainer}>
          <Text style={styles.accountNumber}>{accountNumber}</Text>
          <TouchableOpacity>
            <CopyIcon />
          </TouchableOpacity>
        </View>
      </View>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 70,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    flex: 1,
  },
  amountContainer: {
    backgroundColor: COLORS.purpleBase,
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  label: {
    color: "white",
    fontSize: 16,
  },
  amount: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  balanceContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.purple10,
    marginBottom: 70,
  },
  balanceText: {
    fontSize: 14,
  },
  subtitle: {
    color: COLORS.black40,
    marginBottom: 20,
    textAlign: "center",
  },
  accountContainer: {
    backgroundColor: COLORS.grey20,
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  accountName: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
    color: COLORS.black100,
  },
  accountNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.purple30,
    padding: 8,
    borderRadius: 20,
    alignSelf: "center",
  },
  accountNumber: {
    marginRight: 8,
    color: "#fff",
  },
  copyIcon: {
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: "#8B5CF6",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
  },
  confirmButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
