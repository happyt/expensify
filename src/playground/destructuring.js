// Object restructuring

const person = {
    name: "Andrew",
    age: 26,
    location: {
        city: "london",
        temp: 54
    }
}
// const name = person.name;
// const age = person.age
// const city = person.location.city

// OR
const {name, age } = person

console.log(`${name} is ${age}`)

// More complex if want to test exists
if (person.location.city && person.location.temp) {
    console.log(`It's ${person.location.temp} in ${person.location.city}`)
}

// becomes
// const { city, temp } = person.location
// if (city && temp) {
//     console.log(`It's ${temp} in ${city}`)
// }

// to rename
const { city, temp: temperature } = person.location
if (city && temperature) {
   console.log(`It's ${temperature} in ${city}`)
}

// defaults with 
const {name: firstName = "Anonymous", age: years} = person
console.log(`${firstName} is ${years}`)

// Array destructuring
const address = ["Grant Way", "Isleworth", "Middlesex", "TW7 8QD"]
console.log(`We are in ${address[1]}, ${address[2]} `)

// OR
const [  , cityA, countyA='Unknown', postcodeA] = address    // miss first item
console.log(`We are in ${cityA}, ${countyA} `)
