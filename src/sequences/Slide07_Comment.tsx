import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { THEME } from "../config/theme";

export const Slide07_Comment: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textSpring = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 80 },
  });

  const scale = interpolate(frame, [0, 20, 35], [0.85, 1.02, 1], { extrapolateRight: "clamp" });

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
          transform: `translateY(${interpolate(textSpring, [0, 1], [50, 0])}px) scale(${scale})`,
          opacity: textSpring,
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
