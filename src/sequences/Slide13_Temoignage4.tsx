import { AbsoluteFill } from "remotion";
import { THEME } from "../config/theme";
import { TestimonialCard } from "../components/TestimonialCard";

export const Slide13_Temoignage4: React.FC = () => {
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
        text="Premier examen de stats : 2.5/6. Deuxième examen de stats après les cours de Jad : 5.5/6 ! Avec le soutien de Jad, tu réaliseras que les statistiques sont accessibles et pas impossibles. Merci, Jad !!!"
        boldParts={["2.5/6", "5.5/6"]}
        name="Elisa Pucci"
        school="Unidistance"
        avatarFile="elisa.jpg"
      />
    </AbsoluteFill>
  );
};
