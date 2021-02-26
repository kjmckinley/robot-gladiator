// ROBOT GLADIATOR

var playerName = window.prompt("What Is Your Robot's Name?");
var playerHealth = 100;
var playerAttack = 25;
var playerMoney = 10;
var playerScore = 0;

var enemyNames = ["Roberto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 20;

window.alert(playerName + " Is Ready to Fight!\n" + "Starting Health: " + playerHealth + "\nStarting Money: " + playerMoney + "\nTotal Score: " + playerScore);

console.log("Name: " + playerName, "Health: " + playerHealth, "AP: " + playerAttack);

// end() Function that takes in user response when all fighters or the player is defeated
var endGame = function() {
    
    window.alert("GAME OVER\nCuurent Health: " + playerHealth + "\nRemaining Money: " + playerMoney + "\nTotal Score: " + playerScore);

    if (playerHealth > 0) {

        window.alert("Great Job! Your Robot Survived... For Now...")

        var playAgain = window.confirm("Would you like to play again?");

        // Asks user if they want to keep playing
        if (playAgain) {
            startGame();
        }
        else {
            window.alert("Thanks For Playing Robot Gladiators! Come Back Soon!!")
        }
    }
    else {
        // Reset player health and stats
        playerHealth = 100;
        playerMoney = 10;
        playerScore = 0;

        window.alert("Your Robot Fighter " + playerName + "Has Fallen In Battle.\nYou Must Start With a New Fighter")

        var playAgain = window.confirm("Would you like to play again?");

        if (playAgain) {
            //once again asks user for a new player name
            playerName = window.prompt("What Is Your Robot's Name?");
            // once again shows users their starting stats
            window.alert(playerName + " Is Ready to Fight!\n" + "Starting Health: " + playerHealth + "\nStarting Money: " + playerMoney + "\nTotal Score: " + playerScore);
            startGame();
        }
        else {
            window.alert("Thanks For Playing Robot Gladiators! Come Back Soon!!")
        }
    }
    
}

// START function to call anytime the player wants to play again
var startGame = function() {
    // This creates a function named "FIGHT"
    var fight = function(enemyName) {

        while(enemyHealth > 0 && playerHealth > 0) {
            // Ask user if they would like to FIGHT or SKIP
            var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle with " + enemyName + "?");
            promptFight = promptFight.toUpperCase();
            console.log(playerName + " has decided to " + promptFight + " this battle.");

            // Set conditions for what to do if the user picks FIGHT
            if(promptFight === "FIGHT") {
                //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
                enemyHealth -= playerAttack;
                // Log a resulting message to the console so we know that it worked.
                console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
                // Check enemy's health
                if (enemyHealth <= 0) {
                    window.alert(enemyName + " has died!");
                    playerMoney += 10;
                    playerScore += 100;
                    window.alert(playerName + " has " + playerHealth + " health left and was awarded 10 monies.")
                    console.log(playerName + " has " + playerHealth + " health left and was awarded 10 monies.");
                    
                    if (i === (enemyNames.length - 1)){
                        endGame();
                        break;
                    }
                    else {
                        break;
                    }
                   
                }
                else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }

                // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
                playerHealth -= enemyAttack;
                // Log a resulting message to the console so we know that it worked.
                console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

                // Check player's health
                if (playerHealth <= 0) {
                    window.alert(playerName + " has died!");
                    endGame();
                }
                else {
                    window.alert(playerName + " still has " + playerHealth + " health left.");
                }
            } 

            // For if the user types in SKIP
            else if (promptFight === "SKIP") {
                skipChoice = window.confirm("Are you sure you want to SKIP your fight with " + enemyName + "?" + "\nYour money will reduce by 5.\nCurrent Amount: " + playerMoney)

                // If skipChoice is true
                if (skipChoice) {
                    playerMoney -= 5;
                    if (playerMoney < 0) {
                        window.alert(playerName + " has run out of money and can't continue to fight. Try again!");
                        break;
                    }
                    else {
                        window.alert ("You paid off " + enemyName + ".\nMoney Remaining: " + playerMoney);

                        if (i === (enemyNames.length - 1)){
                            endGame();
                            break;
                        }
                        else {
                            break;
                        }
                    }     
                }
                else {
                    skipChoice = false;
                }
            }

            // For invalid input 
            else {
                window.alert ("ERROR: " + "'" + promptFight + "'" + " Is Not Valid Input.\nPlease Try Again!");
            }
        }
    };

    // iterate to each enemy in the array and pass the index value to the fight() function
    for (var i = 0; i < enemyNames.length; i++) {
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        window.alert("Welcome to Robot Gladiators!\nROUND: " + (i + 1) + " - " + playerName + " VS " + pickedEnemyName);
        fight (pickedEnemyName);
    }
    
};

// Calls the startGame() function once the page has loaded
startGame();



