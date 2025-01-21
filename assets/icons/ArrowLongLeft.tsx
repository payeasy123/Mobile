import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const ArrowLongLeft = (props: SvgProps & { size?: number }) => {
  const { size = 16, color = "black", ...otherProps } = props;
  const scale = size / 16;
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...otherProps}>
      <Path
        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        transform={`matrix(${scale}, 0, 0, ${scale}, ${(1 - scale) * 16}, ${(1 - scale) * 16})`}
        stroke="#0B0B0B"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowLongLeft;
