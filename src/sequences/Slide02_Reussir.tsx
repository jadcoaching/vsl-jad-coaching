import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { THEME } from "../config/theme";

export const Slide02_Reussir: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const subtitleSpring = spring({
    frame: frame - 25,
    fps,
    config: { damping: 15, stiffness: 80 },
  });

  const glowPulse = interpolate(frame, [40, 60, 80], [0.3, 0.6, 0.3], { extrapolateRight: "clamp" });

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
          fontSize: 76,
          fontWeight: 800,
          color: THEME.colors.textBlack,
          textAlign: "center",
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
          maxWidth: 1100,
        }}
      >
        Je vais te faire réussir ton
        <br />
        prochain examen.
      </div>

      <div
        style={{
          transform: `translateY(${interpolate(subtitleSpring, [0, 1], [30, 0])}px) scale(${interpolate(subtitleSpring, [0, 1], [0.95, 1])})`,
          opacity: Math.max(0, subtitleSpring),
          fontSize: 44,
          fontWeight: 700,
          color: THEME.colors.primary,
          marginTop: 50,
          textAlign: "center",
          textShadow: `0 0 ${30 * glowPulse}px ${THEME.colors.primary}40`,
        }}
      >
        Mathématiques et Statistiques.
      </div>
    </AbsoluteFill>
  );
};
