# Loan's Fit
Application personnelle PWA pour iPhone, hébergée sur GitHub Pages.

- L'application stocke ses données de suivi **uniquement sur cet appareil** (localStorage).
- **Exporter** régulièrement une sauvegarde JSON depuis Profil. L'effacement des données du navigateur ou la désinstallation peut les supprimer.
- Pour mettre à jour le code, remplacer les fichiers du dépôt sans effacer les données locales. Ne pas modifier la clé `loans-fit-data-v1` sans prévoir de migration.
- Aucun compte, serveur, synchronisation ou notifications programmées dans cette V1.
- Les charges importées du programme initial sont conservées sous forme d'indications textuelles quand leur unité est ambiguë.
