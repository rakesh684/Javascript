// more eample using let
// "use strict";
// var arr = new Array(6);
// for(let i = 1;i<=5-1;i++){
//   i++;
//   arr[i]=function(){
//     console.log(i);
//   }
// // i--;
// }
"use strict";
var things = {};
for (let i = 0; i < 3; i++) {
    things["fun" + i] = function() {
        console.log(i);
    };
}

things["fun0"]()

for(let i=0;i<10;i++){
  console.log(i);
  setTimeout(function(){
    console.log(i);
  },1000);
}