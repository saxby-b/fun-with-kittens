const newCat = function(name, breed) {
const pet = {
    name: name,
    breed: breed, 
    needsSleep: 5,
    nap: function () {
    `${this.name} needs a nap!`;
    this.isTired = 1;
    },
    playTime: function () {
        if(isTired = 10) {
            console.log(`${this.name} is too sleepy to play.`);
            this.nap();
        return;
        }
        else {
            console.log(`${name} loves to play!`);
            this.isTired +1;
        }

    }
};
return pet;
}

const fluffy = newCat("Fluffy", "Ragdoll");
const snowball = newCat("Snowball", "Persian");
const cookie = newCat("Cookie", "Tabby");
const mittens = newCat("Mittens", "Burmese");
const whiskers = newCat("Whiskers", "Norwegian Forest");
const button = document.querySelector("button"); 
const img = document.querySelector("img");
const p = document.querySelector(".chosen-cat p");
const catArray = [];

catArray.push(snowball, cookie, mittens, whiskers, fluffy);
console.log(catArray.length);
const chooseCat = function() {
   /* const randomCat = Math.floor(Math.random() * catArray.length); */
  const randomCat = 0;
    if (randomCat == 0) {
        img.src = "../img/ragdoll-cat.jpeg";
       for(let key in fluffy) {
        p.innerHTML = (key, fluffy[key]);
           
        }



    }


}

button.addEventListener("click", chooseCat); 

/*console.log(fluffy, snowball, cookie, mittens, whiskers); */