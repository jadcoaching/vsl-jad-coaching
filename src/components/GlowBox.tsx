import { interpolate, useCurrentFrame } from "remotion";
import { THEME } from "../config/theme";

interface GlowBoxProps {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}

export const GlowBox: React.FC<GlowBoxProps> = ({
  children,
  delay = 0,
  style = {},
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [delay, delay + 20], [0.95, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const glowIntensity = interpolate(
    frame,
    [delay + 20, delay + 40, delay + 60],
    [0.3, 0.7, 0.5],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        background: `linear-gradient(135deg, ${THEME.colors.gray} 0%, ${THEME.colors.grayDark} 100%)`,
        border: `1px solid ${THEME.colors.primary}40`,
        borderRadius: 20,
        padding: "40px 60px",
        boxShadow: `0 0 ${40 * glowIntensity}px rgba(0, 102, 255, ${glowIntensity})`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
