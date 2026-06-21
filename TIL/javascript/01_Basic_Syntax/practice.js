const name = "Mike";
const age = 30;

//alert(name);
//console.log(age);

//자료형 - 문자형
const name1 = "Mike";
const name2 = 'Mike';
const name3 = `Mike`;

const message = "I'm a boy.";
const message2 = 'I\'m a boy';
const message3 = `My name is ${name1}`;
const message4 = `나는 ${20+3}살 입니다.`
//console.log(message4);

//자료형 - 숫자형
const age1 = 30;
const PI = 3.14;

// console.log(1+2);
// console.log(10-3);
// console.log(3*2);
// console.log(6/3);
// console.log(6%4);

const x = 1/0;
// console.log(x);
//Infinity


const name4 = "Mike";
const y = name4/2;
//console.log(y);
// NaN (Not a Number)


//자료형 - 불린
const a = true;
const b = false;

// console.log(name == 'Mike');
// console.log(age > 40);


// null과 undefined
let age2;
console.log(age2);
//undefined

let user = null;


//typeof 연산자
const name5 = "Mike";
// console.log(typeof 3); //number
// console.log(typeof name5); //string
// console.log(typeof true); //boolean
// console.log(typeof "xxx"); //string
// console.log(typeof null); //object
// console.log(typeof undefined); //undefined

//대화상자
// alert(name);
// prompt("나이를 입력하세요");
const name6 = prompt("이름을 입력하세요.");
// alert("환영합니다, " + name6 + "남");
//alert(`안녕하세요, ${name4}님 환영합니다`);
// prompt('예약일을 입력하세요.','2026-06-')
const isAdult = confirm("당신은 성인 입니까?");
// console.log(isAdult);