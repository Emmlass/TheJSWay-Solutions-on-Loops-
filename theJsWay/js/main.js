// // Carousel
// // Write a program that launches a carousel for 10 turns, showing the turn number each time.

// //Using While Loop
// let turns = 1;
// while (turns <= 10){
//     alert(` Turn number is ${turns}`);
//     turns++;
//     turns
// }

// // When it's done, improve it so that the number of turns is given by the user.
// turns = 1;
// let newTurns = Number(prompt(`Input the number of turns you want `));



// while (turns <= newTurns){
//     alert(` newTurn number is ${turns}` );
//     turns++;
// }

// Using For Loop

// Write a program that launches a carousel for 10 turns, showing the turn number each time.
// turn = 10 ;
// for (let i = 1; i <= turn ;  i++){
//     alert(`Number of turns is ${i} turn` );
// }

// When it's done, improve it so that the number of turns is given by the user.
newTurns = Number(prompt(" Input the number of turn that you want"));
for (let i = 1; i <= newTurns ; i++){
    alert(`Number of turns is ${i}`);
}

// Please note that :
// In the WHILE LOOP when the condition is FALSE the loop stops

// in the FOR LOOP when the condition must be TRUE for the iteration to Work