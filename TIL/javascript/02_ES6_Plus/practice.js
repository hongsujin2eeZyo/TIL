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


const user = {
    name: "Mike",
    age: 30,
}

const showName = Symbol("show name");
user[showName] = function(){
    console.log(this.name);
} 

user[showName]();

for(let key in user){
    console.log(`His ${key} is ${user[key]}`)
}