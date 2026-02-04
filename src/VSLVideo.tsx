import { AbsoluteFill, Sequence } from "remotion";
import { THEME } from "./config/theme";

// Import all 16 slides
import { Slide01_Etudiant } from "./sequences/Slide01_Etudiant";
import { Slide02_Reussir } from "./sequences/Slide02_Reussir";
import { Slide03_Comment } from "./sequences/Slide03_Comment";
import { Slide04_Jad } from "./sequences/Slide04_Jad";
import { Slide05_Stats } from "./sequences/Slide05_Stats";
import { Slide06_Temoignage1 } from "./sequences/Slide06_Temoignage1";
import { Slide07_Temoignage2 } from "./sequences/Slide07_Temoignage2";
import { Slide08_Temoignage3 } from "./sequences/Slide08_Temoignage3";
import { Slide09_Temoignage4 } from "./sequences/Slide09_Temoignage4";
import { Slide10_Temoignage5 } from "./sequences/Slide10_Temoignage5";
import { Slide11_Echouer } from "./sequences/Slide11_Echouer";
import { Slide12_Accompagnement } from "./sequences/Slide12_Accompagnement";
import { Slide13_Point1 } from "./sequences/Slide13_Point1";
import { Slide14_Point2 } from "./sequences/Slide14_Point2";
import { Slide15_Point3 } from "./sequences/Slide15_Point3";
import { Slide16_CTA } from "./sequences/Slide16_CTA";

// Duration per slide in frames (30fps)
// ~3-4 seconds per slide for a ~60 second video
const SLIDE_DURATION = 100; // ~3.3 seconds

export const VSLVideo: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME.colors.background,
        fontFamily: THEME.fonts.primary,
      }}
    >
      {/* Slide 1: Tu es étudiant en Suisse ? */}
      <Sequence from={0} durationInFrames={SLIDE_DURATION}>
        <Slide01_Etudiant />
      </Sequence>

      {/* Slide 2: Je vais te faire réussir */}
      <Sequence from={SLIDE_DURATION * 1} durationInFrames={SLIDE_DURATION}>
        <Slide02_Reussir />
      </Sequence>

      {/* Slide 3: Comment je peux te promettre */}
      <Sequence from={SLIDE_DURATION * 2} durationInFrames={SLIDE_DURATION}>
        <Slide03_Comment />
      </Sequence>

      {/* Slide 4: Jad, Diplômé EPFL */}
      <Sequence from={SLIDE_DURATION * 3} durationInFrames={SLIDE_DURATION}>
        <Slide04_Jad />
      </Sequence>

      {/* Slide 5: Plus de 1254 étudiants */}
      <Sequence from={SLIDE_DURATION * 4} durationInFrames={SLIDE_DURATION}>
        <Slide05_Stats />
      </Sequence>

      {/* Slide 6: Témoignage Lou Zahnd */}
      <Sequence from={SLIDE_DURATION * 5} durationInFrames={SLIDE_DURATION}>
        <Slide06_Temoignage1 />
      </Sequence>

      {/* Slide 7: Témoignage Stan Stelcher */}
      <Sequence from={SLIDE_DURATION * 6} durationInFrames={SLIDE_DURATION}>
        <Slide07_Temoignage2 />
      </Sequence>

      {/* Slide 8: Témoignage Val Garnier */}
      <Sequence from={SLIDE_DURATION * 7} durationInFrames={SLIDE_DURATION}>
        <Slide08_Temoignage3 />
      </Sequence>

      {/* Slide 9: Témoignage Elisa Pucci */}
      <Sequence from={SLIDE_DURATION * 8} durationInFrames={SLIDE_DURATION}>
        <Slide09_Temoignage4 />
      </Sequence>

      {/* Slide 10: Témoignage Alexis Allemand */}
      <Sequence from={SLIDE_DURATION * 9} durationInFrames={SLIDE_DURATION}>
        <Slide10_Temoignage5 />
      </Sequence>

      {/* Slide 11: Ce qui fait échouer */}
      <Sequence from={SLIDE_DURATION * 10} durationInFrames={SLIDE_DURATION}>
        <Slide11_Echouer />
      </Sequence>

      {/* Slide 12: Accompagnement JadCoaching */}
      <Sequence from={SLIDE_DURATION * 11} durationInFrames={SLIDE_DURATION}>
        <Slide12_Accompagnement />
      </Sequence>

      {/* Slide 13: #1 Débloque les concepts */}
      <Sequence from={SLIDE_DURATION * 12} durationInFrames={SLIDE_DURATION}>
        <Slide13_Point1 />
      </Sequence>

      {/* Slide 14: #2 Développe une méthode */}
      <Sequence from={SLIDE_DURATION * 13} durationInFrames={SLIDE_DURATION}>
        <Slide14_Point2 />
      </Sequence>

      {/* Slide 15: #3 Entraîne-toi */}
      <Sequence from={SLIDE_DURATION * 14} durationInFrames={SLIDE_DURATION}>
        <Slide15_Point3 />
      </Sequence>

      {/* Slide 16: CTA - Réserve ton appel */}
      <Sequence from={SLIDE_DURATION * 15} durationInFrames={SLIDE_DURATION}>
        <Slide16_CTA />
      </Sequence>
    </AbsoluteFill>
  );
};
