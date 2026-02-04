import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { THEME } from "../config/theme";
import { CinematicBackground } from "../components/CinematicBackground";

export const Slide09_Stats: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  const schoolsSpring = spring({
    frame: frame - 30,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  // Counter animation for 1254
  const countTo = 1254;
  const countProgress = interpolate(frame, [10, 50], [0, 1], { extrapolateRight: "clamp" });
  const currentCount = Math.round(countTo * countProgress);

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
          transform: `translateY(${interpolate(titleSpring, [0, 1], [50, 0])}px)`,
          opacity: titleSpring,
          fontSize: 68,
          fontWeight: 800,
          color: THEME.colors.textWhite,
          textAlign: "center",
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
          textShadow: THEME.shadows.text,
          zIndex: 1,
        }}
      >
        Plus de {currentCount} étudiants
        <br />
        accompagnés à la réussite
      </div>

      <div
        style={{
          transform: `translateY(${interpolate(schoolsSpring, [0, 1], [50, 0])}px)`,
          opacity: Math.max(0, schoolsSpring),
          marginTop: 45,
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: 38,
            fontWeight: 700,
            color: THEME.colors.primary,
            marginBottom: 10,
            textShadow: THEME.shadows.textGlow,
          }}
        >
          Universités & Hautes Écoles suisses
        </div>
        <div
          style={{
            fontSize: 34,
            fontWeight: 600,
            color: THEME.colors.primary,
            textShadow: THEME.shadows.textGlow,
          }}
        >
          EPFL, HEC, EHL, HEG, HEIG, UNIL, UNIGE, etc.
        </div>
      </div>
    </AbsoluteFill>
  );
};
