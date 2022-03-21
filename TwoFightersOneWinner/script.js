// I didn't get this one, but it was cool, great answers I didn't really think of.
// Part of the challenge on this one was actually testing my own answer.
// The error code wasn't very clear and I couldn't tell what I was outputting. 
// In hindsight I could have created my own fighter objects...

// My idea was to go back and forth between fighters checking each time if they were still alive. 
// I definitely should have taken the time to consider a more efficient method

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

// Best solution (and a bit clever, though obvious)
// whoever requires the least number of attacks to kill, or whoever can take the most hits before dying, wins

function declareWinner(fighter1, fighter2, firstAttacker) {
    var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack ); // calculating number of hits to die
    var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
    if(fac1 < fac2) {
      return fighter2.name;
    } else if(fac2 < fac1) {
      return fighter1.name;
    } else {
      return firstAttacker;
    }
  }

  // Another one that was a little closer to my version, but cleaner and efficient.
  // You don't need to check if they survived each time. If either one ends the while loop you can figure it out from there. 

  function declareWinner(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0) {
      fighter2.health -= fighter1.damagePerAttack;
      fighter1.health -= fighter2.damagePerAttack;
    }
    
    if (fighter1.health <= 0 && fighter2.health <= 0)
      return firstAttacker;
    else if (fighter1.health <= 0)
      return fighter2.name;
    else
      return fighter1.name;
  }