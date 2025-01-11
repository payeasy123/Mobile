import Svg, { Path, SvgProps } from "react-native-svg";

const CreditCardIcon = (props: SvgProps & { size?: number }) => {
  const { size = 16, color = "black", ...otherProps } = props;

  const scale = size / 16;

  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...otherProps}>
      <Path
        fill={props.color}
        transform={`matrix(${scale}, 0, 0, ${scale}, ${(1 - scale) * 16}, ${(1 - scale) * 16})`}
        d="M3 2.5a2 2 0 0 0-2 2V5h14v-.5a2 2 0 0 0-2-2zM15 6.5H1v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zM3 9a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 3 9m.5 1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"
      />
    </Svg>
  );
};
export default CreditCardIcon;
