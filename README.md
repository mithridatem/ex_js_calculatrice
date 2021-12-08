# ex_js_calculatrice
Enoncé de l'exercice :

Créer une page HTML (index.html) qui va contenir les élèments suivants :
-Un titre H2 (Calculatrice JS :),
-Un titre H3 (Saisir un nombre :),
-Un champ input (de type="text" id="nbr"),
-Un titre H3 (Saisir un opérateur mathématique (+, -, /, * ou **) :),
-Un champ input (de type="text" id="operateur"),
-Un titre H3 (Saisir un nombre :),
-Un champ input (de type="text" id="nbr2"),
-Un champ input (de type="button" value="calculer" onclick="calculer()"),
-Le bouton sera encadré par une balise paragraphe (<p></p>),
Lier un script JS (qui va se nommer script.js) à la page HTML (NB: pensez à ajouter defer ou async après le script),
Bonus HTML :
-Ajouter un paragraphe (avec id="resultat") qui permettra d'afficher le résultat de l'opération,

Algo JS (script.js):
-Récupérer dans des variables (nbr, operateur, nbr2) la valeur saisie dans chacun des 3 champs input (nbr, operateur, nbr2) (en utilisant la méthode getElementById, 
ex : let nbr = document.getElementById('nbr').value;),
-Créer une fonction calculer (la fonction sera appelée à chaque clic sur le bouton calculer),
-La fonction devra parser les variables nbr et nbr2 en nombre entier ( ex : parseInt(nbr)),
-Tester la valeur de la variable operateur pour chaque opérateur mathématique saisi (+, -, /, * et **)
ex if(operateur=="+"){
    afficher dans la console le résultat de l'addition de nbr et nbr2 avec la méthode console.log();
}
-Répeter le test et l'opération pour chaque opérateur mathématique(+, -, /, * et **),
Bonus Algo JS :
-Stocker dans une variable le paragraphe (qui pour id="resultat"),
-Dans chaque test d'opérateur mathématique, afficher le resultat directement dans la page (avec la méthode innerHTML).
Bonus Algo JS 2 :
-Tester si operateur est différent de (+, -, /, * et **) et afficher dans la console 
et dans la page HTML le message suivant :
"Veuillez saisir un opérateur mathématique de base (+, -, *, /, **) 'contenu de la variable operateur' n\'est pas un opérateur valide.",
Bonus Algo JS 3 :
-Parser en float nbr et nbr2,
-Tester si nbr et nbr2 sont des nombres -> si ce n'est pas des nombres afficher le message suivant :
"Veuillez saisir des nombres dans les champs : 'Veuillez saisir un nombre'".




