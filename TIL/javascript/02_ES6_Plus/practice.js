// let age = 30;

// function showAge(){
//     console.log(age);

//     let age = 20;
// }

// showAge();


// function Item(title, price){
//     // this = {};

//     this.title = title;
//     this.price = price
//     this.showPrice = function(){
//         console.log(`가격은 ${price}원 입니다.`)
//     }


//     // return this;
// }

// const item1 = new Item('인형',3000);
// const item2 = new Item('가방',5000);
// const item3 = new Item('지갑',9000);

// console.log(item1,item2,item3);
// item1.showPrice();


// let n = "name";
// let a = "age";

// const user = {
//     [n] : "Mike",
//     [a] : 30,
//     [1+4] :5
// }
// console.log(user);



// function makeObj(key,val){
//     return{
//         [key] : val
//     }
// }

// const obj = makeObj("이름",33);
// console.log(obj);



// const user = {
//     name : "Mike",
//     age : 30,
// }

// const user2 = Object.assign({},user);
// user2.name= "Tom";
// console.log(user)
// console.log(user2)


// // const result = Object.keys(user);
// // console.log(result)


// // const result = Object.values(user);
// // console.log(result)

// // const result = Object.entries(user);
// // console.log(result)


// let arr = [
//     ['mon','월'],
//     ['tue','화'],
// ]

// const result = Object.fromEntries(arr);
// console.log(result)

// const a = Symbol();
// const b = Symbol();

// console.log(a)
// console.log(b)
// console.log(a === b)


// const user = {
//     name: "Mike",
//     age: 30,
// }

// const showName = Symbol("show name");
// user[showName] = function(){
//     console.log(this.name);
// } 

// user[showName]();

// for(let key in user){
//     console.log(`His ${key} is ${user[key]}`)
// }


// function hasCola(str){
//     if(str.includes('콜라')){
//         console.log('금칙어가 있습니다.')
//     }else{
//         console.log('통과')
//     }
// }


// hasCola('사이다 꾸우우울꺽')
// hasCola('펩시콜라는 맛있졍')


// let users = ['Mike', 'Tom', 'Jane'];

// users.forEach((name, index) =>{
//     console.log(`${index+1}. ${name}`);
// } )


// let arr = [1,2,3,4,5];
// const result = arr.find((item) => {
//     return item % 2 === 0;
// })
// console.log(result)


// find
// let userList = [
//     { name : "Mike", age: 30},
//     { name : "Jane", age: 27},
//     { name : "Tom", age: 10},
// ]

// const result1 = userList.find((user)=>{
//     if(user.age < 19){
//         return true;
//     }
//     return false;
// })
// console.log(result1);


// arr.map
// let userList = [
//     { name : "Mike", age: 30},
//     { name : "Jane", age: 27},
//     { name : "Tom", age: 10},
// ]

// let newUserList = userList.map((user, index)=> {
//     return Object.assign({}, user, {
//         id: index+1,
//         isAdult: user.age >19,
//     });
// });

// console.log(newUserList)


// let arr = [ "안녕", "나는", "철수야"];
// let result = arr.join("/");
// console.log(result); //안녕,나는,철수야

// const users = "Mike,Jane,Tom,Tony"
// const result = users.split();
// console.log(result);


// let user = {
//     name : "Mike",
//     age : 30,
// }

// let userList = ["Mike", "Tom", "Jane"];

// console.log(typeof user);
// console.log(typeof userList)

// console.log(Array.isArray(user));
// console.log(Array.isArray(userList))

// let arr = [21,15,4,2,3,8];

// function fn(a,b){
//     return a - b;
// }
// arr.sort(fn);
// console.log(arr);


// let arr = [1,2,3,4,5];

// const result = arr.reduce((prev, cur)=> {
//     return prev + cur;
// },0);
// // let result = 0;
// // arr.forEach(num =>{
// //     result += num;
// // })

// console.log(result)


let userList = [
    { name : "Mike", age: 30},
    { name : "Jane", age: 27},
    { name : "Tom", age: 10},
    { name : "Sue", age: 14},
    { name : "Marry", age: 50},
    { name : "Steve", age: 32},
]

let result = userList.reduce((prev,cur) =>{
    if(cur.age > 19) prev.push(cur.name);
    return prev;
}, 0)

console.log(result)