import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Logo } from "../components/Logo";
import { GradientBackground } from "../components/GradientBackground";
import { THEME } from "../config/theme";

export const CTASequence: React.FC = () => {
  const frame = useCurrentFrame();

  const contentOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const contentScale = interpolate(frame, [0, 30], [0.9, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const buttonPulse = interpolate(
    frame,
    [60, 90, 120, 150, 180],
    [1, 1.05, 1, 1.05, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const glowIntensity = interpolate(
    frame,
    [60, 90, 120, 150, 180],
    [0.5, 0.8, 0.5, 0.8, 0.5],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill>
      <GradientBackground variant="default" />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 50,
          opacity: contentOpacity,
          transform: `scale(${contentScale})`,
        }}
      >
        <Logo delay={0} size={100} showText={false} />

        <div
          style={{
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: THEME.fontSizes.xlarge,
              fontWeight: 700,
              color: THEME.colors.textWhite,
              marginBottom: 20,
            }}
          >
            Prêt à{" "}
            <span style={{ color: THEME.colors.primary }}>réussir</span> ?
          </div>
          <div
            style={{
              fontSize: THEME.fontSizes.medium,
              color: THEME.colors.textGray,
              fontWeight: 400,
            }}
          >
            Réserve ta première session gratuite
          </div>
        </div>

        {/* Bouton CTA */}
        <div
          style={{
            marginTop: 30,
            transform: `scale(${buttonPulse})`,
          }}
        >
          <div
            style={{
              background: `linear-gradient(135deg, ${THEME.colors.primary} 0%, ${THEME.colors.primaryDark} 100%)`,
              padding: "25px 80px",
              borderRadius: 60,
              fontSize: THEME.fontSizes.large,
              fontWeight: 700,
              color: THEME.colors.textWhite,
              boxShadow: `0 0 ${50 * glowIntensity}px rgba(0, 102, 255, ${glowIntensity})`,
              border: `2px solid ${THEME.colors.primaryLight}`,
              letterSpacing: "0.02em",
            }}
          >
            jad-coaching.ch
          </div>
        </div>

        {/* Sous-texte */}
        <div
          style={{
            fontSize: THEME.fontSizes.small,
            color: THEME.colors.textDark,
            marginTop: 20,
            opacity: interpolate(frame, [90, 120], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          Maths • Stats • Finance | EPFL • HEC • EHL
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
