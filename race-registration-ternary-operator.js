// Ternary Control Flow
let raceNumber = Math.floor(Math.random() * 1000),
registeredEarly = true;
const runnerAge = 57; 

runnerAge >= 18 && registeredEarly ?
  console.log(`${raceNumber + 1000 }
The race will begin at 9:30am`)
	: runnerAge >= 18 && !registeredEarly ?
    console.log(`${raceNumber}
The race will begin at 11:00am`)
	: console.log(`${raceNumber}
The race will begin at 12:30pm`);
