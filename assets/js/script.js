/*Fonction pour changer d'image lors du passage de la souris avec en paramétres
"img" pour les images et over pour le survol*/
function hovering (img, over) {
  /*condition "si" pour indiquer que si c'est vrai on affiche les images
  qui sont en _2 exemple "image2_2.jpg"*/
  if(over == true) {document.getElementById(`image${img}`).src = `assets/img/image${img}_2.jpg`
}
/*condition "sinon" pour indiquer que si les images qui ne se termine pas
en _2 seront afficher exemple "image2.jpg"*/
else
  {
  document.getElementById(`image${img}`).src = `assets/img/image${img}.jpg`
}
  }
/* images récupérer grâce a l'ID puis ajout du onmouseenter pour effectuer
le changement d'image lors du passage de la souris, ajout de la fonction
précédement effectuer avec en paramètre le numéro de l'image puis indiquer
que c'est vrai*/
document.getElementById('image1').onmouseover = function() {hovering(1, true)}
document.getElementById('image1').onmouseout = function() {hovering(1, false)}
document.getElementById('image2').onmouseover = function() {hovering(2, true)}
document.getElementById('image2').onmouseout = function() {hovering(2, false)}
document.getElementById('image3').onmouseover = function() {hovering(3, true)}
document.getElementById('image3').onmouseout = function() {hovering(3, false)}
document.getElementById('image4').onmouseover = function() {hovering(4, true)}
document.getElementById('image4').onmouseout = function() {hovering(4, false)}
document.getElementById('image5').onmouseover = function() {hovering(5, true)}
document.getElementById('image5').onmouseout = function() {hovering(5, false)}
