// je begint met een score van 0. Elke klik geeft je in het begin 1 kat per keer.
let score = 0;
let kattenPerKlik = 1;

//Hiermee pak ik stukjes HTML uit mijn pagina //
const scoreElement = document.querySelector("#score");
const cat = document.querySelector("#cat");
const feedback = document.querySelector("#feedback");
const upgradeKnop = document.querySelector("#upgrade");


/*ik maak hier een geluid object met de audio die ik heb geupload. 
ik gebruik let omdat op basis van de score verandert het geluid*/

/*  https://jscurious.com/play-audio-with-htmlaudioelement-api-in-javascript/  */
let meowSound = new Audio("audio/Meow_1.mp3");

/* Als je op de kat klikt krijg je punten, 
het geluid speelt af, en de score wordt bijgewerkt */
cat.addEventListener("click", () => {
  let nieuweScore = score + kattenPerKlik;
  score = nieuweScore;
  meowSound.currentTime = 0;
  meowSound.play();
  updateScore();
});

// De upgrade-knop zorgt ervoor dat je katten per klik kunt upgraden
upgradeKnop.addEventListener("click", () => {
  if (score >= 10) {
    score -= 10;
    kattenPerKlik = 2;
    feedback.textContent = "Je hebt een upgrade gekocht!";
  } else {
    feedback.textContent = "Niet genoeg katten om te upgraden!";
  }
  updateScore();
});

/* Deze functie werkt de score bij en verandert de afbeelding en het geluid
   op basis van de score. Dus bijvoorbeeld als je 20 punten haalt 
   verandert de foto van de kat en het geluid als je erop klikt */
function updateScore() {
  scoreElement.textContent = score;

  if (score >= 50) {
    cat.src = "img/cat_finalboss.png";
    meowSound = new Audio("audio/meow_3.mp3");
  } else if (score >= 20) {
    cat.src = "img/cat_cool.png";
    meowSound = new Audio("audio/meow_2.mp3");
  } else {
    cat.src = "img/cat_normal.png";
    meowSound = new Audio("audio/Meow_1.mp3");
  }
}
