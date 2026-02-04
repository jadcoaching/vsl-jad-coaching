import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { THEME } from "../config/theme";

export const Slide08_Jad: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const brandSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const statsSpring = spring({
    frame: frame - 20,
    fps,
    config: { damping: 14, stiffness: 85 },
  });

  const glowPulse = interpolate(frame, [30, 50, 70], [0.2, 0.5, 0.2], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME.colors.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: THEME.fonts.primary,
      }}
    >
      <div
        style={{
          transform: `translateY(${interpolate(brandSpring, [0, 1], [40, 0])}px) scale(${interpolate(brandSpring, [0, 1], [0.9, 1])})`,
          opacity: brandSpring,
          fontSize: 80,
          fontWeight: 800,
          textAlign: "center",
          letterSpacing: "-0.02em",
          textShadow: `0 0 ${40 * glowPulse}px ${THEME.colors.primary}30`,
        }}
      >
        <span style={{ color: THEME.colors.textBlack }}>Jad</span>
        <span style={{ color: THEME.colors.primary }}>Coaching</span>
      </div>

      <div
        style={{
          transform: `translateY(${interpolate(statsSpring, [0, 1], [30, 0])}px)`,
          opacity: Math.max(0, statsSpring),
          fontSize: 34,
          fontWeight: 500,
          color: THEME.colors.textGray,
          marginTop: 40,
          textAlign: "center",
          display: "flex",
          gap: 25,
          alignItems: "center",
        }}
      >
        <span>Diplômé <span style={{ color: THEME.colors.primary, fontWeight: 700 }}>EPFL</span></span>
        <span style={{ color: THEME.colors.primary }}>•</span>
        <span>+10 ans d'expérience</span>
        <span style={{ color: THEME.colors.primary }}>•</span>
        <span>+1M vues YouTube</span>
      </div>
    </AbsoluteFill>
  );
};
