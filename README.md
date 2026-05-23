# AnonymousInc — Landing Page

Landing page institutionnelle pour **AnonymousInc**, une entreprise de développement de services IT.

## ✨ Features

- **Fond 3D interactif** — Champ de particules Three.js avec shader GLSL custom et parallax souris
- **Smooth scrolling** — Scroll ultra-fluide via Lenis
- **Animations Framer Motion** — Entrées au scroll, parallax, hover effects, floating cards
- **Navbar intelligente** — Glass morphism au scroll, détection de section active, menu mobile animé
- **6 sections** : Hero · Services · About · Stack · Testimonials · Contact
- **Formulaire de contact** — Avec états loading et confirmation
- **Design system** — CSS variables, glassmorphism, glow effects, gradient text
- **Responsive** — Mobile-first, adapté tablette et desktop

## 🛠️ Stack

| Catégorie | Technologie |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Langage | TypeScript |
| Styling | Tailwind CSS v4 |
| 3D | [Three.js](https://threejs.org/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Smooth scroll | [Lenis](https://lenis.darkroom.engineering/) |
| Fonts | Inter (Google Fonts) |
| Package manager | pnpm |

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## 📦 Build de production

```bash
pnpm build
pnpm start
```

## 📁 Structure

```
app/
├── components/
│   ├── ThreeBackground.tsx   # Scène Three.js (particules + grid + mouse parallax)
│   ├── Navbar.tsx            # Navigation fixe avec scroll detection
│   ├── HeroSection.tsx       # Hero avec parallax scroll et stats
│   ├── ServicesSection.tsx   # Grille des 6 services avec hover glow
│   ├── AboutSection.tsx      # Histoire, timeline et tech stack
│   ├── ContactSection.tsx    # Témoignages + formulaire
│   ├── Footer.tsx            # CTA band + liens + socials
│   └── SmoothScrollProvider.tsx  # Wrapper Lenis
├── globals.css               # Design tokens, utilitaires glass/glow/gradient
├── layout.tsx                # Root layout + métadonnées SEO
└── page.tsx                  # Assemblage des sections
public/
└── hero-bg.png               # Image de fond hero
```

## 🎨 Design System

Les variables CSS sont définies dans `globals.css` :

```css
--color-bg:       #020510   /* Fond principal */
--color-primary:  #00d4ff   /* Cyan (accent principal) */
--color-secondary: #7c3aed  /* Violet */
--color-accent:   #06b6d4   /* Cyan clair */
```

Classes utilitaires disponibles : `.glass`, `.glow-text`, `.glow-border`, `.gradient-text`, `.gradient-primary`, `.section-padding`
