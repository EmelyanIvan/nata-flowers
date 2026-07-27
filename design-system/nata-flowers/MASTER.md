# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Nata Flowers
**Generated:** 2026-07-27 19:59:57
**Category:** Hyperlocal Services
**Design Dials:** Variance 5/10 (Balanced / Modern) | Motion 7/10 (Standard) | Density 3/10 (Spacious)

---

## Global Rules

### Color Palette

> ⚠️ **ВНИМАНИЕ. Ниже идёт исходная выдача генератора, она НЕ применена как есть.**
> Фактические значения, которые стоят на сайте, смотрите в разделе
> «Фактическая палитра и шрифты» сразу под этим блоком. Две правки были обязательными:
> предложенные шрифты не имеют кириллицы, а мятный фон конфликтует с фотографиями.

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#15803D` | `--color-primary` |
| On Primary | `#FFFFFF` | `--color-on-primary` |
| Secondary | `#22C55E` | `--color-secondary` |
| Accent/CTA | `#EC4899` | `--color-accent` |
| Background | `#F0FDF4` | `--color-background` |
| Foreground | `#14532D` | `--color-foreground` |
| Muted | `#E8F0F1` | `--color-muted` |
| Border | `#BBF7D0` | `--color-border` |
| Destructive | `#DC2626` | `--color-destructive` |
| Ring | `#15803D` | `--color-ring` |

**Color Notes:** Natural green + floral pink

### Typography (исходная выдача, НЕ используется)

- **Heading Font:** Amatic SC
- **Body Font:** Cabin
- **Mood:** indie, craft, handmade, artisan, organic, creative

---

## Фактическая палитра и шрифты (то, что реально на сайте)

### Цвета

| Роль | Hex | CSS-переменная |
|------|-----|----------------|
| Основной, «сад» | `#2E5E3A` | `--garden` |
| Тёмный зелёный, тёмные секции | `#1D3F26` | `--garden-dk` |
| Акцент, кнопки, цвет её пионов | `#B92F58` | `--peony` |
| Светлый акцент | `#E58BA5` | `--peony-lt` |
| Фон, тёплый кремовый | `#FDFAF6` | `--cream` |
| Второй фон | `#F5EDE4` | `--cream-2` |
| Текст | `#1E2A1C` | `--ink` |
| Второстепенный текст | `#4A5A46` | `--ink-soft` |

Мятный фон `#F0FDF4` заменён на кремовый: фотографии Натальи почти сплошь
малиновые пионы, и мятная подложка с ними спорит.

### Шрифты

| Роль | Шрифт |
|------|-------|
| Заголовки | Cormorant Garamond |
| Основной текст | Manrope |
| Каллиграфия: названия цветов, подписи | Great Vibes |

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Manrope:wght@400;500;600;700&family=Great+Vibes&display=swap');
```

**Почему не Amatic SC и Cabin.** Ни в одном из них нет кириллицы, русский текст
не отрисовался бы. Проверять любой новый шрифт нужно так:

```bash
curl -s "https://fonts.googleapis.com/css2?family=ИМЯ&display=swap" | grep cyrillic
```

Проверено для каллиграфических шрифтов. **Кириллицы НЕТ:** Dancing Script,
Parisienne, Pinyon Script, Italianno, Tangerine, Alex Brush, Sacramento,
Rouge Script, Playball. **Кириллица ЕСТЬ:** Great Vibes, Marck Script, Bad Script,
Pacifico, Lobster, Neucha, Yeseva One, Kurale, Cormorant Infant.

### Правила текста

Длинное и среднее тире на сайте не используются по требованию заказчика.
Фразы строятся так, чтобы тире не требовалось: через точку, запятую, двоеточие
или предлог. Просто удалять символ нельзя, во многих русских конструкциях
тире грамматически обязательно.

---

### Spacing Variables

*Density: 3/10, Spacious*

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `24px` / `1.5rem` | Standard padding |
| `--space-lg` | `32px` / `2rem` | Section padding |
| `--space-xl` | `48px` / `3rem` | Large gaps |
| `--space-2xl` | `64px` / `4rem` | Section margins |
| `--space-3xl` | `96px` / `6rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #EC4899;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #15803D;
  border: 2px solid #15803D;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #F0FDF4;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #15803D;
  outline: none;
  box-shadow: 0 0 0 3px #15803D20;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Soft UI Evolution

**Keywords:** Evolved soft UI, better contrast, modern aesthetics, subtle depth, accessibility-focused, improved shadows, hybrid

**Best For:** Modern enterprise apps, SaaS platforms, health/wellness, modern business tools, professional, hybrid

**Key Effects:** Improved shadows (softer than flat, clearer than neumorphism), modern (200-300ms), focus visible, WCAG AA/AAA

### Page Pattern

**Pattern Name:** Conversion + Feature-Rich

- **CTA Placement:** Above fold
- **Section Order:** Hero > Features > CTA

---

## Motion

**Stagger List** (Standard), Trigger: load or scroll | Duration: 300-450ms | Easing: `back.out(1.4)`

```js
gsap.from('.grid-item', { opacity: 0, scale: 0.92, y: 16, duration: 0.4, stagger: { each: 0.06, from: 'start', grid: 'auto' }, ease: 'back.out(1.4)' });
```

**Framework notes:** grid: 'auto' lets GSAP infer rows/columns from a CSS grid layout for a natural wave stagger

- ✅ Combine with from: 'center' for a bento-grid layout to draw the eye inward first
- ❌ Don't use back.out on dense data tables; the overshoot reads as sloppy on informational UI
- ⚡ Group DOM writes; avoid interleaving layout reads (getBoundingClientRect) between staggered tweens

---

## Anti-Patterns (Do NOT Use)

- ❌ No map
- ❌ Hidden reviews

### Additional Forbidden Patterns

- ❌ **Emojis as icons**, Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer**, All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers**, Avoid scale transforms that shift layout
- ❌ **Low contrast text**, Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes**, Always use transitions (150-300ms)
- ❌ **Invisible focus states**, Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
