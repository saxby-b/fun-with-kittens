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
const chosenCat = document.querySelector(".chosen-cat");
const fluffyImg = document.querySelector(".fluffy-img");
const snowballImg = document.querySelector(".snowball-img");
const cookieImg = document.querySelector(".cookie-img");
const mittensImg = document.querySelector(".mittens-img");
const whiskersImg = document.querySelector(".whiskers-img");
const catArray = [];

catArray.push(fluffy, snowball, cookie, mittens, whiskers);
console.log(catArray.length);

const chooseCat = function () {
  const randomCat = Math.floor(Math.random() * catArray.length);

  console.log(randomCat);
  if (randomCat == 0) {
    fluffyImg.classList.remove("hidden");
    facts.innerHTML = `Name: ${fluffy.name}<br> Breed: ${fluffy.breed}<br> `
  
  } else if (randomCat == 1) {
    snowballImg.classList.remove("hidden");
    facts.innerHTML = `Name: ${snowball.name}<br> Breed: ${snowball.breed}<br> `
  } else if (randomCat == 2) {
    cookieImg.classList.remove("hidden");
    facts.innerHTML = `Name: ${cookie.name}<br> Breed: ${cookie.breed}<br> `
  } else if (randomCat == 3) {
    mittensImg.classList.remove("hidden");
    facts.innerHTML = `Name: ${mittens.name}<br> Breed: ${mittens.breed}<br> `
  } else {
    whiskersImg.classList.remove("hidden");
    facts.innerHTML = `Name: ${whiskers.name}<br> Breed: ${whiskers.breed}<br> `
  }
};

/* const randomCat = 0;
  if (randomCat == 0) {
    if (img.classList.contains("fluffy-img")) {
      img.classList.remove("hidden");
    }
    facts.innerHTML = `Name:${fluffy.name}<br> Breed:${fluffy.breed}<br> 
      `;
    const playButton = document.createElement("button");
    playButton.innerHTML = `Play Time`;

    chosenCat.append(playButton);

    const play = function () {
        fun.classList.remove("hidden");
        fluffy.playTime();
    }
    playButton.addEventListener("click", play);

   
  } 
}; */

button.addEventListener("click", chooseCat);

/*console.log(fluffy, snowball, cookie, mittens, whiskers); */
