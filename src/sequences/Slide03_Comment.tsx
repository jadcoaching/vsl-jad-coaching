import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { THEME } from "../config/theme";

export const Slide03_Comment: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: "clamp" });
  const translateY = interpolate(frame, [0, 25], [40, 0], { extrapolateRight: "clamp" });

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
          opacity,
          transform: `translateY(${translateY}px)`,
          fontSize: 72,
          fontWeight: 800,
          fontStyle: "italic",
          color: THEME.colors.textBlack,
          textAlign: "center",
          letterSpacing: "-0.02em",
          lineHeight: 1.3,
          maxWidth: 1100,
        }}
      >
        Comment je peux te promettre
        <br />
        que tu vas réussir ?
      </div>
    </AbsoluteFill>
  );
};
