import Svg, { Path, SvgProps } from "react-native-svg";

const ScanIcon = (props: SvgProps & { size: number }) => {
  const { size = 32, color = "black", ...otherProps } = props;

  const scale = size / 32;

  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none" {...otherProps}>
      <Path
        stroke={props.color}
        transform={`matrix(${scale}, 0, 0, ${scale}, ${(1 - scale) * 16}, ${(1 - scale) * 16})`}
        strokeWidth={2.6}
        d="M26.667 13.334V12c0-1.24 0-1.86-.137-2.368a4 4 0 0 0-2.828-2.829c-.509-.136-1.129-.136-2.369-.136m5.334 12V20c0 1.24 0 1.86-.137 2.369a4 4 0 0 1-2.828 2.828c-.509.137-1.129.137-2.369.137m-8 0H12c-2.492 0-3.739 0-4.667-.536a4 4 0 0 1-1.464-1.464c-.536-.928-.536-2.175-.536-4.667m8-12H12c-2.492 0-3.739 0-4.667.536A4 4 0 0 0 5.87 8.667c-.536.928-.536 2.174-.536 4.667M13.333 28V4"
      />
    </Svg>
  );
};

export default ScanIcon;
