import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { THEME } from "../config/theme";
import { CinematicBackground } from "../components/CinematicBackground";

export const Slide01_Etudiant: React.FC = () => {
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
            fontSize: 82,
            fontWeight: 800,
            color: THEME.colors.textWhite,
            textAlign: "center",
            letterSpacing: "-0.03em",
          }}
        >
          Tu es étudiant en Suisse
        </div>

        <div
          style={{
            transform: `translateY(${interpolate(subtitleSpring, [0, 1], [50, 0])}px)`,
            opacity: Math.max(0, subtitleSpring),
            fontSize: 44,
            fontWeight: 700,
            color: THEME.colors.primary,
            marginTop: 45,
            textAlign: "center",
            letterSpacing: "0.08em",
            textShadow: THEME.shadows.textGlow,
          }}
        >
          EPFL • HEC • EHL • HEG • HEIG • HSG • UNIVERSITÉ
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
