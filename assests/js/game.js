// Robot Gladiator


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var playerMoney = 10;

// This creates a function named "fight"
var fight = function() {

    window.alert("Welcome to Robot Gladiators!!");
    // Ask user if they would like to FIGHT or SKIP
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? ");
    promptFight = promptFight.toUpperCase();
    console.log(playerName + " has decided to " + promptFight + " this battle.");

    // Set conditions for what to do if the user picks FIGHT or SKIP
    if(promptFight === "FIGHT") {
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth -= playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " +enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        // Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
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
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    // If user decides to skip
    else if (promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + " has decided to skip this fight. Goodbye!");
          // subtract money from playerMoney for skipping
          playerMoney -= 2;
          console.log("Money Left: " + playerMoney);
        }
        // if no (false), ask question again by running fight() again
        else {
          fight();
        }
    }
    // If input is invalid
    else {
        window.alert("You need to choose a valid option. Try again!");
    }

};

// fight();


