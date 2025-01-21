import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg";

const CopyIcon = (props: SvgProps & { size?: number }) => {
  const { size = 16, color = "black", ...otherProps } = props;
  const scale = size / 16;
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...otherProps}>
      <G clipPath="url(#clip0_4667_4422)">
        <Path
          d="M10.5 11.5v2.25a.75.75 0 01-.75.75h-6.5a.75.75 0 01-.75-.75v-8.5a.75.75 0 01.75-.75H4.5c.335 0 .67.027 1 .083m5 6.917h2.25a.75.75 0 00.75-.75V7.5a6.002 6.002 0 00-6-6H6.25a.75.75 0 00-.75.75v2.333m5 6.917H6.25a.75.75 0 01-.75-.75V4.583M13.5 9V7.75a2.25 2.25 0 00-2.25-2.25h-1a.75.75 0 01-.75-.75v-1A2.25 2.25 0 007.25 1.5H6.5"
          transform={`matrix(${scale}, 0, 0, ${scale}, ${(1 - scale) * 16}, ${(1 - scale) * 16})`}
          stroke="#F7F7F7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4667_4422">
          <Path fill="#fff" d="M0 0H16V16H0z" transform={`matrix(${scale}, 0, 0, ${scale}, ${(1 - scale) * 16}, ${(1 - scale) * 16})`} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CopyIcon;
