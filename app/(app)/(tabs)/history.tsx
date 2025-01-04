import { ThemedText, ThemedView } from "@/shared/components/ui";
import { StyleSheet } from "react-native";
const HEADER_HEIGHT = 250;

export default function HistoryScreen() {
  return (
    <ThemedView style={styles.header}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="defaultSemiBold">Explore</ThemedText>
      </ThemedView>
      <ThemedText>This apps includes example code to help you get started.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  header: {
    marginTop: HEADER_HEIGHT,
    overflow: "hidden",
  },
});
