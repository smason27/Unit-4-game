
// VARIABLES
var chooseHero = true;
var chooseEnemy = true;
var userHero = "";
var enemy = "";
var userAbilities;
var enemyAbilities;
var remainingEnemies = [];
var enemyHealth = 0;
var enemyAttack = 0;
var userHealth = 0;
var userAttack = 0;
var enemiesChosen = 0;

// OBJECT HERO/ABILITIES
var heroes = {
    dva : {
        heroHealth: 250,
        heroAttack: 7,
    },
    soldier : {
        heroHealth: 175,
        heroAttack: 15,
    },
    roadhog : {
        heroHealth: 275,
        heroAttack: 3,
    },
    tracer : {
        heroHealth: 150,
        heroAttack: 18,
    }  
}

$("document").ready(function() {
     $(".hero-img").on("click", function() {
         if(chooseHero) {
            chooseHero = false;
            $("#attacker").html(this);
            userHero = $(this).data("hero");
            userHealth = heroes[userHero].heroHealth;
            $("#playerHealth").text("Player Health: " + userHealth);
            userAttack = heroes[userHero].heroAttack;
            console.log(this);
            console.log(heroes[userHero]);
            console.log(chooseHero)
        } else if(chooseEnemy) {
                $("#opponent").html(this);
                enemy = $(this).data("hero");
                enemyHealth = heroes[enemy].heroHealth;
                $("#enemyHealth").text("Enemy Health: " + enemyHealth)
                enemyAttack = heroes[enemy].heroAttack;
                chooseEnemy = false;
                console.log(enemiesChosen)
                console.log(this);
                console.log(heroes[enemy]);
        }
    }); 
});

function attack() {   
    var updateEnemyHealth = enemyHealth - userAttack;
    var updateUserAttack = userAttack + 2;
    enemyHealth = updateEnemyHealth;
    $("#enemyHealth").text("Enemy Health: " + updateEnemyHealth)
    userAttack = updateUserAttack;

    if(updateEnemyHealth <= 0) {
        alert("you have defeated enemy! select another enemy to continue the fight!");
        $("#enemyHealth").text("Defeated" )
        enemiesChosen += 1
        chooseEnemy = true
        console.log(enemiesChosen);
        checkWin();
    } else {
        counterAttack();
    }
}

function checkWin() {
    if(enemiesChosen === 3) {
        alert("YOU WIN");
    } 
}
    
function counterAttack() {
    var updateUserHealth = userHealth - enemyAttack;
    userHealth = updateUserHealth;
    $("#playerHealth").text("Player Health: " + updateUserHealth);

    if(updateUserHealth <=0) {
        alert("you lose")
        $("#playerHealth").text("Player Health: 0")
        chooseHero = true
    }
}

$("#attackEnemy").on("click", attack) 

