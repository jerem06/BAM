# BAM
Bam weather mobile application project

Test technique BAM : 



Consigne : 

## 1 : 

Créer un repository Git : :white_check_mark:

[lien du Git](https://github.com/jerem06/BAM/)

## 2 : 

Créer une appli ReactNative sans Expo :white_check_mark:

**npx react-native init BamApp**

## 3 : 

Installer TypeScript pour typer le code : :white_check_mark:

Seul le fichier App.tsx comprend l'extension .tsx je voudrais approfondir et mieux comprendre l'utilisation du typeScript en React Native. 

## 4 : 

Créer un service pour fetcher des données simples depuis une API avec fetch  :white_check_mark:

![Service Météo](https://github.com/jerem06/BAM/blob/main/src/assets/img/api.png)

## 5 :

Tester le service :white_check_mark:

![Service Météo](https://github.com/jerem06/BAM/blob/main/src/assets/img/test2.png)

On essaye de faire appel à l'API Hourly forecast à l'aide d'une requête 'fetch'. Il faut préciser le nom de la ville dont on souhaite obtenir la météo ainsi que notre clée API. Pour notre test nous allons vérifier si pour la ville de 'Grasse' nous obtenons bien 'Grasse' comme paramètre du champs 'name' dans la réponse JSON. 

![Service Météo](https://github.com/jerem06/BAM/blob/main/src/assets/img/test.png)

*NB : il est possible de 'Mock' une API pour faire des tests*

## 6 : 

Installer husky pour faire tourner les tests à chaque fois qu’une branche est poussée :white_check_mark:

![Service Météo](https://github.com/jerem06/BAM/blob/main/src/assets/img/husky.png)


## 7 : 

Créer une première page "Liste" avec une scroll view pour afficher les résultats de l'API :white_check_mark:

![Service Météo](https://github.com/jerem06/BAM/blob/main/src/assets/img/list.png)

## 8 : 

Créer une deuxième page "Favoris" :white_check_mark:

![Service Météo](https://github.com/jerem06/BAM/blob/main/src/assets/img/fav.png)


## 9 :

Créer un bottom tab navigator pour naviguer avec la page de Favoris :white_check_mark:

![Service Météo](https://github.com/jerem06/BAM/blob/main/src/assets/img/bottom.png)


## 10 : 

Afficher à droite de chacun des items de la liste une icône "étoile" :white_check_mark:

![Service Météo](https://github.com/jerem06/BAM/blob/main/src/assets/img/star.png)


## 11 : 

Animer l'étoile au clic en taille et couleur :white_check_mark:

[Animation star](https://lottiefiles.com/70592-star)

Pour l'animation j'ai choisi l'animation précédente à partir de la bibliothèque LottieFiles. 

## 12 : 

Ajouter l'item dans les favoris au clic grâce à une gestion de state global :white_check_mark:

Pour ce faire j'ai mis en place un store redux qui garde en mémoire un 'state' comprenant 2 listes : 'all_weather' et 'featured'. Lorque l'utilisateur appuis sur l'étoile cela lance l'annimation puis le nom de la ville est transféré dans la liste des 'featured' (favoris) ainsi le state est mis à jour. 

*NB : une autre piste aurait été de gérer les 'state' à l'aide d'un boolean (true/false) pour savoir si la météo fait parti des favoris*

## 13 : 

Publier son appli pour android :white_check_mark:

Contactez moi pour obtenir le .apk


Merci pour votre lecture.

