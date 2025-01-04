import Svg, { Circle, Path, SvgProps } from "react-native-svg";

const UserIcon = (props: SvgProps & { size: number }) => {
  const { size = 32, color = "black", ...otherProps } = props;

  const scale = size / 32;

  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none" {...otherProps}>
      <Path
        stroke={props.color}
        strokeWidth={2.6}
        transform={`matrix(${scale}, 0, 0, ${scale}, ${(1 - scale) * 16}, ${(1 - scale) * 16})`}
        d="M26.304 27.263c-.608-1.702-1.947-3.205-3.81-4.277s-4.145-1.653-6.493-1.653-4.63.581-6.494 1.653-3.202 2.575-3.81 4.276"
      />

      <Circle cx={15.999} cy={10.666} r={5.333} stroke={props.color} strokeWidth={2.6} />
    </Svg>
  );
};
export default UserIcon;
