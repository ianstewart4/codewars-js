

// My solution
// I wrote this a while ago. Definitely longer than it needed to be as there is a more algorithmic approach that is possible

function declareWinner(fighter1, fighter2, firstAttacker) {

    if (firstAttacker == fighter1.name) { // fighter1 starts

        while (fighter1.health > 0 && fighter2.health > 0) { // while both are still alive
            fighter2.health -= fighter1.damagePerAttack // reduce fighter2 health by fighter1 damage

            if (fighter2.health > 0) { //check if that killed fighter2 (health below 0), if not, fighter 2 attacks
                fighter1.health -= fighter2.damagePerAttack

            } else {
                return fighter1.name
            }
            if (fighter1.health <= 0) {
                return fighter2.name
            }
        }

    } else if (firstAttacker == fighter2.name) { // fighter2 starts

        while (fighter1.health > 0 && fighter2.health > 0) { // while both are still alive
            fighter1.health -= fighter2.damagePerAttack // reduce fighter1 health by fighter2 damage

            if (fighter1.health > 0) { //check if that killed fighter1 (health below 0), if not, fighter 1 attacks
                fighter2.health -= fighter1.damagePerAttack

            } else {
                return fighter2.name
            }
            if (fighter2.health <= 0) {
                return fighter1.name
            }
        }

    }
}

// Best
// This is the more algorithmic approach I was referring to. 

function declareWinner(fighter1, fighter2, firstAttacker) {
    var fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    var fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
    if (fac1 < fac2) {
        return fighter2.name;
    } else if (fac2 < fac1) {
        return fighter1.name;
    } else {
        return firstAttacker;
    }
}