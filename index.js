// INPUTS:
let spaghetti = 400;
let guanciale = 250;
let eggYolks = 6;
let pecorino = 50;
let pepper = 4;

let space = " ";

let step = "                                        ---- \n ";

console.log("Spaghetti 400g", spaghetti);
console.log("Guanciale 250g", guanciale);
console.log("Egg yolks : 6", eggYolks);
console.log("Pecorino 50g", pecorino);
console.log("Pepper 4g", pepper);

console.log("--------------- Follow the steps below ---------------");

console.log(
  "Cut the Guanciale into layers of 1cm each and then into long strips"
);

console.log(step);

let pecorinoYolk = pecorino + space + eggYolks;
console.log(
  "Combine the pecorino cheese with the egg yolks in a bowl",
  pecorinoYolk
);

console.log(step);

console.log(
  "Roast the pepper on a pan until it comes alive, transfer a tiny amount of it to the egg yolk and cheese mixture"
);

console.log(step);

let pecorinoYolkPepper = pecorinoYolk + space + pepper;
console.log(
  "Eggs and cheese now with added pepper! Set aside to rest.",
  pecorinoYolkPepper
);

console.log(step);

console.log(
  "Brown the Guanciale for 3 minutes over medium heat before turning the heat to high for 1 minute until crisp, remove the guanciale from the pan, but keep the grease in and set aside to rest"
);

console.log(step);
