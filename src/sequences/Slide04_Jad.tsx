import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { THEME } from "../config/theme";

export const Slide04_Jad: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [0, 20], [30, 0], { extrapolateRight: "clamp" });

  const subtitleOpacity = interpolate(frame, [15, 35], [0, 1], { extrapolateRight: "clamp" });

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
          fontSize: 72,
          fontWeight: 800,
          color: THEME.colors.textBlack,
          textAlign: "center",
          letterSpacing: "-0.02em",
        }}
      >
        Jad, Diplômé{" "}
        <span style={{ color: THEME.colors.primary }}>EPFL</span>
      </div>

      <div
        style={{
          opacity: subtitleOpacity,
          fontSize: 32,
          fontWeight: 500,
          color: THEME.colors.textGray,
          marginTop: 30,
          textAlign: "center",
        }}
      >
        Mathématiques • +10 ans d'expérience
      </div>
    </AbsoluteFill>
  );
};
