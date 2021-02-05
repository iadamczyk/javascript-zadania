//1
class Person {
    constructor(firstName, lastName, age, country, city, language) {
        Object.assign(this, { firstName, lastName, age, country, city, language })
    }
    changeAge(age) {
        this.age = age;
    }
    changeCity(city) {
        this.city = city;
    }
}
const person1 = new Person('John', 'Watson', 39, 'England', 'London', 'english');
const person2 = new Person('Sherlock', 'Holmes', 34, 'England', 'London', 'english');
const person3 = new Person('Mycroft', 'Holmes', 44, 'England', 'Birmingham', 'english');
const person4 = new Person('Molly', 'Hooper', 28, 'England', 'London', 'english');
const person5 = new Person('Jim', 'Moriarty', 45, 'England', 'London', 'english');

person1.changeAge(40);
person1.changeCity('Watford');

person2.changeAge(35);
person2.changeCity('Watford');

person3.changeAge(45);
person3.changeCity('London');

person4.changeAge(29);
person4.changeCity('Dartford');

person5.changeAge(46);
person5.changeCity('Edynburg');

console.log(person1, person2, person3, person4, person5);

//2
function Calculator(){
    this.memory = [],
    this.sum = function(a, b) {
        this.memory.push('Dodawanie');
        console.log(a + b);
    }
    this.sub = function(a, b) {
        this.memory.push('Odejmowanie');
        console.log(a - b);
    }
    this.mult = function(a, b) {
        this.memory.push('Mnozenie');
        console.log(a * b);
    }
    this.div = function(a, b) {
        this.memory.push('Dzielenie');
        console.log(a / b);
    }
    this.clear = function() {
        this.memory = [];
    }    
}
const calc = new Calculator();
console.log(calc.sum(2,3));
console.log(calc.sum(4,5));
console.log(calc.memory);
calc.clear();
console.log(calc.memory);

//3
function Constructor () {
    this.number = 0;
    this.setNumber = function() {
      this.number = Math.floor(Math.random() * 10);
      this.checkNumber ();
    }
    this.checkNumber = function() {
      console.log(this.number);
      if(this.number > 5) {
        clearInterval(myInterval);
      }
    }
  }
  const newPr = new Constructor();
  const myInterval = setInterval(() => {
    newPr.setNumber();
  }, 1000);
