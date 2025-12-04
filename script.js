try {
/* Here is the information you have been given:
The area in which the plants are contained is circular, with a radius of 5 meters.
The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const PI = 3.1415;
const area = PI * radius * radius;
Each plant requires a minimum space of 0.8 square meters.
The area is starting with 20 plants.
The plants double in number every week.
*/
let radius = 5;
const PI = 3.1415;
const maxcapacity = PI * radius * radius;
let plantspace = 0.8;
let beginingPlants = 20;
let numweeks = 2;

let plantsPerWeek = beginingPlants * 2 ** numweeks;

console.log('plants per week = ' + plantsPerWeek);

console.log('Number of weeks = ' + numweeks);

console.log('Max area of the garden is: ' + maxcapacity);

let areaneeded = plantsPerWeek  * plantspace;  // area needed

if (areaneeded > maxcapacity) {

   throw new Error("The amount of space required to hold the originally provided number of plants exceeds the amount of space available.");
}
  console.log('Area needed: ' + areaneeded);

let plantcount = areaneeded / maxcapacity;   // this is the area needed by the current number of plants

if (plantcount > .8) {
    console.log('Prune');
}
else if (plantcount >= .5 && plantcount <= .8) {
    console.log('Monitored');
}
else if (plantcount < .5) {
    console.log('Planted');
}

}  // end the try

catch (err) {
  console.error(err);

} finally {
     console.log('finally')
}
