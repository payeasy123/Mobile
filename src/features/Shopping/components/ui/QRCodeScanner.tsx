// import { BarCodeScannedCallback, BarCodeScanner } from "expo-barcode-scanner";
// import { useEffect, useState } from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// export default function QRCodeScanner() {
//   const [hasPermission, setHasPermission] = useState(false);
//   const [scanned, setScanned] = useState(false);

//   useEffect(() => {
//     (async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === "granted");
//     })();
//   }, []);

//   const handleBarCodeScanned: BarCodeScannedCallback = ({ type, data }) => {
//     setScanned(true);
//     alert(`Bar code with type ${type} and data ${data} has been scanned!`);
//   };

//   const renderCamera = () => {
//     return (
//       <View style={styles.cameraContainer}>
//         <BarCodeScanner
//           onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//           style={styles.camera}
//         />
//       </View>
//     );
//   };

//   if (hasPermission === null) {
//     return <View />;
//   }

//   if (hasPermission === false) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>Camera permission not granted</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to the Barcode Scanner App!</Text>
//       <Text style={styles.paragraph}>Scan a barcode to start your job.</Text>
//       {renderCamera()}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => setScanned(false)}
//         disabled={scanned}
//       >
//         <Text style={styles.buttonText}>Scan QR to Start your job</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {},
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   paragraph: {
//     fontSize: 16,
//     marginBottom: 40,
//   },
//   cameraContainer: {
//     width: "80%",
//     aspectRatio: 1,
//     overflow: "hidden",
//     borderRadius: 10,
//     marginBottom: 40,
//   },
//   camera: {
//     flex: 1,
//   },
//   button: {
//     backgroundColor: "blue",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

import { Camera, CameraType, BarcodeSettings, CameraView } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function QRCodeScanner() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.getCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }: { data: any }) => {
    setScanned(true);
    alert(`Bar code with data ${data} has been scanned!`);
    console.log(data);
  };

  const renderCamera = () => (
    <View style={styles.cameraContainer}>
      <CameraView style={styles.camera} onBarcodeScanned={({ data }: { data: any }) => (scanned ? undefined : handleBarCodeScanned(data))} />
    </View>
  );

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting camera permissions...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera permission not granted</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the QR Code Scanner!</Text>
      <Text style={styles.paragraph}>Scan a QR code to start your job.</Text>
      {renderCamera()}
      <TouchableOpacity style={styles.button} onPress={() => setScanned(false)} disabled={!scanned}>
        <Text style={styles.buttonText}>Scan QR to Start your job</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 40,
  },
  cameraContainer: {
    width: "80%",
    aspectRatio: 1,
    overflow: "hidden",
    borderRadius: 10,
    marginBottom: 40,
  },
  camera: {
    flex: 1,
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
