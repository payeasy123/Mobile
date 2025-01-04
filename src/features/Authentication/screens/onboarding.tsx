import { Container } from "@/src/shared/components/ui";
import { createTextStyle } from "@/src/shared/utils/createTextStyle";
import { useRef, useState } from "react";
import { Animated, Button, Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OnboardingSlider } from "../components";
import { carouselItems } from "../data/onboarding-carousel";
import { SCREEN_WIDTH } from "@/src/shared/utils/screenDimensions";
import { SCREEN_HEIGHT } from "@gorhom/bottom-sheet";


const OnboardingPage = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setActiveIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const renderCarouselItem = ({ item }: any) => (
    <View style={{ flex: 1, position: "relative" }}>
      <Text
        style={{
          marginBottom: 40,
          textAlign: "center",
          width: SCREEN_WIDTH - (SCREEN_WIDTH * 0.05) / 0.45,
          ...createTextStyle({
            color: "black100",
            weight: "bold",
            size: "_24",
          }),
        }}
      >
        {item.header}
      </Text>

      <Image source={item.image} style={styles.carousel_img} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Container
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: 10,
          paddingTop: 30,
          height: "95%",
        }}
      >
        <View
          style={{
            height: "85%",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <FlatList
            data={carouselItems}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id.toString()}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
              useNativeDriver: false,
            })}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            scrollEventThrottle={32}
            ref={slideRef}
            renderItem={renderCarouselItem}
          />

          <OnboardingSlider data={carouselItems} scrollX={scrollX} />
        </View>

        {/* <GradientBackground
          style={{
            padding: 15,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 12,
            borderRadius: 100,
          }}
        >
          <Button
            title={activeIndex < 2 ? "Skip" : "Next"}
            onPress={() => navigation.navigate(LOGIN)}
            textStyle={{
              color: colors.whiteHex,
              fontSize: fontSize.fontSize16,
              fontFamily: "lato_regular",
              textAlign: "center",
            }}
          />
        </GradientBackground> */}
      </Container>
    </SafeAreaView>
  );
};

export default OnboardingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  carousel_img: {
    width: SCREEN_WIDTH - SCREEN_WIDTH * 0.08,
    height: SCREEN_HEIGHT / (380 / 260),
    resizeMode: "contain",
  },
});
