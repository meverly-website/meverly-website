import fs from "node:fs";
import path from "node:path";

/**
 * Lecture d'un chapitre en texte, au moment du build (aucun code envoyé au
 * navigateur, aucune bibliothèque).
 *
 * Format attendu, dans content/<roman>/<fichier>.md :
 *
 *   # Chapitre 1            ← titre, en première ligne
 *                           ← une ligne vide sépare les paragraphes
 *   Texte du paragraphe…
 *
 *   — Réplique.             ← les dialogues au tiret cadratin, un par paragraphe
 *
 *   ***                     ← changement de scène
 *
 *   *mot en italique*       ← italique
 *
 *   > Message écrit         ← message échangé (forum, texto…), une ligne par
 *   > seconde ligne            ligne, composé à part du récit
 *
 * Le texte est repris tel quel : espaces insécables, apostrophes et
 * ponctuation de l'autrice sont conservées. Seule retouche : l'espace qui
 * suit un tiret de dialogue devient insécable, pour que le tiret ne reste
 * jamais seul en fin de ligne.
 */

export type Inline = { text: string; em: boolean };

export type ChapterBlock =
  | { type: "paragraph"; content: Inline[] }
  | { type: "break" }
  | { type: "message"; lines: Inline[][] };

export type Chapter = {
  title: string;
  blocks: ChapterBlock[];
};

const NBSP = " ";

function inline(text: string): Inline[] {
  const parts: Inline[] = [];
  const pattern = /\*([^*]+)\*|_([^_]+)_/g;
  let last = 0;

  for (const match of text.matchAll(pattern)) {
    if (match.index > last) parts.push({ text: text.slice(last, match.index), em: false });
    parts.push({ text: match[1] ?? match[2], em: true });
    last = match.index + match[0].length;
  }

  if (last < text.length) parts.push({ text: text.slice(last), em: false });
  return parts;
}

export function readChapter(book: string, file: string): Chapter {
  const source = fs
    .readFileSync(path.join(process.cwd(), "content", book, `${file}.md`), "utf8")
    .replace(/\r\n?/g, "\n");

  let title = "";
  const blocks: ChapterBlock[] = [];

  for (const raw of source.split(/\n[ \t]*\n/)) {
    const block = raw.trim();
    if (!block) continue;

    if (!title && block.startsWith("# ")) {
      title = block.slice(2).trim();
      continue;
    }

    if (/^(\*\s*){3,}$/.test(block)) {
      blocks.push({ type: "break" });
      continue;
    }

    const lines = block.split("\n");

    if (lines.every((line) => line.startsWith(">"))) {
      blocks.push({
        type: "message",
        lines: lines.map((line) => inline(line.replace(/^>\s?/, ""))),
      });
      continue;
    }

    const text = lines.join(" ").replace(/^—[ ]/, `—${NBSP}`);
    blocks.push({ type: "paragraph", content: inline(text) });
  }

  return { title, blocks };
}
