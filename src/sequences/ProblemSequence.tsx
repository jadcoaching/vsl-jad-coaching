import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedText } from "../components/AnimatedText";
import { GradientBackground } from "../components/GradientBackground";
import { THEME } from "../config/theme";

export const ProblemSequence: React.FC = () => {
  const frame = useCurrentFrame();

  const problems = [
    "Tu galères en maths ?",
    "Les stats te donnent des cauchemars ?",
    "La finance te semble incompréhensible ?",
  ];

  return (
    <AbsoluteFill>
      <GradientBackground variant="dark" />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 100px",
          gap: 50,
        }}
      >
        {problems.map((problem, index) => {
          const startFrame = index * 80;
          const opacity = interpolate(
            frame,
            [startFrame, startFrame + 30, startFrame + 70, startFrame + 90],
            [0, 1, 1, index === problems.length - 1 ? 1 : 0.3],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }
          );

          const scale = interpolate(
            frame,
            [startFrame, startFrame + 30],
            [0.9, 1],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }
          );

          const x = interpolate(
            frame,
            [startFrame, startFrame + 30],
            [-50, 0],
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
                transform: `scale(${scale}) translateX(${x}px)`,
                fontSize: THEME.fontSizes.xlarge,
                fontWeight: 700,
                color: THEME.colors.textWhite,
                textAlign: "center",
                textShadow:
                  frame > startFrame + 20
                    ? "0 0 30px rgba(255, 50, 50, 0.5)"
                    : "none",
              }}
            >
              {problem}
            </div>
          );
        })}
      </AbsoluteFill>

      {/* Effet de vignette rouge subtil */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(150, 0, 0, 0.2) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
