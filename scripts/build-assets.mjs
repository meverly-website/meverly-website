/**
 * Régénère les assets du site à partir des fichiers source de la couverture.
 *
 *   node scripts/build-assets.mjs [illustration] [couverture]
 *
 * Par défaut, les sources sont celles déposées sur le Bureau :
 *   3.png — l'illustration seule : les deux mains et le fil, sur fond noir
 *   okok.png — la couverture complète, titre compris
 *
 * Produit :
 *   public/hero-illustration.png — l'illustration détourée, pour le partage
 *   public/cover.png             — la couverture
 *   public/og-image.png          — l'image de partage, 1734 × 907
 *
 * L'illustration est convertie en canal alpha (alpha = luminance) pour se
 * poser sans couture sur le fond du site, quel que soit son noir exact.
 */

import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = path.join(ROOT, "public");

const ILLUSTRATION_SRC = process.argv[2] ?? "C:/Users/magco/Desktop/3.png";
const COVER_SRC = process.argv[3] ?? "C:/Users/magco/Desktop/okok.png";

/** Marge conservée autour du contenu lumineux, en pixels source. */
const PADDING = 12;

/** Seuil au-dessus duquel un pixel est du contenu, pas du fond. */
const CONTENT_THRESHOLD = 70;

/**
 * Le fond de la source n'est pas un noir unique : la bordure extérieure est à
 * luma 6 (un noir rougeâtre) et l'intérieur à 0, ce qui dessine un rectangle
 * fantôme une fois posé sur le fond du site. En dessous de FLOOR le pixel est
 * donc rendu totalement transparent, avec une rampe douce jusqu'à FLOOR + RAMP
 * pour ne pas trancher net dans le halo du fil.
 */
const FLOOR = 7;
const RAMP = 14;

const OG_WIDTH = 1734;
const OG_HEIGHT = 907;

/** mulberry32, pour un semis d'étoiles irrégulier mais reproductible. */
function createRandom(seed) {
  let state = seed;

  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

async function buildIllustration() {
  const { data, info } = await sharp(ILLUSTRATION_SRC)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;

  // Boîte englobante du contenu lumineux : la source a de larges marges vides.
  let minX = width, maxX = -1, minY = height, maxY = -1;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;

      if (Math.max(data[i], data[i + 1], data[i + 2]) > CONTENT_THRESHOLD) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const left = Math.max(0, minX - PADDING);
  const top = Math.max(0, minY - PADDING);
  const w = Math.min(width - 1, maxX + PADDING) - left + 1;
  const h = Math.min(height - 1, maxY + PADDING) - top + 1;

  const out = Buffer.alloc(w * h * 4);

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = ((y + top) * width + (x + left)) * channels;
      const o = (y * w + x) * 4;

      const r = data[i], g = data[i + 1], b = data[i + 2];
      const luma = Math.max(r, g, b);

      const ramp = Math.min(1, Math.max(0, (luma - FLOOR) / RAMP));
      const alpha = Math.round(luma * ramp * ramp * (3 - 2 * ramp));

      if (alpha === 0) continue;

      // Couleur démultipliée : recomposer sur du noir redonne la source.
      out[o] = Math.min(255, Math.round((r * 255) / alpha));
      out[o + 1] = Math.min(255, Math.round((g * 255) / alpha));
      out[o + 2] = Math.min(255, Math.round((b * 255) / alpha));
      out[o + 3] = alpha;
    }
  }

  await sharp(out, { raw: { width: w, height: h, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(PUBLIC, "hero-illustration.png"));

  console.log(`illustration  ${width}×${height} → ${w}×${h}`);

  return { width: w, height: h };
}

async function buildCover() {
  const { width, height } = await sharp(COVER_SRC).metadata();

  await sharp(COVER_SRC)
    .png({ compressionLevel: 9 })
    .toFile(path.join(PUBLIC, "cover.png"));

  console.log(`couverture    ${width}×${height}`);

  // La mise en scène plafonne à 360 px de large : il faut donc 720 px pour
  // couvrir un écran 2×, 1080 px pour un écran 3×.
  if (width < 720) {
    console.log(
      `              ⚠ insuffisant : 720 px sont nécessaires pour un écran 2×.`
    );
  } else if (width < 1080) {
    console.log(
      `              écran 2× couvert. Au-delà de 1080 px on couvrirait aussi\n` +
      `              le 3×, et la mise en scène pourrait être agrandie.`
    );
  }

  return { width, height };
}

function starFieldSvg(width, height, count) {
  const random = createRandom(20260912);

  const stars = Array.from({ length: count }, () => {
    const warm = random() > 0.78;
    return `<circle cx="${(random() * width).toFixed(0)}" cy="${(random() * height).toFixed(0)}" r="${(0.6 + random() * 1.3).toFixed(1)}" fill="${warm ? "#EFC17E" : "#F5F1EB"}" opacity="${(0.15 + random() * 0.5).toFixed(2)}"/>`;
  }).join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">${stars}</svg>`;
}

async function buildOgImage() {
  const coverHeight = 700;

  const cover = await sharp(COVER_SRC).resize({ height: coverHeight }).toBuffer();
  const { width: coverWidth } = await sharp(cover).metadata();

  const illustration = await sharp(path.join(PUBLIC, "hero-illustration.png"))
    .resize({ width: 600 })
    .toBuffer();

  const { height: illustrationHeight } = await sharp(illustration).metadata();

  /*
   * Cormorant Garamond n'est pas installée sur la machine : le rendu SVG
   * utilise Georgia, très proche à cette échelle. Le titre exact reste porté
   * par la couverture elle-même, à gauche de la composition.
   *
   * Le wordmark est composé en texte : le fichier logo.jpg.png a son damier
   * de transparence aplati dans les pixels, il ressort en bloc gris.
   */
  const text = `<svg xmlns="http://www.w3.org/2000/svg" width="780" height="260">
    <text x="0" y="60" font-family="Georgia, serif" font-size="48" letter-spacing="2" fill="#EFC17E">BEFORE I KNEW YOU</text>
    <rect x="0" y="104" width="80" height="1" fill="#EFC17E" opacity="0.55"/>
    <text x="0" y="162" font-family="Georgia, serif" font-size="27" font-style="italic" fill="#CFC4B8">Certaines rencontres ne se prévoient pas.</text>
    <text x="0" y="246" font-family="Georgia, serif" font-size="25" letter-spacing="13" fill="#F5F1EB">MEVERLY</text>
  </svg>`;

  await sharp({
    create: { width: OG_WIDTH, height: OG_HEIGHT, channels: 3, background: "#0D0C0A" },
  })
    .composite([
      { input: Buffer.from(starFieldSvg(OG_WIDTH, OG_HEIGHT, 150)) },
      {
        input: illustration,
        left: OG_WIDTH - 600 - 30,
        top: Math.round((OG_HEIGHT - illustrationHeight) / 2) - 40,
      },
      { input: cover, left: 90, top: Math.round((OG_HEIGHT - coverHeight) / 2) },
      { input: Buffer.from(text), left: 90 + coverWidth + 75, top: 350 },
    ])
    .png()
    .toFile(path.join(PUBLIC, "og-image.png"));

  console.log(`partage       ${OG_WIDTH}×${OG_HEIGHT}`);
}

await buildIllustration();
await buildCover();
await buildOgImage();
