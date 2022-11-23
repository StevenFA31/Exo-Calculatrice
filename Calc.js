/* Réponse */

//fonction qui évalue le chiffre et renvoie la sortie
function calculer() {
  let a = document.getElementById("output").value;
  let b = eval(a);
  document.getElementById("output").value = b;
}
//fonction qui affiche la valeur
function afficher(val) {
  document.getElementById("output").value += val;
}
//fonction qui efface l'écran
function effacer() {
  document.getElementById("output").value = "";
}

/******* MES TENTATIVES ...  */
// $number = "1234567890+-x÷C";
// $value = 0;

// function myFunction() {
//   switch (button) {
//     case "1":
//       document.getElementById("equation").innerHTML = "1";
//       $value = $value + 1;
//       break;
//     case "2":
//       document.getElementById("equation").innerHTML = "2";
//       $value = $value + 2;
//       break;
//     case "3":
//       document.getElementById("equation").innerHTML = "3";
//       $value = $value + 3;
//       break;
//     case "4":
//       document.getElementById("equation").innerHTML = "4";
//       $value = $value + 4;
//       break;
//     case "5":
//       document.getElementById("equation").innerHTML = "5";
//       $value = $value + 5;
//       break;
//     case "6":
//       document.getElementById("equation").innerHTML = "6";
//       $value = $value + 6;
//       break;
//     case "7":
//       document.getElementById("equation").innerHTML = "7";
//       $value = $value + 7;
//       break;

//     case "C":
//       document.getElementById("equation").innerHTML = "0";
//       $value = $value - $value;
//       break;
//     case "=":
//       document.getElementById("equation").innerHTML = $value;
//       break;
//     default:
//       document.getElementById("equation").innerHTML = " 0 ";
//   }
// }

// function seven() {
//   document.getElementById("equation").innerHTML = "7";
//   $value = $value + 7;
// }

// function three() {
//   document.getElementById("equation").innerHTML = "3";
//   $value = $value + 3;
// }

// function deleter() {
//   document.getElementById("equation").innerHTML = " 0 ";
//   $value = $value - $value;
// }

//   function myFunction() {
//     document.getElementById("equation").innerHTML = "7";
// $value = $value + 7
//   }

// function myFunction() {
//     document.getElementById("equation").innerHTML = "7";
// $value = $value + 7
//   }
