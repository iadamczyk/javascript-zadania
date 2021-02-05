//1
// 1.1
const button = document.getElementbyId('test-event');
button.addEventListener('click', (event) => {
  console.log(event);
});

//1.2
document.addEventListener('mousemove', (event) => {
    console.log(event);
});

// 1.3
const button = document.getElementbyId('test-event');
button.addEventListener('mouseover', (event) => {
    console.log(event);
});

// 1.4
document.addEventListener('keypress', (event) => {
    console.log(event);
});

//1.5
document.addEventListener('scroll', (event) => {
    console.log(event);
}) ;

//1.6
document.getElementbyId('input-test').addEventListener('input', (event) => {
    console.log(event);
});

//2
document.getElementById('ex2').addEventListener('click', (event) => {
    document.getElementById('span-ex2').innerHTML = event.target.getAttribute('data-text');
  });

//3
document.getElementById('ex3').addEventListener('mouseenter', (event) => {
    ex3.style.backgroundColor = 'blue';
  });
  document.getElementById('ex3').addEventListener('mouseleave', (event) => {
    ex3.style.backgroundColor = 'red';
  });

//4
document.getElementById('input-test').addEventListener('keydown', (event) => {
    if (event.code.includes('Digit')) {
        document.querySelector('#ex3-err').innerHTML = 'Nie wolno wpisywać cyfr!';
    }
});

//5
/* Dodaję na końcu body HTML poniższy kod:

    <button id="ex5-button">Counter</button>
    <div id="ex5"></div>
  <br />
  <br />
  
  */

 const button = document.getElementById('ex5-button');
 const ex5 = document.getElementById('ex5');
 let counter = 0;
 function counterAction () {
     counter++;
     ex5.innerText = counter;
     if(counter >= 10) {
         button.removeEventListener('click', counterAction);
     }
 }
 button.addEventListener('click', counterAction);

 //6
document.addEventListener('scroll', (event) => {
    if (window.scrollY > 200) {
      document.body.style.backgroundColor = 'red';
    } else {
      document.body.style.backgroundColor = 'white';
    }
});

//7
const button = document.querySelectorAll("#calculator button");
const input = document.querySelector("#calculator input");
let calculating = "";
button.forEach( element => {
    element.addEventListener("click", (event) => {
        calculating += element.textContent;
        console.log(calculating);
        input.value = calculating;
    });
});
window.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        input.value = eval(calculating);
    }
});
