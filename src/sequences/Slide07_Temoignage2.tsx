import { AbsoluteFill } from "remotion";
import { THEME } from "../config/theme";
import { TestimonialCard } from "../components/TestimonialCard";

export const Slide07_Temoignage2: React.FC = () => {
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
        text="Je suis passé d'une note de 1.7/6 en mathématiques à 5/6 en peu de temps. Le changement a été immédiat : Jad expliquait chaque notion avec une clarté et une rapidité incroyables. Ce qui était flou en classe devenait limpide avec lui."
        boldParts={["d'une note de 1.7/6 en mathématiques à 5/6 en peu de temps"]}
        name="Stan Stelcher"
        school="HEIG-Vaud"
      />
    </AbsoluteFill>
  );
};
