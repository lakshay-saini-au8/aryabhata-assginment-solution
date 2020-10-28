const { func } = require("prop-types");

function Person(name, profession) {
  this.name = name;
  this.profession = profession;

  return { name, profession };
}

var lakshay = new Person("lakshay", "sde");
console.log(lakshay);
