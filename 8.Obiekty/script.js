//1
var car = {
    brand: 'Honda',
    color: 'Grey',
    year: '2005'
  }
  console.log(car);
  console.log(car.brand);

//2
car.changeYear = function (year) {
  this.year = year;
};
car.changeYear(2010);
console.log(car.year);

//3
let object = {
    sum: 0,
    calculateSum(testArray) {
      this.sum = testArray.reduce((a, b) => {
        return a + b
      });
    }
  }
  object.calculateSum([1, 2, 3, 4]);
  console.log(object.sum);

//4
var car = {
    name: 'BMW',
    color: 'Grey',
    age: 12
  }
  for(let key in car) {
    console.log(key + ':' + car[key]);
  }

//5
var car = {
    name: 'Honda',
    color: 'Grey',
    age: 12
  };
  car.newNames = {
    name1: 'Suzuki',
    name2: 'Toyota'
  };
  console.log(car.newNames.name1);

//6
var car = {
    brand: 'Toyota',
    color: 'Black',
    age: 18
  };
  car.subBrand = 'LandCruiser';
  car.sayHello = () => console.log('Hello');
  car.sayHello();
  console.log(car.subBrand);
