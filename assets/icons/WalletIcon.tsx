import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const WalletIcon = (props: SvgProps & { size?: number }) => {
  const { size = 16, color = "black", ...otherProps } = props;
  const scale = size / 16;
  return (
    <Svg width={size} height={size} viewBox="0 0 24 25" fill="none" {...otherProps}>
      <Path
        d="M13.969 5.5H10.03c-2.784 0-4.176 0-5.041.879-.865.878-.865 2.293-.865 5.121v2c0 2.828 0 4.243.865 5.121.865.879 2.257.879 5.041.879h3.938c2.784 0 4.176 0 5.041-.879.865-.878.865-2.293.865-5.121v-2c0-2.828 0-4.243-.865-5.121-.865-.879-2.257-.879-5.041-.879z"
        transform={`matrix(${scale}, 0, 0, ${scale}, ${(1 - scale) * 16}, ${(1 - scale) * 16})`}
        stroke="#393939"
        strokeWidth={1.75}
      />
      <Path
        d="M7.625 9h2.625"
        transform={`matrix(${scale}, 0, 0, ${scale}, ${(1 - scale) * 16}, ${(1 - scale) * 16})`}
        stroke="#393939"
        strokeWidth={1.75}
        strokeLinecap="round"
      />
      <Path
        d="M18.125 16h-1.75c-.825 0-1.237 0-1.494-.256-.256-.257-.256-.669-.256-1.494s0-1.237.256-1.494c.257-.256.669-.256 1.494-.256h1.75c.825 0 1.237 0 1.494.256.256.257.256.669.256 1.494s0 1.237-.256 1.494c-.257.256-.669.256-1.494.256z"
        transform={`matrix(${scale}, 0, 0, ${scale}, ${(1 - scale) * 16}, ${(1 - scale) * 16})`}
        stroke="#393939"
        strokeWidth={1.75}
      />
    </Svg>
  );
};

export default WalletIcon;
