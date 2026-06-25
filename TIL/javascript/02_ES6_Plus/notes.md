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

