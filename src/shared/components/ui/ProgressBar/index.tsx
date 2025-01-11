import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Progress from "react-native-progress";
import { StepProgressBarProps } from "./types";

export const StepProgressBar = (props: StepProgressBarProps) => {
  const {
    totalSteps = 3,
    currentStep = 0,
    onStepChange = () => {},
    stepIcons = {},
    stepStyles = {},
    containerStyle = {},
    barProps = {},
    renderStepIcons = null,
    renderStepLabels = null,
  } = props;

  const positions = Array.from({ length: totalSteps });
  const progress = currentStep / (totalSteps - 1);
  const [iconStep, setIconStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIconStep(currentStep);
    }, 100);
    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <View style={[styles.progressContainer, containerStyle]}>
      <Progress.Bar progress={progress} width={null} height={4} color={"red"} style={styles.progressBar} {...barProps} />

      {/* Steps */}
      <View style={[styles.stepsOverlay, stepStyles.overlay]}>
        {positions.map((_, index) => {
          const isCompleted = index < iconStep;
          const isActive = index === iconStep;

          const StepIcon = isCompleted
            ? stepIcons.completed || DefaultCompletedIcon
            : isActive
            ? stepIcons.active || DefaultActiveIcon
            : stepIcons.default || DefaultStepIcon;

          return (
            <View style={{ position: "relative" }}>
              <TouchableOpacity
                key={index}
                style={[styles.circle, stepStyles.circle, isCompleted && stepStyles.completedCircle, isActive && stepStyles.activeCircle]}
                onPress={() => onStepChange(index)}
                accessibilityLabel={`Step ${index + 1}`}
                accessibilityRole="button"
              >
                {renderStepIcons ? renderStepIcons({ itemIndex: index, currentActiveIndex: iconStep }) : <StepIcon />}
              </TouchableOpacity>
              {/* 
              <View style={{ borderWidth: 1, borderColor: "red", position: "absolute", width: "80%", bottom: -20, left: -10 }}>
                {renderStepLabels && renderStepLabels({ itemIndex: index, currentActiveIndex: iconStep })}
              </View> */}
            </View>
          );
        })}
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
        {positions.map((_, index) => {
          const isCompleted = index < iconStep;
          const isActive = index === iconStep;

          return (
            <View >
              {renderStepLabels && renderStepLabels({ itemIndex: index, currentActiveIndex: iconStep })}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const DefaultCompletedIcon: React.FC = () => <Text style={styles.defaultIconText}>✔</Text>;
const DefaultActiveIcon: React.FC = () => <Text style={styles.defaultIconText}>⬤</Text>;
const DefaultStepIcon: React.FC = () => <Text style={styles.defaultIconText}>○</Text>;

const styles = StyleSheet.create({
  progressContainer: {
    position: "relative",
    width: "100%",
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
    marginBottom: 5,
  },
  defaultIconText: {
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
