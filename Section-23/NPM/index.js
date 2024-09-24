// var generateName = require("sillyname");  // This is using CJS

// import generateName from "sillyname";  // Imported uisng ESM
// var sillyName = generateName();
// console.log("The generated Name is: ", sillyName);

// Displaying random superhero name 
import {randomSuperhero} from 'superheroes';
var superHeroName = randomSuperhero();
console.log('I am ', superHeroName)