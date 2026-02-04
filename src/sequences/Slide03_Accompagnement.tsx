import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { THEME } from "../config/theme";

export const Slide03_Accompagnement: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const brandSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  const subtitleSpring = spring({
    frame: frame - 35,
    fps,
    config: { damping: 15, stiffness: 80 },
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
      <div
        style={{
          transform: `translateY(${interpolate(titleSpring, [0, 1], [40, 0])}px)`,
          opacity: titleSpring,
          fontSize: 72,
          fontWeight: 800,
          color: THEME.colors.textBlack,
          textAlign: "center",
          letterSpacing: "-0.02em",
        }}
      >
        Accompagnement
      </div>

      <div
        style={{
          transform: `translateY(${interpolate(brandSpring, [0, 1], [30, 0])}px) scale(${interpolate(brandSpring, [0, 1], [0.9, 1])})`,
          opacity: Math.max(0, brandSpring),
          fontSize: 72,
          fontWeight: 800,
          textAlign: "center",
          letterSpacing: "-0.02em",
          marginTop: 5,
        }}
      >
        <span style={{ color: THEME.colors.textBlack }}>Jad</span>
        <span style={{ color: THEME.colors.primary }}>Coaching</span>
      </div>

      <div
        style={{
          transform: `translateY(${interpolate(subtitleSpring, [0, 1], [20, 0])}px)`,
          opacity: Math.max(0, subtitleSpring),
          fontSize: 36,
          fontWeight: 500,
          color: THEME.colors.textGray,
          marginTop: 45,
          textAlign: "center",
        }}
      >
        Comment ça fonctionne ?
      </div>
    </AbsoluteFill>
  );
};
