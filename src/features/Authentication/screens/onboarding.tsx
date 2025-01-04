import { Button, Container } from "@/src/shared/components/ui";
import { useSession } from "@/src/shared/context";
import { createTextStyle } from "@/src/shared/utils/createTextStyle";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/src/shared/utils/screenDimensions";
import { useRef, useState } from "react";
import { Animated, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OnboardingSlider } from "../components";
import { carouselItems } from "../data/onboarding-carousel";
import { OnboardingItems } from "../interfaces";

const OnboardingPage = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setActiveIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const { signIn } = useSession();

  const renderCarouselItem = ({ item }: { item: OnboardingItems }) => (
    <View style={styles.carouselItem}>
      <View style={styles.carouselItemContainer}>
        <Text style={styles.carouselItemHeader}>{item.header}</Text>
        <Text style={styles.carouselItemDescription}>{item.description}</Text>
      </View>
      <Image source={item.image} style={styles.carouselItemImage} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Container style={styles.innerContainer}>
        <View
          style={{
            height: "78%",
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
            style={{ height: "75%" }}
          />
        </View>

        <OnboardingSlider data={carouselItems} scrollX={scrollX} />

        <Button
          variant="gradient"
          title={activeIndex < 2 ? "Skip" : "Next"}
          onPress={() => signIn()}
          gradientProps={{
            start: { x: 0.5, y: 0 },
            end: { x: 0.5, y: 1 },
          }}
        />
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
  innerContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 10,
    paddingTop: 60,
    height: "100%",
  },
  carouselItem: {
    flex: 1,
    position: "relative",
    width: Math.min(500, SCREEN_WIDTH * 0.9),
  },
  carouselItemImage: {
    width: SCREEN_WIDTH - SCREEN_WIDTH * 0.08,
    height: SCREEN_HEIGHT / (380 / 260),
    resizeMode: "contain",
  },
  carouselItemContainer: {
    marginBottom: 30,
  },
  carouselItemHeader: {
    textAlign: "center",
    marginBottom: 8,
    ...createTextStyle({
      color: "black100",
      weight: "bold",
      size: "_24",
    }),
  },
  carouselItemDescription: {
    textAlign: "center",
    ...createTextStyle({
      color: "black100",
      weight: "regular",
      size: "_12",
    }),
  },
});
