/////////////////////////////////
/* This is Sets*/

// const ids = new Set(/* We can pass ant iterable*/["Mohammed","Hallo","Hi"]);
// console.log(ids.has(1))
// ids.add(2)
// ids.delete('Hi')
// // No return Error 
// ids.delete("djfkhgjkfgh")

// for(const entry of ids.entries()){
//     console.log(entry[1])
// }

/////////////////////////////////
/* This is Maps*/

// const person1 = {name:"MohammedD"}
// const person2 = {name:"Ahmed"}

// const personData = new Map([[person1,[{date:"yesterday",price:10}]]])
// personData.set(person2,[{date:"two weeks ago",price:100}])
// console.log(personData)
// console.log(personData.get(person1))


// for(const [key,value] of personData.entries()){
//     console.log(key,value)
// }
// for(const key of personData.keys()){
//     console.log(key)
// }
// for(const value of personData.entries()){
//     console.log(value)
// }

///////////////////////////////////
/* Weak Set */
let person = {name:"Max"}

const persons = new WeakSet();
persons.add(person)

// ... some operations
// person = null
console.log(persons)


const personData = new WeakMap()
personData.set(person,'Info')


person = null

console.log(personData)


