import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { THEME } from "../config/theme";

export const Slide04_Point1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const numberSpring = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  const textSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  const numberScale = interpolate(frame, [0, 15, 25], [0.5, 1.1, 1], { extrapolateRight: "clamp" });

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
          transform: `scale(${numberSpring * numberScale})`,
          opacity: numberSpring,
          fontSize: 64,
          fontWeight: 700,
          color: THEME.colors.primary,
          marginBottom: 25,
        }}
      >
        #1
      </div>

      <div
        style={{
          transform: `translateY(${interpolate(textSpring, [0, 1], [40, 0])}px)`,
          opacity: Math.max(0, textSpring),
          fontSize: 64,
          fontWeight: 800,
          color: THEME.colors.textBlack,
          textAlign: "center",
          letterSpacing: "-0.02em",
          lineHeight: 1.25,
          maxWidth: 1050,
        }}
      >
        Débloque les concepts complexes
        <br />
        en quelques minutes.
      </div>
    </AbsoluteFill>
  );
};
