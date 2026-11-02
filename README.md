# Loan's Fit — V2.0

Application PWA personnelle hébergée sur GitHub Pages. Aucun serveur ni abonnement.

## Installation

Déposer le CONTENU de ce dossier à la racine du dépôt `loans-fit`. Conserver le dépôt, l'adresse Pages et la clé de stockage `loans-fit-data-v1`.

## Mise à jour sur iPhone

Dans Réglages, toucher « Rechercher les mises à jour », patienter jusqu'au message de confirmation, puis « Rouvrir la version chargée ». Ne pas supprimer l'icône de l'écran d'accueil. À chaque déploiement, changer `CACHE` dans `sw.js` pour forcer le rechargement des ressources.

## Sauvegarde

Dans Réglages, exporter une sauvegarde JSON avant toute mise à jour importante. L'import remplace les données locales. Ne jamais publier une sauvegarde sur GitHub.

## Données

Le code est mis en cache par le service worker. Les données restent dans `localStorage`, avec la même clé que la V1. Conversion V1 vers 4 séries exécutée une seule fois, avec exceptions explicites notées x3.

## Limites

Tests syntaxiques possibles sur PC ; l'installation, l'actualisation, la persistance iOS et l'export/import doivent être vérifiés sur le téléphone.
