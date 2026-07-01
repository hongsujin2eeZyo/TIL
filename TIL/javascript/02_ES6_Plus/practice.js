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


// let userList = [
//     { name : "Mike", age: 30},
//     { name : "Jane", age: 27},
//     { name : "Tom", age: 10},
//     { name : "Sue", age: 14},
//     { name : "Marry", age: 50},
//     { name : "Steve", age: 32},
// ]

// let result = userList.reduce((prev,cur) =>{
//     if(cur.age > 19) prev.push(cur.name);
//     return prev;
// }, 0)

// console.log(result)

// function add(...numbers){
//     let result =0;
//     numbers.forEach((num) => (result += num));
//     console.log(result);
// }
// add(1,2,3);
// add(1,2,3,4,5,6,7,8,9,10);



// function User(name, age, ...skills){
//         this.name = name;
//         this.age = age;
//         this.skills = skills;
// }

// const user1 = new User('Mike', 30, 'html','css');
// const user2 = new User('Tom', 20, 'JS','React');
// const user3 = new User('Jane', 10, 'English' );
// console.log(user1);
// console.log(user2);
// console.log(user3);


// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// // arr2.reverse.forEach(num => {
// //     arr1.unshift(num);
// // })
// arr1 = [...arr2, ...arr2];
// console.log(arr1); // [4,5,6,1,2,3]



// let user = {name:"Mike"};
// let info = {age:30};
// let fe = ["JS", "React"];
// let lang = ["Korean", "English"];


// user = Object.assign({}, 
//     user,
//     info,
//     {
//         skills : []
//     }
// )
// fe.forEach(item => {
//     user.skills.push(item);   
// })

// lang.forEach(item => {
//     user.skills.push(item);   
// })

// user = {
//     ...user,
//     ...info,
//     skills : [...fe, ...lang],
// }
// console.log(user);


// function makeCounter(){
//     let num = 0; // 은닉화
//     return function(){
//         return num++;
//     };
// }
// let counter = makeCounter();
// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2


// let num = 0;
// function showTime(){
//     console.log(`안녕하세요, 접속하신지 ${num++}초가 지났습니다.`);
//     if(num > 5) {
//         clearInterval(tId);
//     }
// }
// const tId = setInterval(showTime,1000);


// const mike = {
//     name : "Mike",
// }

// const tom = {
//     name : "Tom",
// }

// function showThisName(){
//     console.log(this.name);
// }

// showThisName(); // 이때 this는 윈도우를 가리킴
// showThisName.call(mike); // "Mike"
// showThisName.call(tom); // "tom"


// function update(birthYear, occupation){
//     this.birthYear = birthYear;
//     this.occupation = occupation;
// }

// update.apply(mike,[2004,'singer'])
// console.log(mike);

// update.apply(tom,[1994,'teacher'])
// console.log(tom);


// const nums = [3,10,1,6,4];
// // const minNum = Math.min(...nums);
// // const maxNum = Math.max(...nums);

// const minNum = Math.min.apply(null,nums);
// const maxNum = Math.max.call(null, ...nums);

// console.log(minNum);
// console.log(maxNum);


// const mike = {
//     name : "Mike",
// }

// function update(birthYear, occupation){
//     this.birthYear = birthYear;
//     this.occupation = occupation;
// }

// const updateMike = update.bind(mike);

// updateMike(1980, "police");
// console.log(mike);


// const user = {
//     name: "Mike",
//     showName: function(){
//         console.log(`hello, ${this.name}`);
//     },
// };
// user.showName(); // hello, Mike
// let fn = user.showName;
// fn() // hello


// fn.call(user); // hello, Mike
// fn.apply(user); // hello, Mike

// let boundFn = fn.bind(user);
// boundFn(); // hello, Mike

//  const car = {
//         wheels: 4,
//         drive(){
//             console.log("drive..");
//         },
//     };

//     const bmw = {
//         coloer: "red",
//         navigation: 1,
//     };
//     const benz = {
//         color: "black",
//     }
//     const audi ={
//         coloer: "blue",
//     };

//     bmw.__proto__ = car;
//     benz.__proto__ = car;
//     audi.__proto__ = car;

//     const x5 = {
//         coloer: "white",
//         name: "x5",
//     };
//     x5.__proto__ = benz;

//     for(p in x5){
//         if(x5.hasOwnProperty(p)){
//             console.log('o',p);
//         }else{
//             console.log('x',p);
//         }
//     }

//  class Car{
//         constructor(color){
//             this.color = color;
//             this.wheels = 4;
//         }
//         drive(){
//             console.log("drive..");
//         }
//         stop(){
//             console.log("STOP!");
//         }
//     }
//     class Bmw extends Car {
//         park(){
//             console.log("PARK");
//         }
//         stop(){
//             super.stop();
//             console.log("OFF")
//         }
//     }
// const z4 = new Bmw("blue");

// z4.stop();

// const pr = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         //resolve("OK");
//         reject(new Error("err...."));
//     },1000);
// });

// console.log('시작')
// pr.then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log('끝');
// })


const f1 = (callback) =>{
    setTimeout(function(){
        console.log("1번 주문 완료");
        callback();
    },1000);
};

const f2 = (callback) =>{
    setTimeout(function(){
        console.log("2번 주문 완료");
        callback();
    },3000);
};


const f3 = (callback) =>{
    setTimeout(function(){
        console.log("3번 주문 완료");
        callback();
    },2000);
};

console.log('시작');
