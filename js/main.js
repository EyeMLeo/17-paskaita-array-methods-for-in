"use strict";
console.log("main.js");

const numbers = [
  1, 2, 3, 5.3, 8, -8, -5.5, -6, -16, -5, -9, 4.2, 5, 12, -6, 45,
];

const nums2 = [2, 5, -10, "one", true, 7, "two", 1];

// 1. atrinkti skaicius didesnius uz 3 => filter

const filteredNums = numbers.filter((sk) => sk > 3);
console.log("filteredNums ===", filteredNums);

//1.1 parasyti funkcija kuri priima argumentu sk uz kuri didesnes reiksmes norim grazinti is argumentu gauto masyvo
function moreThan(limit, arr) {
  // atrinkti skaicius didesnius uz limit esancius arr masyve
  const filtered = arr.filter((sk) => sk > limit);
  return filtered;
}
// function moreThan(limit, arr) {
//   return arr.filter((sk) => sk > limit);
// }
// const moreThan = (limit, arr) => arr.filter((sk) => sk > limit);

console.log("moreThan(1, [7, 2, -5]) ===", moreThan(1, [7, 2, -5]));

// 2. grazinti nauja masyva su padvigubintom reiksmems? => map
const doubles = numbers.map((sk) => sk * 2);
// console.log('doubles ===', doubles);

// 3. gauti neigiamu reiksmiu bendra suma. => filter => reduce
const negativeTotal = numbers
  .filter((sk) => sk < 0)
  .reduce((total, sk) => total + sk, 0);
console.log("negativeTotal ===", negativeTotal);

// 4. suzinoti ar yra sk 5 musu numbers masyve? => includes
const isThereAFive = numbers.includes(5);
console.log("isThereAFive ===", isThereAFive);

// 5. konsoleje atspausdinti visas reiksmes su indexais => forEach
numbers.forEach((sk, i) => console.log(`index: ${i}, reiksme ${sk}`));

// 6. every - grazina true jei vidine funkcija visais atvejai grazino true
// ar visi el numbers masyve yra skaiciai
const allNums = numbers.every((sk) => typeof sk === "number");
console.log("allNums ===", allNums);
// ar visi el yra teigiami
const isAllPositive = numbers.every((sk) => sk > 0);
console.log("isAllPositive ===", isAllPositive);

// 7. some - ar nors vienas el atitinka salyga?
// ar yra nors vienas string tipo elementas masyve?
const isThereAString = numbers.some((sk) => typeof sk === "string");
console.log("isThereAString ===", isThereAString);
