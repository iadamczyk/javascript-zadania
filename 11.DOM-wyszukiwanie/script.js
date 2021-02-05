//1
let listElements = document.querySelectorAll('.list');
console.log(listElements);

//2
let returnElements = (tag) => {
  return document.querySelectorAll(tag);
}
console.log(returnElements('body'));

//3
let element = document.getElementById('list');
console.log(element);

//4
function showElements(el) {
  let elements = document.querySelectorAll(el);
  console.log(elements);
}
showElements(['li', 'ul', 'span', 'div.list span', 'div#spans span']);
