import { AbsoluteFill, useCurrentFrame, random } from "remotion";
import { THEME } from "../config/theme";
import { useMemo } from "react";

export const CinematicBackground: React.FC = () => {
  const frame = useCurrentFrame();

  // Generate grain pattern using noise
  const grainOpacity = 0.08 + Math.sin(frame * 0.5) * 0.02;

  // Create subtle animated gradient
  const gradientAngle = 135 + Math.sin(frame * 0.02) * 10;
  const blueGlowX = 50 + Math.sin(frame * 0.015) * 20;
  const blueGlowY = 50 + Math.cos(frame * 0.012) * 20;

  // Generate grain dots
  const grainDots = useMemo(() => {
    const dots = [];
    for (let i = 0; i < 300; i++) {
      dots.push({
        x: random(`grain-x-${i}`) * 100,
        y: random(`grain-y-${i}`) * 100,
        size: random(`grain-size-${i}`) * 2 + 0.5,
        opacity: random(`grain-opacity-${i}`) * 0.3,
      });
    }
    return dots;
  }, []);

  return (
    <AbsoluteFill>
      {/* Base dark background */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(${gradientAngle}deg,
            ${THEME.colors.backgroundDark} 0%,
            ${THEME.colors.background} 50%,
            ${THEME.colors.backgroundLight} 100%)`,
        }}
      />

      {/* Blue glow accent */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at ${blueGlowX}% ${blueGlowY}%,
            rgba(0, 207, 255, 0.08) 0%,
            transparent 50%)`,
        }}
      />

      {/* Secondary blue glow */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at ${100 - blueGlowX}% ${100 - blueGlowY}%,
            rgba(0, 207, 255, 0.05) 0%,
            transparent 40%)`,
        }}
      />

      {/* Vignette effect */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 50%,
            transparent 40%,
            rgba(0, 0, 0, 0.4) 100%)`,
        }}
      />

      {/* Film grain overlay using SVG filter */}
      <AbsoluteFill
        style={{
          opacity: grainOpacity,
          mixBlendMode: "overlay",
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="grain">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                seed={Math.floor(frame * 0.5) % 100}
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </AbsoluteFill>

      {/* Additional grain particles */}
      <AbsoluteFill style={{ opacity: 0.15 }}>
        {grainDots.map((dot, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${dot.x}%`,
              top: `${(dot.y + frame * 0.02) % 100}%`,
              width: dot.size,
              height: dot.size,
              borderRadius: "50%",
              backgroundColor: `rgba(255, 255, 255, ${dot.opacity})`,
            }}
          />
        ))}
      </AbsoluteFill>

      {/* Subtle scan lines */}
      <AbsoluteFill
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.03) 2px,
            rgba(0, 0, 0, 0.03) 4px
          )`,
          opacity: 0.5,
        }}
      />
    </AbsoluteFill>
  );
};
