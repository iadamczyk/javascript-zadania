//1
function getTags(elements) {
    const tags = [];
    for (const element of elements) {
        tags.push(element.tagName);
    }
    return tags;
}
console.log(getTags(document.getElementsByClassName('more-divs')));

//2
const shortList = document.querySelector('.short-list');
function displayDetails(item) {
  //2.1
  console.log(item.innerHTML);
  //2.2
  console.log(item.outerHTML);
  //2.3
  console.log(item.className);
  //2.4
  console.log(item.classList);
  //2.5
  console.log(item.dataset);
}
displayDetails(shortList);

//3
const dataSetCheck = document.getElementById("datasetCheck");
function result(elem) {
    const data = document.getElementById("datasetCheck");
    const elmentOne = Number(elem.getAttribute("data-numberone"));
    const elmentTwo = Number(elem.getAttribute("data-numbertwo"));
    const elmentThree = Number(elem.getAttribute("data-number-three"));
    const sum =  elmentOne + elmentTwo + elmentThree;
    const dif = elmentOne - elmentTwo - elmentThree
    console.log("wynik dodawania: " + sum );
    console.log("wynik odejmowania: " + dif);
}
result(dataSetCheck);

//4
const span = document.getElementById('spanText');
span.innerText = 'Zmieniony tekst';

//5
document.getElementById('spanText').className = 'anotherClass';

//6
function display(classList) {
    classList.forEach(function (value) {
        console.log(value);
    });
    console.log(classList.join(' + '));

    document.getElementById('classes').classList = '';
    console.log('Usunięto wszystkie klasy');
}
display(Array.from(document.getElementById('classes').classList));

//7
function longListModify(elements) {
    elements.forEach((element) => {
        if (element.dataset.text === undefined) {
            element.dataset.text = 'text';
        }
    });
};
longListModify(document.querySelectorAll('#longList li'));

//8
function createObject(nameClass) {
    addClass({newClass: nameClass});
}
function addClass(object) {
    const newClassName = object.newClass;
    document.getElementById('myDiv').classList.add(newClassName);
}
createObject('string_z_parametru');

//9
function addingClass(number) {
    let newClass = '';
    if (number % 2 === 0) {
        newClass = 'even';
    } else {
        newClass = 'odd';
    }
    document.getElementById('numbers').className += newClass;
}
addingClass(Math.round(Math.random() * 10));

//10
const longList = document.getElementById('longList');
function getList(element) {
  const childrens = Array.from(element.children);
  const values = childrens.map((child) => child.textContent);
  console.log(values);
  return values;
}
getList(longList);

//11
function changeValues (parentElement) {
    parentElement.querySelectorAll('li').forEach(children => {
        children.dataset.oldnumber = children.innerText;
        children.innerText = Math.round(Math.random() * 10);
    });
}
changeValues(document.getElementById('longList'));
