// const nums = {
//     1: 1,
//     true: true
//   };
  
  const map1 = new Map([
    [1, 1],
    [2, 1111]  
  ]);
  
  map1.set('key1', 'value1');
  
  console.log([...map1.keys()])
  //iterate over map
  map1.forEach((value,key)=>{
     console.log(key,value)
  })


const user1 = { name: "john" }
const user2 = { name: "mary" }

const secretKey1 = "asldjfalskdjf";
const secretKey2 = "alksdjfakjsdf";

const secretKeyMap = new WeakMap([
  [user1, secretKey1],
  [user2, secretKey2]  
]);

const key = secretKeyMap.get(user1);
console.log(key);

const user = {
  name: "john",
  verified: true  
};

const userMap = new Map([
  ["name", "john"],
  ["verified", true]  
]);

console.log(userMap.size);

const favouritePlace = {
    music: "jazz",
    name: "Paris House"
};

const prop1={name:"visited"}
const prop2={name:"averageBill"}
const value1=true
const value2=17


const joureny=new Map(
   [ ["music","jazz"],
    ["name","Paris House"],
    [prop1,value1],
    [prop2,value2]]
)
const key1=joureny.get("name")
console.log(key1)
console.log(joureny)