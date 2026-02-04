import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { THEME } from "../config/theme";
import { CinematicBackground } from "../components/CinematicBackground";

export const Slide04_Point1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const numberSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  const textSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  return (
    <AbsoluteFill>
      <CinematicBackground />
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: THEME.fonts.primary,
        }}
      >
        <div
          style={{
            transform: `translateY(${interpolate(numberSpring, [0, 1], [50, 0])}px)`,
            opacity: numberSpring,
            fontSize: 64,
            fontWeight: 700,
            color: THEME.colors.primary,
            marginBottom: 25,
            textShadow: THEME.shadows.textGlow,
          }}
        >
          #1
        </div>

        <div
          style={{
            transform: `translateY(${interpolate(textSpring, [0, 1], [50, 0])}px)`,
            opacity: Math.max(0, textSpring),
            fontSize: 64,
            fontWeight: 800,
            color: THEME.colors.textWhite,
            textAlign: "center",
            letterSpacing: "-0.02em",
            lineHeight: 1.25,
            maxWidth: 1050,
          }}
        >
          Débloque les concepts complexes
          <br />
          en quelques minutes
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
