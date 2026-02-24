# Data Archive

## Table of Contents
1. [Campaign Lore](#campaign-lore)
2. [Raw Reference Library](#raw-reference-library)
3. [Visual Assets](#visual-assets)
4. [Monster Compendium](#monster-compendium)
5. [Magic Item Compendium](#magic-item-compendium)
6. [Update Log](#update-log)

## Campaign Lore
- `Campagne.md` — campagne D&D shared memory (FR). Contains PC bios (Polrk, Shaft LeRavageur, Monty Khull, Bouktor), faction stakes (Moonshae Isles, Shadow Valley), and NPC dossiers (Thargrum, Karniss, Ginette, Szass Tam, Elstaad). Treat as the canonical storyline timeline.

## Raw Reference Library
Located in `data/raw/`. Store only original sources here; do not edit them in-place.

| File | Type | Focus | Language |
| --- | --- | --- | --- |
| `Animaux.pdf` | PDF | Animal compendium / beast stats | FR |
| `Critical miss & hit.pdf` | PDF | Critical hit/miss tables | EN |
| `Donjon-et-dragon-PDF-regles.pdf` | PDF | Rules digest for D&D | FR |
| `eFeuillePersoDD5.pdf` | PDF | Editable D&D 5e sheet | FR |
| `forgotten-realms-campaign-guide.pdf` | PDF | Forgotten Realms setting guide | EN |
| `Glossaire.pdf` | PDF | Glossary of key terms | FR |
| `La campaine season 1.xlsx` | XLSX | Structured notes for Season 1 | FR |
| `Monstres (1).pdf` | PDF | Monster manual extracts | FR |
| `Pnj.pdf` | PDF | NPC reference | FR |
| `Races-Classes.pdf` | PDF | Race/Class overview | FR |
| `README.md` | MD | Instructions for adding raw sources | FR |
| `SRD-OGL_V5.1.pdf` | PDF | SRD + OGL legal text | EN |
| `Synopsis.pdf` | PDF | Narrative synopsis | FR |

## Visual Assets
Rooted at `data/Art/`. Assets are grouped by usage to make selection easier inside the app.

### Artifact
- Magical item renders (e.g., `Bracelet de Karakesh.png`).

### Deco
- Atmospheric overlays such as `squellette.png`; use as UI embellishments or props.

### Maps
- Encounter-ready maps: windmill series (`Windmill set 1-5.webp`), arenas (`Arene 1.png`, `Arene 2.webp`), taverns, temples, crypts, mines, coastlines, villages, and specialty scenes like `Time temple.png` or `Tower of the mad mage.jpeg`.

### Photo
- Photographic references for NPCs, monsters, and ambience (orc peon, Garrosh, wargs, Guardian of Time, etc.). Includes `.jpg`, `.png`, `.webp`, `.avif`.

### Scene
- Session composites (`Session2.png`, `game 2.png`) for recap slides or splash art.

### Tiles
- Reserved for modular tiles (currently empty; populate with grid-based tiles when available).

### Tokens
- VTT-ready character tokens: PCs (Polrk, Monty Khull), monsters (Dracolich, warg variants, giant apes), NPCs (Ginette, Thargrum), and props (orc guard, barmaid).

### VAchicule
- Vehicle art such as `Firetruck.png` and `Caravan marchand.png`.

## Monster Compendium
- Location: `data/Monsters/`.
- `Monsters.pdf` — consolidated export of every monster sheet (rulebook layout with illustrations) captured from aidedd.org. Regenerate with `python scripts/build_monster_pdf.py` (dependencies: `requests`, `playwright`, `pypdf`; run `python -m playwright install chromium` once per environment).
- Preview/testing: set `MONSTER_CHUNKS_LIMIT=<n>` (e.g., `2`) before running to build `Monsters_preview.pdf` with only the first *n* chunks; useful when validating layout tweaks.
- Options: `MONSTER_OUTPUT_NAME=<file.pdf>` overrides the destination; otherwise the script writes `Monsters.pdf` (or a timestamped fallback if that file is locked). Background graphics and page-break-safe CSS are injected automatically.

## Magic Item Compendium
- Location: `data/Items/`.
- `Items.pdf` — consolidated export of all magic items listed on [aidedd.org](https://www.aidedd.org/dnd-filters/magic-items.php), rendered as DMG-style item sheets from their individual detail pages. The final PDF arranges cards in a 2x2 grid (4 items per page) on a full-page DMG parchment background.
- Regeneration: run `python scripts/build_magic_items_pdf.py` (dependencies: `requests`, `playwright`, `pypdf`; run `python -m playwright install chromium` once per environment).
- Options: `MAGIC_ITEMS_OUTPUT_NAME=<file.pdf>` overrides the destination; otherwise the script writes `Items.pdf` (or a timestamped fallback if that file is locked). For previews, set `MAGIC_ITEMS_LIMIT=<n>` (e.g., `10`) to only render the first *n* items into `Items_preview.pdf`. Advanced layout tuning is available via `MAGIC_ITEMS_COLUMNS` and `MAGIC_ITEMS_ROWS` (defaults: 2 columns, 2 rows).

## Update Log
- 2025-11-19 — Created `Datamaster.md` and this archive index; catalogued existing lore, raw references, and art assets.
- 2025-11-19 — Documented the monster compendium workflow and regeneration steps for `data/Monsters/Monsters.pdf`.
- 2025-11-20 — Added the magic item compendium pipeline (`scripts/build_magic_items_pdf.py`), including 2x2 grid layout on DMG parchment background and environment variables for preview and layout control.

