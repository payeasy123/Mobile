import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const SCREEN_PIXEL_RATIO = PixelRatio.getFontScale();

export { SCREEN_HEIGHT, SCREEN_PIXEL_RATIO, SCREEN_WIDTH };
