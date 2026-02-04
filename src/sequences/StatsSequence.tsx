import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { CountUp } from "../components/CountUp";
import { GradientBackground } from "../components/GradientBackground";
import { THEME } from "../config/theme";

export const StatsSequence: React.FC = () => {
  const frame = useCurrentFrame();

  const stats = [
    { value: 1254, suffix: "+", label: "Étudiants accompagnés" },
    { value: 83, suffix: "%", label: "Taux de réussite" },
    { value: 10, suffix: "+", label: "Années d'expérience" },
  ];

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <GradientBackground variant="default" />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 80,
        }}
      >
        <div
          style={{
            opacity: titleOpacity,
            fontSize: THEME.fontSizes.xlarge,
            fontWeight: 700,
            color: THEME.colors.textWhite,
            textAlign: "center",
          }}
        >
          Des résultats{" "}
          <span style={{ color: THEME.colors.primary }}>concrets</span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 100,
            alignItems: "center",
          }}
        >
          {stats.map((stat, index) => {
            const delay = 30 + index * 30;
            const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });

            const scale = interpolate(frame, [delay, delay + 20], [0.8, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });

            return (
              <div
                key={index}
                style={{
                  opacity,
                  transform: `scale(${scale})`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 15,
                }}
              >
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  delay={delay}
                  duration={60}
                  fontSize={THEME.fontSizes.hero}
                />
                <div
                  style={{
                    fontSize: THEME.fontSizes.medium,
                    color: THEME.colors.textGray,
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
