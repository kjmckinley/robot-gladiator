
// ROBOT GLADIATOR

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min +1) +min);

    return value;
};

var getPlayerName = function () {
    var name = "";

    name = window.prompt("What is Your Robot's Name?");

    while (name === "" || name === null) {
        window.alert("ERROR: You Must Enter at Least 1 Character to Name Your Fighter. Try Again!");
        name = window.prompt("What is Your Robot's Name?");
    }

    return name;
};


//Player and Enemy objects with name, info, health, etc... instead of individual variables
var player = {
    name: getPlayerName(),
    health: 100,
    attack: 40,
    money: 10,
    score: 0,

    // A reset function within the player object to call on when the player dies
    reset: function() {
        this.health = 100;
        this.attack = 40;
        this.money = 10;
        this.score = 0;
    },

    refillHealth: function() {
        if (this.money >= 7) {
          this.health += 20;
          this.money -= 7;

          window.alert("Upgraded " + player.name + "'s" + " health by 20pts for 7 monies...\nCurrent Health: " + player.health + "\nCurrent Money: " + player.money);
        } 
        else {
          window.alert("You don't have enough money!");
        }
      },

    upgradeAttack: function() {
        if (this.money >= 7) {
          this.attack += 10;
          this.money -= 7;

          window.alert("Upgraded " + player.name + "'s" + " attack by 10pts for 7 monies...\nNew Attack Value: " + player.attack + "\nCurrent Money: " + player.money);

        } 
        else {
          window.alert("You don't have enough money!");
        }
      }
};


var enemy = [
    {
        name: "Roberto",
        attack: randomNumber(20, 30),
        health: true
    },
    {
        name: "Amy Android",
        attack: randomNumber(30, 40),
        health: true
    },
    {
        name: "Robo Tumble",
        attack: randomNumber(40, 50),
        health: true
    }
];


// Alert player that they are ready to play.
window.alert(player.name + " Is Ready to Fight!\n-----------------------------\n" + "Starting Health: " + player.health + "\nStarting Money: " + player.money + "\nTotal Score: " + player.score);
console.log("Name: " + player.name, "\nHealth: " + player.health, "\nAttack Power: " + player.attack);


// START function to call anytime the player wants to play again
var startGame = function() {

    // iterate to each enemy in the object array and pass the index value to the fight() function
    for (var i = 0; i < enemy.length; i++) {
        var pickedEnemyObj = enemy[i];

        // will generate random whole number health value between 40 and 60
        pickedEnemyObj.health = randomNumber(40, 60);
        console.log("Random Enemy Health: " + pickedEnemyObj.health);

        // Only welcome the player if they are in the 1st round
        if (i === 0) {
            window.alert("Welcome to Robot Gladiators!");
            window.alert("ROUND: " + (i + 1) + "\n-------------------\n" + player.name + " VS " + pickedEnemyObj.name);
        }
        else{
            window.alert("ROUND: " + (i + 1) + "\n-------------------\n" + player.name + " VS " + pickedEnemyObj.name);
        }
        
        //Call fight function with newly generated info
        fight (pickedEnemyObj);

        //if we're not at the last enemey in the array
        if (player.health > 0 && i < enemy.length - 1) {
            //ask if player wants to go to the shop
            var storeConfirm = window.confirm ("The Fight Is Over, But You Can Visit the Arena Shop Before Moving On.\n\nClick OK to enter the Shop.")

            if (storeConfirm) {
                shop();
            } 
        }
        else {
            endGame();
        }   
    }
    
};


// end() Function that takes in user response when all fighters or the player is defeated
var endGame = function() {

    window.alert("GAME OVER\n---------------------\nCurrent Health: " + player.health + "\nRemaining Money: " + player.money + "\nTotal Score: " + player.score);

    var highscore = localStorage.getItem("highscore");
    if (highscore === null) {
        highscore =0;
    }

    if (player.score > highscore) {
        localStorage.setItem("highscore", player.score);
        localStorage.setItem("name: ", player.name);

        window.alert(player.name + " Now Has the NEW HIGH SCORE: " + player.score);
    }
    else {
        window.alert(player.name + " Came Short of the Currrent High Score." + ".\nTry Again! Don't Give Up Now!");
    }

    if (player.health > 0) {

        window.alert("Great Job! Your Robot, " + player.name + " Has Survived... For Now...")

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
        player.reset();

        window.alert("Your Robot Fighter " + player.name + "Has Fallen In Battle.\nYou Must Start With a New Fighter");

        var playAgain = window.confirm("Would you like to play again?");

        if (playAgain) {
            //once again asks user for a new player name
            player.name = window.prompt("What Is Your Robot's Name?");
            // once again shows users their starting stats
            window.alert(player.name + " Is Ready to Fight!\n" + "Starting Health: " + player.health + "\nStarting Money: " + player.money + "\nTotal Score: " + player.score);
            startGame();
        }
        else {
            window.alert("Thanks For Playing Robot Gladiators! Come Back Soon!!")
        }
    }
};


// Shop function to ask player if they want to buy health or increase attack.
var shop =function () {
    var shopOptionPrompt = window.prompt ("WELCOME TO THE ROBO ARENA SHOP!\n------------------------------------------------\nWhile you're here you can select only ONE of the options below:\n\n1. REFILL Your Health\n2. UPGRADE Your Attack\n3. LEAVE the Shop\n");
    console.log("original input: " + shopOptionPrompt);
    shopOptionPrompt = shopOptionPrompt.toUpperCase();
    console.log ("input changed to upper case: " + shopOptionPrompt);

    // using a SWITCH statement for practice
    switch (shopOptionPrompt) {
        case "REFILL" || "1":
            player.refillHealth();
            break;

        case "UPGRADE" || "2":
            player.upgradeAttack();
            break;

        case "LEAVE" || "3":
            window.alert("Leaving Store...");
            break;
        
        default:
            window.alert("ERROR: " + "'" + shopOptionPrompt + "'" + " Is Not A Valid Option. Please Try Again!");

            shop();
            break;
    }
};



// var fightOrSkip = function() {
//     // ask player if thet want to fight or skip
//     var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle with " + enemy.name + "?");
//     promptFight = promptFight.toUpperCase();
//     console.log(player.name + " has decided to " + promptFight + " this battle.");
//      return promptFight;



//     if (promptFight === "SKIP") {
//         var skipChoice = window.confirm("Are you sure you want to SKIP your fight with " + enemyFighter.name + "?" + "\nYour money will reduce by 5.\nCurrent Amount: " + player.money)

//         // If skipChoice is true
//         if (skipChoice) {
//             //Make sure player.money doesn't go below 0
//             player.money = Math.max(0, player.money - 10);
//             console.log("not negative Money amount: " + player.money);

//             if (player.money < 0) {
//                 window.alert(player.name + " has run out of money and can't continue to fight. Try again!");
//                 break;
//             }
//             else {
//                 window.alert ("You paid off " + enemy.name + ".\nMoney Remaining: " + player.money);

//                 break;
//             }     
//         }
//         else {
//             skipChoice = false;
//         }
//     }

// };


  // This creates a function named "FIGHT"
  var fight = function(enemyFighter) {
 // Randomly select which player goes first
  var playerTurn = true;
  if(Math.random() > 0.5) {
    playerTurn = false;
}

    while(enemyFighter.health > 0 && player.health > 0) {
        // Ask user if they would like to FIGHT or SKIP
        var promptFight = window.prompt(enemyFighter.name.toUpperCase() + " WANTS TO FIGHT!\n----------------------------\n\nWhat Would You Like To Do?\n1. FIGHT\n2. SKIP\n");
        promptFight = promptFight.toUpperCase();
        console.log(player.name + " has decided to " + promptFight + " this battle.");

        // Set conditions for what to do if the user picks FIGHT
        if(promptFight === "FIGHT" || promptFight === "1") {

            

            //Subtract the value of `player.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
            //Make sure health value does not reach below 0. 
            var damage = randomNumber(player.attack - 10, player.attack);
            console.log(player.name + " Attack Value: " + damage);

            // give min and max value to generate random attack amount.
            enemyFighter.health = Math.max(0, enemyFighter.health - damage);
            console.log("Not negative Enemy Health: " + enemyFighter.health);

            // Log a resulting message to the console so we know that it worked.
            window.alert(player.name + " attacked " + enemyFighter.name + " for " + damage + " damage.");
            console.log(player.name + " attacked " + enemyFighter.name + ". " + enemyFighter.name + " now has " + enemyFighter.health + " health remaining.");

            // Check enemy's health
            if (enemyFighter.health <= 0) {
                window.alert("VICTORY!\n-------------\n" + enemyFighter.name + " Has Been Defeated!");
                player.money += 10;
                player.score += 100;
                window.alert(player.name + " has " + player.health + " health left and was awarded 10 monies.");
                console.log(player.name + " has " + player.health + " health left and was awarded 10 monies.");
                
                break;
            }
            else {
                window.alert(enemyFighter.name + " still has " + enemyFighter.health + " health left.");
            }

            // Subtract the value of `enemyFighter.attack` from the value of `player.health` and use that result to update the value in the `player.health` variable.
            //Make sure health value does not reach below 0. generate random damage
            var damage = randomNumber(enemyFighter.attack - 10, enemyFighter.attack);
            console.log(enemyFighter.name + " Attack Value: " + damage);

            player.health = Math.max(0, player.health - damage);
            console.log("Not negative Player Health: " + player.health);

            // Log a resulting message to the console so we know that it worked.
            window.alert(enemyFighter.name + " attacked " + player.name + " for " + damage + " damage.");
            console.log(enemyFighter.name + " attacked " + player.name + ". " + player.name + " now has " + player.health + " health remaining.");

            // Check player's health
            if (player.health <= 0) {
                window.alert("DEFEAT...\n-------------\n" + player.name + " Has Been Fallen in Battle...");
                endGame();
            }
            else {
                window.alert(player.name + " still has " + player.health + " health left.");
            }
        } 

        // For if the user types in SKIP
        else if (promptFight === "SKIP" || promptFight === "2") {
            var skipChoice = window.confirm("Are you sure you want to SKIP your fight with " + enemyFighter.name + "?" + "\nYour money will reduce by 5.\nCurrent Amount: " + player.money)

            // If skipChoice is true
            if (skipChoice) {
                //Make sure player.money doesn't go below 0
                player.money = Math.max(0, player.money - 10);
                console.log("not negative Money amount: " + player.money);

                if (player.money < 0) {
                    window.alert(player.name + " has run out of money and can't continue to fight. Try again!");
                    break;
                }
                else {
                    window.alert ("You paid off " + enemy.name + ".\nMoney Remaining: " + player.money);

                    break;
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



// Calls the startGame() function once the page has loaded
startGame();