# 자바스크립트 ES6

## 1. 변수, 호이스팅, TDZ(Temporal Dead Zone)

- ES6 에서 사용하는 변수는 let과 const / var는 그 이전 버전에서 사용
- var와 let은 크게 다르지 않음
    - var는 한번 선언된 변수를 다시 선언할 수 있다
        ```javascript
        var name = 'Mike';
        console.log(name); // Mike

        var name = 'Jane';
        console.log(name); // Jane

        /////////////////////////////
        let name = 'Mike';
        console.log(name); // Mike

        let name = 'jane';
        console.log(name); //error
        ```
    - var는 선언하기 전에 사용할 수 있음

        ```javascript
        var name;
        console.log(name); // undefined
        name = 'Mike';
        // 이런식으로 var 선언문이 최상위로 끌어올려진것처럼 동작함
        // 호이스팅(hoisting)
        // 선언은 호이스팅 되지만 할당은 호이스팅 되지않기 때문이다
        ```
    - let과 const도 호이스팅 됨
    - 호이스팅 : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동

    - TDZ : 변수 선언되기 전까지 접근할 수 없는 구간
        - let과 const는 TDZ의 영향을 받음
        - 할당을 하기 전에는 사용할 수 없다 
        - 코드를 예측 가능하게 하고 잠재적인 버그를 줄일 수 있음

- 변수의 생성과정
    1. 선언 단계
    2. 초기화 단계 : undefined 를 할당 해주는 단계
    3. 할당 단계

    - var 
        1. 선언 및 초기화 단계
        2. 할당 단계
        * 할당전에 호출하면 error를 내지않고 undefined를 내는 이유

    - let
        1. 선언단계
        2. 초기화 단계
        3. 할당 단계

    - const
        1. 선언 + 초기화 + 할당
        * 선언과 동시에 할당까지 해주어야함

- var : 함수 스코프(함수 내에서 선언된 변수만 그 지역변수가 되는 것)
- let, const : 블록 스코프(함수, if문, while문, try/catch문) (블록내부에서만 사용가능)

* var는 이제 사용하지 않고 let과 const를 권장

## 2. 생성자 함수
- 첫 글자 대문자
- new 연산자를 이용하여 함수를 호출

```javascript
function User(name, age){
    //this = {}

    this.name = name;
    this.age = age;

    //return this;
}
let user1 = new User('sujin',30);
```


## 3. 객체 메소드(Object methods), 계산된 프로퍼티(Computed property)

- 계산된 프로퍼티
```javascript
let a = 'age';

const user = {
    name : 'Mike';
    [a] : 30 // age : 30
}

///////////////
const user = {
    [1+4] : 5,
    ["안녕"+"하세요"] : "hello"
}

```

- Methods
    - Object.assign() : 객체 복제
        
        - const user2 = user -> 이런식으로 하면 user의 주소를 참조하므로 같은 공간을 바라보게 되는것
        const newUser = object.assign({},user);
        - {} + {name : Mike, age : 30} = 

        - 병합을 할때 {} 안에있는 값의 키가 같다면 덮어쓰게됨

        - 2개 이상의 객체도 합칠 수 있음
            Object.assign(user,info1,info2)
            user에 user info1 info2 가 합쳐지는 것

    - Object.keys() : 키 배열 반환
        ```javascript
        const user = {
            name : 'Mike',
            age : 30,
            gender : 'male',
        }

        Object.keys(user);
        // ["name","age","gender"]
        ```
    - Object.values() : 값 배열 반환
     ```javascript
        const user = {
            name : 'Mike',
            age : 30,
            gender : 'male',
        }

        Object.values(user);
        // ["Mike",30,"male"]
    ```

    - Object.entries() : 키 & 값 배열 반환
    ```javascript
        const user = {
            name : 'Mike',
            age : 30,
            gender : 'male',
        }

        Object.entries(user);
        // [ [ "name", "Mike" ], ["age",30] , ["gender", "male"] ]
    ```

    - Object.fromEntries() : 키 & 값 배열을 객체로
    ```javascript
        const arr = [ [ "name", "Mike" ], ["age",30] , ["gender", "male"] ];

        Object.fromEntries[arr];
        <!-- {
            name : 'Mike',
            age : 30,
            gender : 'male',
        } -->
    ```


## 4. 심볼(Symbol)
 
 - property jey : 문자형

    ```javascript
    const obj = {
        1: '1입니다.',
        false : '거짓'
    }

    Object.key(obj); // ["1","false"]

    obj['1'] // "1입니다"
    obj['false'] // "거짓"
    ```
- Symbol();
    유일한 식별자를 만들 때 사용
    ```javascript
    const a = Symbol();
    const b = Symbol();

    console.log(a) // Symbol()
    console.log(b) // Symbol()
    console.log(a === b) //false
    console.log(a == b) //false
    ```
    
    - 유일성 보장
        설명을 붙여줄수있음 : 디버깅할때 편리하다  
        ```javascript
        const id = Symbol('id');
        const id2 = Symbol('id');
        ```

- property key : 심볼형
```javascript
const id = Symbol('id');
const user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid'
}

// {name:"Mike", age:30, Symbol(id): "myid"}
// user[id] //"myid"

Object.keys(user); //["name","age"] name이랑 age만 나옴
//객체메소드 : 키가 심볼형인 프로퍼티는 건너뜀
```

- 특정 객체에 원본 데이터는 건드리지 않고 속성을 추가할 때 씀
```javascript
const user = {
    name : 'Mike',
    age : 30,
}
const id = Symbol('id');
user[id] = "myid";
```

- 심볼은 이름이 같더라도 모두 다른존재임
- But 전역변수처럼 이름이 같으면 같은 객체를 가리켜야 될때가 있음 -> Symbol.for() : 전역 심볼
    - 하나의 심볼만 보장받을 수 있음
    - 없을면 만들고, 있으면 가져오기 때문
    - Symbol함수는 매번 다른 Symbol값을 생성하지만,
    - Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
    ```javascript
        const id = Symbol('id');
        const id2 = Symbol('id');

        console.log(a === b) //true
    ```

    - 이름을 얻고싶으면
        ```javascript
        Symbol.keyFor(id1) //"id"
        ```
        - 전역 심볼이 아닌 심볼은 keyFor을 사용할 수 없음
        - 대신 description으로 이름을 알 수 있음
        ```javascript
        const id = Symbol('id 입니다.');
        id.description; // "id 입니다"

        ```

    - 숨겨진 Symbol key 보는법
     ```javascript
        const id = Symbol('id');

        const user = {
            name : 'Mike',
            age : 30,
            [id] : 'myid'
        }

        Object.getOwnPropertySymbols(user); // > [Symbol(id)]
        
        Reflect.ownKeys(user); // > ["name","age",Symbol(id)]
        // 심볼형 키를 포함한 객체의 모든 키를 보여줌
    ```

## 5. 숫자, 수학 method(Number,Math)
- toString()
        10진수 -> 2진수/16진수

        ```javascript
        let num = 10;
        
        num.toString(); // "10"
        num.toString(2); // "1010"

        let num2 = 255;

        num2.toString(16); // "ff"
        ```
    
- Math
        Math.PI : 원주율
        Math.ceil() : 올림
        Math.floor() : 내림
        Math.round() : 반올림

    - 소수점 자릿수 : toFixed()

        ```javascript
        let userRate = 30.1234;
        // 요구사항 : 소수점 둘째자리 까지 표현(셋째 자리에서 반올림) -> 30.12
        
        // 방법1
        Math.round(userRate * 100)/100 // 30.12

        // 방법2
        userRate.toFixed(2); // "30.12"

        // 만약 0이거나 기존 소수부분 개수보다 크면?
        userRate.toFixed(0);  "30" // 정수부분만 남음
        userRage.toFixed(6); "30.123400" // 0으로 채워줌

        Number(userRage.toFIxed(2)); // 30.12

        ```
        toFixed() 는 문자열을 반환함 : Number를 이용해 숫자로 변환해야함
        
- isNaN() : NaN인지 아닌지 판단

    ```javascript
    let x = Number('x'); // NaN

        x == NaN // false
        x === Nan // false
        NaN == NaN // false

            isNaN(x) // true
            isNaN(3) // false
    ```

- parseInt() : 문자열을 숫자로 바꿔줌 (Number와 다른점은 문자가 혼용되어있어도 동작함) , 숫자로 시작해야함 , 2번째 인수

    ```javascript
    let margin = '10px';

    parseInt(margin); // 10
    Number(margin); // NaN

    let redColor = 'f3';
    parseInt(redColor); // NaN
    parseInt(redColor, 16); //243 (16진수에서 10진수로)

    parseInt('11',2) // 3  (2진수에서 10진수로)
    ```

- parseFloat() : 부동소숫점을 반환

    ```javascript
    let padding = '18.5%';

    parseInt(padding); // 18
    parseFloat(padding); // 18.5
    ```

- Math.random() : 0~1 사이 무작위 숫자 생성
     * 1 ~ 100 사이 임의의 숫자를 뽑고 싶다면? 

        ```javascript
        Math.floor(Math.random()*100)+1
        ```
         
- Math.max() / Math.min() : 최대값 최소값

    ```javascript
    Math.max(1,4,-1,5,10,9,5.54); // 10
    Math.min(1,4,-1,5,10,9,5.54); // -1
    ```

- Math.abs() : 절대값
        Math.abs(-1) // 1

- Math.pow(n,m) : n의 m제곱
        Math.pow(2, 10) // 1024

- Math.sqrt() : 제곱근
        Math.sqrt(16) // 4

## 6. 문자열 메소드(String methods)

```javascript
let html = '<div class="box_title">제목 영역</div>';
    // -> html내용이 담김 문자 : 작은따옴표가 더 편리

let desc = "It's 3 o'clock."
    // -> 영어 문장 : 큰 따옴표가 더 편리

let name = 'Mike';
let result = `My name is ${name}.`
let add = `2 더하기 3은 ${2+3}입니다.`
    // -> ${}, 변수를 문장에 넣을때 : 베틱 사용

    // 베틱은 여러줄을 포함가능하다
      let desc = `오늘은 맑고 화창한
      날씨가 계속 되겠습니다.
      내일은 비소식이 있습니다.`;
```
- length : 문자열 길이

    ```javascript
    let desc = '안녕하세요.';
    desc.length //6
    ```

 - 특정 위치에 접근

    ```javascript
    let desc = '안녕하세요.';
    desc[2] // '하'

    // 한글자만 값 바꾸는거 허용 x 
    desc[4] = '용'
    console.log(desc); // '인녕하세요.'
    ```


- toUpperCase() / toLowerCase() [대소문자 변경]

    ```javascript
    let desc = "Hi guys. Nice to meet you.";

    desc.toUpperCase(); // 모든 영문을 대문자로
    desc.toLowerCase(); // 모든 영문을 소문자로
    ```

- str.indxOf(text)
       - 문자를 인수로 받아 몇번째에 위치해있는지 알려줌
       - 찾는 문자가 없으면 -1을 반환
       - 포함된 문자가 여러개면 첫번째 위치만 반환함

    ```javascript
    let desc = "Hi guys. Nice to meet you.";

    desc.indexOf('to'); // 14
    desc.indexOf('man'); // -1

    if(desc.indexOf('Hi') > -1){
        console.log('Hi가 포함된 문장입니다.')
    }
    // 0을 반환하면 false로 인식 되기때문
    ```

- str.slice(n,m)
    - n부터 m까지의 문자열을 반환
    - m
        - 없으면 문자열 끝까지
        - 양수면 그 숫자까지(포함하지 않음)
        - 음수면 끝에서부터 셈

    ```javascript
    let desc = "abcdefg";
 
    desc.slice(2) // "cdefg"
    desc.slice(0,5) // "abcde"
    desc.slice(2,-2) // "cde"
    ```

- str.substring(n,m)
        - n과 m 사이 문자열 반환
        - n과 m을 바꿔도 동작함
        - 음수는 0으로 인식

    ```javascript
    let desc = "abcdefg";

    desc.substring(2,5); // "cde"
    desc.substring(5,2); // "cde"
    ```


- str.substr(n,m)
    - n 부터시작
    - m 개를 가져옴

    ```javascript
    let desc = "abcdefg";

    desc.substr(2,4) // "cdef"
    desc.substr(-4,2) // "de"
    ```

- str.trim() : 앞 뒤 공백 제거
    - 사용자에게 입력받을때 사용 

    ```javascript
    let desc = "  coding   ";

    desc.trim(); // "coding"
    ```
    
 - str.repeat(n) : n번 반복

    ```javascript
    let hello = "hello!";
    hello.repeat(3); // "hello!hello!hello!"
    ```


- 문자열 비교

    ```javascript
    "a" < "c" // true

    "a".codePointAt(0); // 97
    String.fromCodePoint(97); // "a"
    ```

- includes
    - 문자가 있으면 true
    - 문자가 없으면 flase 반환



## 7. 배열 메소드(Array methods)

- arr.splice(n,m) : 특정 요소 지움
    - n번째 요소부터 m개 지워라

    ```javascript
    let arr = [1,2,3,4,5];
    arr.splice(1,2);

    console.log(arr); // [1,4,5]
    ```

    - arr.splice(n,m,x) : 특정 요소 지우고 *추가*

    ```javascript
    let arr = [1,2,3,4,5];
    arr.splice(1,3,100,200);  // 2,3,4 삭제
    console.log(arr); // [1,100,200,5]

    let arr2 = ["나는", "철수", "입니다"];
    arr.splice(1,0,"대한민국","소방관"); //0은 아무것도 지우지 않음
    // 0과 1사이에 들어감 ["나는", "대한민국", "소방관", "철수", "입니다"]
    ```

    - arr.splice() : 삭제된 요소 반환

    ```javascript
    let arr = [1,2,3,4,5];
    let result = arr.splice(1,2);

    console.log(arr); // [1,4,5]
    console.log(result); // [2,3]
    ```


- arr.slice(n,m) : n부터 m까지 반환
    - m은 포함하지않음
        - 안쓰면 배열 끝까지 를 의미

```javascript
let arr = [1,2,3,4,5];
arr.slice(1,4); // [2,3,4]
```


- arr.concat(arr2, arr3 ..) : 합쳐서 새 배열 반환

```javascript
let arr = [1,2];
arr.concat([3,4]); // [1,2,3,4]
arr.concat([3,4], [5,6]); // [1,2,3,4,5,6]
arr.concat([3,4],5,6); // [1,2,3,4,5,6]
```


- arr.forEach(fn) : 배열 반복

```javascript
let users = ['Mike', 'Tom', 'Jane'];

users.forEach((item, index, arr) =>{
    // ..
} )


// 함수를 인수로 받음
// 1. 해당 요소
// 2. 인덱스
// 3. 해당 배열 자체
```


- arr.indexOf() / arr.lastIndexOf()  
    인덱스 위치알고싶을때

```javascript
let arr = [1,2,3,4,5,1,2,3];

arr.indexOf(3); // 2 발견하면 해당요소의 인덱스를 반환 vs 없으면 -1 반환함
arr.indexOf(3,3) // 7 
// 인수가 두개인 경우 두번째 인수는 시작 위치를 가리킴

arr.lastIndexOf(3); // 7 끝에서부터 탐색하고 싶으면 lastIndexOf
```


- arr.includes() : 포함하는지 확인

```javascript
let arr = [1,2,3];

arr.includes(2); // true
arr.includes(8); // false
```

- arr.find(fn) / arr.findIndex(fn)
    - 찾는다능 의미는 동일하지만 보다 복잡한 연산이 가능하도록 함수를 전달
    - 첫번째 true 값만 반환하고 끝 / 만약 없으면 undefined를 반환함

- arr.filter(fn) : 만족하는 모든 요소를 배열로 반환

- arr.reverse() : 역순으로 재정렬

```javascript
let arr = [1,2,3,4,5];
arr.reverse(); // [5,4,3,2,1]
```

- arr.map(fn) : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환

- arr.join() : 배열을 문자열로
인수로 들어가는게 구분자 /  아무것도 없으면 , 쉽표로 구분하는것

```javascript
let arr = [ "안녕", "나는", "철수야"];
let result = arr.join();
let result2 = arr.join("/");
console.log(result); //안녕,나는,철수야
console.log(result2); //안녕/나는/철수야
```


- arr.split() : 문자열을 나눠서 배열로 만들어줌
인수에 들어가는걸 기준으로 나눔 / 아무것도 없으면 하나의 배열 / ""은 한글자씩 나눔
```javascript
const users = "Mike,Jane,Tom,Tony"
const result = users.split(",");
console.log(result);
```


- Array.isArray() : 배열인지 아닌지 확인하려면
typeof는 객체와 배열이 구분이 안감 : 둘다 object라고뜸
배열이면 true 반환

## 8. 배열 메소드2(sort, reduce)

- arr.sort() : 정렬
    * 배열 자체가 변경 됨
    * 정렬 로직을 담은 함수를 인수로 넣어줘야함
        - 오름차순으로 정렬
        - 문자열 가능  (알파벳 순서대로)
        - 숫자를 문자열로 취급해서 정렬하기 때문에 13 > 27 > 5 > 8 이런식으로 정렬이 됨 -> 함수를 인수로 넣어야함

    
    - Lodash
        - _.sortBy(arr); 
            - 어떤 로직이 들어있는지 신경 안써도되고, 숫자/문자/객체 원하는 기준으로 정렬해줌

- arr.reduce() : 배열의 모든 수 합치기
    * 인수로 함수를 받음
    * (누적 계산값, 현재값) => { return 계산값 }
    * 초기값 0 / [] 안쓰면 : 인덱스0번 값이 초기값
    
    ```javascript
    const result = arr.reduce((prev, cur)=> {
        return prev + cur;
    },0);
    ```

    - arr.reduceRight() : 배열 우측 부터 reduce를 수행