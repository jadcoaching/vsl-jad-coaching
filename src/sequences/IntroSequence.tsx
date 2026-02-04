import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Logo } from "../components/Logo";
import { GradientBackground } from "../components/GradientBackground";
import { THEME } from "../config/theme";

export const IntroSequence: React.FC = () => {
  const frame = useCurrentFrame();

  const taglineOpacity = interpolate(frame, [60, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const taglineY = interpolate(frame, [60, 90], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <GradientBackground variant="default" />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 60,
        }}
      >
        <Logo delay={10} size={150} />

        <div
          style={{
            opacity: taglineOpacity,
            transform: `translateY(${taglineY}px)`,
            fontSize: THEME.fontSizes.medium,
            color: THEME.colors.textGray,
            letterSpacing: "0.05em",
            textAlign: "center",
          }}
        >
          Maths • Stats • Finance
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
