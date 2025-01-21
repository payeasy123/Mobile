import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { IMAGES } from "@/assets/images";
import { COLORS } from "@/src/shared/utils/colors";

const StoreScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to Spar.</Text>

        <View style={styles.logoContainer}>
          <Image source={IMAGES.SparImage} style={styles.logo} resizeMode="contain" />
        </View>

        <TouchableOpacity style={styles.resumeButton}>
          <Text style={styles.resumeButtonText}>Resume shopping</Text>
          <MaterialIcons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.exitButton}>
          <Text style={styles.exitButtonText}>Exit store</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grey10,
    padding: 20,
  },
  welcomeText: {
    fontSize: 18,
    color: COLORS.black40,
    textAlign: "center",
    marginTop: 20,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  //   logo: {
  //     width: 310,
  //     height: 310,
  //   },

  logo: {
    width: 200,
    height: 200,
  },

  resumeButton: {
    backgroundColor: "#8B5CF6",
    borderRadius: 25,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  resumeButtonText: {
    color: "white",
    fontSize: 18,
    marginRight: 10,
  },
  exitButton: {
    backgroundColor: COLORS.grey40,
    borderRadius: 25,
    padding: 15,
    marginBottom: 40,
  },
  exitButtonText: {
    color: "#000",
    fontSize: 18,
    textAlign: "center",
  },
});
