import { interpolate, useCurrentFrame } from "remotion";
import { THEME } from "../config/theme";

interface TestimonialCardProps {
  text: string;
  boldParts?: string[];
  name: string;
  school: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  boldParts = [],
  name,
  school,
}) => {
  const frame = useCurrentFrame();

  const cardOpacity = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: "clamp" });
  const cardY = interpolate(frame, [0, 25], [40, 0], { extrapolateRight: "clamp" });

  // Function to bold specific parts
  const renderText = () => {
    let result = text;
    boldParts.forEach((part) => {
      result = result.replace(part, `<strong>${part}</strong>`);
    });
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <div
      style={{
        opacity: cardOpacity,
        transform: `translateY(${cardY}px)`,
        backgroundColor: THEME.colors.backgroundCard,
        borderRadius: 16,
        padding: "50px 60px",
        maxWidth: 800,
        boxShadow: THEME.shadows.card,
      }}
    >
      <div
        style={{
          fontSize: 26,
          fontWeight: 400,
          color: THEME.colors.textBlack,
          lineHeight: 1.6,
          marginBottom: 30,
        }}
      >
        {renderText()}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
        }}
      >
        {/* Avatar placeholder */}
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: THEME.colors.primary,
            opacity: 0.3,
          }}
        />
        <div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: THEME.colors.textBlack,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 500,
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
