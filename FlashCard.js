// Define variables //

const inquirer = require("inquirer");
const basicCard = require("./BasicCard.js");
const clozeCard = require("./ClozeCard.js")
var basicCards = [];
var clozeCards = [];
var cardCount = 0;

var basicCard1 = new basicCard("Name the largest freshwater lake in the world?", "lake superior");
var basicCard2 = new basicCard("Where would you find the Sea of Tranquility?", "the moon");
var basicCard3 = new basicCard("Name the seventh planet from the sun.", "uranus");
var basicCard4 = new basicCard("What is the world's longest river?", "amazon");
var basicCard5 = new basicCard("What is the diameter of Earth in miles?", "8000");
var basicCard6 = new basicCard("What colour is Absynthe?", "green");
var basicCard7 = new basicCard("What is the molecular formula for methane?", "ch4");
var basicCard8 = new basicCard("What type of galaxy is the most common in the universe?", "elliptical");
var basicCard9 = new basicCard("The hottest place in the universe is located in which constellation?", "virgo");
var basicCard10 = new basicCard("What is the most common type of star found in the Milky Way?", "red dwarf stars");

var clozeCard1 = new clozeCard("... is the most common type of galaxy in the universe.", "elliptical");
var clozeCard2 = new clozeCard("... is the molecular formula for methane.", "ch4");

// Push cards into respective arrays //

basicCards.push(basicCard1);
basicCards.push(basicCard2);
basicCards.push(basicCard3);
basicCards.push(basicCard4);
basicCards.push(basicCard5);
basicCards.push(basicCard6);
basicCards.push(basicCard7);
basicCards.push(basicCard8);
basicCards.push(basicCard9);
basicCards.push(basicCard10);

clozeCards.push(clozeCard1);
clozeCards.push(clozeCard2);

// Flashcard start //

function startFlash() {
    inquirer.prompt([
        {
            type: "list",
            name: "cardType",
            message: "Hello! Welcome to the flashcard generator. Choose your flashcard of choice:",
            choices: ["Basic Cards", "Cloze Cards"]
        }
    ]).then(function (answer) {
        if (answer.cardType === "Basic Cards") {
            console.log("Basic flashcards start!");
            basicFlash();
        }
        else if (answer.cardType === "Cloze Cards") {
            console.log("Cloze flashcards start!");
            clozeFlash();
        }
    });
}

startFlash();

// Flashcard functions //

function basicFlash() {
    if (cardCount < basicCards.length) {
        inquirer.prompt([
            {
                type: "input",
                name: "question",
                message: basicCards[cardCount].front
            }
        ]).then(function (answer) {
            if ((answer.question).toLowerCase() === basicCards[cardCount].back) {
                console.log("Correct!");
                cardCount++
                basicFlash();
            }
            else {
                console.log("Incorrect :(");
                console.log("The correct answer is: " + basicCards[cardCount].back);
                cardCount++
                basicFlash();
            }
        });
    }
}

function clozeFlash() {
    if (cardCount < cards.length) {
        inquirer.prompt([
            {
                name: "partial",
                message: cards[cardCount].text
            }
        ]).then(function (answer) {
            if ((answer.partial).toLowerCase() === cards[cardCount].cloze) {
                console.log("correct");
                cardCount++
                flash();
            }
            else {
                console.log("incorrect");
                cards[cardCount].full();
                cardCount++
                flash();
            }
        });
    }
}
