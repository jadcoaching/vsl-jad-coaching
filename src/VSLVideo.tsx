import { AbsoluteFill, Sequence } from "remotion";
import { IntroSequence } from "./sequences/IntroSequence";
import { ProblemSequence } from "./sequences/ProblemSequence";
import { SolutionSequence } from "./sequences/SolutionSequence";
import { BenefitsSequence } from "./sequences/BenefitsSequence";
import { StatsSequence } from "./sequences/StatsSequence";
import { CTASequence } from "./sequences/CTASequence";
import { THEME } from "./config/theme";

export const VSLVideo: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME.colors.background,
        fontFamily: THEME.fonts.primary,
      }}
    >
      {/* Intro avec logo - 0 à 5 secondes */}
      <Sequence from={0} durationInFrames={150}>
        <IntroSequence />
      </Sequence>

      {/* Le problème - 5 à 15 secondes */}
      <Sequence from={150} durationInFrames={300}>
        <ProblemSequence />
      </Sequence>

      {/* La solution - 15 à 30 secondes */}
      <Sequence from={450} durationInFrames={450}>
        <SolutionSequence />
      </Sequence>

      {/* Les bénéfices - 30 à 42 secondes */}
      <Sequence from={900} durationInFrames={360}>
        <BenefitsSequence />
      </Sequence>

      {/* Stats / Preuves sociales - 42 à 52 secondes */}
      <Sequence from={1260} durationInFrames={300}>
        <StatsSequence />
      </Sequence>

      {/* Call to Action - 52 à 60 secondes */}
      <Sequence from={1560} durationInFrames={240}>
        <CTASequence />
      </Sequence>
    </AbsoluteFill>
  );
};
