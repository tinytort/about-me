'use strict';

var name = prompt('Hey there! What is your name?');
alert('Welcome, ' + name + '! I hope you are ready for some silliness!');

var correctAnswer = 0
var age = prompt('Is Haley 24?');
if (age.toUpperCase() === 'YES' || age.toUpperCase() === 'Y') {
    alert('I sure am!');
    correctAnswer += 1;
}
else if (age.toUpperCase() === 'NO' || age.toUpperCase() === 'N') {
    alert('Do you think I look old or something?');
}
else {
    alert('That is not a valid Response. Please respond with YES/NO or Y/N');
}
console.log('Is Haley 24? ' + age)

var snacks = prompt('Is it true that Haley hates snacks?');
if (snacks.toLowerCase() === 'no' || snacks.toLowerCase() === 'n') {
    alert('Of course not! She is a very hungry human.');
    correctAnswer += 1;
}
else if (snacks.toLowerCase() === 'yes' || snacks.toLowerCase() === 'y') {
    alert('Ummm excuse me?');
}
else {
    alert('That is not a valid response. Please respond with YES/NO or Y/N');
}
console.log('Is it true that Haley hates snacks? ' + snacks);

var snakes = prompt('Does Haley love snakes?');
if (snakes.toUpperCase() === 'NO' || snakes.toUpperCase() === 'N') {
    alert('She hates them with every fiber of her being.');
    correctAnswer += 1;
}
else if (snakes.toUpperCase() === 'YES' || snakes.toUpperCase() === 'Y') {
    alert('You could not be more wrong.');
}
else {
    alert('That is not a valid response. Please respond with YES/NO or Y/N');
}
console.log('Does Haley love snakes? ' + snakes);

var tattoo = prompt('Does Haley have a tattoo of a tooth?');
if (tattoo.toLowerCase() === 'yes' || tattoo.toLowerCase() === 'y') {
    alert('Truuuuuuuu');
    correctAnswer += 1;
}
else if (tattoo.toLowerCase() === 'no' || tattoo.toLowerCase() === 'n') {
    alert('Oh, yeah she actually does...');
}
else {
    alert('That is not a valid response. Please respond with YES/NO or Y/N');
}
console.log('Does Haley have a tattoo of a tooth? ' + tattoo);

var dog = prompt('Is Haley obsessed with her dog, Benson Wigglepuff?');
if (dog.toUpperCase() === 'YES' || dog.toUpperCase() === 'Y') {
    alert('Yeah, and it is a little weird...');
    correctAnswer += 1;
}
else if (dog.toUpperCase() === 'NO' || dog.toUpperCase() === 'N') {
    alert('She is hella obsessed.');
}
else {
    alert('That is not a valid response. Please respond with YES/NO or Y/N.');
}
console.log('Is Haley obsessed with her dog, Benson Wigglepuff? ' + dog);

var popsicle = 3;
for (var numberOfGuesses = 0; numberOfGuesses < 4; numberOfGuesses++) {
    var popsicleAnswer = prompt('How many popsicles did Haley eat yesterday?')
    popsicleAnswer = parseInt(popsicleAnswer)
    if (popsicleAnswer === popsicle) {
        alert('She sure did!')
        correctAnswer += 1;
        break;
    } else if (popsicleAnswer > popsicle) {
        alert('Too High')
    } else {
        alert('Too Low')
    }
}
if (numberOfGuesses === 4) {
    alert('You have run out of guesses!')
}
var favoriteBreeds = ['pugs', 'puggles', 'labs'];
for (numberOfGuesses = 0; numberOfGuesses < 6; numberOfGuesses++) {
    var breedGuess = prompt('What are Haley\'s favorite dog breeds?')
    if (favoriteBreeds.indexOf(breedGuess) === -1) {
        alert('Nope! Try again!')
    } else {
        alert('That\'s right!')
        correctAnswer += 1;
        break;
    }
}
if(numberOfGuesses === 6) {
    alert('Sorry, the possible answers were pugs, puggles or labs!')
}

console.log ('Your score is ' + correctAnswer  + ' out of 7, ' + name + '. Thanks for playing!');