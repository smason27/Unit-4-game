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

// OBJECT HERO/ABILITIES
var heroes = {
    dva : {
        // DVA STARTING HEALTH
        heroHealth: 300,
        // DVA ATTACK DAMAGE
        heroAttack: 14,
    },
    soldier : {
        // SOLDIER STARTING HEALTH
        heroHealth: 200,
        // SOLDIER ATTACK DAMAGE
        heroAttack: 18,
    },
    roadhog : {
        // ROADHOG STARTING HEALTH
        heroHealth: 400,
        //OADHOG ATTACK DAMAGE
        heroAttack: 10,
    },
    tracer : {
        // TRACER STARTING HEALTH
        heroHealth: 150,
        // TRACER ATTACK DAMAGE
        heroAttack: 22,
    }  
}
console.log(this)

// function startGame() {
//     chooseHero = false;
//     chooseEnemy = false;
    
// }

// FUNCTION GAME START()
$("document").ready(function() {
     // CLICK ON HERO TO SELECT PLAYER
     // ON CLICK MOVE HERO TO USER-PLAYER DIV
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
                console.log(this);
                console.log(heroes[enemy]);
        }
    }); 
    // RUN ATTACK FUNCTION
});

// FUNCTION ATTACK
function attack() {
   
    var updateEnemyHealth = enemyHealth - userAttack;
    var updateUserAttack = userAttack + 9;
    var updateUserHealth = userHealth - enemyAttack;
    console.log(userAttack);
    console.log(updateEnemyHealth);
    enemyHealth = updateEnemyHealth;
    $("#enemyHealth").text("Enemy Health: " + updateEnemyHealth)
    userAttack = updateUserAttack;
    userHealth = updateUserHealth;
    $("#playerHealth").text("Player Health: " + updateUserHealth)
    console.log(updateUserAttack);
    console.log(updateUserHealth);

    if(updateEnemyHealth <= 0) {
        alert("you have defeated enemy")
        $("#enemyHealth").text("Enemy Health: 0" )
        chooseEnemy = true
    }

    if(updateUserHealth <=0) {
        alert("you lose")
        $("#playerHealth").text("Player Health: 0")
        chooseHero = true

    }
}

$("#attackEnemy").on("click", attack) 
   
    // CLICK TO ATTACK ENEMY
        // ONCLICK EVENT
        // ATTACK DAMAGE INCREASES EVERY CLICK
    // REDUCE ENEMY HP TO MATCH HERO ATTACK DAMAGE
    // ENEMY IMMEDIATELY COUNTER-ATTACKS (VAR) - DOES NOT INCREASE
    // REDUCE PLAYER HP TO MATCH COUNTER-ATTACK
    // CHECK TO SEE IF WIN/LOSS

// FUNCTION CHECK WIN()
    // IF PLAYER SCORE === 0 PLAYER LOSES
    // ELSE ATTACK()
    // IF ENERMY SCORE === 0 CHOOSE NEXT HERO RANDOMLY
    // IF NO MORE ENEMYS AVAILABLE PLAYER WINS
    // GAME START = FALSE

