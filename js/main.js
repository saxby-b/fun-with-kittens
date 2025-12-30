const fun = document.createElement("p");

const newCat = function (name, breed) {
  const pet = {
    name: name,
    breed: breed,
    needsSleep: 5,
  };
  return pet;
};

const fluffy = newCat("Fluffy", "Ragdoll");
const snowball = newCat("Snowball", "Persian");
const cookie = newCat("Cookie", "Tabby");
const mittens = newCat("Mittens", "Burmese");
const whiskers = newCat("Whiskers", "Norwegian Forest");
const fluffyImg = document.querySelector(".fluffy-img");
const snowballImg = document.querySelector(".snowball-img");
const cookieImg = document.querySelector(".cookie-img");
const mittensImg = document.querySelector(".mittens-img");
const whiskersImg = document.querySelector(".whiskers-img");
const chosenCat = document.querySelector(".chosen-cat");
const imgContainer = document.querySelector(".img-container");
const facts = document.querySelector(".facts");
const button = document.querySelector(".find");
const playAgain = document.querySelector(".play-again");

const catArray = [];
fluffy.img = fluffyImg;
snowball.img = snowballImg;
cookie.img = cookieImg;
mittens.img = mittensImg;
whiskers.img = whiskersImg;

catArray.push(fluffy, snowball, cookie, mittens, whiskers);
console.log(catArray.length);

const random = function () {
  const randomCat = Math.floor(Math.random() * catArray.length);
  const newCat = catArray[randomCat];

  facts.innerHTML = `Name: ${newCat.name}<br>Breed: ${newCat.breed}`;
  newCat.img.classList.remove("hidden");
  button.classList.add("hidden");

  const nap = function () {
    fun.textContent = `${newCat.name} needs a nap!`;
    newCat.needsSleep = 1;
  };

  const playTime = function () {
    if (newCat.needsSleep === 10) {
      fun.textContent = `${newCat.name} is too sleepy to play.`;
      nap();
    } else {
      fun.textContent = `${newCat.name} loves to play!`;
      this.needsSleep += 1;
    }
  };

  const playButton = document.createElement("button");
  playButton.innerHTML = "Play Time";
  playButton.classList.add("play-button");
  chosenCat.append(playButton);
  chosenCat.append(fun);

  playButton.addEventListener("click", playTime);
};

const again = function () {
  const buttons = document.querySelectorAll(".play-button");
  for (i = 0; i < buttons.length; ++i) {
    buttons[i].classList.add("hidden");
  }

  const imgs = document.querySelectorAll("img");
  for (i = 0; i < imgs.length; ++i) {
    imgs[i].classList.add("hidden");
  }

  fun.textContent = "";
  random();
};

button.addEventListener("click", random);
playAgain.addEventListener("click", again);
