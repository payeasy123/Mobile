import { CreditCardIcon, ShoppingCartIcon, StoreIcon } from "@/assets/icons";
import QRCodeScanner from "@/src/features/Shopping/components/ui/QRCodeScanner";
import { Button, Container, StepProgressBar } from "@/src/shared/components/ui";
import { useStepProgress } from "@/src/shared/components/ui/ProgressBar/useProgressBar";
import { COLORS } from "@/src/shared/utils/colors";
import { createTextStyle } from "@/src/shared/utils/createTextStyle";
import { cloneElement } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const { totalSteps, currentStep, handleNext } = useStepProgress({
    totalSteps: 3,
  });
  return (
    <View style={{ backgroundColor: COLORS.grey10 }}>
      <Container hasTabBar>
        <View style={{ marginBlock: 16 }}>
          <StepProgressBar
            totalSteps={totalSteps}
            currentStep={currentStep}
            barProps={{
              borderWidth: 0,
              unfilledColor: COLORS.greyBase,
              height: 5,
              color: COLORS.purple50,
            }}
            stepStyles={{
              completedCircle: { backgroundColor: COLORS.purple50 },
              activeCircle: { borderColor: COLORS.purple50, borderWidth: 1 },
            }}
            renderStepIcons={({ itemIndex, currentActiveIndex }) => {
              const icons = [<StoreIcon />, <ShoppingCartIcon />, <CreditCardIcon />];
              const isActive = itemIndex === currentActiveIndex;

              return icons[itemIndex] ? cloneElement(icons[itemIndex], { color: isActive ? COLORS.purple50 : COLORS.grey10, size: 18 }) : null;
            }}
            renderStepLabels={({ itemIndex, currentActiveIndex }) => {
              const labels = ["In Store", "Shop", "Checkout"];
              const TextComponent = ({ isActive, label }: { isActive: boolean; label: string }) => (
                <Text
                  style={{
                    textAlign: "left",
                    ...createTextStyle({
                      color: isActive ? "purple50" : "grey60",
                      size: "_10",
                      weight: isActive ? "bold" : "regular",
                    }),
                  }}
                >
                  {label}
                </Text>
              );

              const isActive = itemIndex === currentActiveIndex || itemIndex < currentActiveIndex;
              return <TextComponent isActive={isActive} label={labels[itemIndex]} />;
            }}
          />

          <Text style={styles.header}>Scan the QR code of the store to get started.</Text>


          <QRCodeScanner />

          <Button onPress={handleNext} title="Testing" style={{ marginTop: 36 }} />
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    ...createTextStyle({
      color: "black40",
      size: "_14",
      weight: "regular",
    }),
  },
});
