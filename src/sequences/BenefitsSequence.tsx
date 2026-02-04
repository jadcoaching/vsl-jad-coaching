import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { GradientBackground } from "../components/GradientBackground";
import { THEME } from "../config/theme";

export const BenefitsSequence: React.FC = () => {
  const frame = useCurrentFrame();

  const benefits = [
    {
      title: "EPFL, HEC, EHL",
      description: "Adapté à ton cursus",
    },
    {
      title: "Suivi personnalisé",
      description: "Un coaching sur-mesure",
    },
    {
      title: "Flexibilité totale",
      description: "En ligne ou en présentiel",
    },
    {
      title: "10+ ans d'expérience",
      description: "Master EPFL en poche",
    },
  ];

  return (
    <AbsoluteFill>
      <GradientBackground variant="accent" />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 150px",
        }}
      >
        {/* Titre */}
        <div
          style={{
            fontSize: THEME.fontSizes.xlarge,
            fontWeight: 700,
            color: THEME.colors.textWhite,
            marginBottom: 80,
            textAlign: "center",
            opacity: interpolate(frame, [0, 30], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          Pourquoi choisir{" "}
          <span style={{ color: THEME.colors.primary }}>JAD</span> ?
        </div>

        {/* Grid de bénéfices */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            width: "100%",
            maxWidth: 1200,
          }}
        >
          {benefits.map((benefit, index) => {
            const delay = 30 + index * 50;
            const opacity = interpolate(frame, [delay, delay + 30], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });

            const x = interpolate(
              frame,
              [delay, delay + 30],
              [index % 2 === 0 ? -50 : 50, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }
            );

            const glowIntensity = interpolate(
              frame,
              [delay + 30, delay + 60, delay + 90],
              [0.2, 0.5, 0.3],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }
            );

            return (
              <div
                key={index}
                style={{
                  opacity,
                  transform: `translateX(${x}px)`,
                  background: `linear-gradient(135deg, ${THEME.colors.backgroundLight} 0%, ${THEME.colors.background} 100%)`,
                  borderRadius: 20,
                  padding: "40px 50px",
                  border: `1px solid ${THEME.colors.primary}40`,
                  boxShadow: `0 0 ${30 * glowIntensity}px rgba(0, 102, 255, ${glowIntensity})`,
                }}
              >
                <div
                  style={{
                    fontSize: THEME.fontSizes.large,
                    fontWeight: 700,
                    color: THEME.colors.primary,
                    marginBottom: 10,
                    textShadow: THEME.shadows.textGlow,
                  }}
                >
                  {benefit.title}
                </div>
                <div
                  style={{
                    fontSize: THEME.fontSizes.medium,
                    color: THEME.colors.textGray,
                    fontWeight: 400,
                  }}
                >
                  {benefit.description}
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
