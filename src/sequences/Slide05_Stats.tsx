import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { THEME } from "../config/theme";

export const Slide05_Stats: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [0, 20], [30, 0], { extrapolateRight: "clamp" });

  const checkOpacity = interpolate(frame, [25, 40], [0, 1], { extrapolateRight: "clamp" });
  const checkScale = interpolate(frame, [25, 40], [0.5, 1], { extrapolateRight: "clamp" });

  const subtitleOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp" });

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
          fontSize: 68,
          fontWeight: 800,
          color: THEME.colors.textBlack,
          textAlign: "center",
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <span>
          Plus de 1254 étudiants
          <br />
          accompagnés à la réussite
        </span>
        <span
          style={{
            opacity: checkOpacity,
            transform: `scale(${checkScale})`,
            color: THEME.colors.primary,
            fontSize: 80,
          }}
        >
          ✓
        </span>
      </div>

      <div
        style={{
          opacity: subtitleOpacity,
          marginTop: 40,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: THEME.colors.textGray,
            marginBottom: 10,
          }}
        >
          Universités & Hautes Écoles suisses
        </div>
        <div
          style={{
            fontSize: 26,
            fontWeight: 500,
            color: THEME.colors.textGray,
          }}
        >
          EPFL, HEC, EHL, HEG, HEIG, UNIL, UNIGE, etc.
        </div>
      </div>
    </AbsoluteFill>
  );
};
