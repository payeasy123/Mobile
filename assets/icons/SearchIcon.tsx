import * as React from "react";
import Svg, { G, Rect, Circle, Path, Defs, ClipPath, SvgProps } from "react-native-svg";

const SearchIcon = (props: SvgProps & { size?: number }) => {
  const { size = 16, color = "black", ...otherProps } = props;
  const scale = size / 16;
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...otherProps}>
      <G clipPath="url(#clip0_3819_16992)">
        <Rect width={40} height={40} rx={20} fill="#F1F1F1" />
        <Circle cx={19} cy={19} r={7} stroke="#9C9C9C" strokeWidth={2} />
        <Path
          d="M28 28l-3-3"
          stroke="#9C9C9C"
          transform={`matrix(${scale}, 0, 0, ${scale}, ${(1 - scale) * 16}, ${(1 - scale) * 16})`}
          strokeWidth={2}
          strokeLinecap="round"
        />
      </G>
      <Rect x={1} y={1} width={38} height={38} rx={19} stroke="#EBEBEB" strokeWidth={2} />
      <Defs>
        <ClipPath id="clip0_3819_16992">
          <Rect width={40} height={40} rx={20} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SearchIcon;
