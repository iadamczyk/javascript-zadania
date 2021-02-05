//1
var Person1 = {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    age: 37,
    country: 'England',
    city: 'London'
  }
  var Person2 = {
    firstName: 'John',
    lastName: 'Watson',
    age: 45,
    country: 'England',
    city: 'London'
  }
  function info() {
    console.log(this.firstName + ', ' + this.lastName + ', ' + this.age + ', ' + this.country + ', ' + this.city);
  }
  
  function add() {
    this.age++;
  }
  
  Person1.info = info;
  Person2.info = info;
  Person1.add = add;
  Person2.add = add;
  
  Person1.info();
  Person1.add();
  Person1.info();
  Person2.info();
  Person2.add();
  Person2.info();
  
//2
  Person1.favDish = ['tea'];
  Person2.favDish = ['broccoli soup'];
  
  Person1.showFavDish = function() {
    console.log(this.favDish)
  };
  Person2.showFavDish = function() {
    console.log(this.favDish)
  };
  
  Person1.showFavDish();
  Person2.showFavDish();
  
  let addNewFD = function (el) {
    this.favDish.push(el);
  }
  Person1.addNewFD = addNewFD;
  Person2.addNewFD = addNewFD;
  Person1.addNewFD('squid');
  Person2.addNewFD('cauliflower soup');
  Person1.showFavDish();
  Person2.showFavDish();

//3
function Calculator(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function () {
        return (this.a + this.b);
    }
    this.sub = function () {
        return (this.a - this.b);
    }
    this.mul = function () {
        return (this.a * this.b);
    }
    this.div = function () {
        if(b === 0){
            console.log('cannot be divided by 0');
        } 
        else {
            return (this.a / this.b);
        }
    }
}
const calculator = new Calculator(1, 9);
console.log(calculator.sum());
console.log(calculator.sub());
console.log(calculator.mul());
console.log(calculator.div());

//4
function ladder(rungs) {
    this.rungs = rungs;
    this.where = 0;
    this.climb = () => {
        if(this.where > 0) {
            console.log('You need to get off the ladder');
        } else {
            console.log('You are climbing the ladder');
            for(var i = 0; i <= this.rungs; i++) {
                console.log("Rung " + this.where++);
            }
        }
      console.log(this.where);
    }

    this.getOff = () => {
        if(this.where == 0) {
            console.log('You need to climb the ladder');
        } else {
            console.log('You come down the ladder ');
            for(var i; i <= this.rungs; i++) {
                console.log("Rung " + this.where--);
            }
        }
    }
}
const newLadder = new ladder(4);
newLadder.climb();
newLadder.climb();
newLadder.getOff();
newLadder.getOff();
