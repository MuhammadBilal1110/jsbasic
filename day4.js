/* Slice
const array=[1,2,3,4,56,77];
const slicearray=array.slice(0,4)
console.log("array:");
console.log(slicearray);
*/
/*
Removing splice
const bb=[2,3,4,5,6,7,8];
const bd=bb.splice(1,4);
console.log("before splice" ,bb);
console.log("after splice",bd);
*/
/* adding of splice
const numbers = [1, 2, 3, 4, 5];

// Add 6 and 7 starting from index 2
numbers.splice(2, 0, 6, 7);

console.log(numbers); // Output: [1, 2, 6, 7, 3, 4, 5]

*/
/* adding number
const num=[1,2,3,4,5,7,8];
num.splice(3,4,67,79);
console.log(num);
*/
/*

const bd=[1,3,4,5,7,8,9];
const aa=bd.splice(1,5,3);
console.log(bd);
console.log(aa);

*/
/* Simple object
const obj ={
    name:"bilal",
    age:23,
}
console.log(obj.name) */

/* object with in object excess
const  obj={
    name:"ali",
    age:80,
    str:{g:"www",m:"ttt"}

}
console.log(obj.str.g)
*/

/* objects with in function
const obj = {
    salary: 5555,
    age: 999,
    name: "bilal",
    str: { g: "www", m: "pppp" },
    fun: function() {
        return "my name is " + this.name + " and my age is " + this.age;
    }
};

console.log(obj.fun());
*/

/* 
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  // Create Source Object
  const person2 = {firstName: "Anne",lastName: "Smith"};
  
  // Assign Source to Target
  Object.assign(person1, person2)
*/
/*
const bb={
    name:"bilal",
    age:55,
}
console.log(Object.keys.(bb)
*/
/*Reduce function
let bb=[1,44,55,66,77,88]
let bd=bb.reduce((p1,p2)=>{
    return p1+p2;
})
console.log(bd);
*/
/*
let c=[1,3,5,6,7,8,9,10]
let d=c.reduce((p1,p2)=>{
    return p1-p2;
})
console.log(d);
/* 
const arr=[ ['name','zaid'], ['age',22]]
console.log(arr[1]);
*/
/* destructurimg 
let bb={
    name:"amas",
    age:90,
    city:"lhr",

};
let{name,age,city}=bb;
console.log(name);
console.log(age);
console.log(city);
*/
const obj={name:"me", age:30, city:"isb"}
const {name, ...x}=obj;
// console.log(x)
const a=[1,3,4,5,6]
const [ins1,...inst2]=a
// console.log(inst2)

function sum([name,age,...city]){
     console.log(city)
}
sum(a);





const obj={name:"bilal:",age:30,city:"isl"}
const{name,...x}=obj;
const a=[1,2,3,4,5,6]
const




