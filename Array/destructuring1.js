// const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];

// const allMenuIdeas = [...lunchMenuIdeas];

// allMenuIdeas.push('Club Sandwich');

// console.log(allMenuIdeas);

//reducing the pop ,push and other action using destructuring
const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = [
    ...breakfastMenuIdeas, 
    "Harvest Salad", 
    "Southern Fried Chicken",
    ...dinnerMenuIdeas
];

const saladIndex = allMenuIdeas.findIndex(idea => idea === 'Harvest Salad');

const finalMenuIdeas = [
  ...allMenuIdeas.slice(0, saladIndex),
  "Garden Salad",
  ...allMenuIdeas.slice(saladIndex + 1)
];

console.log(finalMenuIdeas);