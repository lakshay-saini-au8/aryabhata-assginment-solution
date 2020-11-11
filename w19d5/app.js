class Fruit {
  constructor(name, color, count, place) {
    this.name = name;
    this.color = color;
    this.count = count;
    this.place = place;
  }
  #getPlace() {
    return this.place;
  }
  getPlaceWithData() {
    return this.#getPlace();
  }
}

const newObj = new Fruit("Apple", "Red", "10", "Haldwani");
// console.log(newObj);
console.log(newObj.getPlace());
