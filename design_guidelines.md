# BNA+ Banking App Simulation - Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based Design
Drawing inspiration from the provided BNA+ screenshots and modern banking apps like Nubank, Revolut, and N26. This design emphasizes trust, clarity, and mobile-first interactions with the distinctive BNA+ brand identity.

**Key Design Principles:**
- Mobile-first: Optimized for Android viewport (360-428px width)
- Trust through clarity: Clean, uncluttered interfaces with clear visual hierarchy
- Instant feedback: Immediate visual responses to user actions
- Brand consistency: Maintain BNA+ color identity throughout all screens

---

## Core Design Elements

### A. Color Palette

**Primary Brand Colors:**
- BNA Primary Blue: 192 100% 40% (vibrant turquoise from logo/headers)
- BNA Orange Accent: 24 100% 63% (warm orange for CTAs and highlights)
- Deep Navy: 210 45% 15% (dark backgrounds, headers)

**Light Mode:**
- Background Primary: 0 0% 98%
- Background Secondary: 0 0% 95%
- Surface Cards: 0 0% 100%
- Text Primary: 210 20% 15%
- Text Secondary: 210 10% 45%

**Dark Mode:**
- Background Primary: 210 25% 8%
- Background Secondary: 210 25% 12%
- Surface Cards: 210 25% 16%
- Text Primary: 0 0% 95%
- Text Secondary: 210 5% 65%

**Functional Colors:**
- Success Green: 142 76% 36%
- Warning Yellow: 45 93% 47%
- Error Red: 0 72% 51%
- Neutral Gray: 210 10% 50%

### B. Typography

**Font Family:** 
- Primary: 'Inter' via Google Fonts (clean, modern banking aesthetic)
- Secondary: System font stack as fallback

**Type Scale:**
- Display/Logo: 32px/2rem, font-weight: 700
- H1 (Screen Titles): 24px/1.5rem, font-weight: 600
- H2 (Section Headers): 20px/1.25rem, font-weight: 600
- H3 (Card Titles): 18px/1.125rem, font-weight: 500
- Body Large: 16px/1rem, font-weight: 400
- Body Regular: 14px/0.875rem, font-weight: 400
- Caption/Labels: 12px/0.75rem, font-weight: 500
- Account Numbers: 18px/1.125rem, font-weight: 600, letter-spacing: 0.05em

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16, and 24
- Micro spacing: p-2, gap-2 (8px)
- Standard spacing: p-4, m-4 (16px)
- Section spacing: py-6, my-8 (24px, 32px)
- Screen margins: px-4 on mobile, px-6 on tablet

**Grid System:**
- Single column for mobile (max-w-md mx-auto)
- Card-based layout with rounded-xl borders
- Full-width action buttons with consistent heights (h-12 to h-14)

### D. Component Library

**Navigation:**
- Bottom Tab Bar: Fixed bottom navigation with 4-5 icons, active state uses BNA Primary Blue
- Top Header: Logo left, notification bell right, clean white/dark background
- Back Navigation: Left arrow with optional screen title

**Cards & Surfaces:**
- Account Balance Card: Large hero card with gradient background (192 100% 40% to 192 80% 30%), white text, rounded-2xl, shadow-lg
- Action Cards: White/dark surface with rounded-xl, subtle shadow, p-6 spacing
- Transaction Items: Horizontal layout with icon-left, details-center, amount-right, border-b divider

**Buttons:**
- Primary CTA: BNA Orange background, white text, rounded-xl, h-12, font-semibold
- Secondary: Border with BNA Blue, blue text, rounded-xl, h-12
- Icon Buttons: Square or circular, BNA Blue on tap, touch target 44x44px minimum
- Action Grid: 2x2 or 3x3 grid of icon+label buttons with gentle hover states

**Forms:**
- Input Fields: Rounded-lg border, h-12, px-4, focus ring in BNA Blue
- Labels: Above input, text-sm font-medium, mb-2
- Error States: Red border, red text below input
- PIN/Password: Large numeric keypad or dot indicators for security

**Modals & Overlays:**
- Processing Overlay: Full-screen with animated spinner, BNA Blue accent, semi-transparent backdrop
- Bottom Sheets: Slide up from bottom, rounded-t-3xl, drag handle, backdrop blur
- Success/Error Toasts: Top or center notifications with icon, auto-dismiss

**Icons:**
- Use Heroicons or Material Icons via CDN
- Consistent 24x24px size for navigation
- 32x32px for feature icons
- 20x20px for inline icons

**Data Display:**
- Balance Display: Large numbers, subtle masked characters (****), eye icon to reveal
- Transaction List: Grouped by date, merchant icon/avatar left, category badge right
- Stats Cards: Icon + number + label in compact card format

### E. Animations

**Essential Only:**
- Page Transitions: Gentle 200ms fade + slide (30px)
- Splash Screen: Logo fade-in + scale (600ms), then auto-advance
- Processing State: Rotating spinner or pulsing dots in BNA Blue
- Button Tap: Scale down to 0.95, 100ms, provides haptic-like feedback
- Card Reveals: Staggered fade-in (100ms delay between cards) on initial load
- Balance Toggle: Smooth 200ms transition when showing/hiding numbers

**Avoid:** Excessive bounces, rotations, or decorative animations that slow perceived performance

---

## Screen-Specific Guidelines

**Splash Screen:**
- Full-screen gradient (BNA Blue to deeper shade)
- Centered BNA+ logo (white), scale-in animation
- Loading indicator below logo
- Auto-advance after 1.5-2s

**Login Screen:**
- Gradient header with BNA+ branding
- Card-based form centered vertically
- Username and password inputs with show/hide toggle
- Biometric icon option (fingerprint) with subtle pulse animation
- "Recordar usuario" checkbox below
- Full-width primary button

**Dashboard:**
- Account balance hero card at top with gradient
- Saldo CA$ label + masked account number
- Quick action grid (2x3): Transferir, MODO Pedir, MODO Enviar, Recargar, Servicios, Más
- "Pagos con MODO" section with horizontally scrolling cards
- Recent transactions list at bottom

**Transfer Screens:**
- Step indicator at top
- Form fields with clear labels
- Amount input with large, prominent display
- Confirmation screen shows summary card before processing
- Success screen with checkmark icon and transaction details

**Processing Overlay:**
- Centered spinner with "Procesando Transacción..." text
- Semi-transparent backdrop (backdrop-blur-md)
- Can't be dismissed until complete

---

## Images

**Logo:** BNA+ logo in white for splash/header (SVG, transparent background)
**Icons:** Banking-specific iconography via icon library (no custom generation needed)
**Avatars/Placeholders:** Use colored initials circles for transaction avatars
**No Hero Images:** This is a utility-first banking interface - no decorative photography needed

---

## Accessibility & Quality Standards

- Minimum touch targets: 44x44px
- WCAG AA contrast ratios maintained
- Dark mode fully supported across all screens
- Focus states visible for keyboard navigation (desktop web access)
- Clear error messages with actionable guidance
- Loading states for all async operations