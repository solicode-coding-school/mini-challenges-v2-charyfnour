let Questions = [
    "Quel est le seul joueur à avoir gagné 3 coupes du mondes ?", 
    "Qui a gagné le ballon d'or en 2012 ?",
    "Quelle équipe a gagné la coupe du monde 1998 ?",
    "Quel est le score de la remontada du Barça contre Paris le 8 mars 2017 ?",
    "Quel est le montant du transfert de Neymar au PSG l'été dernier ?",
]; 

let reponses = [
    ["Pelé", "Lionel Messi", "Diego Maradona", "Johan Cruyff"],
    ["Andrés Iniesta", "Cristiano Ronaldo", "Neymar", "Lionel Messi"],
    ["Le Brésil", "L'Allemagne", "La France", "L'Argentine"],
    ["4-0", "6-1", "9-2", "5-0"],
    ["1 million d'euros", "500 millions d'euros", "222 millions d'euros", "243 millions d'euros"],
];

let reponsescorrect = [0, 3, 2, 1, 2];
let score = 0;

let QuestionTexte = document.getElementById('text');
let choiseQuestion = document.getElementsByClassName('choise');
let QuestionIndex = 0;

function displayQuestion(index) {
    QuestionTexte.innerText = Questions[index];
    for (let j = 0; j < choiseQuestion.length; j++) {
        choiseQuestion[j].innerText = reponses[index][j];
    }
    document.getElementById("question-counter").innerText = `Question ${index + 1}/${Questions.length}`; 
    updateProgressBar(); 
}

displayQuestion(QuestionIndex);

function checkAnswer(index, selectedAnswer) {
    if (selectedAnswer === reponsescorrect[index]) {
        score++;
    }
    document.getElementById("score-quiz").querySelector("h1").innerText = score; 
}

for (let i = 0; i < choiseQuestion.length; i++) {
    choiseQuestion[i].addEventListener('click', function() {
        checkAnswer(QuestionIndex, i); 
        QuestionIndex++;
        if (QuestionIndex < Questions.length) {
            displayQuestion(QuestionIndex); 
        } 
    });
}

function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progressPercentage = ((QuestionIndex + 1) / Questions.length) * 100;
    progressBar.style.width = progressPercentage + '%';
}



