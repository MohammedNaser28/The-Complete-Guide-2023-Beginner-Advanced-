// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Reading");
// hobbies.unshift("Coding");
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);
// hobbies[1] = "Coding";
// // hobbies[5] = "Reading"; // rarely sed
// console.log(hobbies, hobbies[4]);
// hobbies.splice(1, 0, "Good");
// console.log(hobbies);
// const RemovedElement = hobbies.splice(0, 1); // Splice return the remove Element
// hobbies.splice(-1, 1); // You can work with negative number in splice it tart from the end when you use the negative number
// console.log(hobbies);

const testResult = [1, 2, 3, 3.6, 4, 5, 6, 7, 6.7];
// const storedResults = testResult; // This will be refrence of the testResult Array so any change in the testResult will appear in storedResult
// const storedResults = testResult.slice(); // We use slice() to returen a copy from the array
const storedResults = testResult.concat([3.9]); // Use to concat array with another array. It return a copy of array not refrnce of the array

testResult.push(5.91);
// We can use negative with slice to select from the end
// console.log(testResult.slice(1, 4)); // We can use slice() Fuction to spcific the start of the copy and the end //
console.log(storedResults, testResult);
console.log(testResult.indexOf(3.6)); //  if there two items with the same value it stopped at the first index of the item
console.log(testResult.includes(3.6)); // includes() return boolean value and work with permative value as like indexOf()
const personData = [{ name: "Max" }, { name: "Mohammed" }];
console.log(testResult.indexOf({ name: "Mohammed" })); // Not work because object is refrenced value , So we Work with find() , findIndex()

const manual = personData.find((person, index, persons) => {
    /*
It accept the first paramater => that current value (Requierd)
It accept the second paramater => that index of value (Optional)
It accept the third paramater => the array (Optional)
Find() doesn't create a copy it return a refrence

*/

    return person.name === "Mohammed"; // It not return all results Just the first result that it find
});
manual.name = "Ahmed";

console.log(personData[1].name); // It will return Ahmed

const manualFindIndex = personData.findIndex((person, index, persons) => {
    /*
It accept the first paramater => that current value (Requierd)
It accept the second paramater => that index of value (Optional)
It accept the third paramater => the array (Optional)
findIndex() return index of the item not return refrence 
*/

    return person.name === "Max"; // It not return all results Just the first result that it find
});

console.log(manualFindIndex);
manualFindIndex.name = "Ali";
console.log(personData[0].name); // It will return Max

/////////////////////////////////////////////////////////////////
// const prices = [106, 545, 5.4, 6, 0.6546, 645.654];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //     taxAdjustedPrices.push(price * (1 + tax));
// // }

// 
// prices.forEach((price, idx, prices) => {
//     const priceObj = { index: idx, taxPrice: price * (1 + tax) };
//     taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [106, 545, 5.4, 6, 0.6546, 645.654];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
    /* 
    Map is really useful method if you want transfaorm items of array
    */
    const priceObj = { index: idx, taxPrice: price * (1 + tax) };
    return priceObj;
});

console.log(prices, taxAdjustedPrices);


const sortedPrices1 = prices.sort()
console.log(sortedPrices1)

const sortedPrices = prices.sort((a,b)=>{
    if(a>b){
        return 1;
    }else if(a===b){
        return 0
    }else {
        return -1
    }
})
// console.log(sortedPrices.reverse())
console.log(sortedPrices)

const filteredArray = prices.filter(price =>  price > 6)

console.log(filteredArray)

const sum = prices.reduce((perValue,curValue)=> perValue + curValue,0)
console.log(sum)


const data = 'new york;10.99;2000';

const transfaormData = data.split(';');
transfaormData[1] =+transfaormData[1]
console.log(transfaormData)


const namFragments = ['Mohammed','Naser']

const name = namFragments.join(' ');
console.log(name)

const copiedNameFragments = [...namFragments];
namFragments.push("Mr")
console.log(namFragments,copiedNameFragments)


console.log(Math.min(...prices))

const persons = [ 
    {
        name:"Mohammed",
        age:18
    },{
        name:"Ahmed",
        age:12
    }
]

const copiedPersons = persons.map(person=> ({name:person.name,age:person.age}))

persons.push({name:"Ali",age:14})

console.log(persons,copiedPersons)


const nameData = ["Mohammed","Naser","Mr",30]

const [firstName,secondName,...other] = nameData;

console.log(firstName,secondName,other)