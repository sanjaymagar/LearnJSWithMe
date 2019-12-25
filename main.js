// @resource https://overflowjs.com/posts/Map-Reduce-Filter-In-Javascript.html
const users = [{
        id: 1,
        name: "Sanjay Magar",
        username: "sanjay.magar",
        email: "snajay.magar@gmail.com",
        phone: "987654321",
        website: "sanjaymagar.com",
        password: "123456"
    },
    {
        id: 2,
        name: "Nisan Chhetri",
        username: "nisanchhetri",
        email: "nisanchhetri@gmail.com",
        phone: "987654321",
        website: "nisanchhetri.com",
        password: "123456"
    }
]

// 1. Adding new elemnts to users using spread operator
const newUser = {
    id: 3,
    name: "Pranil Chhetri",
    username: "pranil.chhetri",
    email: "pranil.chhetri@gmail.com",
    phone: "987654321",
    website: "pranilchhetri.com",
    password: "123456"
};
const addAtLast = [...users, newUser] // add element at last
const addAtFirst = [newUser, ...users] // add element at first

const hobbies = ['Anime', 'Football'];
const addElement = users.map(u => ({ ...u, hobbies }));

// Get email, website & phone of users into new array
const getAnyKey = users.map(({ email, website, phone }) => ({ email, website, phone }))


// Find & replace value for key of Object
const findToReplace = users.map(u => u.id === 2 ? ({ ...u, name: 'Gholu' }) : u)

// Delete some key’s from object, lets delete website from users
const excludeWebsite = users.map(({ id, email, name, username,phone, password }) => ({ id, email, name, username,phone, password }));

// for big objects
const newUsers = users.map(u => 
    Object.keys(u).reduce((newObj, key) => key != 'website' ? { ...newObj, [key]: u[key]} : newObj, {}));


// How to find the difference between two arrays.
const firstArr = [1, 2, 3, 4, 5, 6];
const secondArr = [0, 1, 3, 5, 7, 9, 10];

const arrDiff = [
    ...firstArr.filter(x => !secondArr.includes(x)),
    ...secondArr.filter(y => !firstArr.includes(y)),
]
// (7) [2, 4, 6, 0, 7, 9, 10]

// using indexOf
const arrDiff1 = [
    ...firstArr.filter(x => secondArr.indexOf(x) === -1),
    ...secondArr.filter(y => firstArr.indexOf(y) === -1)
]

// using set
const arrDiff2 = (a, b) => {
    const setA = new Set(a);
    const setB = new Set(b);

    return [
        ...a.filter(x => !setB.has(x)),
        ...b.filter(y => !setA.has(y)),
    ]
}


// How to convert truthy/falsely to boolean(true/false)
const firstVar = null;
const secondVar = 1;
const boolean = Boolean(secondVar)
const notOperator = !!secondVar;

// How to repeat the string
let str = '';
let repeatStr = Array(10).join('SANYA ')
let repeat = 'SANYA '.repeat(10);
// SANYA SANYA SANYA SANYA SANYA SANYA SANYA SANYA SANYA SANYA 

// Check how long an operation takes

// const startTime = performance.now();
// setTimeout(() => console.log('Hello Sanjay'), 5000)
// const endTime = performance.now();
// if(endTime > 0) {
//     console.log(`setTimeOut has take ${endTime - startTime} milliseconds`)
// }


// Two way to remove an item in a specific in an array
// 1. Mutating way
const mutateArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
mutateArray.splice(2, 1, "Apple")
var sliceArr = mutateArray.slice(1, 4)
// console.log(sliceArr)
// console.log(mutateArray)

// 2. Nonmutable way, using filter
const nonMutableArray = ['apple', 'ball', 'cat', 'dog', 'elephant']
const newArr = nonMutableArray.filter((item, index) => !(index===2))
// console.log(newArr)


// Get unique value in an array
const numbers = [1, 2, 1, 3, 2, 4, 6, 5, 7, 9, 2, 4];
// 1. Using filter
const uniqueValArr = numbers.filter((v, i, arr) => arr.indexOf(v) === i)
// console.log(uniqueValArr)

// 2. Using Set
const uniqueValArr2 = [...new Set(numbers)]
// console.log(uniqueValArr2)


// URLSearchParams
const urlParams = new URLSearchParams('?post=1234&action=edit');
// console.log(urlParams.has('post')) // true
// console.log(urlParams.get('action')) // "edit"
// console.log(urlParams.getAll('action')) // ["edit"]
// console.log(urlParams.toString()) // "?post=1234&action=edit"
// console.log(urlParams.append('active', '1'));// "?post=1234&action=edit&active=1"


// Shuffle an array
const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const suffleList = list.sort((a, b) => {
    return .5 - Math.random();
})
// console.log(suffleList)

// Count an element in an array
const fruits = ['Apple','Orange','Mango','Banana','Apple','Apple','Mango']
// 1. using reduce
const countFruits = fruits.reduce((countFruits, fruit) => {
    countFruits[fruit] = ( countFruits[fruit] || 0 ) + 1;
    return countFruits
}, {})

// console.log(countFruits)

// Aliases with js destructuring
const obj = {
    name: "SANYA",
    address: "Nepal"
}

const { name:fullName, address } = obj;
// console.log({ fullName, address })


// Object.is() method determines whether two values are the same value
const extensible = Object.is(NaN, 'Nan') // false
const extensible1 = Object.is('foo', 'foo') // true
// console.log(extensible1)


// freeze an object
const object = { 
    name: "JSsnippets",
    age:29,
    address:{
        street : 'JS'
      }
  };

  const freezeObj = Object.freeze(object)
  freezeObj.name = 'Frezed';
  console.log(freezeObj)
