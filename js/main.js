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
        console.log(`${this.name} is too sleepy to play.`);
        this.nap();
      } else {
        console.log(`${this.name} loves to play!`);
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
const button = document.querySelector("button");
const chosenCat = document.querySelector(".chosen-cat");
const img = document.querySelector("img");
const p = document.querySelector(".chosen-cat p");
const catArray = [];

catArray.push(fluffy, snowball, cookie, mittens, whiskers);
console.log(catArray.length);
const chooseCat = function () {
  /* const randomCat = Math.floor(Math.random() * catArray.length); */
  const randomCat = 0;
  if (randomCat == 0) {
    if (img.classList.contains("fluffy-img")) {
      img.classList.remove("hidden");
    }
    p.innerHTML = `Name:${fluffy.name}<br> Breed:${fluffy.breed}<br> 
      `;
    const playButton = document.createElement("button");
    playButton.innerHTML = `Play Time`;

    chosenCat.append(playButton);

    playButton.addEventListener("click", fluffy.playTime);
  }
};

button.addEventListener("click", chooseCat);

/*console.log(fluffy, snowball, cookie, mittens, whiskers); */
