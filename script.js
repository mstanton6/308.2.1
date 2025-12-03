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
let numplants = 20;
let doublerate = 2;
let numweeks = 3;

console.log('Number of weeks = ' + numweeks

)

let doublerateuse = doublerate * numweeks;   // Get the total double rate based on how many weeks it has been

 // console.log('Max area of the garden is: ' + maxcapacity);

let areaneeded = (numplants * doublerateuse) * plantspace;  // area needed

 // console.log('Area needed: ' + areaneeded);

let plantcount = areaneeded / maxcapacity;   // this is the area needed by the current number of plants

if (plantcount > .8) {
    console.log('Prune');
}
else if (plantcount <= .5 && plantcount <= .8) {
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
