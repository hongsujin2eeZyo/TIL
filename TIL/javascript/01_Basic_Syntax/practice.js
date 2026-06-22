// const name = "Mike";
// const age = 30;

// //alert(name);
// //console.log(age);

// //자료형 - 문자형
// const name1 = "Mike";
// const name2 = 'Mike';
// const name3 = `Mike`;

// const message = "I'm a boy.";
// const message2 = 'I\'m a boy';
// const message3 = `My name is ${name1}`;
// const message4 = `나는 ${20+3}살 입니다.`
// //console.log(message4);

// //자료형 - 숫자형
// const age1 = 30;
// const PI = 3.14;

// // console.log(1+2);
// // console.log(10-3);
// // console.log(3*2);
// // console.log(6/3);
// // console.log(6%4);

// const x = 1/0;
// // console.log(x);
// //Infinity


// const name4 = "Mike";
// const y = name4/2;
// //console.log(y);
// // NaN (Not a Number)


// //자료형 - 불린
// const a = true;
// const b = false;

// // console.log(name == 'Mike');
// // console.log(age > 40);


// // null과 undefined
// let age2;
// console.log(age2);
// //undefined

// let user = null;


// //typeof 연산자
// const name5 = "Mike";
// // console.log(typeof 3); //number
// // console.log(typeof name5); //string
// // console.log(typeof true); //boolean
// // console.log(typeof "xxx"); //string
// // console.log(typeof null); //object
// // console.log(typeof undefined); //undefined

// //대화상자
// // alert(name);
// // prompt("나이를 입력하세요");
// //const name6 = prompt("이름을 입력하세요.");
// // alert("환영합니다, " + name6 + "남");
// //alert(`안녕하세요, ${name4}님 환영합니다`);
// // prompt('예약일을 입력하세요.','2026-06-')
// //const isAdult = confirm("당신은 성인 입니까?");
// // console.log(isAdult);

// //형변환 실습
// // const mathScore = prompt("수학 점수를 입력하세요");
// // const engScore = prompt("영어 점수를 입력하세요");
// // const result = (mathScore + engScore) /2;
// // console.log(result);

// console.log(
//     String(3),
//     String(true),
//     String(false),
//     String(null),
//     String(undefined)
// )

// console.log(
//     Number("1234"), //1234
//     Number("123dfs"), //NaN
//     Number(true), //1
//     Number(false) //0
// )

// console.log(
//     Boolean(0), 
//     Boolean(""),
//     Boolean(null),
//     Boolean(undefined),
//     Boolean(NaN)
// )

// // 비교연산자
// const aa = 1;
// const bb = "1";
// console.log(aa == bb);

// 논리연산자
// const age3 = prompt('나이를 입력하세요');
// const isAudult1 = age3>19;
// if(!isAudult1){
//     console.log('돌아가')
// }

//남자이고 이름이 Mike이거나 성인이면 통과
// const gender = 'F';
// const name7 = 'sujin';
// const isAudult2 = true;
// if(gender === 'M' && (name7 === 'Mike' || isAudult2)){
//     console.log('통과')
// }else{
//     console.log('돌아가')
// }


//반복문
// for(let i=0;i<10;i++){
//     console.log(i);
// }

// let i =0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// let i = 0;
// do{

//     console.log(i);
//     i++
// }while(i<10)

// while(true){
//     let answer = confirm('계속 할까요?');
//     if(!answer){
//         break;
//     }
// }

// for(let i = 0; i < 10; i++){
//     if(i%2){ 
//         continue; //홀수면 컨티뉴
//     }
//     console.log(i);
// }

// let fruit = prompt('무슨 과일을 사고 싶나요?')
// switch(fruit){
//     case '사과' :
//         console.log('100원 입니다.');
//         break;
//     case '바나나' :
//         console.log('200원 입니다.');
//         break;
//     case '키위' :
//         console.log('300원 입니다.');
//         break;
//     case '멜론' :
//     case '수박' :
//         console.log('500원 입니다.');
//         break;
//     default :
//         console.log('그런 과일은 없습니다.')
// }

//함수
// function showError(){
//     alert('에러가 발생했습니다. 다시 시도해주세요.');
// }
// showError();

// function sayHello(name){
//     const msg = `Hello, ${name}`;
//     console.log(msg);
// }
// const name8 = prompt('이름을 입력하세요');
// sayHello(name8);

// function sayHello(name){
//     console.log(name); //undefined는 false
//     let msg = `Hello`;
//     if(name){
//         msg  += ', ' + name;
//     }
//     console.log(msg);
// }
// sayHello();

// let msg = 'Hello'; //전역변수(global varable)
// console.log('함수 호출 전');
// console.log(msg);
// function sayHello(name){
//     if(name){
//         msg  += ', ' + name;
//     }
//     console.log('함수 내부');
//     //지역변수(local varable)
//     console.log(msg);
// }
// sayHello('Mike');
// console.log('함수 호출 후');
// console.log(msg);

// let msg = "welcome"; //전역변수
// console.log(msg);
// function sayHello(name){
//     let msg = "Hello"; //지역변수
//     console.log(msg + ' ' + name);
// }
// sayHello('Mike');
// console.log(msg);


// function sayHello(name){
//     let newName = name || 'friend';
//     //매개변수가 없으면 undefined와 만나기때문에 true를 반환하게되기에 friend가 출력됨
//     let msg = `Hello, ${newName}`;
//     console.log(msg);
// }
// sayHello();
// sayHello('jane');

// function sayHello(name = 'friend'){
//     let msg = `Hello, ${name}`;
//     console.log(msg);
// }
// sayHello();
// sayHello('jane');

// function add(n1, n2){
//     return n1+n2;
// }
// const result = add(2,3);
// console.log(result);

function showError(){
    alert('에러가 발생했습니다.');
    return;
    alert('이코드는 절대 실행되지 않습니다');
}
const result = showError();
console.log(result);