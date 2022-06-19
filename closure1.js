function countdown(step) {
    // write your code here
    let count=10
      return function countStep(){
        count-=step
        return count
      }
    
  }
  
  const countingDown = countdown(1);
  
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());