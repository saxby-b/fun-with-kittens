const newCat = function(name, breed) {
const pet = {
    name: name,
    breed: breed, 
    needsSleep: 5,
    nap: function () {
    `${this.name} needs a nap!`;
    this.isTired = 1;
    }
}
}