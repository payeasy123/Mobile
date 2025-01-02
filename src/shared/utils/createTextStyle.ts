import { moderateScale, TextStyle } from "react-native-size-matters";
import { COLORS } from "./colors";
import { Fonts, FontSize } from "./fonts";

type CommonTextStyleProps = Partial<{
  size: keyof typeof FontSize;
  weight: keyof typeof Fonts;
  color: keyof typeof COLORS;
}>;

export const createTextStyle = (props: CommonTextStyleProps) => {
  const { color = "white", weight = "regular", size = "_12" } = props;

  return {
    color: COLORS[color],
    includeFontPadding: false,
    fontSize: moderateScale(FontSize[size]) ,
    fontFamily: Fonts[weight],
    fontWeight: weight,
  };
};
