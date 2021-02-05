//1
let x = 3;
let y = 14;
if (x > y) {
  console.log('x jest większe od y');
} else {
  console.log('x jest mniejsze od y');
}

//2
let num1 = 45;
let num2 = 52;
let num3 = 12;
if (num1 > num2 && num1 > num3) {
    console.log('num1 jest największa');
} else if (num2 > num1 && num2 > num3) {
    console.log('num2 jest największa');
} else {
    console.log('num3 jest największa');
}

//3
for (let i = 0; i < 10; i++) {
  console.log('Lubię JavaScript');
}

//4
let result = 0;
for (let i = 0; i <= 10; i++) {
  result += i;
} console.log(result);

//5
var n = 5;
for (var i = 0; i <= n; i++) {
  if(i%2==0) {
    console.log('liczba ' +i+ ' jest parzysta');
  } else {
    console.log('liczba ' +i+ ' jest nieparzysta');
  }
}

//6
for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
      console.log('i= ' + i + ', j= ' + j);
    }
  }

//7
console.log(0);
for(let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

//8
//a
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }
  //b
  let star = ' *';
  
  for (let x = 0; x < 5; x++) {
    var result = '';
    for (y = 0; y < 5 - x; y++) {
      result += ' ';
    }
    for (z = 0; z < x + 1; z++) {
      result += star;
    }
    console.log(result);
  }
  //c
  let star = '*';
  
  for (let x = 0; x < 5; x++) {
    let result = '';
    for (y = 0; y < 5 - x; y++) {
      result += ' ';
    }
    for (z = 0; z < x + 1; z++) {
      result += star;
    }
    for (v = 1; v < x + 1; v++) {
      result += '*';
    }
    console.log(result);
  }
  
  //d
  let x = 5;
  let star = '*';
  for (let i = 0; i < 11; i++) {
      let result = '';
      for (let j = 0; j < x; j++) {
          if (i < x) {
              result += j <= i ? star : j;
          } else if (i > x) {
              result = (j < i-6 ? (j-4)*-1 : star) + result;
          } else {
              result = "-----";
          }
      }
      console.log(result);
  }
  
  //e
  let star = ' *';
  
  for (let x = 0; x < 5; x++) {
    var result = '';
    for (y = 0; y < 5 - x; y++) {
      result += ' ';
    }
    for (z = 0; z < x + 1; z++) {
      result += star;
    }
    console.log(result);
  }
  for (v = 0; v < 3; v++) {
    console.log('     *');
  }
