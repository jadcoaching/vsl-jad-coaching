import { AbsoluteFill } from "remotion";
import { THEME } from "../config/theme";
import { TestimonialCard } from "../components/TestimonialCard";
import { CinematicBackground } from "../components/CinematicBackground";

export const Slide14_Temoignage5: React.FC = () => {
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
      <CinematicBackground />
      <TestimonialCard
        text="Grâce à Jad, j'ai abordé l'EPFL avec confiance. Sa méthode claire m'a permis d'avoir d'excellentes notes en Analyse et en Algèbre Linéaire sans que ces matières prennent trop de place. Sérieux et motivant, je le recommande vivement."
        boldParts={["d'excellentes notes en Analyse et en Algèbre Linéaire"]}
        name="Alexis Allemand"
        school="EPFL"
        avatarFile="alexis.png"
      />
    </AbsoluteFill>
  );
};
