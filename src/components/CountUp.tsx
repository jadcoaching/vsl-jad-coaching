import { interpolate, useCurrentFrame } from "remotion";
import { THEME } from "../config/theme";

interface CountUpProps {
  value: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
  duration?: number;
  fontSize?: number;
  color?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  value,
  suffix = "",
  prefix = "",
  delay = 0,
  duration = 60,
  fontSize = THEME.fontSizes.xxlarge,
  color = THEME.colors.primary,
}) => {
  const frame = useCurrentFrame();

  const currentValue = Math.round(
    interpolate(frame, [delay, delay + duration], [0, value], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [delay, delay + 15], [0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        fontSize,
        fontWeight: 800,
        color,
        textShadow: THEME.shadows.textGlow,
        fontFamily: THEME.fonts.mono,
      }}
    >
      {prefix}
      {currentValue.toLocaleString("fr-CH")}
      {suffix}
    </div>
  );
};
