const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// // Get an array of all names using MAP
// let names = characters.map((el) => el.name);

// // Get an array of all heights using MAP
// let heights = characters.map((el) => el.height);

// // Get an array of objects with just name and height properties using MAP
// let nameHeights = characters.map((el) => ({
//   name: el.name,
//   height: el.height,
// }));

// // Get an array of all first names using MAP
// let firstNames = characters.map((el) => el.name.split(" ")[0]);

// // Get the total mass of all characters using REDUCE
// const totalMass = characters.reduce((acc, cur) => acc + Number(cur.mass), 0);

// // Get the total height of all characters using REDUCE
// const totalHeight = characters.reduce(
//   (acc, cur) => acc + Number(cur.height),
//   0
// );

// // Get the total number of characters in all the character names using REDUCE
// const totalCharacters = characters.reduce((acc, cur) => {
//   return acc + cur.name.split("").filter((el) => el !== " ").length;
// }, 0);

// // Get the total number of characters by eye color (hint. a map of eye color to count) using REDUCE
// const totalEyeColor = characters.reduce((acc, cur) => {
//   if (acc[cur.eye_color]) acc[cur.eye_color] += 1;
//   else acc[cur.eye_color] = 1;
//   return acc;
// }, {});

// // Get characters with mass greater than 100 using FILTER
// const greaterThan100 = characters.filter((el) => el.mass > 100);

// // Get characters with height less than 200 using FILTER
// const lessThan100 = characters.filter((el) => el.height < 200);

// // Get all male characters using FILTER
// const males = characters.filter((el) => el.gender === "male");

// // Get all female characters using FILTER
// const females = characters.filter((el) => el.gender === "female");

// // Sort by name using SORT
// const sortName = characters.sort((a, b) => a.name > b.name);

// // Sort by mass using SORT
// const sortMass = characters.sort((a, b) => a.mass - b.mass);

// // Sort by height using SORT
// const sortHeight = characters.sort((a, b) => a.height - b.height);

// // Sort by gender using SORT
// const sortGender = characters.sort((a, b) => a.gender < b.gender);
