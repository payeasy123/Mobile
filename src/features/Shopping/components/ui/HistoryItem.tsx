import { IMAGES } from "@/assets/images";
import { Button } from "@/src/shared/components/ui";
import { COLORS } from "@/src/shared/utils/colors";
import { SCREEN_WIDTH } from "@/src/shared/utils/screenDimensions";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
// import QRCode from "react-native-qrcode-svg";

type TransactionDetailsProps = {
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

const HistoryItem = ({ transaction }: { transaction: TransactionDetailsProps }) => {
  const handleDownload = () => {
    console.log("download");
  };
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={IMAGES.SparIcon} style={styles.logo} />

      <View style={styles.qrContainer}>{/* <QRCode value={transaction.id} size={120} /> */}</View>

      <Text style={styles.sectionTitle}>Transaction details</Text>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Transaction ID</Text>
        <Text style={styles.value}>{transaction.id}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Store address</Text>
        <Text style={styles.value}>{transaction.storeAddress}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Payment time</Text>
        <Text style={styles.value}>{transaction.date}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Payment method</Text>
        <Text style={styles.value}>{transaction.paymentMethod}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Total items</Text>
        <Text style={styles.value}>{transaction.totalItems}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Amount paid</Text>
        <Text style={styles.value}>{transaction.amount}</Text>
      </View>
      <View style={styles.line} />

      <Text style={[styles.sectionTitle, styles.itemsTitle]}>Items</Text>

      <ScrollView>
        {transaction.items.map((item, index) => (
          <View key={index} style={styles.itemRow}>
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <Text style={styles.itemQuantity}>{item.quantity}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.downloadButton}>
        <Button
          variant="gradient"
          title={"Download Receipt"}
          onPress={handleDownload}
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
      </View>
    </View>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginBottom: 20,
  },
  qrContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 20,
  },
  itemsTitle: {
    marginTop: 20,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  line: {
    height: 1,
    width: SCREEN_WIDTH - SCREEN_WIDTH * 0.08,
    backgroundColor: COLORS.greyBase,
  },
  label: {
    color: COLORS.black20,
    fontSize: 14,
  },
  value: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.blackBase,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  itemName: {
    fontSize: 14,
    marginBottom: 4,
    color: COLORS.black40,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.blackBase,
  },
  itemQuantity: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.black40,
  },
  downloadButton: {
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 30,
  },
  downloadButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
