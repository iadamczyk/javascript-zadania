//1
var x = 0;
var n = setInterval(() => {
  if(x == 15) {
    clearInterval(n);
  }
  console.log('Cześć po raz ' + x++)
}, 1000);


//2
let tab = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si', 'do'];
setTimeout(function() {
  for (let i=0; i < tab.length; i++) {
    console.log(tab[i]);
 }
 i = 0;
 var x = setInterval(function() {
    if(tab.length > i) {
      console.log(tab[i++]);
    } else {
           clearInterval(x);
    }
  }, 3000);
}, 2000);
