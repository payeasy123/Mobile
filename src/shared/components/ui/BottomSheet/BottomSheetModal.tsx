import { BottomSheetModal, BottomSheetModalProps, BottomSheetView } from "@gorhom/bottom-sheet";
import React, { forwardRef, ReactNode, useMemo } from "react";
import { StyleSheet } from "react-native";

type Props = {
  children: ReactNode;
} & BottomSheetModalProps;

type Ref = BottomSheetModal;

export const CustomBottomSheetModal = forwardRef<Ref, Props>((props, ref) => {
  const { children, ...rest } = props;

  const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

  return (
    <BottomSheetModal
      ref={ref}
      index={2}
      enablePanDownToClose
      snapPoints={snapPoints}
      backgroundStyle={styles.sheetBackgroundStyle}
      handleIndicatorStyle={styles.handleIndicatorStyle}
      {...rest}
    >
      <BottomSheetView style={styles.contentContainer}>{props.children}</BottomSheetView>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },

  sheetBackgroundStyle: {
    backgroundColor: "#F6F6F6",
    borderRadius: 32,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.25,
    shadowRadius: 32,
    elevation: 5,
  },

  handleIndicatorStyle: {
    backgroundColor: "#BDBDBD",
  },
});
