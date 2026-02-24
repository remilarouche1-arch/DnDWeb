# Datamaster

## Mission
- Act as the single source of truth for everything stored under `data/`.
- Capture why each subdirectory exists, how assets are organized, and how to extend the library without breaking downstream agents.
- Pair with `data/Data.md`, which is the public-facing index for other agents; keep both in sync.

## Directory Map & Context

### `data/Campagne.md`
- Living campaign lore managed by the Archiviste persona. Holds party bios, NPC dossiers, regions, faction stakes, and tonal guidelines for the ongoing D&D story.
- Treat this file as canonical narrative state; any change to lore must be reflected here before propagating elsewhere.

### `data/raw/`
- Vault for reference material and original sources (PDF, XLSX, HTML, TXT, etc.).
- Keep filenames descriptive in French when appropriate; prefer `Camel Case` or `snake_case` if you need ASCII-only fallbacks.
- Current inventory:

| File | Format | Notes |
| --- | --- | --- |
| `Animaux.pdf` | PDF | Creature bestiary extracts. |
| `Critical miss & hit.pdf` | PDF | Critical hit/miss tables. |
| `Donjon-et-dragon-PDF-regles.pdf` | PDF | Core rules digest. |
| `eFeuillePersoDD5.pdf` | PDF | Editable character sheet template. |
| `forgotten-realms-campaign-guide.pdf` | PDF | Forgotten Realms campaign guide. |
| `Glossaire.pdf` | PDF | Glossary of common terms. |
| `La campaine season 1.xlsx` | XLSX | Season 1 campaign logbook. |
| `Monstres (1).pdf` | PDF | Monster reference. |
| `Pnj.pdf` | PDF | NPC catalogue. |
| `Races-Classes.pdf` | PDF | Race/Class summaries. |
| `README.md` | MD | Drop-in instructions for raw sources. |
| `SRD-OGL_V5.1.pdf` | PDF | SRD license reference. |
| `Synopsis.pdf` | PDF | Narrative synopsis. |

### `data/Art/`
- Visual asset library grouped by usage. Maintain the folder taxonomy below so UI references remain stable.
- Subfolders:
  - `Artifact/` — magical items (e.g., `Bracelet de Karakesh.png`).
  - `deco/` — decorative overlays (`squellette.png`).
  - `maps/` — battle maps (windmill series, taverns, tombs, coastlines, arenas).
  - `photo/` — photographic or realistic references (orc portraits, wargs, NPC imagery).
  - `scene/` — composite session scenes (`Session2.png`, `game 2.png`).
  - `tiles/` — reserved for modular tiles (currently empty; keep for future packs).
  - `tokens/` — VTT tokens for PCs/NPCs/monsters (orc variants, Garosh, Dracolich, Monty Khull, etc.).
  - `VAchicule/` — vehicle art such as caravans and firetrucks.
- Image formats include `.png`, `.jpg`, `.webp`, `.jfif`, `.gif`, `.avif`. Preserve original extensions to avoid re-encoding artifacts.

### `data/Monsters/`
- Houses the consolidated monster compendium PDFs generated from [aidedd.org](https://www.aidedd.org/dnd-filters/monsters.php).
- Canonical artifact: `Monsters.pdf` (all monsters with images). Preview exports live alongside it (e.g., `Monsters_preview.pdf`) when running partial batches.
- Generation process:
  1. Ensure Python deps are installed (`playwright`, `requests`, `pypdf`, `pypdfium2` for verification). Run `python -m playwright install chromium` once per machine.
  2. Execute `python scripts/build_monster_pdf.py` from repo root. The script paginates the Aidedd list in chunks of 20, forces background graphics, and merges all PDFs into `data/Monsters/Monsters.pdf`.
  3. Optional env vars: `MONSTER_CHUNKS_LIMIT=<n>` (only render first *n* chunks, output defaults to `Monsters_preview.pdf`) and `MONSTER_OUTPUT_NAME=<file.pdf>` to override the destination.
  4. Close any viewer holding `Monsters.pdf` before rerunning; otherwise the script falls back to a timestamped filename.
- Quality checks:
  - Inspect the first/last pages for page-break alignment (no illustration spilling across pages thanks to injected `page-break-inside: avoid` CSS).
  - Spot-check image loading; the script injects `<base href>` so remote CSS/backgrounds always resolve.

### `data/Items/`
- Houses the consolidated magic item catalogue generated from [aidedd.org](https://www.aidedd.org/dnd-filters/magic-items.php).
- Canonical artifact: `Items.pdf` (all magic items rendered as DMG-style item sheets from their individual detail pages).
- Generation process:
  1. Ensure Python deps are installed (`requests`, `playwright`, `pypdf`). Run `python -m playwright install chromium` once per machine.
  2. Execute `python scripts/build_magic_items_pdf.py` from repo root.
     - The script fetches all magic item slugs from the Aidedd filter page.
     - For each slug, it opens the corresponding `om.php?vo=<slug>` page in headless Chromium and injects CSS so that the text column appears first and the illustration is stacked underneath, with reduced padding for a tall, column-friendly card.
     - Each card is printed to its own PDF.
     - A separate parchment background PDF is generated from the Aidedd DMG texture (`fond-dmg.jpg`).
     - All item PDFs are then composited onto the parchment background in a grid layout and merged into `data/Items/Items.pdf`.
  3. Layout and env vars:
     - Default grid is 2 columns x 2 rows (4 items per page).
     - `MAGIC_ITEMS_COLUMNS` / `MAGIC_ITEMS_ROWS` control the grid size.
     - `MAGIC_ITEMS_LIMIT=<n>` renders only the first *n* items (output defaults to `Items_preview.pdf`).
     - `MAGIC_ITEMS_OUTPUT_NAME=<file.pdf>` overrides the destination filename.
  4. Close any viewer holding `Items.pdf` before rerunning; otherwise the script falls back to a timestamped filename.
- Quality checks:
  - Verify that the total number of cards matches the number of items rendered.
  - Confirm that item cards sit on a full-page DMG parchment background and that there is minimal unused whitespace between cards.
  - Spot-check a few long entries (lots of rules text) to ensure nothing is clipped inside their grid cells.

### `data/Data.md`
- Archive/table of contents consumed by non-datamaster agents. Must mirror the definitive state recorded here.

## Operating Guidelines
- **Additions**: When dropping new sources or art, choose descriptive filenames, avoid spaces when possible, and log the addition inside `Data.md`.
- **Edits**: If a file is updated for content (not just metadata), append a short note to the `Update Log` section in `Data.md`.
- **Removals**: Document retired assets inside `Data.md` with the rationale so old prompts referencing them can be cleaned up.
- **Localization**: Maintain original language of source material; note the language in `Data.md` if not obvious from the filename.
- **Backups**: PDFs/XLSX are treated as authoritative; do not overwrite without keeping the prior revision elsewhere.

## Maintenance Checklist
1. Scan for new files under `data/` and ensure they fall into an existing category or justify a new one here.
2. Update the inventory tables in both `Datamaster.md` and `Data.md`.
3. Notify downstream agents (via commit message or coordination docs) when critical lore or art assets change.
4. Periodically verify that symbolic references inside the app (e.g., image imports) still match the file paths listed above.

Use this document as the onboarding brief for any agent who needs to reason about data assets; update it before delegating work.

