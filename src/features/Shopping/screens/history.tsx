import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/src/shared/utils/colors";
import { createTextStyle } from "@/src/shared/utils/createTextStyle";
import { IMAGES } from "@/assets/images";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import HistoryItem from "../components/ui/HistoryItem";
import { CustomBottomSheetModal } from "@/src/shared/components/ui";
import { FilterIcon } from "@/assets/icons";

type Transaction = {
  id: string;
  storeName: string;
  storeAddress: string;
  date: string;
  paymentMethod: string;
  totalItems: number;
  amount: string;
  items: Array<{
    name: string;
    price: string;
    quantity: number;
  }>;
};
const transactions: Transaction[] = Array(8)
  .fill(null)
  .map((_, index) => ({
    id: `ABC${123 + index}`,
    storeName: "Store name",
    storeAddress: "5, Ikeja, Lagos",
    date: "01/02/30, 12:34:16",
    paymentMethod: "Card",
    totalItems: 20,
    amount: "₦56,000",
    items: [
      { name: "Apple Red", price: "₦7800.00", quantity: 10 },
      { name: "Clementine", price: "₦7800.00", quantity: 6 },
      { name: "Clementine", price: "₦7800.00", quantity: 6 },
      { name: "Clementine", price: "₦7800.00", quantity: 6 },
      { name: "Clementine", price: "₦7800.00", quantity: 6 },
      { name: "Clementine", price: "₦7800.00", quantity: 6 },
      { name: "Clementine", price: "₦7800.00", quantity: 6 },
      { name: "Wheat Bread", price: "₦7800.00", quantity: 2 },
      { name: "Nescafe Original 3 in 1 (Pack of 10 sachets) - 250g", price: "₦7800.00", quantity: 8 },
    ],
  }));

const History = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [selectedTransaction, setSelectedTransaction] = React.useState<Transaction | null>(null);

  const handlePresentModalPress = useCallback((transaction: Transaction) => {
    setSelectedTransaction(transaction);
    bottomSheetModalRef.current?.present();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.history_header}>
        <Text style={styles.header_text}>History</Text>
        <View style={styles.filterContainer}>
          <Text style={styles.filterText}>Filter</Text>
          <View style={styles.iconContainer}>
            <FilterIcon />
          </View>
        </View>
      </View>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePresentModalPress(item)}>
            <View style={styles.transactionItem}>
              <Image source={IMAGES.SparIcon} style={styles.storeLogo} />
              <View style={styles.transactionInfo}>
                <Text style={styles.storeName}>{item.storeName}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
              <Text style={styles.amount}>{item.amount}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <CustomBottomSheetModal ref={bottomSheetModalRef}>
        {selectedTransaction && <HistoryItem transaction={selectedTransaction} />}
      </CustomBottomSheetModal>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grey10,
  },
  header_text: {
    ...createTextStyle({ color: "offBlack", weight: "bold", size: "_24" }),
  },
  history_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  filterButton: {
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
  },
  filterText: {
    fontSize: 14,
    color: COLORS.black30,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  storeLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  transactionInfo: {
    flex: 1,
    marginLeft: 15,
  },
  storeName: {
    fontSize: 14,
    fontWeight: "500",
  },
  date: {
    fontSize: 10,
    color: "#9C9C9C",
    marginTop: 4,
  },
  amount: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.black100,
  },
  filterContainer: {
    flexDirection: "row",
    borderRadius: 10,
    
    borderWidth: 1,
    width: 85,
    gap: 10,
    paddingVertical: 4,
    borderColor: COLORS.grey30,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  iconContainer: {},
});
