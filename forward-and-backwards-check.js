// Create program that will
// 1. Store a user input
// 2. Check to see if the user input is the same forward and back
// 3. Log results w/ either Same or Not the same

const results = (userInput) => {
  userInput = userInput.toLowerCase();
  const reversedUserInput = userInput.split("").reverse().join("")
    if(userInput === reversedUserInput) {
       return 'These are the are the same forward and backwards';
       } else {
         return `${userInput} is not the same as ${reversedUserInput}`;
       }
};
console.log(results('Cool'));
