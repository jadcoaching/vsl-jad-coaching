import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { THEME } from "../config/theme";

export const Slide15_Echouer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const line1Spring = spring({
    frame: frame - 30,
    fps,
    config: { damping: 14, stiffness: 80 },
  });

  const line2Spring = spring({
    frame: frame - 50,
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  const arrowPulse = interpolate(frame, [60, 75, 90], [0, 1, 0], { extrapolateRight: "extend" });

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
          transform: `translateY(${interpolate(titleSpring, [0, 1], [50, 0])}px)`,
          opacity: titleSpring,
          fontSize: 68,
          fontWeight: 800,
          color: THEME.colors.textBlack,
          textAlign: "center",
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
          marginBottom: 55,
        }}
      >
        Ce qui fait échouer la majorité
        <br />
        des étudiants
      </div>

      <div style={{ textAlign: "center" }}>
        <div
          style={{
            transform: `translateX(${interpolate(line1Spring, [0, 1], [-30, 0])}px)`,
            opacity: Math.max(0, line1Spring),
            fontSize: 36,
            fontWeight: 500,
            fontStyle: "italic",
            color: THEME.colors.textGray,
            marginBottom: 20,
          }}
        >
          Ce n'est pas le manque de travail.
        </div>
        <div
          style={{
            transform: `translateX(${interpolate(line2Spring, [0, 1], [30, 0])}px)`,
            opacity: Math.max(0, line2Spring),
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
          <span
            style={{
              color: THEME.colors.primary,
              fontSize: 38,
              transform: `translateX(${arrowPulse * 8}px)`,
              display: "inline-block",
            }}
          >
            →
          </span>
          C'est le manque de stratégie.
        </div>
      </div>
    </AbsoluteFill>
  );
};
