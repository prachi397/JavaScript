//clouser
function bankAcc(accNo, Name, balance) {
    function showAccDetails() {
        console.log(`Hi ${Name}! account number ${accNo} has ${balance} Rs.`);
    }

    function deposite(amount) {
        balance += amount;
        showAccDetails();
    }
    return deposite(500);
}

bankAcc(123, "Prachi", 500);

let obj = {
    name: "prachi",
    age: 22,
    address: {
        city: "dbd",
        state: "up"
    },
    getName: function(){
        console.log("Hello");
    }
};
// let user = Object.assign({}, obj);
// user.address.city="delhi";
console.log(obj)
// console.log(user)

//deep copy
// let newObj = JSON.stringify(obj);
// let copyObj = JSON.parse(newObj);
// copyObj.address.city = "delhi";
// console.log(copyObj);

function deepCopyFunc(userDetails){
    let destination = {};
    function deepCopy(source, destination){
        for(key in source){
            if(typeof(source[key]) !== "object"){
                destination[key] = source[key];
            }
            else if(Array.isArray(source[key])){
                destination[key] = [];
                deepCopy(source[key], destination[key]);
            }else if(source[key] == null){
                destination[key] = null;
            }else{
                destination[key] = {};
                deepCopy(source[key], destination[key]);
            }
        }
    }
    deepCopy(obj, destination);
    return destination;
}
let clonedObj = deepCopyFunc(obj);
clonedObj.getName();

//rest operator
function getArgs(...args){
    console.log(args);
}
getArgs(1,2,3);

//spread operator
let arr = [1,3,3];
let arr2 = [...arr,4];
console.log(arr2);

//destructuring
let [a,b=5,c] = arr;
console.log(b)

//flat the nested array
let nestedArr = [1,2,3,[4,5],[6,7]];
const flatten= (arr)=>{
    let newArr = [];
    const innerFlatFunc = (arr)=>{
        arr.forEach((ele) => {
            if(Array.isArray(ele)){
                innerFlatFunc(ele);
            }else{
                newArr.push(ele);
            }
        });
    }
    innerFlatFunc(nestedArr);
    return newArr;
}
console.log(flatten(nestedArr));

//define
let personData = {
    name:"Prachi",
    age:22,
    city:"dbd"
}
Object.defineProperty(personData, 'name', {
    writable: false,
    enumerable: true,
    configurable: true
});
personData.name = "anna";
console.log(personData);

function countOccur(str){
    let mp = new Map();
    for(let char of str){
        if(mp.has(char)){
            mp.set(char, mp.get(char)+1);
        }else{
            mp.set(char,1);
        }
    }
    return mp;
}
console.log(countOccur("hello"))