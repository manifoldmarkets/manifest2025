'use client'

import { useEffect } from 'react'

/* -------------------------------------------------------------------------- */
/* PAGE_CSS — original m26-* tokens + new v1-* editorial styles                */
/* -------------------------------------------------------------------------- */

const PAGE_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Cinzel+Decorative:wght@400;700;900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');

:root {
  --m26-parchment: #f0e8df;
  --m26-cream: #f5f0eb;
  --m26-lav: #c8bdd6;
  --m26-purple: #6b5b8d;
  --m26-purple-deep: #4a3a6b;
  --m26-purple-dark: #2e1f4d;
  --m26-btn: #7b6b9e;
  --m26-btn-hover: #6a5a8d;
  --m26-muted: #6b5b7d;
  --m26-ink: #4a3a6b;

  /* V1 tokens (alias same palette) */
  --p: #f0e8df; --c: #f5f0eb; --pdeep: #2e1f4d; --pmid: #4a3a6b;
  --plav: #6b5b8d; --btn: #7b6b9e; --ink: #4a3a6b; --muted: #6b5b7d;
  --rule: rgba(74,58,107,0.18);

  --font-cinzel: "Cinzel", serif;
  --font-cinzel-deco: "Cinzel Decorative", serif;
  --font-baskerville: "Libre Baskerville", Georgia, serif;
  --cinzel: "Cinzel", serif;
  --deco: "Cinzel Decorative", serif;
  --serif: "Libre Baskerville", Georgia, serif;
  --display: "Cormorant Garamond", "Libre Baskerville", Georgia, serif;
}

* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  background: var(--m26-parchment);
  color: var(--m26-purple-deep);
  font-family: var(--font-baskerville);
  -webkit-font-smoothing: antialiased;
}

.pill { border-radius: 9999px 0 9999px 0; }
a { color: inherit; }
img { max-width: 100%; display: block; }

/* ----- NAV (original m26 chrome — kept) ----- */
nav.top {
  position: fixed; top: 0; left: 0; right: 0;
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 24px;
  background: rgba(240, 232, 223, 0.30);
  backdrop-filter: blur(6px);
  z-index: 50;
  transition: background 180ms, box-shadow 180ms;
}
.top__brand {
  font-family: var(--font-cinzel);
  font-weight: 700; font-size: 14px;
  text-transform: uppercase; letter-spacing: 0.04em;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
}
.top__links { display: flex; align-items: center; gap: 24px; }
.top__links a {
  font-family: var(--font-cinzel);
  font-weight: 700; font-size: 14px;
  color: #fff; text-decoration: none;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
}
.top__links a:hover { opacity: 0.7; }
nav.top.is-scrolled {
  background: rgba(240, 232, 223, 0.88);
  box-shadow: 0 1px 10px rgba(46,31,77,0.08);
}
nav.top.is-scrolled .top__brand,
nav.top.is-scrolled .top__links a {
  color: var(--m26-purple-deep);
  text-shadow: none;
}
nav.top.is-scrolled .top__register { color: #fff !important; }
.top__register {
  background: var(--m26-btn);
  color: #fff !important;
  text-shadow: none !important;
  padding: 8px 20px;
}
.top__register:hover { background: var(--m26-btn-hover); }

/* ----- HERO (V1 editorial) ----- */
.v1-hero { position: relative; height: 100vh; min-height: 720px; overflow: hidden; }
.v1-hero__img {
  position: absolute; inset: 0;
  background-size: cover; background-position: center;
  transform: scale(1.04);
}
.v1-hero__veil {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at center, transparent 50%, rgba(20,16,14,0.25) 100%),
    linear-gradient(to bottom, rgba(20,16,14,0.05), rgba(20,16,14,0.30));
}
.v1-hero__fade {
  position: absolute; left: 0; right: 0; bottom: 0;
  height: 10vh;
  background: linear-gradient(to top, var(--m26-parchment), transparent);
  pointer-events: none;
}
.v1-hero__inner {
  position: absolute; inset: 0; display: flex; flex-direction: column;
  align-items: center; justify-content: center; text-align: center;
  padding: 0 24px; color: #fff;
}
.v1-hero__eyebrow {
  font-family: var(--cinzel); font-size: 12px; letter-spacing: 0.4em; text-transform: uppercase;
  color: rgba(255,255,255,0.85); margin-bottom: 18px;
}
.v1-hero__title {
  font-family: var(--deco); font-weight: 700; font-size: 128px; line-height: 1;
  margin: 0; letter-spacing: -0.04em; color: #fff;
  text-shadow:
    0 2px 4px rgba(46,31,77,0.95),
    0 4px 20px rgba(46,31,77,0.85),
    0 8px 40px rgba(46,31,77,0.7);
}
.v1-hero__sub {
  margin: 28px 0 36px; font-family: var(--cinzel); font-weight: 700;
  font-size: 24px; line-height: 1.4; color: rgba(255,255,255,0.95);
  letter-spacing: 0.02em;
  text-shadow: 0 2px 10px rgba(46,31,77,0.7);
}
.v1-hero__row { display: flex; gap: 14px; }
.v1-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 26px; font-family: var(--cinzel); font-weight: 700; font-size: 13px;
  letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none;
  border-radius: 999px 0 999px 0; transition: transform 200ms, background 160ms;
}
.v1-btn--solid { background: #fff; color: var(--pdeep); }
.v1-btn--solid:hover { transform: translateY(-1px); }
.v1-btn--ink {
  background: var(--m26-btn); color: #fff;
  padding: 10px 24px; font-size: 13px;
}
.v1-btn--ink:hover { background: var(--m26-btn-hover); }

/* ----- shared editorial primitives ----- */
.v1-divider { border: 0; height: 1px; background: var(--rule); margin: 0 0 36px; }
.v1-h2 {
  font-family: var(--display); font-style: italic; font-weight: 500; font-size: 84px; line-height: 0.95;
  margin: 0 0 28px; letter-spacing: -0.015em; color: var(--pdeep);
}
.v1-h2 em { font-style: italic; color: var(--plav); }
.v1-h2--center { text-align: center; }
.v1-lede {
  font-family: var(--serif); font-style: italic; font-size: 22px; line-height: 1.55;
  margin: 0 0 18px; color: var(--pdeep); max-width: 56ch;
}
.v1-body {
  font-size: 16px; line-height: 1.75; color: var(--pmid); margin: 0; max-width: 64ch;
}

.scroll-mt { scroll-margin-top: 64px; }

/* ----- SPEAKERS (V1) ----- */
.v1-speakers { padding: 28px 56px 80px; }
.v1-speakers__head { display: grid; grid-template-columns: 1.2fr 1fr; gap: 56px; align-items: end; margin-bottom: 44px; }
.v1-speakers__head .v1-h2 { margin: 0; }
.v1-spk-grid {
  display: grid; grid-template-columns: repeat(5, 1fr); gap: 4px 0;
}
.v1-spk { margin: 0; display: flex; flex-direction: column; align-items: center; }
.v1-spk__img {
  width: 112px; height: 112px;
  background-size: cover; background-position: center center;
  border-radius: 50%;
  box-shadow: 0 4px 16px rgba(46,31,77,0.2);
  transition: transform 250ms ease, filter 250ms ease;
}
.v1-spk:hover .v1-spk__img { transform: scale(1.04); filter: brightness(1.05); }
.v1-spk figcaption { display: flex; flex-direction: column; gap: 2px; padding-top: 12px; align-items: center; text-align: center; }
.v1-spk__name {
  font-family: var(--cinzel); font-weight: 700; font-size: 12px;
  letter-spacing: 0.06em; text-transform: uppercase; color: var(--pdeep);
}
.v1-spk__role { font-style: italic; font-size: 12px; color: var(--muted); }

.v1-spk-more { margin: 64px auto 0; text-align: center; max-width: 900px; }
.v1-spk-more__label {
  display: block;
  font-family: var(--cinzel); font-weight: 600; font-size: 12px;
  letter-spacing: 0.32em; text-transform: uppercase; color: var(--plav);
  margin-bottom: 36px;
}
.v1-spk-more__grid {
  display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 56px; row-gap: 8px;
  font-family: var(--cinzel); font-weight: 500; font-size: 14px;
  letter-spacing: 0.02em; color: var(--m26-ink); line-height: 1.3;
}
.v1-spk-more__grid > :nth-child(3n+1) { text-align: right; }
.v1-spk-more__grid > :nth-child(3n+2) { text-align: center; }
.v1-spk-more__grid > :nth-child(3n)   { text-align: left; }
.v1-spk-more__note {
  margin: 56px 0 0; font-family: var(--cinzel); font-style: italic;
  font-size: 16px; color: var(--m26-purple);
  letter-spacing: 0.02em;
}

/* ----- WHAT IS MANIFEST (V1) ----- */
.v1-what { margin: 0; padding: 0; }
.v1-what__grid { display: grid; grid-template-columns: 1fr 1fr; align-items: start; }
.v1-what__images { display: flex; flex-direction: column; gap: 0; }
.v1-what__img-wrap { overflow: hidden; display: block; }
.v1-what__img {
  width: 100%; height: auto; display: block;
  transition: transform 250ms ease, filter 250ms ease;
}
.v1-what__img-wrap:hover .v1-what__img { transform: scale(1.04); filter: brightness(1.05); }
.v1-what__text { padding: 0 56px; }
.v1-what__text .v1-themes__title { white-space: normal; margin-top: 48px; }

/* ----- THEMES GRID (V1) ----- */
.v1-themes { padding: 0; }
.v1-themes__head { margin: 0; padding: 0 56px 40px; }
.v1-themes__title {
  font-family: var(--display); font-style: italic; font-weight: 500; font-size: 56px; line-height: 1.0;
  letter-spacing: -0.015em; max-width: none; white-space: nowrap; margin: 0 0 18px; color: var(--pdeep);
}
.v1-themes__sub {
  font-family: var(--serif); font-size: 16px; line-height: 1.75;
  color: var(--pmid); margin: 0; max-width: 64ch;
}
.v1-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule);
}
.v1-cell {
  position: relative; min-height: 360px; padding: 36px 56px;
  border-right: 1px solid var(--rule); border-bottom: 1px solid var(--rule);
  margin: 0;
}
.v1-cell:nth-child(2n) { border-right: none; }
.v1-cell:nth-last-child(-n+2) { border-bottom: none; }
.v1-cell--photo { padding: 0; overflow: hidden; }
.v1-cell--photo .v1-cell__img {
  position: absolute; inset: 0; background-size: cover; background-position: center;
  transition: transform 600ms ease;
}
.v1-cell--photo:hover .v1-cell__img { transform: scale(1.03); }
.v1-cell--photo figcaption {
  position: absolute; left: 24px; bottom: 20px; color: #fff;
  font-family: var(--cinzel); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
  text-shadow: 0 1px 6px rgba(0,0,0,0.6);
}
.v1-cell--photo figcaption i { font-style: normal; opacity: 0.7; margin-right: 10px; }

.v1-cell--list { padding-top: 0; }
.v1-cell--list header {
  display: flex; justify-content: space-between; align-items: baseline; gap: 16px;
  margin: 0 -56px 18px; padding: 22px 56px 14px;
  background: var(--p);
  border-bottom: 1px dotted var(--rule);
}
.v1-list__cat {
  font-family: var(--cinzel); font-weight: 700; font-size: 18px;
  letter-spacing: 0.04em; text-transform: uppercase; color: var(--pdeep);
}
.v1-list__items {
  list-style: none; margin: 0; padding: 0;
  font-family: var(--serif); font-size: 13.5px; line-height: 1.45; color: var(--ink);
}
.v1-list__items li {
  display: flex; align-items: baseline; gap: 16px;
  padding: 9px 0;
  border-bottom: 1px dotted var(--rule);
  transition: color 150ms;
}
.v1-list__items li i {
  font-style: italic; color: var(--muted); font-size: 12px;
  text-align: right; white-space: nowrap;
}
.v1-list__items li:last-child { border-bottom: none; }
.v1-list__items li:hover { color: var(--pdeep); }
.v1-list__items li b {
  flex: 1; font-family: var(--serif); font-style: normal; font-weight: 400;
  font-size: 14px; color: var(--pdeep); letter-spacing: 0;
}
.v1-themes__more {
  display: flex; justify-content: center; padding: 36px 56px;
  border-bottom: 1px solid var(--rule);
}
.v1-themes__more-link {
  font-family: var(--cinzel); font-weight: 700; font-size: 13px;
  letter-spacing: 0.18em; text-transform: uppercase; text-decoration: none;
  color: var(--pdeep); padding-bottom: 4px;
  border-bottom: 1px dotted rgba(74,58,107,0.45);
  transition: color 160ms, border-color 160ms, transform 160ms;
}
.v1-themes__more-link:hover {
  color: var(--m26-btn); border-color: var(--m26-btn);
}
.v1-themes__more-link .v1-themes__more-arrow {
  display: inline-block; margin-left: 10px; transition: transform 200ms;
}
.v1-themes__more-link:hover .v1-themes__more-arrow { transform: translateX(4px); }

/* ----- NIGHT MARKET (V1) ----- */
.v1-nm { padding: 0 56px 88px; }
.v1-strip {
  display: flex;
  gap: 0;
  border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}
.v1-strip::-webkit-scrollbar { height: 6px; }
.v1-strip::-webkit-scrollbar-thumb { background: rgba(74,58,107,0.3); border-radius: 999px; }
.v1-nm { padding-top: 0; }
.v1-nm > .v1-strip { margin: 0 -56px 56px; }
.v1-strip__item {
  position: relative; flex: 0 0 25%;
  aspect-ratio: 4/3; margin: 0;
  border-right: 1px solid var(--rule); overflow: hidden;
  scroll-snap-align: start;
}
.v1-strip__item:last-child { border-right: none; }
.v1-strip__img {
  position: absolute; inset: 0; background-size: cover; background-position: center;
  transition: transform 600ms ease;
}
/* (no strip hover) */
.v1-strip__item figcaption {
  position: absolute; left: 16px; bottom: 14px; color: #fff;
  font-family: var(--cinzel); font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
  text-shadow: 0 1px 6px rgba(0,0,0,0.7);
}
.v1-strip__item figcaption i { font-style: normal; opacity: 0.7; margin-right: 8px; }

.v1-nm__row {
  display: grid; grid-template-columns: 1fr 2fr; gap: 64px; align-items: start;
}
.v1-nm__eyebrow {
  display: block; font-family: var(--cinzel); font-weight: 500; font-size: 12px; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--muted); margin-bottom: 18px;
}
.v1-nm__title {
  font-family: var(--deco); font-style: normal; font-weight: 400; font-size: 36px;
  line-height: 1.1; letter-spacing: 0.04em; text-transform: uppercase; color: var(--pdeep); margin: 0 0 24px;
}
.v1-nm__lede .v1-body {
  margin: 0 0 24px; max-width: 36ch; font-family: var(--serif);
  font-size: 14px; font-weight: 400; line-height: 1.6; color: var(--ink);
}
.v1-nm__pill {
  display: inline-block;
  font-family: var(--cinzel); font-weight: 700; font-size: 11px; letter-spacing: 0.22em;
  text-transform: uppercase; color: var(--pdeep);
}
.v1-nm__cols { display: grid; grid-template-columns: 1fr 1fr; gap: 0 48px; padding-top: 8px; }
.v1-nm__col { margin: 0; display: flex; flex-direction: column; }
.v1-nm__col > div {
  padding: 0 0 24px 0;
}
.v1-nm__col > div:last-child { padding-bottom: 0; }
.v1-nm__col dt {
  font-family: var(--cinzel); font-weight: 700; font-size: 13px;
  letter-spacing: 0.14em; text-transform: uppercase; color: var(--pdeep);
  margin-bottom: 6px;
}
.v1-nm__col dd {
  margin: 0; font-family: var(--serif); font-weight: 400; font-size: 13px;
  line-height: 1.5; color: var(--ink);
}
.v1-nm__cta { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; margin-top: 56px; }

/* ----- TESTIMONIALS (V1) ----- */
.v1-testi { padding: 28px 56px 80px; }
.v1-testi__head { margin-bottom: 56px; display: flex; flex-direction: column; align-items: center; gap: 12px; }
.v1-testi__row {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
}
.v1-testi__card {
  margin: 0; padding: 28px 26px;
  background: var(--m26-cream);
  border: 1px solid var(--rule);
  display: flex; flex-direction: column; gap: 18px;
  text-decoration: none;
  transition: box-shadow 220ms, border-color 220ms, transform 220ms;
}
.v1-testi__card:hover {
  border-color: var(--plav); box-shadow: 0 14px 32px rgba(46,31,77,0.10);
  transform: translateY(-2px);
}
.v1-testi__card blockquote {
  margin: 0;
  font-family: var(--display); font-style: italic;
  font-size: 17px; line-height: 1.55; color: var(--pdeep);
  text-wrap: pretty;
}
.v1-testi__card figcaption {
  margin-top: auto;
  font-family: var(--cinzel); font-size: 11px; letter-spacing: 0.22em;
  text-transform: uppercase; color: var(--plav);
  border-top: 1px dotted var(--rule);
  padding-top: 16px;
}

/* ----- SPONSORS (V1) ----- */
.v1-spon { padding: 28px 56px 88px; text-align: center; }
.v1-spon__head { margin-bottom: 56px; display: flex; flex-direction: column; align-items: center; gap: 12px; }
.v1-spon__head-row {
  display: flex; align-items: center; gap: 18px; margin: 0 auto 18px; max-width: 760px;
}
.v1-spon__tier {
  font-family: var(--cinzel); font-weight: 600; font-size: 11px;
  letter-spacing: 0.28em; text-transform: uppercase; color: var(--plav);
  flex: 0 0 auto;
}
.v1-spon__rule { flex: 1; height: 1px; background: var(--rule); }
.v1-spon__row {
  display: flex; flex-wrap: wrap; align-items: baseline; justify-content: center;
  gap: 18px 28px; margin-bottom: 36px;
}
.v1-spon__row--head { margin-bottom: 44px; }
.v1-spon__name {
  font-family: var(--display); font-weight: 500; font-size: 22px;
  color: var(--pdeep); letter-spacing: -0.01em;
  text-decoration: none;
}
.v1-spon__name--lg { font-size: 32px; }
.v1-spon__name--xl { font-size: 56px; font-weight: 600; letter-spacing: -0.02em; }
.v1-spon__sep { color: var(--plav); font-size: 14px; }
.v1-spon__cta { margin-top: 20px; }

/* ----- SPONSORS (original m26 — restored) ----- */
.sponsors-orig { padding: 28px 56px 88px; text-align: center; }
.sponsors-orig .v1-h2 { margin-bottom: 56px; }
.sponsors-stack { display: flex; flex-direction: column; align-items: center; gap: 32px; }
.sponsors-row { display: flex; align-items: center; gap: 56px; }
.mono-img { display: block; }
.mono-img--polymarket {
  height: 80px; width: 280px;
  background-color: var(--m26-purple);
  -webkit-mask-image: url('/images/sponsors/polymarket-logo.svg');
  mask-image: url('/images/sponsors/polymarket-logo.svg');
  -webkit-mask-size: contain; mask-size: contain;
  -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;
  -webkit-mask-position: center; mask-position: center;
}
.mono-img--substack {
  height: 48px; width: 200px;
  background-color: var(--m26-purple);
  -webkit-mask-image: url('/images/sponsors/substack-logo.png');
  mask-image: url('/images/sponsors/substack-logo.png');
  -webkit-mask-size: contain; mask-size: contain;
  -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;
  -webkit-mask-position: center; mask-position: center;
}
.mono-img--kalshi {
  height: 48px; width: 120px;
  background-color: var(--m26-purple);
  -webkit-mask-image: url('/images/sponsors/kalshi-logo.svg');
  mask-image: url('/images/sponsors/kalshi-logo.svg');
  -webkit-mask-size: contain; mask-size: contain;
  -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;
  -webkit-mask-position: center; mask-position: center;
}
.sponsors-small {
  margin-top: 8px;
  font-family: var(--font-cinzel); font-weight: 700; font-size: 18px;
  letter-spacing: 0.02em; color: var(--m26-purple);
}
.sponsors-cta { margin-top: 40px; text-align: center; }
.btn-solid {
  display: inline-block;
  background: var(--m26-btn); color: #fff !important;
  padding: 12px 24px;
  font-family: var(--font-cinzel); font-weight: 700; font-size: 14px;
  letter-spacing: 0.08em; text-decoration: none;
  transition: background 160ms;
}
.btn-solid:hover { background: var(--m26-btn-hover); }

/* ----- TICKETS (V1, restored) ----- */
.v1-tix { padding: 28px 56px 80px; }
.v1-tix__head { text-align: center; margin-bottom: 36px; }
.v1-tix__frame {
  max-width: 1100px; margin: 0 auto;
  background: var(--m26-cream);
}
.v1-tix__frame iframe {
  width: 100%; height: 900px; border: 0; display: block; background: var(--m26-cream);
}

/* ----- FAQ (V1) ----- */
.v1-faq { padding: 28px 56px 80px; }
.v1-faq__head { margin-bottom: 36px; }
.v1-faq__list {
  margin: 0; padding: 0;
  border-top: 1px solid var(--rule);
}
.v1-faq__item {
  position: relative;
  border-bottom: 1px solid var(--rule);
  padding: 20px 36px 20px 0;
  display: grid; grid-template-columns: 1fr 1.2fr; gap: 48px;
  align-items: baseline;
  cursor: pointer;
}
.v1-faq__item::after {
  content: '+';
  position: absolute;
  right: 0; top: 20px;
  font-family: var(--cinzel); font-weight: 600; font-size: 22px;
  color: var(--plav);
  transition: color 150ms;
}
.v1-faq__item.open::after { content: '−'; color: var(--pdeep); }
.v1-faq__item dt {
  margin: 0;
  font-family: var(--display); font-weight: 600; font-size: 22px;
  color: var(--pdeep); line-height: 1.25;
  display: flex; gap: 14px; align-items: baseline;
}
/* +/- now lives on .v1-faq__item itself */
.v1-faq__num {
  font-family: var(--cinzel); font-weight: 500; font-size: 11px;
  letter-spacing: 0.18em; color: var(--plav); flex: 0 0 auto;
}
.v1-faq__item dd {
  margin: 0;
  font-family: var(--serif); font-size: 14px; line-height: 1.65;
  color: var(--ink); text-wrap: pretty;
}
.v1-faq__item dd a {
  color: var(--m26-purple);
  text-decoration: underline; text-underline-offset: 2px;
}
.v1-faq__item dd a:hover { color: var(--m26-purple-deep); }

/* ----- ORGANIZERS (V1) ----- */
.v1-org { padding: 28px 56px 88px; text-align: center; }
.v1-org__head { margin-bottom: 48px; display: flex; flex-direction: column; align-items: center; gap: 8px; }
.v1-org__sub {
  font-family: var(--display); font-style: italic; font-size: 18px;
  color: var(--muted); margin: 0;
}
.v1-org__grid {
  display: flex; justify-content: center; gap: 72px;
}
.v1-org__card { margin: 0; display: flex; flex-direction: column; align-items: center; gap: 12px; }
.v1-org__photo {
  width: 144px; height: 144px; border-radius: 50%;
  background-size: cover; background-position: center;
  background-color: var(--plav);
  box-shadow: 0 6px 20px rgba(46,31,77,0.18);
  transition: transform 250ms;
}
.v1-org__card:hover .v1-org__photo { transform: scale(1.04); }
.v1-org__name {
  display: block;
  font-family: var(--cinzel); font-weight: 700; font-size: 14px;
  letter-spacing: 0.06em; text-transform: uppercase; color: var(--pdeep);
}
.v1-org__email {
  display: block; margin-top: 2px;
  font-family: var(--display); font-style: italic; font-size: 14px;
  color: var(--muted); text-decoration: none;
}
.v1-org__email:hover { color: var(--pdeep); }

/* ----- FOOTER (V1) ----- */
.v1-foot {
  padding: 56px 56px 64px; background: var(--pdeep); color: rgba(255,255,255,0.85);
}
.v1-foot__row { display: flex; justify-content: space-between; align-items: flex-start; gap: 32px; }
.v1-foot__brand { display: flex; flex-direction: column; gap: 6px; }
.v1-foot__title {
  font-family: var(--deco); font-weight: 700; font-size: 28px; color: #fff;
}
.v1-foot__sub {
  font-family: var(--cinzel); font-size: 11px; letter-spacing: 0.28em;
  text-transform: uppercase; color: rgba(255,255,255,0.6);
}
.v1-foot__links { display: flex; flex-wrap: wrap; gap: 18px 28px; max-width: 360px; justify-content: flex-end; }
.v1-foot__links a {
  color: rgba(255,255,255,0.8); text-decoration: none;
  font-family: var(--cinzel); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
}
.v1-foot__links a:hover { color: #fff; }
.v1-foot__rule { height: 1px; background: rgba(255,255,255,0.2); margin: 36px 0 22px; }
.v1-foot__fine {
  display: flex; justify-content: space-between; gap: 24px;
  font-family: var(--cinzel); font-size: 10px; letter-spacing: 0.22em;
  text-transform: uppercase; color: rgba(255,255,255,0.5);
}

/* ----- responsive ----- */
@media (max-width: 900px) {
  .v1-spk-grid { grid-template-columns: repeat(3, 1fr); }
  .v1-grid { grid-template-columns: 1fr; }
  .v1-cell { border-right: none; }
  .v1-nm__row { grid-template-columns: 1fr; gap: 40px; }
  .v1-nm__cols { grid-template-columns: 1fr; }
  .v1-testi__row { grid-template-columns: 1fr; }
  .v1-faq__item { grid-template-columns: 1fr; gap: 12px; }
  .v1-speakers__head { grid-template-columns: 1fr; gap: 20px; }
  .v1-strip { grid-template-columns: repeat(2, 1fr); }
  .v1-what__grid { grid-template-columns: 1fr; gap: 32px; }
}
@media (max-width: 720px) {
  .v1-hero__title { font-size: 64px; }
  .v1-hero__sub { font-size: 18px; }
  .v1-h2 { font-size: 48px; }
  .v1-nm__title { font-size: 48px; }
  .v1-themes__title { font-size: 36px; }
  .v1-speakers, .v1-themes__head, .v1-nm, .v1-testi, .v1-spon, .v1-tix, .v1-faq, .v1-org { padding-left: 24px; padding-right: 24px; }
  .v1-what__text { padding: 0 24px; }
  .v1-cell { padding: 28px 24px; }
  .v1-cell--list header { margin: 0 -24px 18px; padding: 22px 24px 14px; }
  .v1-themes__more { padding: 28px 24px; }
  .v1-themes__more-link { font-size: 11px; letter-spacing: 0.16em; text-align: center; }
  .v1-foot { padding: 40px 24px 48px; }
  .v1-foot__row { flex-direction: column; gap: 24px; }
  .v1-foot__links { justify-content: flex-start; }
  .v1-foot__fine { flex-direction: column; gap: 8px; }
}
`

/* -------------------------------------------------------------------------- */
/* PAGE_HTML — V1 markup, with ticket section preserved                       */
/* -------------------------------------------------------------------------- */

const PAGE_HTML = `
<!-- NAV -->
<nav class="top">
  <span class="top__brand">Manifest 2026</span>
  <div class="top__links">
    <a href="#speakers">Speakers</a>
    <a href="#what-is-manifest">Festival</a>
    <a href="#nightmarket">Night Market</a>
    <a href="#faq">FAQ</a>
    <a href="#tickets" class="top__register pill">Register</a>
  </div>
</nav>

<!-- HERO -->
<section class="v1-hero">
  <div class="v1-hero__img" style="background-image: url('/images/2026/campfire.jpg');"></div>
  <div class="v1-hero__veil"></div>
  <div class="v1-hero__inner">
    <h1 class="v1-hero__title">Manifest 2026</h1>
    <p class="v1-hero__sub">A festival for predictions,<br/>and markets thereof.</p>
    <div class="v1-hero__row">
      <a href="#tickets" class="v1-btn v1-btn--solid pill">Register · June 12–14 · Berkeley</a>
    </div>
  </div>
  <div class="v1-hero__fade"></div>
</section>

<!-- SPEAKERS -->
<section id="speakers" class="v1-speakers scroll-mt">
  <hr class="v1-divider" />
  <header class="v1-speakers__head">
    <h2 class="v1-h2">Speakers of <em>Past Years</em></h2>
  </header>
  <div class="v1-spk-grid">
    <figure class="v1-spk"><div class="v1-spk__img" style="background-image:url('/images/speakers/nate.jpg')"></div><figcaption><span class="v1-spk__name">Nate Silver</span><span class="v1-spk__role">Silver Bulletin</span></figcaption></figure>
    <figure class="v1-spk"><div class="v1-spk__img" style="background-image:url('/images/speakers/scott.jpg')"></div><figcaption><span class="v1-spk__name">Scott Alexander</span><span class="v1-spk__role">Astral Codex Ten</span></figcaption></figure>
    <figure class="v1-spk"><div class="v1-spk__img" style="background-image:url('/images/speakers/chris.jpg')"></div><figcaption><span class="v1-spk__name">Chris Best</span><span class="v1-spk__role">Substack</span></figcaption></figure>
    <figure class="v1-spk"><div class="v1-spk__img" style="background-image:url('/images/speakers/luana.jpg')"></div><figcaption><span class="v1-spk__name">Luana Lopes Lara</span><span class="v1-spk__role">Kalshi</span></figcaption></figure>
    <figure class="v1-spk"><div class="v1-spk__img" style="background-image:url('/images/speakers/shayne.jpg')"></div><figcaption><span class="v1-spk__name">Shayne Coplan</span><span class="v1-spk__role">Polymarket</span></figcaption></figure>
    <figure class="v1-spk"><div class="v1-spk__img" style="background-image:url('/images/speakers/emmett.jpg')"></div><figcaption><span class="v1-spk__name">Emmett Shear</span><span class="v1-spk__role">Softmax</span></figcaption></figure>
    <figure class="v1-spk"><div class="v1-spk__img" style="background-image:url('/images/speakers/joe.jpg')"></div><figcaption><span class="v1-spk__name">Joe Carlsmith</span><span class="v1-spk__role">Anthropic</span></figcaption></figure>
    <figure class="v1-spk"><div class="v1-spk__img" style="background-image:url('/images/speakers/laura.jpg')"></div><figcaption><span class="v1-spk__name">Laura Deming</span><span class="v1-spk__role">Cradle</span></figcaption></figure>
    <figure class="v1-spk"><div class="v1-spk__img" style="background-image:url('/images/speakers/patrick.jpg')"></div><figcaption><span class="v1-spk__name">Patrick McKenzie</span><span class="v1-spk__role">Writer</span></figcaption></figure>
    <figure class="v1-spk"><div class="v1-spk__img" style="background-image:url('/images/speakers/robin.jpg')"></div><figcaption><span class="v1-spk__name">Robin Hanson</span><span class="v1-spk__role">Economist</span></figcaption></figure>
    <figure class="v1-spk"><div class="v1-spk__img" style="background-image:url('/images/speakers/davidshor.jpg')"></div><figcaption><span class="v1-spk__name">David Shor</span><span class="v1-spk__role">Blue Rose Research</span></figcaption></figure>
    <figure class="v1-spk"><div class="v1-spk__img" style="background-image:url('/images/speakers/dwarkesh.jpg')"></div><figcaption><span class="v1-spk__name">Dwarkesh Patel</span><span class="v1-spk__role">Dwarkesh Podcast</span></figcaption></figure>
    <figure class="v1-spk"><div class="v1-spk__img" style="background-image:url('/images/speakers/eliezer.jpg')"></div><figcaption><span class="v1-spk__name">Eliezer Yudkowsky</span><span class="v1-spk__role">MIRI</span></figcaption></figure>
    <figure class="v1-spk"><div class="v1-spk__img" style="background-image:url('/images/speakers/ajeya.jpg')"></div><figcaption><span class="v1-spk__name">Ajeya Cotra</span><span class="v1-spk__role">METR</span></figcaption></figure>
    <figure class="v1-spk"><div class="v1-spk__img" style="background-image:url('/images/speakers/agnes.webp')"></div><figcaption><span class="v1-spk__name">Agnes Callard</span><span class="v1-spk__role">Philosopher</span></figcaption></figure>
  </div>

  <div class="v1-spk-more">
    <span class="v1-spk-more__label">— And many more —</span>
    <div class="v1-spk-more__grid" id="past-list"></div>
    <p class="v1-spk-more__note"><em>Stay tuned as we announce speakers &amp; guests for 2026</em></p>
  </div>
</section>

<!-- WHAT IS MANIFEST -->
<section id="what-is-manifest" class="v1-what scroll-mt">
  <div class="v1-what__grid">
    <div class="v1-what__text">
      <hr class="v1-divider" />
      <h2 class="v1-h2">What is Manifest?</h2>
      <p class="v1-lede">Manifest started in <a href="/2023">2023</a> as a festival about prediction markets and forecasting; it has since become an annual excuse to treat curiosity as a serious hobby — long conversations, unfinished arguments, bets, and the company of writers, researchers, and builders you admire from your favorite niche corners of the internet.</p>
      <p class="v1-body">&ldquo;Equal parts Math Olympiad and Burning Man&rdquo; — a gathering of nerds who want to find the thinkers and practitioners they vehemently agree (and disagree) with, share a meal around a cozy campfire, and come away with radically new ways of thinking.</p>
      <h3 class="v1-themes__title">What sorts of things happen at Manifest?</h3>
      <p class="v1-themes__sub">Talks, panels, debates, workshops, games, prediction market tournaments, a night market, career fair, and much more. Much of the schedule comes from attendee-led sessions.</p>
    </div>
    <div class="v1-what__images">
      <div class="v1-what__img-wrap"><img class="v1-what__img" src="/images/2026/what-is-manifest-1.jpg" alt="Attendees gathered under sunshade canopies at Manifest" loading="lazy" decoding="async" /></div>
      <div class="v1-what__img-wrap"><img class="v1-what__img" src="/images/2026/what-is-manifest-2.jpg" alt="Attendees in conversation at Manifest" loading="lazy" decoding="async" /></div>
    </div>
  </div>
</section>

<!-- THEMES GRID -->
<section class="v1-themes">
  <div class="v1-grid">
    <figure class="v1-cell v1-cell--photo">
      <div class="v1-cell__img" style="background-image:url('/images/themes/sessions-1.jpg')"></div>
    </figure>
    <article class="v1-cell v1-cell--list">
      <header><span class="v1-list__cat">Talks</span></header>
      <ol class="v1-list__items">
        <li><b>Press X to Doubt: Journalism Edition</b><i>Patrick McKenzie</i></li>
        <li><b>Reforming Academia via Reputation Futures</b><i>Robin Hanson</i></li>
        <li><b>What Is Aristotle&rsquo;s Metaphysics About?</b><i>Arnold Brooks</i></li>
        <li><b>Humanist vs. Science/Tech Culture</b><i>Agnes Callard &amp; Robin Hanson</i></li>
        <li><b>Forecasting AI Risks: Anthropic&rsquo;s Responsible Scaling Policy</b><i>Ben Mann</i></li>
        <li><b>How Do We Solve the Alignment Problem?</b><i>Joe Carlsmith</i></li>
        <li><b>Data Science &amp; Politics</b><i>David Shor</i></li>
        <li><b>Predicting Large-Scale Catastrophes</b><i>Nuño Sempere</i></li>
      </ol>
    </article>

    <article class="v1-cell v1-cell--list">
      <header><span class="v1-list__cat">Workshops</span></header>
      <ol class="v1-list__items">
        <li><b>Fine-Tuning, the Multiverse, Anthropic Bias, and the Reference-Class Problem</b></li>
        <li><b>Matt Buckley: How to Change Your Mind (with Replacement Therapies)</b></li>
        <li><b>History Lecture with Live Betting</b></li>
        <li><b>SuperMemo &amp; Incremental Reading</b></li>
        <li><b>Intro to Quantitative Portfolio Construction</b></li>
        <li><b>Ricki Heicklen: Intro to Trading</b></li>
      </ol>
    </article>
    <figure class="v1-cell v1-cell--photo">
      <div class="v1-cell__img" style="background-image:url('/images/themes/talks-adjacent.jpg')"></div>
    </figure>

    <figure class="v1-cell v1-cell--photo">
      <div class="v1-cell__img" style="background-image:url('/images/gallery/2025-3.jpg'); background-position:center 30%;"></div>
    </figure>
    <article class="v1-cell v1-cell--list">
      <header><span class="v1-list__cat">Fireside / Panel / Q&amp;A</span></header>
      <ol class="v1-list__items v1-list__items--stack">
        <li><b>Founder of Upstart, Paul Gu</b></li>
        <li><b>Nate Silver &amp; Scott Alexander</b></li>
        <li><b>Manifold Founder, Stephen Grugett &amp; Theo Jaffee</b></li>
        <li><b>AI 2027 Q&amp;A, Eli Lifland</b></li>
        <li><b>Ajeya Cotra</b></li>
        <li><b>Kalshi Co-Founder, Luana Lopes Lara</b></li>
        <li><b>Substack CEO, Chris Best</b></li>
        <li><b>David Shor &amp; Jesse Richardson</b></li>
      </ol>
    </article>

    <article class="v1-cell v1-cell--list">
      <header><span class="v1-list__cat">&amp; Much more</span></header>
      <ol class="v1-list__items">
        <li><b>Speedfriending</b></li>
        <li><b>Dance Class with Aella</b></li>
        <li><b>Experimental Meditation Experiments</b></li>
        <li><b>Memory Systems / Anki / SRS Meetup</b></li>
        <li><b>Similarities Between Selling to Nation States and on Facebook Marketplace</b></li>
        <li><b>The Case for Interactionist Dualism</b></li>
        <li><b>Futurist Theory of Traditionalism</b></li>
        <li><b>Fun Etymology</b></li>
      </ol>
    </article>
    <figure class="v1-cell v1-cell--photo">
      <div class="v1-cell__img" style="background-image:url('/images/themes/much-more-guitar.png')"></div>
    </figure>
  </div>
  <div class="v1-themes__more">
    <a class="v1-btn v1-btn--ink pill v1-themes__more-btn" href="/pastsessions">See sessions from all previous years<span class="v1-themes__more-arrow">→</span></a>
  </div>
</section>

<!-- NIGHT MARKET -->
<section id="nightmarket" class="v1-nm scroll-mt">
  <div class="v1-strip">
    <figure class="v1-strip__item"><div class="v1-strip__img" style="background-image:url('/images/night-market/ish-8691.jpg')"></div></figure>
    <figure class="v1-strip__item"><div class="v1-strip__img" style="background-image:url('/images/night-market/7q4a-9011.jpg')"></div></figure>
    <figure class="v1-strip__item"><div class="v1-strip__img" style="background-image:url('/images/night-market/7q4a-0831.jpg')"></div></figure>
    <figure class="v1-strip__item"><div class="v1-strip__img" style="background-image:url('/images/night-market/7q4a-0927.jpg')"></div></figure>
    <figure class="v1-strip__item"><div class="v1-strip__img" style="background-image:url('/images/night-market/ish-3968.jpg')"></div></figure>
    <figure class="v1-strip__item"><div class="v1-strip__img" style="background-image:url('/images/night-market/7q4a-2266.jpg')"></div></figure>
    <figure class="v1-strip__item"><div class="v1-strip__img" style="background-image:url('/images/night-market/ish-8040.jpg')"></div></figure>
    <figure class="v1-strip__item"><div class="v1-strip__img" style="background-image:url('/images/night-market/7q4a-2067.jpg')"></div></figure>
    <figure class="v1-strip__item"><div class="v1-strip__img" style="background-image:url('/images/night-market/ish-5334.jpg')"></div></figure>
    <figure class="v1-strip__item"><div class="v1-strip__img" style="background-image:url('/images/night-market/ish-7882.jpg')"></div></figure>
    <figure class="v1-strip__item"><div class="v1-strip__img" style="background-image:url('/images/night-market/ish-8482.jpg')"></div></figure>
    <figure class="v1-strip__item"><div class="v1-strip__img" style="background-image:url('/images/night-market/7q4a-1682.jpg')"></div></figure>
    <figure class="v1-strip__item"><div class="v1-strip__img" style="background-image:url('/images/night-market/7q4a-9506.jpg')"></div></figure>
    <figure class="v1-strip__item"><div class="v1-strip__img" style="background-image:url('/images/night-market/7q4a-2536.jpg')"></div></figure>
    <figure class="v1-strip__item"><div class="v1-strip__img" style="background-image:url('/images/night-market/7q4a-9765.jpg')"></div></figure>
    <figure class="v1-strip__item"><div class="v1-strip__img" style="background-image:url('/images/night-market/20230924-img-8312.jpg')"></div></figure>
    <figure class="v1-strip__item"><div class="v1-strip__img" style="background-image:url('/images/night-market/7q4a-3907.jpg')"></div></figure>
  </div>
  <div class="v1-nm__row">
    <div class="v1-nm__lede">
      <span class="v1-nm__eyebrow">Opening Night · Free &amp; Public</span>
      <h2 class="v1-nm__title">The Night Market</h2>
      <p class="v1-body">On Friday, the first night of Manifest, Lighthaven will be open and free to the public for our Career Fair &amp; Night Market. An open-air evening celebration of all things markets; it&rsquo;s a chance to meet people, share ideas, see strange gadgets, and wander around in a transcendent twilight…</p>
      <span class="v1-nm__pill">No ticket required</span>
    </div>
    <div class="v1-nm__cols">
      <dl class="v1-nm__col">
        <div><dt>Job Market</dt><dd>Trade your skills for other skills, or find your next gig</dd></div>
        <div><dt>Experience Market</dt><dd>Mini games, fortunes, and digital interactions</dd></div>
        <div><dt>Information Market</dt><dd>Like a poster session, but without the academic standards</dd></div>
      </dl>
      <dl class="v1-nm__col">
        <div><dt>Stuff Market</dt><dd>Arts, crafts, and locally crafted foods</dd></div>
        <div><dt>Book Market</dt><dd>Got a book? Essay? Poem? Share your physical prints</dd></div>
        <div><dt>Black Market</dt><dd>Naming rights to a baby&rsquo;s middle name, &lsquo;probiotics&rsquo;, etc.</dd></div>
      </dl>
    </div>
  </div>
  <div class="v1-nm__cta">
    <a href="https://airtable.com/appMZp1aBO5b7NTdM/pag9gppXcX1cxRixI/edit" class="v1-btn v1-btn--ink pill" target="_blank" rel="noopener">Register your interest</a>
    <a href="https://airtable.com/appMZp1aBO5b7NTdM/pagH4yhHlxyolS2Qv/form" class="v1-btn v1-btn--ink pill" target="_blank" rel="noopener">Job Market sign-up</a>
  </div>
</section>

<!-- TESTIMONIALS -->
<section id="testimonials" class="v1-testi scroll-mt">
  <hr class="v1-divider" />
  <header class="v1-testi__head">
    <h2 class="v1-h2 v1-h2--center" style="font-family: var(--deco); font-style: normal; font-weight: 400; font-size: 48px; letter-spacing: 0.04em;">Tales from Festivalgoers</h2>
  </header>
  <div class="v1-testi__row">
    <a class="v1-testi__card" href="https://scottsumner.substack.com/p/paradise-on-telegraph-avenue" target="_blank" rel="noopener">
      <blockquote>I met many well-known figures I&rsquo;ve been reading for years. Where else will you meet multiple people within 24 hours who casually mentioned the short story Funes the Memorious in conversation?</blockquote>
      <figcaption>— Scott Sumner</figcaption>
    </a>
    <a class="v1-testi__card" href="https://x.com/tomieinlove/status/1931934629218734083" target="_blank" rel="noopener">
      <blockquote>I love Manifest. My subsidy provided for swaying bauble lights, warm soporific nooks, flames and corridors, souls brought to Earth together, eyes lighting up at their electric worlds made real.</blockquote>
      <figcaption>— Tomie</figcaption>
    </a>
    <a class="v1-testi__card" href="https://x.com/PabloPeniche/status/1932095093827334543" target="_blank" rel="noopener">
      <blockquote>Gwern came to my talk and told me at the end &ldquo;I disagree with everything you said and your entire theory of aesthetics is wrong.&rdquo; lol</blockquote>
      <figcaption>— Pablo</figcaption>
    </a>
    <a class="v1-testi__card" href="https://jakeseliger.com/2024/06/13/manifest-the-manifold-markets-nerd-festival/" target="_blank" rel="noopener">
      <blockquote>It bills itself as &ldquo;a festival for forecasting and prediction markets,&rdquo; which fails to capture the spirit — it&rsquo;s more like &ldquo;Substack and Twitter live&rdquo;, a festival-conference-party-Burning-Man for nerds with many interests.</blockquote>
      <figcaption>— Jake Seliger</figcaption>
    </a>
    <a class="v1-testi__card" href="https://x.com/ByrneHobart/status/1799963459658154203" target="_blank" rel="noopener">
      <blockquote>The Manifest conference has been a successful experiment: put enough introverts with common interests into a confined space and they&rsquo;ll spontaneously turn into extroverts.</blockquote>
      <figcaption>— Byrne Hobart</figcaption>
    </a>
    <a class="v1-testi__card" href="https://x.com/tracewoodgrains/status/1800790146633138395" target="_blank" rel="noopener">
      <blockquote>For much of my life, I have poured my attention into tough-to-explain solitary pursuits, sitting in quiet corners on the fringes of gatherings wondering if they&rsquo;re worth the effort. Not so last weekend.</blockquote>
      <figcaption>— TracingWoodgrains</figcaption>
    </a>
  </div>
</section>

<!-- SPONSORS (original layout) -->
<section id="sponsors" class="sponsors-orig scroll-mt">
  <hr class="v1-divider" />
  <h2 class="v1-h2 v1-h2--center" style="font-family: var(--deco); font-style: normal; font-weight: 400; font-size: 48px; letter-spacing: 0.04em;">Sponsors of 2025</h2>
  <div class="sponsors-stack">
    <a href="https://polymarket.com" target="_blank" rel="noopener"><div class="mono-img mono-img--polymarket" role="img" aria-label="Polymarket"></div></a>
    <div class="sponsors-row">
      <a href="https://substack.com" target="_blank" rel="noopener"><div class="mono-img mono-img--substack" role="img" aria-label="Substack"></div></a>
      <a href="https://kalshi.com" target="_blank" rel="noopener"><div class="mono-img mono-img--kalshi" role="img" aria-label="Kalshi"></div></a>
    </div>
    <p class="sponsors-small">Sovereign &middot; Bayes &middot; Elicit &middot; Futuur &middot; Metagame</p>
  </div>
  <div class="sponsors-cta">
    <a href="mailto:team@manifest.is" class="btn-solid pill">Sponsorships available for 2026</a>
  </div>
</section>

<!-- TICKETS (preserved) -->
<section id="tickets" class="v1-tix scroll-mt">
  <div class="v1-tix__frame">
    <iframe src="https://less.online/manifest-embed" title="Manifest 2026 tickets" loading="lazy"></iframe>
  </div>
</section>

<!-- FAQ -->
<section id="faq" class="v1-faq scroll-mt">
  <hr class="v1-divider" />
  <header class="v1-faq__head">
    <h2 class="v1-h2" style="font-size: 56px;">Frequently <em>Asked</em></h2>
  </header>
  <dl class="v1-faq__list">
    <div class="v1-faq__item"><dt><span class="v1-faq__num">01</span>Where is Manifest happening?</dt><dd>Lighthaven, 2740 Telegraph Avenue, Berkeley, CA 94705.</dd></div>
    <div class="v1-faq__item"><dt><span class="v1-faq__num">02</span>Can I purchase accommodation?</dt><dd>Yes. Our venue, Lighthaven, has a limited number of rooms available for ticketholders — book directly through <a href="https://www.havenbookings.space/events/festival-season-2026" target="_blank" rel="noopener">Lighthaven</a>. Space fills up quickly, so most attendees will need to find other accommodations nearby.</dd></div>
    <div class="v1-faq__item"><dt><span class="v1-faq__num">03</span>When does Manifest start and end?</dt><dd>We&rsquo;re still finalizing the schedule. In 2025, the festival opened doors on Friday at 2pm, held opening ceremony from 5:15-6pm. In 2025, the closing ceremony was Sunday 6-6:45pm, though events and informal gatherings continue into the night.</dd></div>
    <div class="v1-faq__item"><dt><span class="v1-faq__num">04</span>How many people will be at Manifest?</dt><dd>We are expecting about 600-700 attendees over the course of the weekend.</dd></div>
    <div class="v1-faq__item"><dt><span class="v1-faq__num">05</span>What does my ticket include?</dt><dd>Access to the festival from Fri afternoon through Sunday night, including all meals.</dd></div>
    <div class="v1-faq__item"><dt><span class="v1-faq__num">06</span>Can I bring my kids?</dt><dd>We&rsquo;d love for you to bring your kids! Please fill out this <a href="https://airtable.com/appMZp1aBO5b7NTdM/pag451KZs8vARd9sr/form" target="_blank" rel="noopener">Child Attendance Form</a>. Children 10 and under don&rsquo;t need tickets. And we offer free onsite childcare! To help us plan the event, please fill out the form whether or not you need childcare.</dd></div>
    <div class="v1-faq__item"><dt><span class="v1-faq__num">07</span>How does volunteering work?</dt><dd>Volunteers get to buy for a reduced-price ticket in exchange for working shifts (at least 3x 4+ hr shifts) during the event. Once all shifts are completed, volunteers are eligible for a full refund. Email <a href="mailto:volunteers@manifest.is">volunteers@manifest.is</a> with questions.</dd></div>
    <div class="v1-faq__item"><dt><span class="v1-faq__num">08</span>What if I need financial assistance to attend?</dt><dd>We don&rsquo;t want finances to keep anyone from attending. If the volunteer shift requirement or deposit is a barrier, fill out our <a href="https://airtable.com/appMZp1aBO5b7NTdM/pagTrQtYd1k1Oakhi/form" target="_blank" rel="noopener">Low-Income Ticket Form</a>, or reach out to team@manifest.is.</dd></div>
    <div class="v1-faq__item"><dt><span class="v1-faq__num">09</span>What is your refund policy?</dt><dd>Full refunds are available up to 7 days before the event. Contact team@manifest.is to request one.</dd></div>
  </dl>
</section>

<!-- ORGANIZERS -->
<section id="organizers" class="v1-org scroll-mt">
  <hr class="v1-divider" />
  <header class="v1-org__head">
    <h2 class="v1-h2 v1-h2--center" style="font-family: var(--deco); font-style: normal; font-weight: 400; font-size: 48px; letter-spacing: 0.04em;">Organizers:</h2>
    <p class="v1-org__sub">Questions? Please reach out.</p>
  </header>
  <div class="v1-org__grid">
    <figure class="v1-org__card">
      <div class="v1-org__photo" style="background-image:url('/images/staff/winter.jpg')"></div>
      <figcaption><span class="v1-org__name">Winter</span><a class="v1-org__email" href="mailto:winter@manifest.is">winter@manifest.is</a></figcaption>
    </figure>
    <figure class="v1-org__card">
      <div class="v1-org__photo" style="background-image:url('/images/staff/austin.jpg')"></div>
      <figcaption><span class="v1-org__name">Austin</span><a class="v1-org__email" href="mailto:austin@manifest.is">austin@manifest.is</a></figcaption>
    </figure>
    <figure class="v1-org__card">
      <div class="v1-org__photo" style="background-image:url('/images/staff/carolanne.jpg')"></div>
      <figcaption><span class="v1-org__name">Carolanne</span><a class="v1-org__email" href="mailto:carolanne@manifest.is">carolanne@manifest.is</a></figcaption>
    </figure>
  </div>
</section>

<!-- FOOTER -->
<footer class="v1-foot">
  <div class="v1-foot__row">
    <div class="v1-foot__brand">
      <span class="v1-foot__title">Manifest 2026</span>
      <span class="v1-foot__sub">June 12 – 14 · Lighthaven, Berkeley</span>
    </div>
    <div class="v1-foot__links">
      <a href="#speakers">Speakers</a>
      <a href="#what-is-manifest">Festival</a>
      <a href="#nightmarket">Night Market</a>
      <a href="#tickets">Tickets</a>
      <a href="#faq">FAQ</a>
      <a href="https://discord.com/invite/MjDqMcQFdR" target="_blank" rel="noopener">Discord</a>
      <a href="/2025">Manifest 2025</a>
      <a href="/2024">Manifest 2024</a>
      <a href="/2023">Manifest 2023</a>
    </div>
  </div>
  <div class="v1-foot__rule"></div>
  <div class="v1-foot__fine">
    <span>Berkeley, CA</span>
    <span>team@manifest.is</span>
  </div>
</footer>
`

/* -------------------------------------------------------------------------- */
/* PAST_GUESTS — appended after the featured speaker grid                      */
/* -------------------------------------------------------------------------- */

const PAST_GUESTS: [string, string][] = [
  ['Aidan McLaughlin', 'OpenAI'],
  ['Alex Gajewski', 'Atomic Industries'],
  ['Danielle Fong', 'LightCell Energy'],
  ['Dave White', 'Paradigm'],
  ['David Holt', 'Researcher'],
  ['Divya Siddarth', 'Collective Intelligence'],
  ['Dylan Matthews', 'Future Perfect'],
  ['Dylan Patel', 'SemiAnalysis'],
  ['Gwern', 'Writer'],
  ['Jay Baxter', 'xAI'],
  ['Kevin Roose', 'NYT'],
  ['Kyle Schiller', 'Energy researcher'],
  ['Lars Doucet', 'Fool Functor'],
  ['Lincoln Quirk', 'Wave'],
  ['Nate Soares', 'MIRI'],
  ['Noam Brown', 'OpenAI'],
  ['Oliver Habryka', 'Lightcone'],
  ['Panda Smith', 'Researcher'],
  ['Ric Best', 'Substack'],
  ['Rob Miles', 'AI Safety'],
  ['Samo Burja', 'Bismarck Analysis'],
  ['Samuel Hammond', 'FAI'],
  ['Scott Sumner', 'Mercatus'],
  ['Sholto Douglas', 'Anthropic'],
  ['Steve Hsu', 'MSU'],
  ['Tracing Woodgrains', 'Writer'],
  ['Roon', 'OpenAI'],
  ['Paul Gu', 'Upstart'],
  ['Noah Smith', 'Noahpinion'],
  ['Aella', 'Researcher'],
  ['Stephen Grugett', 'Manifold'],
  ['Katja Grace', 'AI Impacts'],
  ['Tarek Mansour', 'Kalshi'],
  ['Allison Duettmann', 'Foresight'],
  ['Zvi Mowshowitz', "Don't Worry About the Vase"],
  ['Arnold Brooks', 'Philosopher'],
].sort((a, b) => a[0].localeCompare(b[0])) as [string, string][]

export default function Manifest2026() {
  useEffect(() => {
    /* nav scroll color shift (same behaviour as before) */
    const topNav = document.querySelector('nav.top') as HTMLElement | null
    const updateNavColor = () => {
      if (!topNav) return
      if (window.scrollY > 40) topNav.classList.add('is-scrolled')
      else topNav.classList.remove('is-scrolled')
    }
    updateNavColor()
    window.addEventListener('scroll', updateNavColor, { passive: true })

    /* populate the "and many more" grid (same id, same data) */
    const list = document.getElementById('past-list')
    if (list) {
      // reorder so the grid reads down columns rather than across rows
      const cols = 3
      const rows = Math.ceil(PAST_GUESTS.length / cols)
      const reordered: [string, string][] = []
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = c * rows + r
          if (idx < PAST_GUESTS.length) reordered.push(PAST_GUESTS[idx])
        }
      }
      list.innerHTML = reordered.map(([name]) => `<div>${name}</div>`).join('')
    }

    /* FAQ accordion — V1 markup uses .v1-faq__item */
    const items = Array.from(document.querySelectorAll<HTMLElement>('.v1-faq__item'))
    const handlers = items.map((item) => {
      const dd = item.querySelector('dd') as HTMLElement | null
      if (dd) dd.style.display = 'none'
      const handler = (e: MouseEvent) => {
        const target = e.target as Node
        if (dd && dd.contains(target)) return
        if (window.getSelection()?.toString()) return
        const isOpen = item.classList.toggle('open')
        if (dd) dd.style.display = isOpen ? 'block' : 'none'
      }
      item.addEventListener('click', handler)
      return () => item.removeEventListener('click', handler)
    })

    return () => {
      window.removeEventListener('scroll', updateNavColor)
      handlers.forEach((cleanup) => cleanup())
    }
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />
    </>
  )
}
