import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedText } from "../components/AnimatedText";
import { GlowBox } from "../components/GlowBox";
import { GradientBackground } from "../components/GradientBackground";
import { THEME } from "../config/theme";

export const SolutionSequence: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleScale = interpolate(frame, [0, 30], [0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const features = [
    { icon: "🎯", text: "Cours personnalisés" },
    { icon: "📊", text: "Méthode éprouvée" },
    { icon: "🏆", text: "Résultats garantis" },
  ];

  return (
    <AbsoluteFill>
      <GradientBackground variant="default" />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 100px",
          gap: 60,
        }}
      >
        {/* Titre principal */}
        <div
          style={{
            opacity: titleOpacity,
            transform: `scale(${titleScale})`,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: THEME.fontSizes.xlarge,
              fontWeight: 300,
              color: THEME.colors.textGray,
              marginBottom: 20,
            }}
          >
            La solution ?
          </div>
          <div
            style={{
              fontSize: THEME.fontSizes.hero,
              fontWeight: 800,
              color: THEME.colors.textWhite,
              textShadow: THEME.shadows.textGlow,
            }}
          >
            <span style={{ color: THEME.colors.primary }}>JAD</span> Coaching
          </div>
        </div>

        {/* Features */}
        <div
          style={{
            display: "flex",
            gap: 40,
            marginTop: 40,
          }}
        >
          {features.map((feature, index) => {
            const featureDelay = 90 + index * 40;
            const featureOpacity = interpolate(
              frame,
              [featureDelay, featureDelay + 30],
              [0, 1],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }
            );

            const featureY = interpolate(
              frame,
              [featureDelay, featureDelay + 30],
              [40, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }
            );

            return (
              <div
                key={index}
                style={{
                  opacity: featureOpacity,
                  transform: `translateY(${featureY}px)`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 15,
                  padding: "30px 50px",
                  background: `linear-gradient(135deg, ${THEME.colors.gray} 0%, ${THEME.colors.grayDark} 100%)`,
                  borderRadius: 16,
                  border: `1px solid ${THEME.colors.primary}30`,
                  boxShadow: THEME.shadows.glow,
                }}
              >
                <span style={{ fontSize: 50 }}>{feature.icon}</span>
                <span
                  style={{
                    fontSize: THEME.fontSizes.medium,
                    fontWeight: 600,
                    color: THEME.colors.textWhite,
                  }}
                >
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
