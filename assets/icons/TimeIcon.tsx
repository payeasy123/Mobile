import Svg, { Circle, Path, SvgProps } from "react-native-svg";

const TimeIcon = (props: SvgProps & { size: number }) => {
  const { size = 32, color = "black", ...otherProps } = props;

  const scale = size / 32;

  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none" {...otherProps}>
      <Circle cx={16} cy={16} r={11.667} stroke={props.color} strokeWidth={2.6} />

      <Path
        stroke={props.color}
        strokeWidth={2.6}
        transform={`matrix(${scale}, 0, 0, ${scale}, ${(1 - scale) * 16}, ${(1 - scale) * 16})`}
        d="M22 16h-5.75a.25.25 0 0 1-.25-.25v-4.417"
      />
    </Svg>
  );
};
export default TimeIcon;
