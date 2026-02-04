import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { THEME } from "../config/theme";

export const Slide16_CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 100 },
  });

  const subtitleSpring = spring({
    frame: frame - 25,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  // Bouncing arrow animation
  const arrowBounce = interpolate(
    frame % 40,
    [0, 20, 40],
    [0, 12, 0],
    { extrapolateRight: "clamp" }
  );

  const titleScale = interpolate(frame, [0, 20, 35], [0.85, 1.03, 1], { extrapolateRight: "clamp" });

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
          transform: `translateY(${interpolate(titleSpring, [0, 1], [60, 0])}px) scale(${titleScale})`,
          opacity: titleSpring,
          fontSize: 78,
          fontWeight: 800,
          color: THEME.colors.textBlack,
          textAlign: "center",
          letterSpacing: "-0.02em",
        }}
      >
        Réserve ton appel gratuit
      </div>

      <div
        style={{
          transform: `translateY(${interpolate(subtitleSpring, [0, 1], [30, 0])}px)`,
          opacity: Math.max(0, subtitleSpring),
          fontSize: 34,
          fontWeight: 500,
          color: THEME.colors.textGray,
          marginTop: 40,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          gap: 15,
        }}
      >
        <span>Ça ne t'engage à rien • Lien en description</span>
        <span
          style={{
            color: THEME.colors.primary,
            transform: `translateY(${arrowBounce}px)`,
            display: "inline-block",
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          ↓
        </span>
      </div>
    </AbsoluteFill>
  );
};
