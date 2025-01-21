import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, ImageSourcePropType } from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "@/src/shared/utils/colors";
import { IMAGES } from "@/assets/images";
import { router, usePathname } from "expo-router";
import { Button } from "@/src/shared/components/ui";
import { ArrowLongLeft, SearchIcon } from "@/assets/icons";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: ImageSourcePropType;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Apple Red",
    price: 7800.0,
    quantity: 10,
    image: IMAGES.AppleIcon,
  },
  {
    id: 2,
    name: "Clementine",
    price: 7800.0,
    quantity: 6,
    image: IMAGES.OrangeIcon,
  },
  {
    id: 3,
    name: "Wheat Bread",
    price: 7800.0,
    quantity: 2,
    image: IMAGES.WheatIcon,
  },
  {
    id: 4,
    name: "Nescafe Original 3 in 1 (Pack of 1)",
    price: 7800.0,
    quantity: 8,
    image: IMAGES.NescafeIcon,
  },
  {
    id: 5,
    name: "Nivea Radiant and Beauty Advanced",
    price: 7800.0,
    quantity: 1,
    image: IMAGES.NiveaIcon,
  },
  {
    id: 6,
    name: "Oral-B Pro Health Paste Fresh Gel",
    price: 7800.0,
    quantity: 3,
    image: IMAGES.OralBIcon,
  },
];

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(Object.fromEntries(initialCartItems.map((item) => [item.id, 0])));

  const increaseQuantity = (itemId: number) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const decreaseQuantity = (itemId: number) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) - 1),
    }));
  };
  const handlePayment = () => {
    const itemsWithQuantities = initialCartItems
      .map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: quantities[item.id] || 0,
      }))
      .filter((item) => item.quantity > 0);

    router.push({
      pathname: "/(app)/pay",
      params: {
        totalItems,
        totalAmount,
        // itemsWithQuantities,
      },
    });
  };

  const totalItems = Object.values(quantities).reduce((sum, quantity) => sum + quantity, 0);
  const totalAmount = initialCartItems.reduce((sum, item) => sum + item.price * (quantities[item.id] || 0), 0);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ArrowLongLeft />
        </TouchableOpacity>
        <Image source={IMAGES.SparIcon} style={styles.logo} />
        <TouchableOpacity style={styles.searchButton}>
          <SearchIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <Text style={styles.tabInactive}>Scan</Text>
        <Text style={styles.tabActive}>Cart</Text>
        <Text style={styles.tabInactive}>Pay</Text>
      </View>

      <Text style={styles.subtitle}>Review and manage your cart items.</Text>

      <ScrollView style={styles.cartList}>
        {initialCartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>₦{item.price.toFixed(2)}</Text>
            </View>
            <View style={styles.quantityControl}>
              <TouchableOpacity
                style={[styles.quantityButton, quantities[item.id] === 0 && styles.quantityButtonDisabled]}
                onPress={() => decreaseQuantity(item.id)}
                disabled={quantities[item.id] === 0}
              >
                <Text style={[styles.quantityButtonText, quantities[item.id] === 0 && styles.quantityButtonTextDisabled]}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantities[item.id] || 0}</Text>
              <TouchableOpacity style={styles.quantityButton} onPress={() => increaseQuantity(item.id)}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total ({totalItems} items)</Text>
          <Text style={styles.totalAmount}>₦{totalAmount.toFixed(2)}</Text>
        </View>

        {/* <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
          <Text style={styles.paymentButtonText}>Make payments</Text>
        </TouchableOpacity> */}
        <Button
          variant="gradient"
          title={"Make Payment"}
          onPress={handlePayment}
          loading={loading}
          gradientProps={{
            start: { x: 0.5, y: 0 },
            end: { x: 0.5, y: 0.8 },
          }}
          style={{
            width: "100%",
            paddingVertical: 20,
          }}
        />

        <TouchableOpacity style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Clear cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

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
    color: COLORS.purpleBase,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.purpleBase,
    paddingBottom: 5,
  },
  tabInactive: {
    color: COLORS.grey60,
  },
  subtitle: {
    padding: 20,
    color: "#6B7280",
    fontSize: 16,
  },
  cartList: {
    flex: 1,
  },
  cartItem: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    alignItems: "center",
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: "#F3F4F6",
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  itemName: {
    fontSize: 14,
    marginBottom: 4,
    color: COLORS.blackBase,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.black100,
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    fontSize: 20,
    color: "#374151",
  },
  quantity: {
    marginHorizontal: 15,
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
    marginBottom: 10,
  },
  paymentButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  clearButton: {
    backgroundColor: "#FEE2E2",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
  },
  clearButtonText: {
    color: "#EF4444",
    fontSize: 16,
    fontWeight: "600",
  },
  quantityButtonDisabled: {
    backgroundColor: "#E5E7EB",
  },

  quantityButtonTextDisabled: {
    color: "#9CA3AF",
  },
});
