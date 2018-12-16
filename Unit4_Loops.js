//Loops automatically iterate a block of code based on conditions.
//FOR loops are appropriate when looping a predetermined number of times.
//WHILE loops evaluate a condition for however long it’s true and the looping stops when the condition is false.

//LOOP prints 'Instagram', 'Facebook', 'Twitter'
let socialMedia = ['Instagram', 'Facebook', 'Twitter'];

for (let socialMediaIndex = 0; socialMediaIndex < socialMedia.length; socialMediaIndex++) {
	console.log(socialMedia[socialMediaIndex]);
}


//LOOP prints "c 1 2 3 a 1 2 3 t 1 2 3"
//Each time the outer loop runs, the inner loop completes all iterations.
const animal = 'cat';

for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
  for (let j = 1; j < 4; j++) {
    console.log(j);
  }
}
