"use strict";

// This function starts the game
const startGame = () => {
    let play = prompt("Do you want to play?");
    let name;
    if (play === "yes") {
        name = prompt("What is your name?")
        startCombat(play, name);
    } else if (play === "no") {
        console.log("Maybe we will play later.")
    }
};

// Generate damage
const getDamage = () => {
    return Math.floor(Math.random() * 5) + 1;
};

// If user wants to play, this function wills start combat
const startCombat = (play, name) => {
    let grantHealth = 10;
    let userHealth = 40;
    let userWins = 0;
    
    while (play === "yes") {
        let attackOrRun = prompt("Attack or run?")
        if (attackOrRun === "attack"){
            if (grantHealth <= 0) {
                userWins++;
                grantHealth = 10;
                if (userWins === 3) {
                    console.log(`${name} is victorious!`);
                    break;
                } else {
                    console.log(`${name} has beaten Grant. ${name} must win ${3 - userWins} more time(s).`);
                }
            }
            if (userHealth <= 0) {
                console.log("Grant beat you. Sucks to suck.");
                break;
            } 
        
            userHealth -= getDamage();
            grantHealth -= getDamage();
            console.log(`${name} was attacked. ${name} has ${userHealth} health left.`);
            console.log(`Grant was attacked. Grant has ${grantHealth} health left.`);

        } else if (attackOrRun === "run") {
            console.log("You can run but you can't hide!");
            break;
        } else {
            console.log("Something went wrong. We only fight with clear consent! Do you want to attack or run?")
        }
    }
};

startGame();

