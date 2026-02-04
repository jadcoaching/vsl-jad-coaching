import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { THEME } from "../config/theme";
import { CinematicBackground } from "../components/CinematicBackground";

export const Slide08_Jad: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const brandSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  const statsSpring = spring({
    frame: frame - 20,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

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
      <CinematicBackground />
      <div
        style={{
          transform: `translateY(${interpolate(brandSpring, [0, 1], [50, 0])}px)`,
          opacity: brandSpring,
          fontSize: 80,
          fontWeight: 800,
          textAlign: "center",
          letterSpacing: "-0.02em",
          zIndex: 1,
        }}
      >
        <span style={{ color: THEME.colors.textWhite, textShadow: THEME.shadows.text }}>Jad</span>
        <span style={{ color: THEME.colors.primary, textShadow: THEME.shadows.textGlow }}>Coaching</span>
      </div>

      <div
        style={{
          transform: `translateY(${interpolate(statsSpring, [0, 1], [50, 0])}px)`,
          opacity: Math.max(0, statsSpring),
          fontSize: 34,
          fontWeight: 500,
          color: THEME.colors.textGray,
          marginTop: 40,
          textAlign: "center",
          display: "flex",
          gap: 25,
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <span>Diplômé <span style={{ color: THEME.colors.primary, fontWeight: 700, textShadow: THEME.shadows.textGlow }}>EPFL</span></span>
        <span style={{ color: THEME.colors.primary }}>•</span>
        <span>+10 ans d'expérience</span>
        <span style={{ color: THEME.colors.primary }}>•</span>
        <span>+1M vues YouTube</span>
      </div>
    </AbsoluteFill>
  );
};
