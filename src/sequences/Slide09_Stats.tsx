import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { THEME } from "../config/theme";

export const Slide09_Stats: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const checkSpring = spring({
    frame: frame - 25,
    fps,
    config: { damping: 8, stiffness: 150 },
  });

  const schoolsSpring = spring({
    frame: frame - 40,
    fps,
    config: { damping: 14, stiffness: 80 },
  });

  // Counter animation for 1254
  const countTo = 1254;
  const countProgress = interpolate(frame, [10, 50], [0, 1], { extrapolateRight: "clamp" });
  const currentCount = Math.round(countTo * countProgress);

  const checkScale = interpolate(checkSpring, [0, 1], [0, 1.2]);
  const checkScaleFinal = interpolate(frame, [35, 45], [1.2, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

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
          transform: `translateY(${interpolate(titleSpring, [0, 1], [50, 0])}px)`,
          opacity: titleSpring,
          fontSize: 68,
          fontWeight: 800,
          color: THEME.colors.textBlack,
          textAlign: "center",
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
        }}
      >
        <span>Plus de {currentCount} étudiants</span>
        <br />
        <span>accompagnés à la réussite</span>
        <span
          style={{
            color: THEME.colors.primary,
            fontSize: 72,
            transform: `scale(${checkSpring > 0 ? (frame < 45 ? checkScale : checkScaleFinal) : 0})`,
            display: "inline-block",
          }}
        >
          ✓
        </span>
      </div>

      <div
        style={{
          transform: `translateY(${interpolate(schoolsSpring, [0, 1], [30, 0])}px)`,
          opacity: Math.max(0, schoolsSpring),
          marginTop: 45,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: THEME.colors.textGray,
            marginBottom: 10,
          }}
        >
          Universités & Hautes Écoles suisses
        </div>
        <div
          style={{
            fontSize: 26,
            fontWeight: 500,
            color: THEME.colors.textGray,
          }}
        >
          EPFL, HEC, EHL, HEG, HEIG, UNIL, UNIGE, etc.
        </div>
      </div>
    </AbsoluteFill>
  );
};
