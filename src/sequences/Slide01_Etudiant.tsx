import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { THEME } from "../config/theme";

export const Slide01_Etudiant: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [0, 20], [30, 0], { extrapolateRight: "clamp" });

  const subtitleOpacity = interpolate(frame, [15, 35], [0, 1], { extrapolateRight: "clamp" });
  const subtitleY = interpolate(frame, [15, 35], [20, 0], { extrapolateRight: "clamp" });

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
        Tu es étudiant en Suisse ?
      </div>

      <div
        style={{
          opacity: subtitleOpacity,
          transform: `translateY(${subtitleY}px)`,
          fontSize: 32,
          fontWeight: 600,
          color: THEME.colors.primary,
          marginTop: 30,
          textAlign: "center",
          letterSpacing: "0.05em",
        }}
      >
        EPFL • HEC • EHL • HEG • HEIG • HSG • UNIVERSITÉ
      </div>
    </AbsoluteFill>
  );
};
