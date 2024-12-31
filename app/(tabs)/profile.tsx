import { StyleSheet } from "react-native";

import { ThemedText, ThemedView } from "@/shared/components/ui";
const HEADER_HEIGHT = 250;

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.header}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="defaultSemiBold">Explore</ThemedText>
      </ThemedView>
      <ThemedText>
        This app includes example code to help you get started.
      </ThemedText>
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
