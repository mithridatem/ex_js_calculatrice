//variables :
let resultat = document.getElementById('resultat');

//fonction calculer
function calculer(){
    /*Variables récupération du contenu des champs de formulaire (input) avec '.value'*/
    /*Variable id = "nbr"*/
    let nbr = document.getElementById('nbr').value;
    /*Variable id = "nbr"*/
    let nbr2 = document.getElementById('nbr2').value;
    /*Variable id = "operateur"*/
    let operateur = document.getElementById('operateur').value;
    /*Variable qui stocke le résultat du calcul (nbr operateur nb2)*/
    let calcul;
    //Test si nbr ou nbr2 ne sont pas des nombres (de type : int ou float)
    if(isNaN(parseFloat(nbr)) || isNaN(parseFloat(nbr2))){
        calcul = "Veuillez saisir des nombres dans les champs 'Veuillez saisir un nombre'" + " nbr = <span id='error'>" + nbr +  " </span>et nbr2 = <span id='error'>" + nbr2 + " </span>";
        console.log(calcul);
        resultat.innerHTML = calcul;
    }
    //Test si nbr et nbr2 sont des nombres (de type : int ou float)   
    else{
        /*Parsing de nbr et nbr2 en float (convertir en float, nombre à virgule)*/
        nbr = parseFloat(nbr);
        nbr2 = parseFloat(nbr2);
        //Test si l'opérateur mathématique est égal à : + (addition)
        if(operateur=="+" || operateur=="!-"){
            calcul = "Addition : " + nbr + " + " + nbr2 + " est égal à : <span id='ok'>" + (nbr+nbr2)+"</span>";
            console.log("Addition : " + nbr + " + " + nbr2 + " est égal à : " + (nbr+nbr2));
            resultat.innerHTML = calcul;
        }
        //Test si l'opérateur mathématique est égal à : - (soustraction) 
        else if(operateur=="-" || operateur=="!+"){
            calcul = "Soustraction : " + nbr + " - " + nbr2 + " est égal à : <span id='ok'>" + (nbr-nbr2)+"</span>";
            console.log("Soustraction : " + nbr + " - " + nbr2 + " est égal à : " + (nbr-nbr2));
            resultat.innerHTML = calcul;
        }
        //Test si l'opérateur mathématique est égal à : / (division) 
        else if(operateur=="/" || operateur=="!*"){
            calcul = "Division : " + nbr + " / " + nbr2 + " est égal à : <span id='ok'>" + (nbr/nbr2)+"</span>";
            console.log("Division : " + nbr + " / " + nbr2 + " est égal à : " + (nbr/nbr2));
            resultat.innerHTML = calcul;
        }
        //Test si l'opérateur mathématique est égal à * (multiplication)
        else if(operateur=="*" || operateur=="!/"){
            calcul = "Multiplication : " + nbr + " * " + nbr2 + " est égal à : <span id='ok'>" + (nbr*nbr2)+"</span>";
            console.log("Multiplication : " + nbr + " * " + nbr2 + " est égal à : " + (nbr*nbr2));
            resultat.innerHTML = calcul;
        }
        //Test si l'opérateur mathématique est égal à ** (puissance de)
        else if(operateur=="**"){
            calcul = "Puissance : " + nbr + " puissance " + nbr2 + " est égal à : <span id='ok'>" + (nbr**nbr2)+"</span>";
            console.log("Puissance : " + nbr + " puissance " + nbr2 + " est égal à : " + (nbr**nbr2));
            resultat.innerHTML = calcul;
        }
        //Test si l'opérateur mathématique est égal à autre Opérateur mathématique ?
        else{
            calcul = "Veuillez saisir un opérateur mathématique de base (+, -, *, /, **)"+ "<span id='error'> " + operateur + " </span>n\'est pas un opérateur valide.";
            console.log(calcul);
            resultat.innerHTML = calcul;
        }
    }
}
