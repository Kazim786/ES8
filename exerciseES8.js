// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle = turtle.padStart(8);
//gotta update the variables so the pad positions display when you console.log them
rabbit = rabbit.padStart(8);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

'     ||<- Start line'
'🐢======='
'       🐇'

//Basically this will fill up the 9 spaces with whatever is put in for the second parameter

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map( value => {
  return console.log(value.join(" "))

})

//If we wanted to get key value pair this is how we would do it.
Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]) //the syntax obj[key] is like this because key is the variable so to speak that carries the value. To access the value you must use its key
}
)