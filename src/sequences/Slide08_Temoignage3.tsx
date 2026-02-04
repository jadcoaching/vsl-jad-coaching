import { AbsoluteFill } from "remotion";
import { THEME } from "../config/theme";
import { TestimonialCard } from "../components/TestimonialCard";

export const Slide08_Temoignage3: React.FC = () => {
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
        text="Jad est un coach à la fois bienveillant et exigeant, toujours déterminé à te faire progresser et à te préparer au mieux pour tes examens. Grâce à son accompagnement, sa rigueur et une méthode structurée, j'ai obtenu la note de 6/6 en maths."
        boldParts={["6/6 en maths"]}
        name="Val Garnier"
        school="ESC UNIL"
      />
    </AbsoluteFill>
  );
};
