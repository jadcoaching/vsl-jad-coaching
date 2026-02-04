import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { THEME } from "../config/theme";
import { CinematicBackground } from "../components/CinematicBackground";

export const Slide16_CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
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
      <CinematicBackground />
      <div
        style={{
          transform: `translateY(${interpolate(titleSpring, [0, 1], [50, 0])}px)`,
          opacity: titleSpring,
          fontSize: 78,
          fontWeight: 800,
          color: THEME.colors.textWhite,
          textAlign: "center",
          letterSpacing: "-0.02em",
          textShadow: THEME.shadows.text,
          zIndex: 1,
        }}
      >
        Réserve ton appel gratuit
      </div>

      <div
        style={{
          transform: `translateY(${interpolate(subtitleSpring, [0, 1], [50, 0])}px)`,
          opacity: Math.max(0, subtitleSpring),
          fontSize: 34,
          fontWeight: 500,
          color: THEME.colors.textGray,
          marginTop: 40,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          gap: 15,
          zIndex: 1,
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
            textShadow: THEME.shadows.textGlow,
          }}
        >
          ↓
        </span>
      </div>
    </AbsoluteFill>
  );
};
