import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { THEME } from "../config/theme";

export const Slide01_Etudiant: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const schoolsSpring = spring({
    frame: frame - 20,
    fps,
    config: { damping: 15, stiffness: 80 },
  });

  const schoolsPulse = interpolate(frame, [50, 70, 90], [1, 1.03, 1], { extrapolateRight: "clamp" });

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
          transform: `translateY(${interpolate(titleSpring, [0, 1], [60, 0])}px) scale(${interpolate(titleSpring, [0, 1], [0.9, 1])})`,
          opacity: titleSpring,
          fontSize: 82,
          fontWeight: 800,
          color: THEME.colors.textBlack,
          textAlign: "center",
          letterSpacing: "-0.03em",
        }}
      >
        Tu es étudiant en Suisse ?
      </div>

      <div
        style={{
          transform: `translateY(${interpolate(schoolsSpring, [0, 1], [40, 0])}px) scale(${Math.max(0, schoolsSpring) * schoolsPulse})`,
          opacity: Math.max(0, schoolsSpring),
          fontSize: 44,
          fontWeight: 700,
          color: THEME.colors.primary,
          marginTop: 45,
          textAlign: "center",
          letterSpacing: "0.08em",
        }}
      >
        EPFL • HEC • EHL • HEG • HEIG • HSG • UNIVERSITÉ
      </div>
    </AbsoluteFill>
  );
};
