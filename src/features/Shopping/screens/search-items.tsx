import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Button } from "@/src/shared/components/ui";
import { IMAGES } from "@/assets/images";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Nescafe Original 3 in 1 (Pack of 1...",
    price: 7800,
    image: IMAGES.NescafeIcon,
    quantity: 8,
  },
  {
    id: "2",
    name: "Nivea Radiant and Beauty Advan...",
    price: 7800,
    image: IMAGES.NiveaIcon,
    quantity: 1,
  },
  {
    id: "3",
    name: "Funtana Eggs 30pcs",
    price: 7800,
    image: IMAGES.WheatIcon,
    quantity: 1,
  },
];

const SearchItems = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(20);

  const filteredProducts = PRODUCTS.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleGoToCart = () => {
    router.back();
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.productContainer}>
      <Image source={item?.image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.productPrice}>₦{item.price.toFixed(2)}</Text>
      </View>
      <View style={styles.quantityControls}>
        <TouchableOpacity style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Ne" value={searchQuery} onChangeText={setSearchQuery} />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Ionicons name="close" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        style={styles.productList}
        contentContainerStyle={styles.productListContent}
      />

      <View style={styles.cartButtonContainer}>
        <Button
          variant="gradient"
          title={`Go to Cart (${cartCount}) `}
          onPress={handleGoToCart}
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
    </SafeAreaView>
  );
};
export default SearchItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    height: "100%",
  },
  productList: {
    flex: 1,
  },
  productListContent: {
    padding: 16,
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 12,
    backgroundColor: "#f5f5f5",
  },
  productInfo: {
    flex: 1,
    marginRight: 8,
  },
  productName: {
    fontSize: 14,
    marginBottom: 4,
    color: "#333",
  },
  productPrice: {
    fontSize: 14,
    color: "#333",
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    fontSize: 20,
    color: "#666",
    fontWeight: "300",
  },
  quantity: {
    marginHorizontal: 12,
    fontSize: 14,
    color: "#333",
  },
  cartButtonContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  cartButton: {
    backgroundColor: "#7C3AED",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  cartButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
