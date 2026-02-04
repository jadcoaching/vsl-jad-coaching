import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { THEME } from "../config/theme";

export const Slide12_Accompagnement: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [0, 20], [30, 0], { extrapolateRight: "clamp" });

  const subtitleOpacity = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" });

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
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: THEME.colors.textBlack,
            letterSpacing: "-0.02em",
          }}
        >
          Accompagnement
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: THEME.colors.textBlack }}>Jad</span>
          <span style={{ color: THEME.colors.primary }}>Coaching</span>
        </div>
      </div>

      <div
        style={{
          opacity: subtitleOpacity,
          fontSize: 32,
          fontWeight: 500,
          color: THEME.colors.textGray,
          marginTop: 40,
          textAlign: "center",
        }}
      >
        Comment ça fonctionne ?
      </div>
    </AbsoluteFill>
  );
};
