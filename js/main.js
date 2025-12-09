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
return;
}