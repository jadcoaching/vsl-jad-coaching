import { interpolate, useCurrentFrame, spring, useVideoConfig, Img, staticFile } from "remotion";
import { THEME } from "../config/theme";
import { useState } from "react";

interface TestimonialCardProps {
  text: string;
  boldParts?: string[];
  name: string;
  school: string;
  avatarFile: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  boldParts = [],
  name,
  school,
  avatarFile,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const [imageError, setImageError] = useState(false);

  const cardSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  const avatarSpring = spring({
    frame: frame - 20,
    fps,
    config: { damping: 10, stiffness: 100 },
  });

  const textSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 14, stiffness: 70 },
  });

  const renderText = () => {
    let result = text;
    boldParts.forEach((part) => {
      result = result.replace(part, `<strong>${part}</strong>`);
    });
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  // Get initials for placeholder
  const initials = name.split(" ").map(n => n[0]).join("").toUpperCase();

  return (
    <div
      style={{
        opacity: cardSpring,
        transform: `translateY(${interpolate(cardSpring, [0, 1], [60, 0])}px) scale(${interpolate(cardSpring, [0, 1], [0.95, 1])})`,
        backgroundColor: THEME.colors.backgroundCard,
        borderRadius: 24,
        padding: "55px 65px",
        maxWidth: 850,
        boxShadow: "0 8px 40px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div
        style={{
          opacity: Math.max(0, textSpring),
          transform: `translateY(${interpolate(textSpring, [0, 1], [20, 0])}px)`,
          fontSize: 26,
          fontWeight: 400,
          color: THEME.colors.textBlack,
          lineHeight: 1.65,
          marginBottom: 35,
        }}
      >
        {renderText()}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          opacity: Math.max(0, avatarSpring),
          transform: `translateX(${interpolate(avatarSpring, [0, 1], [-20, 0])}px)`,
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            overflow: "hidden",
            border: `3px solid ${THEME.colors.primary}30`,
            backgroundColor: imageError ? THEME.colors.primary : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {imageError ? (
            <span style={{ color: "#fff", fontSize: 22, fontWeight: 700 }}>
              {initials}
            </span>
          ) : (
            <Img
              src={staticFile(`avatars/${avatarFile}`)}
              onError={() => setImageError(true)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}
        </div>
        <div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: THEME.colors.textBlack,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: THEME.colors.primary,
            }}
          >
            {school}
          </div>
        </div>
      </div>
    </div>
  );
};
