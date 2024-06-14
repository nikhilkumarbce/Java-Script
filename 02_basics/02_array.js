const marvel_heroes = ["ironman", "thor", "hulk"]
const dc_heroes = ["batman", "superman", "aquaman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

// const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);

const another_array = [1,2,3,4,5,[6,5,],7,[8,9]]
const real_array = another_array.flat(Infinity)
// console.log(real_array);

// console.log(Array.isArray("Nikhil"));
// console.log(Array.from("Nikhil"));
// console.log(Array.from({name: "Nikhil"})); //return empty as not defined to make array of key or value


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));