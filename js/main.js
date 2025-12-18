const fun = document.querySelector(".fun");
const newCat = function (name, breed) {
  const pet = {
    name: name,
    breed: breed,
    needsSleep: 5,
    nap: function () {
      `${this.name} needs a nap!`;
      this.needsSleep = 1;
    },
    playTime: function () {
      if (this.needsSleep === 10) {
        fun.textContent = `${this.name} is too sleepy to play.`;
        this.nap();
      } else {
        fun.textContent = `${this.name} loves to play!`;
        this.needsSleep += 1;
      }
    },
  };
  return pet;
};

const fluffy = newCat("Fluffy", "Ragdoll");
const snowball = newCat("Snowball", "Persian");
const cookie = newCat("Cookie", "Tabby");
const mittens = newCat("Mittens", "Burmese");
const whiskers = newCat("Whiskers", "Norwegian Forest");
const facts = document.querySelector(".facts");
const button = document.querySelector("button");
const fluffyImg = document.querySelector(".fluffy-img");
const snowballImg = document.querySelector(".snowball-img");
const cookieImg = document.querySelector(".cookie-img");
const mittensImg = document.querySelector(".mittens-img");
const whiskersImg = document.querySelector(".whiskers-img");
const catArray = [];

catArray.push(fluffy, snowball, cookie, mittens, whiskers);
console.log(catArray.length);

const random = function () {
  const randomCat = Math.floor(Math.random() * catArray.length);
  const newCat = catArray[randomCat];

  facts.innerHTML = `Name:${newCat.name}<br>Breed:${newCat.breed}`;
};

chooseCatButton.addEventListener("click", random);
