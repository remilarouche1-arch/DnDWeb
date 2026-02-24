# Log des fichiers envoyes vers ChatGPT (uploadtogpt)

Ce fichier sert a garder une trace des **images copiees dans** `data/Art/Inspiration/uploadtogpt/`  
pour etre uploadees dans l'interface web de ChatGPT / OpenAI (ou autre).

Objectif :  
- savoir rapidement **quelles images sont deja prêtes** pour servir de contexte visuel,  
- eviter de **dupliquer** plusieurs fois la meme image avec des noms differents,  
- garder un minimum de contexte sur **pourquoi** chaque image a ete copiee / renommee.

## Format recommande (une entree par image)

- **file** : chemin final dans `uploadtogpt` (ex. `data/Art/Inspiration/uploadtogpt/pc_polrk_token.png`)  
- **source** : fichier d'origine (ex. `data/Art/tokens/polrk.png`)  
- **type** : `pc` / `npc` / `monstre` / `scene` / `map` / `objet` / `autre`  
- **contexte** : 1 phrase (ex. `Saison 2, PJ principaux pour recap S2E03`)  
- **tags** : liste courte de mots-cles (ex. `Polrk, Shaft, Monty, Bouktor`)  
- **date** : optionnel, date approximative de l'upload

Exemple :

- **file** : `data/Art/Inspiration/uploadtogpt/pc_polrk_token.png`  
- **source** : `data/Art/tokens/polrk.png`  
- **type** : `pc`  
- **contexte** : `Token de Polrk pour preparation de prompts d'image generiques + uploads ChatGPT`  
- **tags** : `Polrk, PJ, demi-orc, barbare`  
- **date** : `2025-12-02`

L'agent lit ce fichier avant de proposer de nouvelles copies vers `uploadtogpt`,  
et essaie de **reutiliser** les fichiers deja listes quand c'est pertinent,  
au lieu de re-demander des uploads inutiles.

