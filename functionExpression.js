// var factorial = function fact(n){
//      var ans = 1;
//      for(var i=1; i<=n; i++){
//        ans=ans*i;
//      }
//      return ans;
// }

// // console.log(fact(5));//it will show error
// console.log(factorial(4));//give output
// console.log(factorial);

//passing function as an argument
var factorial = function fact(n){
  var ans = 1;
  for(var i=1; i<=n; i++){
    ans=ans*i;
  }
  return ans;
}

function nCr(n,r,factorial){
  return factorial(n)/(factorial(r)*factorial(n-r));
}
console.log(nCr(5,2,factorial));