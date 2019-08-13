# Gulp 4 avec Webpack
Ce repo est une base optimisé des avantages de gulp et webpack réuni.

## Comment le personnaliser
Toutes les tâches se situe dans le répertoire **tasks**.<br>
Pour modifier les variables, modifier le fichier **tasks/config.js**.<br>
Pour modifier les tâches à exécuter/ fichier à observer, modifier le fichier **tasks/index.js**.<br>



## Comment l'utiliser
Télécharge les packages npm et exécute le gulp / webpack
```
npm install
npm run dev
```

Pour réinitialiser la structure initial
```
npm run init
```

Pour la mise en production.
```
npm run build
```
<!--
## Test HMR
Une future version sera utiliser avec le **Hot Module Reloading**, il faudra faire switch to the `hmr` branch and run `npm install` again.

Demo is set up with **Vue**. To see it in action run `npm run dev`, open the given localhost address and change the message in `site/js/App.vue`.
The new message will be hot reloaded - no whole window refresh.
-->
