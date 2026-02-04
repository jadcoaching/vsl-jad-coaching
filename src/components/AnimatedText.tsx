import { interpolate, useCurrentFrame } from "remotion";
import { THEME } from "../config/theme";

interface AnimatedTextProps {
  text: string;
  delay?: number;
  duration?: number;
  fontSize?: number;
  color?: string;
  glow?: boolean;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delay = 0,
  duration = 30,
  fontSize = THEME.fontSizes.large,
  color = THEME.colors.textWhite,
  glow = false,
  style = {},
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(
    frame,
    [delay, delay + duration],
    [30, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        fontSize,
        color,
        fontWeight: 700,
        textShadow: glow ? THEME.shadows.textGlow : "none",
        letterSpacing: "-0.02em",
        ...style,
      }}
    >
      {text}
    </div>
  );
};
