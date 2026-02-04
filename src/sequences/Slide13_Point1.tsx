import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { THEME } from "../config/theme";

export const Slide13_Point1: React.FC = () => {
  const frame = useCurrentFrame();

  const numberOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const numberScale = interpolate(frame, [0, 15], [0.5, 1], { extrapolateRight: "clamp" });

  const textOpacity = interpolate(frame, [10, 30], [0, 1], { extrapolateRight: "clamp" });
  const textY = interpolate(frame, [10, 30], [20, 0], { extrapolateRight: "clamp" });

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
          opacity: numberOpacity,
          transform: `scale(${numberScale})`,
          fontSize: 56,
          fontWeight: 700,
          color: THEME.colors.primary,
          marginBottom: 20,
        }}
      >
        #1
      </div>

      <div
        style={{
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
          fontSize: 60,
          fontWeight: 800,
          color: THEME.colors.textBlack,
          textAlign: "center",
          letterSpacing: "-0.02em",
          lineHeight: 1.3,
          maxWidth: 1000,
        }}
      >
        Débloque les concepts complexes
        <br />
        en quelques minutes.
      </div>
    </AbsoluteFill>
  );
};
