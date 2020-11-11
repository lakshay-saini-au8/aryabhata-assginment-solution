class Fruit {
  constructor(name, color, count) {
    this.name = name;
    this.color = color;
    this.count = count;
  }
  total() {
    return this.count;
  }
}

class Apple extends Fruit {
  constructor(name, color, count, taste, orginPlace) {
    super(name, color, count);
    this.taste = taste;
    this.orginPlace = orginPlace;
  }
}

const newObj = new Apple("Apple", "Red", "10", "sweet", "Roorkee");
console.log(newObj.total());
