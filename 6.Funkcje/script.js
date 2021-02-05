//1
function myFunc () {
    console.log('Udało się!');
  }
  myFunc();
  
  //2
  var ab = 22;
  function myFun(a) {
    console.log(a);
  }
  myFun(ab);
  
  //3
  var tab1 = [1, 2, 3, 4];
  function table(tab) {
    return tab;
  }
  console.log(table(tab1));

  //4
function printString(str) {
    let i = 0;
    const timer = setInterval(() => {
      if(i < 5) {
        console.log(str);
        i++;
      } else {
        console.log('Koniec');
        clearInterval(timer);
      }
    }, 3000);
  }
  printString('dzieje się');
