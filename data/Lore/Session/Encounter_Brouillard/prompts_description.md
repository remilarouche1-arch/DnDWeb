# Prompts Description - Encounter Brouillard (Route secondaire)

## Note map
- Battle maps deja fournies par le MJ.
- Aucun prompt de generation de map dans ce fichier.

## Style commun (portraits + tokens)
- bold stylized realism
- cel-shaded rendering
- thicker inked contour lines
- simplified shape language
- reduced micro-texture
- dramatic rim light
- graphic-novel look
- high readability for VTT token
- 1:1, no text, no frame, no logo, not chibi, not anime

## Regle props/overlays (top-down)
- Fond 100% transparent (alpha), objet/forme seul(e).
- Interdit: sol, plancher, tuile, patch de terrain, baseplate, vignette, texture de fond, contour carre.
- Interdit: ombre portee visible (meme legere) qui cree un "halo" de sol.
- Interdit: fond damier (checkerboard) "dessine" / transparency grid visible.
- Si Roll20 montre des carreaux: corriger l'image avec `python scripts/fix_checkerboard_alpha.py "chemin.png" --in-place`.

## Tokens

### token_syrha_banshee.png
Undead female banshee portrait, gaunt lean build, tattered funeral gown and torn veil, long black hair floating like smoke, chipped porcelain mourning mask + pale glowing eyes, mouth wide open in a strident scream, lunging forward pose with arms outstretched, elongated clawlike fingers reaching forward, cold necrotic frost motes in the fog, dominant palette icy cyan + bone white + deep black, dark foggy background, high contrast, 1:1.  
Negative: not armored guard, not wight, not sword/plate armor, not male, not orc tusks, not warm campfire lighting.

### token_vardek_wight.png
Undead male wight sentinel portrait, broad stocky build, blackened military armor (dented plate + chain), bald under a cracked helm, ember-red eyes, a deep scar across one cheek, disciplined upright stance with a heavy longsword held low, ash-stained tabard with a faded insignia, chain of keys at the belt, dominant palette charcoal + ash gray + rust red, dark neutral background, high contrast, 1:1.  
Negative: not translucent ghost, not screaming banshee, not long hair veil, not abstract marker, not green necrotic rune stone.

### token_specter_domain.png
Incorporeal specter portrait, tall lean silhouette, hooded faceless head (no hair) with two pale lights, smoke-like arms trailing into mist, cold necrotic aura with scar-like shadow cracks across the torso, slow hovering pose, faint orbiting runes and frost dust, dominant palette sickly green + cold gray + faint violet, dark neutral background, clean readable shape for VTT, 1:1.  
Negative: not armored soldier, not banshee veil/hair scream, not physical weapon, not stone marker, not warm torch fire.

### token_echo_marker.png
VTT token, top-down abstract spectral echo marker, concentric soundwave rings + jagged waveform spikes, wispy fog edges, bright core glow, dominant palette pale cyan + white, high contrast, clean alpha cutout, 100% transparent background, no ground/terrain, no shadow, 1:1, no text, no frame, no logo.  
Negative: humanoid face/body, stone rune, weapons, readable text, detailed background.

### token_anchor_marker.png
VTT token, top-down funerary anchor marker: small cracked rune obelisk, necrotic glow leaking from fissures, rusted nails and a short broken chain loop, dominant palette dark stone + neon green + bone, high contrast, clean alpha cutout, 100% transparent background, no ground/terrain, no shadow, 1:1, no text, no frame, no logo.  
Negative: soundwave rings, humanoid face/body, weapons, readable text, detailed background.

## Handouts

### handout_syrha_voix_fendue.png
Narrative illustration of Syrha in the fog, banshee mid-scream, tragic tone, high contrast silhouette readability, no text overlay, no logo.

### handout_vardek_guette_cendres.png
Narrative illustration of Vardek, undead guard in disciplined sentinel posture, blackened armor, abandoned road hinted in background (subtle), no text overlay, no logo.

## Props (top-down, fond transparent)

### prop_borne_funeraire_brisee.png
Asset VTT top-down, broken funerary rune stone, cracked rock, necrotic runes, clean alpha cutout, 100% transparent background, no ground/terrain, no shadow, no text.

### prop_brume_epaisse_overlay.png
Asset VTT top-down fog overlay, dense mist sheet, soft irregular edges, isolated shape for overlay, clean alpha cutout, 100% transparent background, no ground/terrain, no shadow, no text.

### prop_zone_banshee.png
Asset VTT top-down zone marker, cold spectral circle, white wisps + jagged sound traces, clean alpha cutout, 100% transparent background, no ground/terrain, no shadow, no text.

### prop_zone_shaft.png
Asset VTT top-down zone marker, pale blue arcane runic circle, crisp readable lines, clean alpha cutout, 100% transparent background, no ground/terrain, no shadow, no text.

### prop_traces_runiques.png
Asset VTT top-down, scattered runic traces only (fragments), clean alpha cutout, 100% transparent background, no ground/terrain, no shadow, no text.

### prop_squelette_eparpille.png
Asset VTT top-down, scattered human skeleton remains (skull + ribcage + arm bones), a few torn cloth scraps and a rusted belt buckle, readable silhouette, clean alpha cutout, 100% transparent background, no ground/terrain, no base plate, no shadow, no text.

### prop_squelette_armure_brisee.png
Asset VTT top-down, collapsed skeleton in broken chainmail with a cracked helm and snapped shield, a few loose teeth clustered near the skull, readable at small size, clean alpha cutout, 100% transparent background, no ground/terrain, no base plate, no shadow, no text.

### prop_pile_cranes_ossements.png
Asset VTT top-down, compact pile of skulls and long bones, some bones charred black, a few candle stubs melted onto bone (no flames), high contrast, clean alpha cutout, 100% transparent background, no ground/terrain, no base plate, no shadow, no text.

### prop_cadavre_decompose_haillons.png
Asset VTT top-down, decomposing humanoid corpse in tattered rags, sunken face, exposed ribs (non-graphic), dark stains confined to the cloth (no puddles), a pouch spilled open with coins clustered tight to the body, high readability, clean alpha cutout, 100% transparent background, no ground/terrain, no base plate, no shadow, no text.

### prop_cadavre_decompose_fleches.png
Asset VTT top-down, decomposing humanoid corpse with 2-3 arrows lodged in the torso, one broken arrow shaft, partial skeleton visible under torn coat (non-graphic), a simple ring on one hand, readable silhouette, clean alpha cutout, 100% transparent background, no ground/terrain, no base plate, no shadow, no text.
