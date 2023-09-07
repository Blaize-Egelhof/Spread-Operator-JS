/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator

let arr1= [1,2,3];

let arr2=arr1 //Doesnt make a copy, rather points 1 object to another.

arr2.push(4);

console.log ("Array 2:",arr2)

console.log ("Array 1:",arr1)

//If you use = for an array it doesnt create a copy from arr1 to arr2 , rather it sychronises the data , meaning if I push a value to arr2 it also appears in arr1 which can be un-intended.

// Copying an array

let arr3=[4,5,6] ; 

let arr4=[...arr3] //Here the ... is a spread operator, this in ES

arr4.push(7)

console.log ("Array 3:",arr3)

console.log ("Array 4:",arr4)

// Copying an object

let obj1={a:1 , b:2 , c:3};

let obj2={...obj1,d:4}; //Spread operator is used like normal for objects, this ensures its a copy of the object and NOT one object pointing to another.

let obj3= {...obj1,b:5} //Spread and override value 

console.log ("object 1:",obj1)

console.log ("oject 2:",obj2)

console.log ("oject 3:",obj3)

// Copying only part of an array/object

let arr5 = [...arr1,{...obj1}, ...arr3, "x","y","z"] //using spread on arrays and objects work as expected 

console.log(arr5);
