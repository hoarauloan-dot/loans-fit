# Loan’s Fit V3.0

## Mise à jour depuis la V2
Décompresser puis envoyer **tous les fichiers** directement à la racine du dépôt `loans-fit` sur GitHub. Remplacer les fichiers homonymes. Ne pas supprimer l’app iPhone. Dans Réglages > Rechercher les mises à jour, attendre la fin de l’installation puis rouvrir la version chargée.

## Données et confidentialité
- `localStorage` conserve le programme, les saisies, les séances, repas, poids et réglages sous la clé **inchangée** `loans-fit-data-v1`.
- IndexedDB `loans-fit-photos-v1` conserve les photos compressées en JPEG localement. Aucune photo n’est envoyée à GitHub.
- Le cache du service worker ne contient que le code et les icônes.
- Export V3 : fichier JSON contenant aussi les photos. **Faire une sauvegarde V2 avant le premier déploiement, puis une sauvegarde V3 après avoir ajouté des photos.** Conserver les JSON hors du dépôt.
- Import d’une sauvegarde V1/V2 (sans champ `photos`) laisse les photos existantes inchangées ; import V3 remplace les photos. L’import doit être confirmé par l’utilisateur.
- iOS peut effacer les données locales ; les photos ne sont PAS synchronisées automatiquement avec iCloud Photos.

## Programme
4 séries par défaut (exceptions conservées), séries et exercices modifiables. Saisies du jour réutilisées à l’ouverture du programme. Les charges et répétitions de la dernière séance terminée du même jour et du même exercice sont proposées lors de la séance suivante. La saisie quotidienne ne réécrit pas le programme historique.

## Vérification
Contrôler sur iPhone les photos, les retours de saisie, les champs de pesée, l’export et l’import, l’activation de la nouvelle version et le hors-ligne. La vérification de syntaxe hors iPhone ne remplace pas ce test.
