// ROBOT GLADIATOR

var playerName = window.prompt("What Is Your Robot's Name?");
playerName = playerName.toUpperCase();
console.log(playerName);
var playerHealth = 100;
var playerAttack = 40;
var playerMoney = 10;
var playerScore = 0;

var enemyNames = ["Roberto", "Amy Andriod", "Robo Trumble"];
var enemyAttack = 40;

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

        window.alert("Your Robot Fighter " + playerName + "Has Fallen In Battle.\nYou Must Start With a New Fighter");
        playerName = playerName.toUpperCase();

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
};


// Shop function to ask player if they want to buy health or increase attack.
var shop =function () {
    var shopOptionPrompt = window.prompt ("WELCOME TO THE ROBO ARENA SHOP!\nWhile you're here you can select only ONE of the options below:\nREFILL Your Health\nUPGRADE Your Attack\nLEAVE the Shop");
    console.log("original input: " + shopOptionPrompt);
    shopOptionPrompt = shopOptionPrompt.toUpperCase();
    console.log ("input changed to upper case: " + shopOptionPrompt);

    // using a SWITCH statement for practice
    switch (shopOptionPrompt) {
        case "REFILL":
            if (playerMoney >= 7) {
                playerHealth += 20;
                playerMoney -= 7;

                window.alert("Upgraded " + playerName + "'s" + " health by 20pts for 7 monies...\nCurrent Health: " + playerHealth + "\nCurrent Money: " + playerMoney);
            }
            else {
                window.alert("Sorry! You Don't Have Enough Money!");
            }
            break;

        case "UPGRADE":
            if (playerMoney >= 7) {
                playerAttack += 10;
                playerMoney -= 7;

                window.alert("Upgraded " + playerName + "'s" + " attack by 10pts for 7 monies...\nNew Attack Value: " + playerAttack + "\nCurrent Money: " + playerMoney);
            }
            else {
                window.alert("Sorry! You Don't Have Enough Money!");
            }
            break;

        case "LEAVE":
            window.alert("Leaving Store...");
            break;
        
        default:
            window.alert("ERROR: " + "'" + shopOptionPrompt + "'" + " Is Not A Valid Option. Please Try Again!")

            shop();
            break;
    }
};


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
                //Make sure health value does not reach below 0. 
                var damage = randomNumber(playerAttack - 10, playerAttack)

                // give min and max value to generate random attack amount.
                enemyHealth = Math.max(0, enemyHealth - damage);
                console.log("not negative Enemy Health: " + enemyHealth);

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
                //Make sure health value does not reach below 0. generate random damage
                var damage = randomNumber(enemyAttack - 10, enemyAttack);

                playerHealth = Math.max(0, playerHealth - damage);
                console.log("not negative Player Health: " + playerHealth);

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
                    //Make sure playerMoney doesn't go below 0
                    playerMoney = Math.max(0, playerMoney - 10);
                    console.log("not negative amount: " + playerMoney);

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

        //enemyHealth will generate random whole number health value between 20 and 60
        enemyHealth = randomNumber(40, 60);

        window.alert("Welcome to Robot Gladiators!\nROUND: " + (i + 1) + " - " + playerName + " VS " + pickedEnemyName);

        //Call fight function with newly generated info
        fight (pickedEnemyName);

        //if we're not at the last enemey in the array
        if (playerHealth > 0 && i < enemyNames.length - 1) {
            //ask if player wants to go to the shop
            var storeConfirm = window.confirm ("The Fight Is Over, But You Can Visit the Arena Shop Before You Move On\n\nClick OK to enter the Shop.")

            if (storeConfirm) {
                shop();
            }    
        }
    }
    
};


var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min +1) +min);
    console.log("Value of Random Number: " + value);

    return value;
}

// Calls the startGame() function once the page has loaded
startGame();