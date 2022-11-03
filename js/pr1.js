"use strict";
console.log("pr1.js");

const numbers = [
  1, 2, 3, 5.3, 8, -8, -5.5, -6, -16, -5, -9, 4.2, 5, 12, -6, 45,
];

const nums2 = [2, 5, -10, "one", true, 7, "two", 1];

// 1. numbers masyvo atrinkti ir grazinti tik sveikuosius skaicius

let sveikiejiSkaiciai = numbers.filter((sk) => sk % 1 === 0);
console.log("sveikiejiSkaiciai ===", sveikiejiSkaiciai);
// 2. susumuoti visa numbers masyva.

let sumAll = numbers.reduce((acc, sk) => {
  return acc + sk;
}, 0);
console.log("sumAll ===", sumAll);
// 3. Grazinti nauja masyva kuriame yra objektai
// [
//   {index: 0, reiksme: 1}
//   {index: 1, reiksme: 2}
//    ...
// ]

let newObj = numbers.reduce((acc, sk, i) => {
  let tempArray = {};
  tempArray.index = i;
  tempArray.reiksme = sk;
  acc.push(tempArray);
  return acc;
}, []);
console.log("newObj ===", newObj);
// 4. grazinti nauja masyva su Suapvalintom reikšmem iki sveikų skaičių

let suapvalintiSkaiciai = numbers.map((sk) => {
  return +sk.toFixed(0);
});
console.log("suapvalintiSkaiciai ===", suapvalintiSkaiciai);

// 5. isrikiuoti numbers masyva nuo didziausio iki maziausio
let sortedNmbers = numbers.sort((a, b) => a - b);
console.log("sortedNmbers ===", sortedNmbers);

// 6. is nums2 masyvo atrinkti tik skaiciu masyva ir grazinti jo vidurki

let tikSkaiciuMasyvas = nums2
  .filter((sk) => typeof sk === "number")
  .reduce((acc, sk) => acc + sk, 0);
console.log("tikSkaiciuMasyvas ===", tikSkaiciuMasyvas);
// 7. patiktinti ar nums2 masyve yra elementu kurie butu ne skaiciau ir ne string tipo.

let arYraNeSkaiciuIrNeStrin = nums2.some(
  (sk) => typeof sk !== "number" && typeof sk !== "string"
);
console.log("arYraNeSkaiciuIrNeStrin ===", arYraNeSkaiciuIrNeStrin);
