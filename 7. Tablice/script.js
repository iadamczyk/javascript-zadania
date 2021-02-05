//1
const arr = ['a', 'b', 'c', 'd'];
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//2
const table = ['a', 2, 'c', 4, 5];
console.log(table[0], table[1]);
console.log(table[table.length -1]);
console.log(table);
for(i = 0; i < table.length; i++) {
  if(i % 2 == 0) {
    console.log(table[i]);
  }
  if(typeof table[i] == 'string') {
    console.log(table[i]);
  }
  if(typeof table[i] == 'number') {
    console.log(table[i]);
  }
}

//3
var table = new Array(1, 2, 3, 4, 5, 6);
var sum = 0;

table.forEach(item => {
  sum += item;
});

var average;
average = sum / table.length;

sum = 0;
table.forEach(item => {
  sum -= item;
});

table.forEach(item => {
  if (item % 2 == 0) {
    console.log(item);
  }
});

table.forEach(item => {
  if (item % 2 != 0) {
    console.log(item);
  }
});

var max = table[0];
table.forEach(item => {
  if (item > max) max = item;
});
console.log(max);

var min = table[0];
table.forEach(item => {
  if (item < min) min = item;
});
console.log(min);

for(var i = table.length; i < 0; i--) {
  console.log(table[i]);
}

//4
function sum(t) {
  var x = 0;
  for(var i = 0; i < t.length; i++) {
    x += t[i];
  }
  return x;
}
var table = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sum(table));

//5
function func(tab) {
  var average = tab[0];
  for(var i = 0; i < tab.length; i++) {
    average += tab[i];
  }
  average = average / tab.length;
  for (var j = 0; j < tab.length; j++) {
    console.log(tab[j] * average);
  }
}
const table = [1, 2, 3, 4, 5];
func(table);

//6
function average(table) {
  var sum = 0;
  var length = 0;
  table.forEach(item => {
    if (item % 2 == 0) {
      sum += item;
      length++;
    }
  })
  return sum / length;
}
console.log(average(new Array(1, 2, 3, 4, 5, 6, 7)));

//7
function sor(tab) {
  console.log(tab.sort((a, b) => a - b));
}
sor([14,91,40,76,20,2]);

//8
function func(tab1, tab2) {
  var result = [];
  for(var i = 0; i < tab1.length; i++) {
    result.push(tab1[i] + tab2[i]);
  }
  return result;
}
const table1 = [1, 2, 3, 4];
const table2 = [5, 6, 7, 8];
console.log(func(table1, table2));

//9
function rev(tab){
  console.log(tab.map(i => i * -1));
}
rev([1,2,3,4,5]);
