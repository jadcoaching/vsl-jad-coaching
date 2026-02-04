import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { THEME } from "../config/theme";
import { CinematicBackground } from "../components/CinematicBackground";

export const Slide07_Comment: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textSpring = spring({
    frame,
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
          transform: `translateY(${interpolate(textSpring, [0, 1], [50, 0])}px)`,
          opacity: textSpring,
          fontSize: 72,
          fontWeight: 800,
          color: THEME.colors.textWhite,
          textAlign: "center",
          letterSpacing: "-0.02em",
          lineHeight: 1.3,
          maxWidth: 1100,
          textShadow: THEME.shadows.text,
          zIndex: 1,
        }}
      >
        Comment je peux te promettre
        <br />
        que tu vas réussir ?
      </div>
    </AbsoluteFill>
  );
};
