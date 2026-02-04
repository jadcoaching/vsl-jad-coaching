import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { THEME } from "../config/theme";

export const Slide11_Echouer: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [0, 20], [30, 0], { extrapolateRight: "clamp" });

  const line1Opacity = interpolate(frame, [25, 45], [0, 1], { extrapolateRight: "clamp" });
  const line2Opacity = interpolate(frame, [45, 65], [0, 1], { extrapolateRight: "clamp" });
  const line2X = interpolate(frame, [45, 65], [-20, 0], { extrapolateRight: "clamp" });

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
          marginBottom: 50,
        }}
      >
        Ce qui fait échouer la majorité
        <br />
        des étudiants
      </div>

      <div
        style={{
          textAlign: "center",
        }}
      >
        <div
          style={{
            opacity: line1Opacity,
            fontSize: 36,
            fontWeight: 500,
            fontStyle: "italic",
            color: THEME.colors.textGray,
            marginBottom: 15,
          }}
        >
          Ce n'est pas le manque de travail.
        </div>
        <div
          style={{
            opacity: line2Opacity,
            transform: `translateX(${line2X}px)`,
            fontSize: 36,
            fontWeight: 500,
            fontStyle: "italic",
            color: THEME.colors.textGray,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 15,
          }}
        >
          <span style={{ color: THEME.colors.primary, fontSize: 32 }}>→</span>
          C'est le manque de stratégie.
        </div>
      </div>
    </AbsoluteFill>
  );
};
