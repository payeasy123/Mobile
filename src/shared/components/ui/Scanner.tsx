import { BarcodeScanningResult, Camera, CameraView } from "expo-camera";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

interface CodeScannedPayload {
  data: string;
  type: CodeTypes;
}

type CodeTypes =
  | "aztec"
  | "codabar"
  | "code128"
  | "code39"
  | "code93"
  | "datamatrix"
  | "ean13"
  | "ean8"
  | "interleaved2of5"
  | "pdf417"
  | "qr"
  | "upc_a"
  | "upc_e";

interface ScannerProps {
  isEnabled: boolean;
  onCodeScanned?: (payload: CodeScannedPayload) => void;
}

const Scanner = (props: ScannerProps) => {
  let isProcessing = false;

  const [scanned, setScanned] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);

  const { isEnabled, onCodeScanned } = props;

  useEffect(() => {
    const getCameraPermissions = async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
      } catch (error) {
        console.error("Camera permission request failed:", error);
        setHasPermission(false);
      }
    };

    getCameraPermissions();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleBarCodeScanned = ({ data, type }: BarcodeScanningResult) => {
    // Prevent multiple triggers
    if (scanned || isProcessing) return;

    isProcessing = true;
    setScanned(true);

    onCodeScanned && onCodeScanned({ data, type: type as CodeTypes });

    setTimeout(() => {
      isProcessing = false;
    }, 1000);
  };

  if (!isEnabled) {
    return (
      <View style={styles.disabledContainer}>
        <Text style={styles.disabledText}>Scanner is disabled</Text>
      </View>
    );
  }

  return (
    <View style={styles.cameraContainer}>
      <CameraView onBarcodeScanned={scanned ? undefined : handleBarCodeScanned} style={styles.camera} />
    </View>
  );
};
export default Scanner;

const styles = StyleSheet.create({
  cameraContainer: {
    width: "100%",
    aspectRatio: 3 / 4,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
  },
  disabledContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  disabledText: {
    fontSize: 16,
    color: "#888",
  },
});
