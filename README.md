# VSL Jad Coaching

Video Sales Letter pour Jad Coaching - Cours de Maths, Stats & Finance en Suisse.

## Installation

```bash
npm install
```

## Utilisation

### Lancer le studio Remotion

```bash
npm start
```

Puis ouvrez http://localhost:3000 dans votre navigateur.

### Rendre la vidéo

```bash
npm run build
```

La vidéo sera exportée dans `out/vsl-jad-coaching.mp4`

## Structure du projet

```
src/
├── index.ts              # Point d'entrée Remotion
├── Root.tsx              # Configuration des compositions
├── VSLVideo.tsx          # Vidéo principale
├── config/
│   ├── video.ts          # Config vidéo (fps, dimensions)
│   └── theme.ts          # Couleurs, fonts, shadows
├── components/
│   ├── AnimatedText.tsx  # Texte animé
│   ├── CountUp.tsx       # Animation de compteur
│   ├── GlowBox.tsx       # Box avec effet glow
│   ├── GradientBackground.tsx
│   └── Logo.tsx          # Logo Jad Coaching
└── sequences/
    ├── IntroSequence.tsx     # Intro avec logo
    ├── ProblemSequence.tsx   # Problème client
    ├── SolutionSequence.tsx  # Solution proposée
    ├── BenefitsSequence.tsx  # Avantages
    ├── StatsSequence.tsx     # Statistiques
    └── CTASequence.tsx       # Call to action
```

## Personnalisation

### Couleurs

Modifiez `src/config/theme.ts` pour changer les couleurs:

```typescript
export const THEME = {
  colors: {
    primary: "#0066FF",     // Bleu principal
    background: "#000000",   // Fond noir
    textWhite: "#FFFFFF",    // Texte blanc
    // ...
  }
}
```

### Logo

Remplacez le logo placeholder dans `src/components/Logo.tsx` par votre vrai logo en utilisant le composant `<Img>` de Remotion:

```typescript
import { Img, staticFile } from "remotion";

<Img src={staticFile("logo.png")} style={{ width: size, height: size }} />
```

Placez votre logo dans le dossier `public/`.

### Durée et FPS

Modifiez `src/config/video.ts`:

```typescript
export const VIDEO_CONFIG = {
  fps: 30,
  durationInFrames: 30 * 60, // 60 secondes
  width: 1920,
  height: 1080,
};
```

## Design

- **Fond**: Noir avec gradient subtil
- **Texte**: Blanc et bleu (#0066FF)
- **Effets**: Glow et ombres modernes
- **Style**: Minimaliste et professionnel

## Licence

Projet privé - Jad Coaching
