"use strict";

let play = prompt("Type 'yes' if you want to play!")
let name = prompt("What's your name?")
let grantHealth = 10;
let userHealth = 40;
let userWins = 0;
let grantWins = 0;

while (play === "yes") {
    userHealth -= Math.floor(Math.random() * 2) + 1;
    grantHealth -= Math.floor(Math.random() * 2) + 1;
    
    console.log(`
    ${name} health is ${userHealth}
    Grant health is ${grantHealth}
    `);

    if (grantHealth <= 0) {
        userWins += 1;
        grantHealth = 10;
        console.log(`
        User Wins: ${userWins}
        Grant Wins: ${grantWins}
        `)

    } if (userHealth <= 0) {
        console.log("Grant wins! You lose.");
        break;
    } 

    if (userWins === 3) {
        console.log(`${name} has ${userWins}. You win!`);
        break;
    } 

}