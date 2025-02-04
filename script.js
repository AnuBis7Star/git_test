// JavaScript ARRAY METHODS

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;                               // .length

console.log("\n");

console.log("The size of fruits is: " + size);
console.log("These fruits are: " + fruits);

console.log("\n");

let toString = fruits.toString();                       // .toString
console.log(toString);

console.log("\n");

let join = fruits.join(" . ");                          // .join("separator")
console.log(join);

console.log("\n");

let pop = fruits.pop();                                 // .pop() pops out last item from array
console.log("Item popped out: "+pop);
console.log("Final array: " + fruits);

console.log("\n");

fruits.push("Mango");                                   // .push("element") adds an element at the end
console.log("Pushed array: " + fruits);

console.log("\n");

fruits.shift();                                         // .shift() "Shifts" out the first element
console.log("Shifted array: "+fruits);

console.log("\n");

fruits.unshift("Banana");                               // .unshift() adds an element at the beginning
console.log("Unshifted array: "+fruits);

console.log("\n");

const girls = ["Nora", "Candice"];
const boys = ["Dexter", "Antonio", "Kadir"];

const friends = girls.concat(boys);                     // .concat() creates a new array by merging existing arrays
console.log("New concatenated array: "+friends);        // it can be done with multiple arrays  ex. arr1.concat(arr2, arr3);
console.log("Length of new array is: "+friends.length); // or even values                       ex. arr1.concat("Peter"); 

console.log("\n");

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.copyWithin(1, 3);                               // .copyWithin copies an element to a position
console.log(fruits1);                                   // first number is the position
                                                        // second number is the item to be copied
console.log("\n");

const myArr = [[1,2],[3,4],[5,6]];
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log("\n");
const newArr = myArr.flat();                            // .flat()
console.log("Flattened array: "+newArr);

console.log("\n");

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(2, 0, "Lemon", "Kiwi");                  // .splice() first parameter where should be added
console.log(fruits2);                                   // second parameter, how many should be removed

console.log("\n");

const newFruits = fruits2.slice(3);                     // .slice() slices out a piece of an array into a new array
console.log(newFruits);
