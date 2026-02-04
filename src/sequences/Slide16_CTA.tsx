import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { THEME } from "../config/theme";

export const Slide16_CTA: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [0, 20], [30, 0], { extrapolateRight: "clamp" });

  const subtitleOpacity = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" });

  const arrowBounce = interpolate(
    frame,
    [40, 55, 70, 85, 100],
    [0, 10, 0, 10, 0],
    { extrapolateRight: "extend" }
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
        Réserve ton appel gratuit
      </div>

      <div
        style={{
          opacity: subtitleOpacity,
          fontSize: 32,
          fontWeight: 500,
          color: THEME.colors.textGray,
          marginTop: 30,
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
            fontSize: 36,
          }}
        >
          ↓
        </span>
      </div>
    </AbsoluteFill>
  );
};
