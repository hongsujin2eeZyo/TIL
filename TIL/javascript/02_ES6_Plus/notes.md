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