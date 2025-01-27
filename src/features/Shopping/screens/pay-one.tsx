import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { router, useLocalSearchParams } from "expo-router";
import { IMAGES } from "@/assets/images";
import { ArrowLongLeft, SearchIcon, TransferIcon, WalletIcon } from "@/assets/icons";
import { COLORS } from "@/src/shared/utils/colors";

const PayMyCard = () => {
  const { totalItems, totalAmount } = useLocalSearchParams();
  const [selectedItem, setSelectedItem] = useState<"wallet" | "transfer" | number | null>(null);

  const cards = [
    { id: 1, last4: "1234" },
    { id: 2, last4: "5678" },
  ];

  const handleBackButton = () => {
    router.back();
  };

  const handlePayment = () => {
    if (selectedItem === "wallet") router.push("/(app)/pay-wallet");
    else router.push("/(app)/pay-transfer");
  };

  const handleNewCardPress = () => {
    router.push("/(app)/pay-new-card");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
          {/* <Text style={styles.backButtonText}>←</Text> */}
          <ArrowLongLeft />
        </TouchableOpacity>
        <Image source={IMAGES.SparIcon} style={styles.logo} />
        <TouchableOpacity style={styles.searchButton}>
          <SearchIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <Text style={styles.tabInactive}>Scan</Text>
        <Text style={styles.tabInactive}>Cart</Text>
        <Text style={styles.tabActive}>Pay</Text>
      </View>

      <Text style={styles.subtitle}>Select a payment method.</Text>

      <ScrollView style={styles.content}>
        {/* Wallet Option */}
        <TouchableOpacity
          style={[styles.paymentOption, selectedItem === "wallet" && styles.paymentOptionSelected]}
          onPress={() => setSelectedItem("wallet")}
        >
          <View style={styles.paymentOptionLeft}>
            <View style={styles.iconContainer}>
              <WalletIcon />
            </View>
            <View>
              <Text style={styles.paymentOptionTitle}>Wallet</Text>
              <Text style={styles.paymentOptionAmount}>₦500,000</Text>
            </View>
          </View>
          <View style={styles.radioButton}>{selectedItem === "wallet" && <View style={styles.radioButtonInner} />}</View>
        </TouchableOpacity>

        {/* Transfer Option */}
        <TouchableOpacity
          style={[styles.paymentOption, selectedItem === "transfer" && styles.paymentOptionSelected]}
          onPress={() => setSelectedItem("transfer")}
        >
          <View style={styles.paymentOptionLeft}>
            <View style={styles.iconContainer}>
              <TransferIcon />
            </View>
            <Text style={styles.paymentOptionTitle}>Transfer</Text>
          </View>
          <View style={styles.radioButton}>{selectedItem === "transfer" && <View style={styles.radioButtonInner} />}</View>
        </TouchableOpacity>

        {/* Cards Section */}
        <View style={styles.cardsSection}>
          <View style={styles.cardsSectionHeader}>
            <Text style={styles.cardsSectionTitle}>My cards</Text>
            <TouchableOpacity style={styles.addCardButton} onPress={handleNewCardPress}>
              <Text style={styles.addCardButtonText}>New card +</Text>
            </TouchableOpacity>
          </View>

          {cards.map((card) => (
            <TouchableOpacity
              key={card.id}
              style={[styles.cardOption, selectedItem === card.id && styles.cardOptionSelected]}
              onPress={() => setSelectedItem(card.id)}
            >
              <View style={styles.cardOptionLeft}>
                <Text style={styles.cardIcon}>💳</Text>
                <Text style={styles.cardNumber}>**** **** **** {card.last4}</Text>
              </View>
              <View style={styles.radioButton}>{selectedItem === card.id && <View style={styles.radioButtonInner} />}</View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total ({totalItems} items)</Text>
          <Text style={styles.totalAmount}>₦{totalAmount}</Text>
        </View>

        <TouchableOpacity
          style={[styles.paymentButton, !selectedItem && styles.paymentButtonDisabled]}
          onPress={handlePayment}
          disabled={!selectedItem}
        >
          <Text style={styles.paymentButtonText}>Make payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PayMyCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 24,
  },
  logo: {
    width: 40,
    height: 40,
  },
  searchButton: {
    padding: 10,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  tabActive: {
    color: "#6B21A8",
    borderBottomWidth: 2,
    borderBottomColor: "#6B21A8",
    paddingBottom: 5,
  },
  tabInactive: {
    color: "#9CA3AF",
  },
  subtitle: {
    padding: 20,
    color: "#6B7280",
    fontSize: 16,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  paymentOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  paymentOptionSelected: {
    backgroundColor: COLORS.grey20,
  },
  paymentOptionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: COLORS.grey10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },

  paymentOptionTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  paymentOptionAmount: {
    color: COLORS.blackBase,
    fontSize: 12,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.purpleBase,
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonSelected: {
    borderColor: "#8B5CF6",
    backgroundColor: COLORS.purpleBase,
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.purpleBase,
  },
  cardsSection: {
    marginTop: 24,
  },
  cardsSectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  cardsSectionTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  addCardButton: {
    backgroundColor: COLORS.purple30,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addCardButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  cardOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardOptionSelected: {
    backgroundColor: COLORS.grey20,
  },
  cardOptionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  cardNumber: {
    fontSize: 16,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  totalText: {
    fontSize: 16,
    color: "#374151",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  paymentButton: {
    backgroundColor: "#8B5CF6",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
  },
  paymentButtonDisabled: {
    backgroundColor: "#C4B5FD",
  },
  paymentButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
