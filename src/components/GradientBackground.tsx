import { interpolate, useCurrentFrame, AbsoluteFill } from "remotion";
import { THEME } from "../config/theme";

interface GradientBackgroundProps {
  variant?: "default" | "accent" | "dark";
  animated?: boolean;
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  variant = "default",
  animated = true,
}) => {
  const frame = useCurrentFrame();

  const gradientPosition = animated
    ? interpolate(frame, [0, 300], [0, 100], {
        extrapolateRight: "extend",
      })
    : 50;

  const gradients = {
    default: `radial-gradient(ellipse at ${50 + Math.sin(gradientPosition * 0.02) * 20}% ${50 + Math.cos(gradientPosition * 0.02) * 20}%, ${THEME.colors.primary}15 0%, transparent 50%)`,
    accent: `radial-gradient(ellipse at ${50 + Math.sin(gradientPosition * 0.02) * 20}% ${50 + Math.cos(gradientPosition * 0.02) * 20}%, ${THEME.colors.accent}15 0%, transparent 50%)`,
    dark: `radial-gradient(ellipse at 50% 50%, ${THEME.colors.gray} 0%, ${THEME.colors.background} 70%)`,
  };

  return (
    <AbsoluteFill
      style={{
        background: THEME.colors.background,
      }}
    >
      <AbsoluteFill
        style={{
          background: gradients[variant],
        }}
      />
      {/* Grille subtile */}
      <AbsoluteFill
        style={{
          backgroundImage: `
            linear-gradient(${THEME.colors.grayLight}10 1px, transparent 1px),
            linear-gradient(90deg, ${THEME.colors.grayLight}10 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          opacity: 0.5,
        }}
      />
    </AbsoluteFill>
  );
};
