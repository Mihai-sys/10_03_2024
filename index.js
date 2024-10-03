console.log("hello");

let userAge = 17;
let legalAge = 18;
let isLegal = userAge >= legalAge;

// if
if(isLegal){
    console.log("Utilizatorul este major.");
}

// if - else
if ( isLegal){
    console.log("Utilizatorul este major.");
} else{
    console.log("Utilizatorul este minor.");
}

// operatorul ternar
let userEnteredPassword = "123pass";
let correctPassword = "124pass";

let accessMessage = userEnteredPassword == correctPassword ? "Access granted": "Access denied!";

console.log("user has access: ", accessMessage);


// if...else if...else

let actualScore = 100;
let minimumScore = 50;
let averegeScore = 70;
let maxScore = 100;

if (actualScore === 100) {
    console.log("Congratulations, your score is perfect!");
} else if (actualScore < maxScore && actualScore > averegeScore) {
    console.log("Congratulations, your score is great!");
} else if (actualScore <= averageScore && actualScore >= minimumScore) {
    console.log("Congratulations, you got a passing score!");
} else if (actualScore < minimumScore){
    console.log("We are sorry, your score is too low!");
} else {
    console.log("Your score could not be verified!");
}

// switch 

let weekDay = 4;

switch (weekDay) {
    case 1:
        console.log("Astazi este Luni");
        break;
    case 2:
        console.log("Astazi este marti");
        break;
     case 3:
        console.log("Astazi este miercuri");
        break;
    case 4:
        console.log("Astazi este joi");
        break;
    case 5:
        console.log("Astazi este vineri");
        break;
    case 6:
        console.log("Astazi este sambata");
        break;
    case 7:
        console.log("Astazi este duminica");
        break;
    default:
        console.log("Ziua nu a putut fi indentificata!")
        break;

}