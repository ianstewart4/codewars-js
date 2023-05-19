// Your task is to check if the gunners are loaded and ready, if they are: Fire!

// If they aren't ready: Shiver me timbers!

// Your gunners for each test case are 2, 3 or 4.

// When you check if they are ready their answers are in a dictionary and will either be: aye or nay

// Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)

// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

// My solution

const cannonsReady = (gunners) => {
  for(const gunner of Object.values(gunners)){
    if(gunner === 'nay'){
      return 'Shiver me timbers!'
    }
  }
  return 'Fire!'
}