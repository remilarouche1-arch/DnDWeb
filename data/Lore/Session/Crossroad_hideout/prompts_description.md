# Prompts Description - Crossroad hideout

## Note map
- Battle maps deja fournies par le MJ.
- Aucun prompt de generation de map dans ce fichier.

## Style commun portraits
- bold stylized realism
- cel-shaded rendering
- thicker inked contour lines
- simplified shape language
- reduced micro-texture
- dramatic rim light
- graphic-novel look
- high readability for VTT token
- realistic anatomy
- 1:1, no text, no frame, no logo, not chibi, not anime

## Transparence (important)
- Quand un asset doit etre transparent: il faut un vrai canal alpha, pas un fond damier "dessine".
- Interdit: checkerboard background / transparency grid / squares.
- Si Roll20 montre des carreaux: corriger l'image avec `python scripts/fix_checkerboard_alpha.py "chemin.png" --in-place`.

## Tokens - portraits

### token_kragha_voix_de_pierre.png (ORC)
Orc female propaganda field leader portrait, full-blooded orc, heavy jaw, low sloped forehead, prominent boar-like lower tusks, sharply pointed ears, broad nose, shaved sides with braided mohawk, one tusk chipped, scar across the bridge of the nose, amber-red eyes, large hands, slightly stooped powerful posture, stern command expression, fur-collar travel armor and insignia straps, dominant palette rust red + bone white, dark neutral background.  
Negative: not human-soft face, not tiny tusks, not slim delicate build, not half-orc facial structure, not cigar, not agile anti-caster gear.

### token_goerbel_main_rouge.png (ORC)
Orc male elite scoundrel-warrior portrait, full-blooded orc, massive jaw, pronounced tusks, strong brow ridge, pointed ears, thick neck, big cigar clenched at the corner of the mouth with thick smoke, roguish smirk and charming scoundrel eyes (Han Solo swagger + Jarlaxle flamboyance), slicked-back black undercut, eyebrow ring, long tailored coat with a high collar and a feathered wide-brim hat, clan Guldan propaganda-officer insignia pin and a signet ring, duel-ready stance but relaxed confidence, dominant palette charcoal + teal accents, dark neutral background.  
Negative: not half-orc proportions, not small tusks, not clean soldier look, not cold emotionless assassin face, not bald.

### token_vesha_lame_froide.png (ORC)
Orc female elite anti-caster hunter portrait, full-blooded orc, hard jawline, visible large tusks, pointed ears, predatory focus, lean wiry musculature, larger-than-life battle joy (Karlach vibe): bold grin, fearless eyes, looks like she is cracking a joke mid-fight, white hair in a tight high bun with one shaved temple, icy blue warpaint lines under the eyes, anti-mage talismans and dispelling charms on tactical light armor, crouched hunter posture, dominant palette cold blue + black with a small warm accent, dark neutral background.  
Negative: not human-soft features, not tiny tusks, not half-orc face mix, not cigar, not flamboyant hat.

### token_dorek_brise_chaine.png (DEMI-ORC)
Half-orc male recruiter portrait, human-orc hybrid, human-leaning facial structure, smaller tusks, less pronounced brow ridge, lean athletic build (human proportions), upright posture, proportionate hands, olive-gray skin with warmer undertones, short curly brown hair with stubble beard, one tusk slightly cracked, conflicted but determined look, practical travel armor with a worn armband, dominant palette olive + tan, dark neutral background.  
Negative: not full orc tusk size, not porcine snout, not extreme brute proportions, not huge hat, not icy warpaint.

### token_local_rallie_archer.png (DEMI-ORC)
Half-orc local militia archer portrait, human-orc hybrid, smaller tusks, mixed human/orc facial traits, wiry build, narrow face with a small cheek scar, upright posture, bow-centric silhouette, anxious but committed expression, messy topknot hair under a patched hood, green scarf, light militia gear with a few mismatched pieces, dominant palette faded yellow + green, dark neutral background.  
Negative: not full-blooded orc tusk size, not oversized brute frame, not cigar, not elite duel coat.

### token_horde_villageois.png (HORDE)
VTT token, high-angle 3/4 top-down dense mob (25-35 villagers), tight circular composition, gritty painterly illustration, heavy inked outlines, high contrast, warm torchlight accents. Each villager must look different: mixed genders/ages/body types, varied faces (beards, wrinkles, missing teeth, scars, bandages), varied headwear (hoods, caps, bonnets, a few battered helmets), varied clothing (patched coats, aprons, shawls, work shirts), varied accessories (keys, pouches, charms, rope belts), varied improvised weapons (pitchforks, hoes, axes, clubs, scythes, torches, lanterns). Add distinct archetypes mixed into the mob (blacksmith apron+hammer, hunter fur cap+bow, fisher net, woodcutter axe, old crone bonnet, scarred veteran buckler). Readable at small token size, clean alpha cutout, 100% transparent background (real alpha), no checkerboard grid, no ground/terrain, no shadow, 1:1, no text, no frame, no logo.  
Negative: uniform clones, identical faces, identical hoods, symmetry, modern clothes, banners, readable text, detailed background, checkerboard background, transparency grid, orc tusks, green skin.

## Handouts

### handout_crossroad_day.png
Utiliser la battle map de jour fournie par le MJ (pas de regeneration).

### handout_hideout_night.png
Utiliser la battle map souterraine/nuit fournie par le MJ (pas de regeneration).

### handout_fragments_reseau.png
Fantasy intelligence handout illustration, scattered coded notes, partial name lists, route marks, propaganda fragments, wax seals (one with clan Guldan emblem), worn parchment, readable composition, no explicit full proof board, no text overlay, no logo.

## Props (top-down, fond transparent, objet seul)

### prop_feu_de_camp.png
VTT top-down isolated campfire only, clean alpha cutout, 100% transparent background (real alpha), no checkerboard grid, no ground/terrain, no shadow, readable flame core.

### prop_caisses_logistique.png
VTT top-down isolated stack of crates and sacks only, clean alpha cutout, 100% transparent background (real alpha), no checkerboard grid, no ground/terrain, no shadow.

### prop_table_notes.png
VTT top-down isolated small wooden table with loose notes and sealed packets, clean alpha cutout, 100% transparent background (real alpha), no checkerboard grid, no ground/floor/terrain, no shadow.

### prop_munition_bundle.png
VTT top-down isolated arrow bundle and quiver supplies, clean alpha cutout, 100% transparent background (real alpha), no checkerboard grid, no ground/terrain, no shadow.

### prop_barricade_legere.png
VTT top-down isolated light barricade made of planks and rope, clean alpha cutout, 100% transparent background (real alpha), no checkerboard grid, no ground/terrain, no shadow.

### prop_entree_souterraine.png
VTT top-down isolated cave-mouth marker with rocky rim only, clean alpha cutout, 100% transparent background (real alpha), no checkerboard grid, no surrounding soil/grass/path/terrain, no shadow.
