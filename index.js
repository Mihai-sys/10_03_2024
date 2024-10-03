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

//bucle

//while
// calcularea unei sume totale dintr-un cos de cumparaturi folosind while
const cartItems =[
    {
        name: "Iphone 16",
        price: 1700,
        currency: "$",
        amount: 1
    },
    {
        name: "Protector sleeve",
        price: 100,
        currency: "$",
        amount: 3
    },
    {
        name: "Applle sticker",
        price: 21.99,
        currency: "$",
        amount: 4
    }
]

let totalPrice = 0;
let productIndex = 0;

while (productIndex < cartItems.length) {
    let product = cartItems[productIndex];
    totalPrice += product.price * product.amount;
    productIndex ++;
}

console.log("Your cart total is: ", totalPrice, cartItems[0].currency);

// do - while

let n = 3;
let currentNumber = 0;
do {
    currentNumber++;
    console.log(currentNumber);
} while(currentNumber < n);

//for
// calcularea unei sume totale dintr-un cos de cumparaturi folosind for
let totalPrice2 = 0;
for (i = 0; i < cartItems.length; i++){
    let product = cartItems[i];
    totalPrice2 += product.price * product.amount;
}

console.log("Your cart total computed with 'for is: ", totalPrice2, cartItems[0].currency);


// for of
// // calcularea unei sume totale dintr-un cos de cumparaturi folosind "for of"
let totalPrice3 = 0;
for(let product of cartItems){
    totalPrice3 += product.amount * product.price;
}

console.log("Your cart total computed with 'for is: ", totalPrice3, cartItems[0].currency);


//for in
let iphone = {
    name: "Iphone 16",
    price: 1700,
    currency: "$",
    amount: 1
};

for( let key in iphone) {
    console.log("key: ", key);
}


// break

const numbers = [123, 43, 12, 1231321, 9];

let numberToCheck = 12;

for(let j = 0; j < numbers.length; j++){
    console.log("j: ", j);
    if(numberToCheck === numbers[j]){
        console.log("Number: ", numberToCheck, "is found at index",  j);
        break;
    }
}


// continue

// calcularea sumei primelor n numere pare
let firstN = 8;
let sum = 0;
for (i = 1; i <= firstN; i++){
    if (i % 2 !== 0){
        continue;
    }

    sum +=i;
}

console.log("Suma primelor: ", firstN, "numere pare este: ", sum);