import { StepProgressBar } from "@/src/shared/components/ui";
import { useStepProgress } from "@/src/shared/components/ui/ProgressBar/useProgressBar";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const { currentStep, handleNext, handlePrevious, isNextDisabled, isPreviousDisabled, totalSteps } = useStepProgress({
    totalSteps: 5,
    initialStep: 2,
  });

  return (
    <View style={styles.container}>
      <StepProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        barProps={{
          color: "#ff5722",
          height: 6,
        }}
        // stepStyles={{
        //   circle: { borderWidth: 2, borderColor: "#ff5722" },
        //   activeCircle: { backgroundColor: "#ff5722" },
        //   completedCircle: { backgroundColor: "#4caf50" },
        // }}
        stepIcons={{
          completed: () => <MaterialIcons name="check" size={20} color="white" />,
          active: () => <MaterialIcons name="radio-button-on" size={20} color="blue" />,
          default: () => <MaterialIcons name="radio-button-off" size={20} color="gray" />,
        }}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePrevious} disabled={isPreviousDisabled} style={[styles.button, isPreviousDisabled && styles.disabledButton]}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNext} disabled={isNextDisabled} style={[styles.button, isNextDisabled && styles.disabledButton]}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  label: {
    fontSize: 18,
    marginBottom: 20,
    color: "#333",
  },
  progressContainer: {
    position: "relative",
    width: 350,
    marginBottom: 30,
  },
  progressBar: {
    zIndex: 1,
  },
  stepsOverlay: {
    position: "absolute",
    top: -15,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 2,
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  completedCircle: {
    backgroundColor: "#4caf50",
  },
  activeCircle: {
    backgroundColor: "#2196f3",
  },
  stepText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#2196f3",
  },
  disabledButton: {
    backgroundColor: "#b0bec5",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
