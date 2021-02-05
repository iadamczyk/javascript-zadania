//1
console.log(document.getElementById('buz').parentElement);
console.log(document.getElementById('baz').previousElementSibling);
console.log(document.getElementById('foo').children);
console.log(document.getElementById('foo').parentNode);
console.log(document.getElementById('foo').children[0]);
console.log(document.getElementById('foo').children[1]);

//2
const listenEvent = (element) => {
    element.addEventListener('click', () => { 
       console.log(element.children[0].children[0].children[0].children[1].children[0].children[0].textContent);
    });
  }
ex2Element = document.getElementById('ex2');
listenEvent(ex2Element);

//3
const buttons = document.querySelectorAll('#ex3 button');
buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const span = button.nextElementSibling;
      if (span.style.display === 'none') {
        span.style.display = 'block';
      } else {
        span.style.display = 'none';
      }
    });
  });

//4
document.querySelector('#ex3').querySelectorAll('button').forEach((el) => {
    el.addEventListener('click', () => {
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        el.parentElement.style.backgroundColor = randomColor;
    });
});

//5
let ex5 = document.getElementById('ex5');
let divs = ex5.querySelectorAll('div');
let list = ex5.querySelectorAll('li');

//5.1
divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const colors = div.style.backgroundColor;
        list[0].style.backgroundColor = colors;
    });
});

//5.2
divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const colors = div.style.backgroundColor;
        list[list.length - 1].style.backgroundColor = colors;
    });
});

//5.3
divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const colors = div.style.backgroundColor;
        for (let i = 0; i < list.length; i++) {
            if(i % 2 !== 0){
                list[i].style.backgroundColor = colors;
            }            
        }        
    });
});

//5.4
divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const colors = div.style.backgroundColor;
        for (let i = 0; i < list.length; i++) {          
                list[i].style.backgroundColor = colors;      
        }     
    });
});

//5.5
divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const colors = div.style.backgroundColor;
        div.parentElement.style.background = colors;
    });
});

//6
//6.1
let a  = document.getElementById('ex6').firstElementChild.firstElementChild.firstElementChild;
console.log(a);

//6.2
let b = document.getElementById('ex6').firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
console.log(b);

//6.3
let c = document.getElementById('ex6').parentElement.firstElementChild.parentElement.children[1].firstElementChild?.firstElementChild.firstElementChild;
console.log(c);
