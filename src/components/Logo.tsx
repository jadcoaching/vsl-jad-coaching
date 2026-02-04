import { interpolate, useCurrentFrame, Img, staticFile } from "remotion";
import { THEME } from "../config/theme";

interface LogoProps {
  delay?: number;
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  delay = 0,
  size = 120,
  showText = true,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [delay, delay + 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [delay, delay + 30], [0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const glowPulse = interpolate(
    frame,
    [delay + 30, delay + 60, delay + 90],
    [0.4, 0.8, 0.4],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      {/* Logo placeholder - remplacer par le vrai logo */}
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${THEME.colors.primary} 0%, ${THEME.colors.primaryDark} 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 0 ${60 * glowPulse}px rgba(0, 102, 255, ${glowPulse})`,
          border: `3px solid ${THEME.colors.primaryLight}`,
        }}
      >
        <span
          style={{
            fontSize: size * 0.5,
            fontWeight: 800,
            color: THEME.colors.textWhite,
            textShadow: THEME.shadows.textGlow,
          }}
        >
          J
        </span>
      </div>

      {showText && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: THEME.colors.textWhite,
              letterSpacing: "0.1em",
              textShadow: THEME.shadows.textGlow,
            }}
          >
            JAD
          </span>
          <span
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: THEME.colors.primary,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            Coaching
          </span>
        </div>
      )}
    </div>
  );
};
