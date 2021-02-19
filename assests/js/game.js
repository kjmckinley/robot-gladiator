// ROBOT GLADIATOR


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 25;

console.log("Name: " + playerName, "Health: " + playerHealth, "AP: " + playerAttack);

var enemyNames = ["Roberto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var playerMoney = 10;


// This creates a function named "FIGHT"
var fight = function(enemyName) {

    while(enemyHealth > 0 && playerHealth > 0) {
        // Ask user if they would like to FIGHT or SKIP
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle with " + enemyName + "?");
        promptFight = promptFight.toUpperCase();
        console.log(playerName + " has decided to " + promptFight + " this battle.");

        // Set conditions for what to do if the user picks FIGHT or SKIP
        if(promptFight === "FIGHT") {
            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth -= playerAttack;
            // Log a resulting message to the console so we know that it worked.
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
            // Check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                console.log(playerName + " has " + playerHealth + " health left.");
                break;
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
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        } 
        else if (promptFight === "SKIP") {
            skipChoice = window.confirm("Are you sure you want to SKIP your fight with " + enemyName + "?")

            if (skipChoice) {
                playerMoney -= 4;
                window.alert ("You paid off " + enemyName + " and moved on to the next fight." + " Money Remaining: " + playerMoney);
                break;
            }
            else {
                skipChoice = false;
            }
        }

        else {
            window.alert("Please enter valid input. Try again!");
        }
    }

};

// iterate to each enemy in the array and pass the index value to the fight() function
for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight (pickedEnemyName);
}


