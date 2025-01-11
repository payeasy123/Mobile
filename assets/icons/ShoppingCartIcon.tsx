import Svg, { Path, SvgProps } from "react-native-svg";

const ShoppingCartIcon = (props: SvgProps & { size?: number }) => {
  const { size = 16, color = "black", ...otherProps } = props;

  const scale = size / 16;

  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...otherProps}>
      <Path
        fill={props.color}
        transform={`matrix(${scale}, 0, 0, ${scale}, ${(1 - scale) * 16}, ${(1 - scale) * 16})`}
        d="M1.5 1.5a.5.5 0 0 0 0 1h.924a.25.25 0 0 1 .241.186L4.371 9.08A2.5 2.5 0 0 0 2.5 11.5a.5.5 0 0 0 .5.5h10.5a.5.5 0 0 0 0-1H3.585A1.5 1.5 0 0 1 5 10h7.479a.5.5 0 0 0 .45-.281 40 40 0 0 0 1.973-4.818.5.5 0 0 0-.35-.644 40.6 40.6 0 0 0-10.766-1.25l-.154-.58A1.25 1.25 0 0 0 2.424 1.5zm1 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0m8.5 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
      />
    </Svg>
  );
};
export default ShoppingCartIcon;
