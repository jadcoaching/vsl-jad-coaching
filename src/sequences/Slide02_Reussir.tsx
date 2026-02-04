import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { THEME } from "../config/theme";
import { CinematicBackground } from "../components/CinematicBackground";

export const Slide02_Reussir: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  const subtitleSpring = spring({
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
            transform: `translateY(${interpolate(titleSpring, [0, 1], [50, 0])}px)`,
            opacity: titleSpring,
            fontSize: 76,
            fontWeight: 800,
            color: THEME.colors.textWhite,
            textAlign: "center",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            maxWidth: 1100,
          }}
        >
          Je vais te faire réussir ton
          <br />
          prochain examen
        </div>

        <div
          style={{
            transform: `translateY(${interpolate(subtitleSpring, [0, 1], [50, 0])}px)`,
            opacity: Math.max(0, subtitleSpring),
            fontSize: 44,
            fontWeight: 700,
            color: THEME.colors.primary,
            marginTop: 50,
            textAlign: "center",
            textShadow: THEME.shadows.textGlow,
          }}
        >
          Mathématiques et Statistiques
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
