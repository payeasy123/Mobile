import * as React from "react";
import Svg, { Rect, Path, Circle, SvgProps } from "react-native-svg";

const TransferIcon = (props: SvgProps & { size?: number }) => {
  const { size = 16, color = "black", ...otherProps } = props;
  const scale = size / 16;
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...otherProps}>
      <Rect x={4} y={6.6665} width={16} height={10.6667} rx={2} stroke="#33363F" strokeWidth={1.77778} />
      <Path
        d="M6.667 9.333h1.777M15.556 14.666h1.777"
        transform={`matrix(${scale}, 0, 0, ${scale}, ${(1 - scale) * 16}, ${(1 - scale) * 16})`}
        stroke="#33363F"
        strokeWidth={1.77778}
        strokeLinecap="round"
      />
      <Circle cx={12.0002} cy={11.9997} r={1.77778} stroke="#33363F" strokeWidth={1.77778} />
    </Svg>
  );
};

export default TransferIcon;
