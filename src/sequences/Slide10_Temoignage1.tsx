import { AbsoluteFill } from "remotion";
import { THEME } from "../config/theme";
import { TestimonialCard } from "../components/TestimonialCard";

export const Slide10_Temoignage1: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME.colors.background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: THEME.fonts.primary,
      }}
    >
      <TestimonialCard
        text="D'une note de 2/6 à mon premier examen de maths, à un incroyable 5.5/6 après l'accompagnement JadCoaching ! Il a su identifier mes difficultés et m'a préparé de manière optimale pour l'examen. Grâce à son soutien, j'ai non seulement acquis de solides connaissances, mais j'ai aussi retrouvé confiance en moi."
        boldParts={["2/6 à mon premier examen", "5.5/6 après l'accompagnement JadCoaching"]}
        name="Lou Zahnd"
        school="HEC Lausanne"
        avatarFile="lou.jpg"
      />
    </AbsoluteFill>
  );
};
