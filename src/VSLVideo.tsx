import { AbsoluteFill, Sequence } from "remotion";
import { THEME } from "./config/theme";

// Import all 16 slides in the new order
import { Slide01_Etudiant } from "./sequences/Slide01_Etudiant";
import { Slide02_Reussir } from "./sequences/Slide02_Reussir";
import { Slide03_Accompagnement } from "./sequences/Slide03_Accompagnement";
import { Slide04_Point1 } from "./sequences/Slide04_Point1";
import { Slide05_Point2 } from "./sequences/Slide05_Point2";
import { Slide06_Point3 } from "./sequences/Slide06_Point3";
import { Slide07_Comment } from "./sequences/Slide07_Comment";
import { Slide08_Jad } from "./sequences/Slide08_Jad";
import { Slide09_Stats } from "./sequences/Slide09_Stats";
import { Slide10_Temoignage1 } from "./sequences/Slide10_Temoignage1";
import { Slide11_Temoignage2 } from "./sequences/Slide11_Temoignage2";
import { Slide12_Temoignage3 } from "./sequences/Slide12_Temoignage3";
import { Slide13_Temoignage4 } from "./sequences/Slide13_Temoignage4";
import { Slide14_Temoignage5 } from "./sequences/Slide14_Temoignage5";
import { Slide15_Echouer } from "./sequences/Slide15_Echouer";
import { Slide16_CTA } from "./sequences/Slide16_CTA";

// Duration per slide in frames (30fps) - ~3.3 seconds per slide
const SLIDE_DURATION = 100;

export const VSLVideo: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME.colors.background,
        fontFamily: THEME.fonts.primary,
      }}
    >
      {/* 1. Tu es étudiant en Suisse ? */}
      <Sequence from={0} durationInFrames={SLIDE_DURATION}>
        <Slide01_Etudiant />
      </Sequence>

      {/* 2. Je vais te faire réussir ton prochain examen */}
      <Sequence from={SLIDE_DURATION * 1} durationInFrames={SLIDE_DURATION}>
        <Slide02_Reussir />
      </Sequence>

      {/* 3. Accompagnement JadCoaching - Comment ça fonctionne */}
      <Sequence from={SLIDE_DURATION * 2} durationInFrames={SLIDE_DURATION}>
        <Slide03_Accompagnement />
      </Sequence>

      {/* 4. #1 Débloque les concepts complexes */}
      <Sequence from={SLIDE_DURATION * 3} durationInFrames={SLIDE_DURATION}>
        <Slide04_Point1 />
      </Sequence>

      {/* 5. #2 Développe une méthode claire */}
      <Sequence from={SLIDE_DURATION * 4} durationInFrames={SLIDE_DURATION}>
        <Slide05_Point2 />
      </Sequence>

      {/* 6. #3 Travaille exactement sur ce qui tombe */}
      <Sequence from={SLIDE_DURATION * 5} durationInFrames={SLIDE_DURATION}>
        <Slide06_Point3 />
      </Sequence>

      {/* 7. Comment je peux te promettre que tu vas réussir ? */}
      <Sequence from={SLIDE_DURATION * 6} durationInFrames={SLIDE_DURATION}>
        <Slide07_Comment />
      </Sequence>

      {/* 8. JadCoaching - Diplômé EPFL, +10ans, +1M vues */}
      <Sequence from={SLIDE_DURATION * 7} durationInFrames={SLIDE_DURATION}>
        <Slide08_Jad />
      </Sequence>

      {/* 9. Plus de 1254 étudiants accompagnés */}
      <Sequence from={SLIDE_DURATION * 8} durationInFrames={SLIDE_DURATION}>
        <Slide09_Stats />
      </Sequence>

      {/* 10. Témoignage Lou Zahnd */}
      <Sequence from={SLIDE_DURATION * 9} durationInFrames={SLIDE_DURATION}>
        <Slide10_Temoignage1 />
      </Sequence>

      {/* 11. Témoignage Stan Stelcher */}
      <Sequence from={SLIDE_DURATION * 10} durationInFrames={SLIDE_DURATION}>
        <Slide11_Temoignage2 />
      </Sequence>

      {/* 12. Témoignage Val Garnier */}
      <Sequence from={SLIDE_DURATION * 11} durationInFrames={SLIDE_DURATION}>
        <Slide12_Temoignage3 />
      </Sequence>

      {/* 13. Témoignage Elisa Pucci */}
      <Sequence from={SLIDE_DURATION * 12} durationInFrames={SLIDE_DURATION}>
        <Slide13_Temoignage4 />
      </Sequence>

      {/* 14. Témoignage Alexis Allemand */}
      <Sequence from={SLIDE_DURATION * 13} durationInFrames={SLIDE_DURATION}>
        <Slide14_Temoignage5 />
      </Sequence>

      {/* 15. Ce qui fait échouer la majorité des étudiants */}
      <Sequence from={SLIDE_DURATION * 14} durationInFrames={SLIDE_DURATION}>
        <Slide15_Echouer />
      </Sequence>

      {/* 16. CTA - Réserve ton appel gratuit */}
      <Sequence from={SLIDE_DURATION * 15} durationInFrames={SLIDE_DURATION}>
        <Slide16_CTA />
      </Sequence>
    </AbsoluteFill>
  );
};
