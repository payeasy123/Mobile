import Svg, { Path, SvgProps } from "react-native-svg";

const StoreIcon = (props: SvgProps & { size?: number }) => {
  const { size = 16, color = "black", ...otherProps } = props;

  const scale = size / 16;
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...otherProps}>
      <Path
        fill={props.color}
        transform={`matrix(${scale}, 0, 0, ${scale}, ${(1 - scale) * 16}, ${(1 - scale) * 16})`}
        d="M3.482 1.5c-.331 0-.65.132-.883.367l-.867.865A2.5 2.5 0 0 0 5 6.5a2.495 2.495 0 0 0 3 0 2.495 2.495 0 0 0 3 0 2.5 2.5 0 0 0 3.268-3.768l-.867-.866a1.25 1.25 0 0 0-.883-.366zM2 13.5V7.662a3.51 3.51 0 0 0 3 0 3.5 3.5 0 0 0 1.5.336A3.5 3.5 0 0 0 8 7.662a3.491 3.491 0 0 0 3 0c.947.45 2.053.45 3 0V13.5h.5a.5.5 0 0 1 0 1h-13a.5.5 0 1 1 0-1zm2-4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zM9.5 9a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V9.5a.5.5 0 0 0-.5-.5z"
      />
    </Svg>
  );
};
export default StoreIcon;
