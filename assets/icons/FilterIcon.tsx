import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const FilterIcon = (props: SvgProps & { size?: number }) => {
  const { size = 16, color = "black", ...otherProps } = props;
  const scale = size / 16;
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...otherProps}>
      <Path
        d="M4.5 7h15M7 12h10m-7 5h4"
        transform={`matrix(${scale}, 0, 0, ${scale}, ${(1 - scale) * 16}, ${(1 - scale) * 16})`}
        stroke="#9C9C9C"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default FilterIcon;


