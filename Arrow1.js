const splitBill=  (amount, numPeople)=>`Each person needs to pay ${amount / numPeople}`

console.log(splitBill(10, 2));
console.log(splitBill(10, 4));
console.log(splitBill(10, 5));

const countdown=(startingNumber, step)=>{
    let countFromNum = startingNumber + step;
    return ()=>countFromNum -= step;
  
  }
  const countingDown = countdown(20, 2);
  
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());