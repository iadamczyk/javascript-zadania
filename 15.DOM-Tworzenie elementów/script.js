//1
const myDiv = document.createElement('div');
myDiv.innerText = 'To jest nowy element';
document.body.appendChild(myDiv);

//2
const favouriteFruits = document.createElement('ul');
const fruits = ['Truskawki', 'Maliny', 'Banany', 'Kiwi', 'Borówki', 'Figi'];
fruits.forEach(el => {
  const li = document.createElement('li');
  li.innerText = el;
  favouriteFruits.appendChild(li);
})
document.body.appendChild(favouriteFruits);

//3
favouriteFruits.addEventListener('click', (ev) => {
    Array.from(favouriteFruits.children).forEach((element, index) => {
        if (index % 2 === 1) {
            favouriteFruits.removeChild(element);
        }
    });
});

//4
const button = document.createElement('button');
button.innerText = 'Remove button';
document.body.appendChild(button);
button.addEventListener('click', (event) => {
  document.body.removeChild(button);
});

//5
const randomNumber = Math.floor(Math.random() * 20);
for (let i = 0; i < randomNumber; i++) {
    const randomDiv = document.createElement("div");
    randomDiv.innerText = "to jest div numer: " + i;
    document.body.appendChild(randomDiv);    
}

//6
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const span1 = document.createElement("span");
const span2 = document.createElement("span");
div1.textContent = "to jest div";
div3.textContent = "to jest div";
span1.textContent = " to jest span";
span2.textContent = "to jest span";
div2.appendChild(div3);
document.body.appendChild(div1);
document.body.appendChild(span1);
document.body.appendChild(div2);
document.body.appendChild(span2);

//7
const elements = [1, 2, 3, 4, 5, 6];
const divs = document.createElement('div');
const firstList = document.createElement('ul');
const secondList = document.createElement('ul');

elements.forEach((element) => {
    const firstListElement = document.createElement('li');
    firstListElement.innerText = element;
    firstList.append(firstListElement);
});

const firstButton = document.createElement('button');
firstButton.innerText = 'Click me';

firstButton.addEventListener('click', () => {
    secondList.append(firstList.lastElementChild);

    secondButton.disabled = false;

    if (!firstList.children.length) {
        firstButton.disabled = true;
    }
});

const secondButton = document.createElement('button');
secondButton.innerText = 'Click me';

secondButton.addEventListener('click', () => {
    firstList.append(secondList.lastElementChild);

    firstButton.disabled = false;

    if (!secondList.children.length) {
        secondButton.disabled = true;
    }
});

secondButton.disabled = true;
divs.append(firstList);
divs.append(firstButton);
divs.append(secondList);
divs.append(secondButton);

document.body.appendChild(divs);

//8
const form = document.createElement('form');
const input1 = document.createElement('input');
const input2 = document.createElement('input');
const input3 = document.createElement('input');
const input4 = document.createElement('input');
const submit = document.createElement('button');

input1.placeholder = 'Typ';
form.appendChild(input1);

input2.placeholder = 'Treść';
form.appendChild(input2);

input3.placeholder = 'Kolor';
form.appendChild(input3);

input4.placeholder = 'Liczba elementów';
input4.type = 'number';
form.appendChild(input4);

submit.textContent = 'Utwórz';
form.appendChild(submit);

document.querySelector('#root').appendChild(form);

form.addEventListener('submit', createForm);

function createForm(el) {
  el.preventDefault();
  for (let i = 0; i < input4.value; i++) {
    const formElement = document.createElement(input1.value);
    formElement.textContent = input2.value;
    formElement.style.color = input3.value;
    formElement.style.display = 'block';
    form.after(formElement);
  }
}

//9
var sth = document.createElement("br");
document.body.appendChild(sth);

var form = document.createElement("form");
var inputId = 0;
function createFormLine() {
    var div = document.createElement("div");

    var input1 = document.createElement("input");
    input1.setAttribute("placeholder", "Imię");
    input1.setAttribute("name", "name" + inputId);

    var input2 = document.createElement("input");
    input2.setAttribute("placeholder", "Nazwisko");
    input2.setAttribute("name", "name" + inputId);

    var input3 = document.createElement("input");
    input3.setAttribute("placeholder", "Wiek");
    input3.setAttribute("name", "name" + inputId);

    var input4 = document.createElement("input");
    input4.setAttribute("placeholder", "Ilość dzieci");
    input4.setAttribute("name", "name" + inputId);

    div.appendChild(input1);
    div.appendChild(input2);
    div.appendChild(input3);
    div.appendChild(input4);

    form.appendChild(div);
    if(inputId == 0) document.body.appendChild(form);
    inputId++;
}

function createTable() {
    var isTable = document.getElementById("table");
    if(isTable) isTable.remove();

    var table = document.createElement("table");
    table.setAttribute("id", "table");
    var header = document.createElement("tr");

    var column1 = document.createElement("th");
    column1.innerHTML = "Imię";
    var column2 = document.createElement("th");
    column2.innerHTML = "Nazwisko";
    var column3 = document.createElement("th");
    column3.innerHTML = "Wiek";
    var column4 = document.createElement("th");
    column4.innerHTML = "Ilość dzieci";

    header.appendChild(column1);
    header.appendChild(column2);
    header.appendChild(column3);
    header.appendChild(column4);

    table.appendChild(header);

    document.body.appendChild(table);
    
    for(let i = 0; i < inputId; i++) {
        var elements = document.getElementsByName("name" + i);
        var row = document.createElement("tr");
        elements.forEach(e => {
            var column = document.createElement("th");
            column.innerHTML = e.value;
            column.setAttribute("name", "column" + i);
            row.appendChild(column);
        });

        var buttonRemove = document.createElement("button");
        buttonRemove.innerHTML = "Usuń";     
        
        buttonRemove.addEventListener("click", function() {
          var rowToDelete = document.getElementById("row" + i);        
          rowToDelete.remove();
        });
        
        var deleteColumn = document.createElement("th");
        deleteColumn.appendChild(buttonRemove);
        row.appendChild(deleteColumn);
        row.setAttribute("id", "row"+ i);
        table.appendChild(row);
        console.log(elements);
    }
}
createFormLine();

var buttonMore = document.createElement("button");
buttonMore.innerHTML = "Więcej";
document.body.appendChild(buttonMore);

buttonMore.addEventListener("click", function() {
    createFormLine();
});

var buttonCreateTable = document.createElement("button");
buttonCreateTable.innerHTML = "Utwórz";
document.body.appendChild(buttonCreateTable);

buttonCreateTable.addEventListener("click", function() {
    createTable();
upperCase();
});

//10
function upperCase() {
    for(var i = 0; i < inputId; i++) {
        var elements = document.getElementsByName("column" + i);
        elements.forEach(e => {
            if(e.innerHTML) e.innerHTML = e.innerHTML[0].toUpperCase() + e.innerHTML.slice(1);
        });
    }
}

//11
function func11(text) {
    const numbers = text.match(/[0-9]+/g);    
    if (numbers.length > 0) {
        const numbers2 = numbers.map(item => Number(item));
        const sum = numbers2.reduce( (x, y) => x + y );
        console.log(sum);
        const mult = numbers2.reduce( (x, y) => x * y );
     for (let i = 0; i < mult; i++) {
         const div = document.createElement("div");
         div.textContent = text;
         document.body.appendChild(div);
        }
    }
}
func11('zad 11 ma 15 linijek');

//12
function func12(str) {
    const sth = {
      string: str,
      change: function () {
        if (this.string.includes('Ala')) {
          this.string = str.replace('Ala', 'Ola');
          console.log(this.string);
        } else {
          let div = document.createElement('div');
          div.textContent = 'Słowo Ala nie występuje w tekście';
          document.getElementById('root').appendChild(div);
        }
      }
    }
  sth.change();
  }
  func12('Ala');

//13
const dataArray = ['a1', 'bb2', 'cc3'];
function letterCount(newTable) {
    let numOfLetters = 0;
    newTable.forEach(i => {
        const str = i.replace(/[^a-z]/gi, '');
        numOfLetters += str.length;
    });
    return numOfLetters;
}
function sumNumbers(newTable) {
    const numbers = newTable.map(i => i.match(/[0-9]+/g));
    const allNumbers = numbers.flat();
    return allNumbers.reduce((a, b) => Number(a) + Number(b));
}
function avgerage(newTable) {
    const numbers = newTable.map(v => v.match(/[0-9]+/g));
    const allNumbers = numbers.flat().filter(i => i);
    const sum = allNumbers.reduce((a, b) => Number(a) + Number(b));
    return sum / allNumbers.length;
}
console.log(letterCount(dataArray));
console.log(sumNumbers(dataArray));
console.log(avgerage(dataArray));

//14
let object = {
    name: '',
    surname: '',
    age: '',
  };
  
  function modify(name, surname, age) {
    object.name = 'John';
    object.surname = 'Watson';
    object.age = 45;
  
    if (object.name.length >= 5 || object.surname.length >= 5) {
      const button = document.createElement('button');
      button.textContent = 'Powrót do stanu początkowego';
      button.addEventListener('click', () => {
        object = { name: '', surname: '', age: '' }
        console.log(object);
      });
      document.body.appendChild(button);
    }
  }
modify();
console.log(object);
