# 자바스크립트 기본 문법 기초

## 1. 변수 (Variable)
- `let` : 한번 선언 후에 다른 값으로 변경 가능
- `const` : 절대로 바뀌지 않는 상수를 입력할 때 사용 / 대문자로 선언(다른개발자들에게 상수임을 알림)
- tip! 모든 변수를 const로 선언하고 나중에 변경 될 가능성이 있는 변수를 let으로 변경

### 특징
- 01. 변수는 문자와 숫자, $와 _만 사용
- 02. 첫글자는 숫자가 될 수 없음
- 03. 예약어는 사용할 수 없음
- 04. 가급적 상수는 대문자로 알림
- 05. 변수명은 읽기 쉽고 이해할 수 있게 선언

## 2. 자료형

### 문자형
- "" '' `` 으로 감싸줘야함
- 백틱(``)은 문자열 내부에 변수를 표현할 떄 사용하면 편리함

### 숫자형
- 소수점 가능
- 사칙연산이 가능하다. (+-*/%)
- 0으로 나눈 값 -> Infinity
- 문자형과의 사칙연산 -> NaN(Not a Number) 

### Boolean
- 논리적인 요소를 나타냄
- 참(true) 또는 거짓(false)

 ### null과 undefined  
 - null : 존재하지 않는 값
 - undefined : 값이 할당되지 않았음을 의미

 ### typeof 연산자
 - 변수의 자료형을 알아낼 수 있음
 - 다른 개발자가 작성한 변수의 타입을 알아야할 때
 - api 통신을 통해 받아온 데이터를 타입에 따라 다른 방식으로 처리해야할 때
 - typeof null; // "object" (객체형) but null은 객체가 아님 (자바스크립트 초기버전의 오류)

- 숫자형 뿐만 아니라 문자형도 덧셈연산 가능함

## 3. 대화상자
- alert() : 알려줌
    - 메시지를 보여줌
    - 확인을 누르기 전까지 계속 떠 있음
- prompt() : 입력 받음 
    - 사용자에게 메시지를 보여주고 어떤 값을 입력받을 수 있는 필드를 제공함
    - 취소를 누르면 null을 반환 함
    - 디폴트 값 입력할 수 있음 prompt("메시지","입력 받을 디폴트 값")
    - 디폴트 값은 무언가를 안내하거나 힌트를 줄 때 유용하게 쓰일 수 있다
- confirm() : 확인 받음
    - 사용자 액션을 한번 더 확인시켜줄때 유용하게 쓰인다
    - 확인 버튼은 true / 취소 버튼은 false 를 반환한다.

### 단점
- 스크립트 일시 정지
- 스타일링이 불가하다 / 브라우저마다 모양이 조금씩 다름

## 4. 형변환
- Stirng() -> 문자형으로 변환
- Number() -> 숫자형으로 변환
- Boolean() -> 불린형으로 변환
* prompt로 입력받은 값은 무조건 문자형
    - -*/%는 자동형변환이 일어남
- 명시적 형변환 기억해야할 특징
    - Number("") 에 문자가 들어가게 되면 NaN
    - Number(null) //0
    - Number(undefined) //NaN

    - Boolean(0) // false
    - Boolean('0') // true
    - Boolean('') //false
    - Boolean(' ') //true

    - Boolean() 에 0, 빈문자열'', null, undefined, NaN -> false / 나머지는 true 반환s

## 5. 기본연산자
- ( + - * / % )
- 연산자 우선순위 * / 가 더 높음
- % 나머지 연산으로 홀수 짝수 구분가능
- += -= *= %= /= 가능
- 증가연산자 num++ / ++num
- 감소연산자 num-- / --num

## 6. 비교연산자
- ( < > <= >= == != )
- true false 로 반환됨
- 일치연산자 === ( 타입까지 비교함 )

## 7. 조건문
- if문
    - if, else if, else

## 8. 논리연산자
- || : OR
- && : AND
- ! :NOT
- 퍼센트가 낮은걸 앞에 배치하면 성능최적화에 도움을 줌
- 우선순위 AND가 OR보다 높음

## 9. 반복문
- for 문
- while 문
- do.. while 문 : 적어도 1번은 꼭 실행함
- 명확한 횟수가 정해져 있으면 for문 아니면 while문 사용

- break : 멈추고 빠져나옴
- continue : 멈추고 다음 반복으로 진행

## 10. switch문
- break와 같이 사용
- default : if문의 else와 같은 것 

## 11. 함수
```javascript
function sayHello(name){
    console.log(`Hello, ${name}`);
}

sayHello('sujin');
```

```javascript
// 매개변수 default값 설정
function sayHello(name = 'friend'){
    console.log(`Hello, ${name}`);
}

sayHello();
```
- 코드 재사용성이 좋다
- 유지보수가 쉽다

- 전역변수와 지역변수 구분
    - 매개변수로 받은 값은 복사된 후 함수의 지역변수가 된다.
    - 전역변수가 많아지면 관리가 힘들기에 함수에 특화된 지역변수를 사용을 지향해라

- return : 값 반환
    - return 문이 없는 함수도 undefined를 반환함
    - return 만 있는것
        - undefined 반환
        - 함수를 종료하는 목적으로도 쓰임

- 한번에 한 작업에 집중하라.
- 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍해라.


## 12. 함수 표현식
- ```javascript
    let sayHello = function(){
        console.log('Hello');
    }
    ```
- vs 함수 선언문
    ```javascript
        function sayHello(){
            conssole.log('Hello');
        }
    ```

- 실행하는 방식 , 동작하는 방식 동일
- 함수 선언문 : 어디서든 호출 가능
    - 자바스크립트는 초기에 모든 함수 선언문을 찾아서 생성해둠
    - 호이스팅(hoisting)

- 함수 선언문이 더 자유로움


## 13. 화살표 함수

- 더욱더 간결함 : function이라는 단어가 사라지고 화살표가 생김

    ```javascript
        let add = (num1,num2) => {
            return num1 + num2;
        }
    ```

- 리턴문은 return단어 제거 / 중괄호 -> 일반 괄호로 변경

    ```javascript
        let add = (num1,num2) => (
            num1 + num2;
        )     
    ```

- 리턴문이 한줄이면 괄호도 생략 가능

    ```javascript
        let add = (num1,num2) => num1 + num2; 

    ```
- 인수가 하나면 인수 괄호 생략 가능

    ```javascript
        let sayHello = name => `Hello, ${name}`;
    ```
- 만약 인수가 없는 함수이면 괄호를 생략할 수 없음

    ```javascript
        let showError = () => {
            alert('error!');
        }
    ```

- 리턴문 전에 여러줄의 코드가 있을 경우에는 일반괄호x , 중괄호 사용해야함
    
    ```javascript
        let add = (num1,num2) => {
            const result = num1 + num2;
            return result;
        }
    ```


## 14. 객체(Object)

    ```javascript
        const superman = {
            name : 'clark',
            age : 33,
        }
    ```

- 접근
    - 점 또는 대괄호
    - superman.name
    - superman['age']

- 추가
    - 점 또는 대괄호
    - superman.gender = 'male';
    - superman['hairColor'] = 'black';

- 삭제
    - delete superman.hairColor;

```javascript
    const name = 'clark';
    const age = 33;

    const superman = {
        name,   //name: name
        age,    //age: age
        gender : 'male',
    }
```

- 존재하지 않는 프로퍼티에 접근하면 error가 아닌 undefined가 나오게 된다.
- in 연산자를 사용하면 프로퍼티가 있는지 확인 할 수 있음 : 어떤 값이 넘어올지 확신 할 수 없을 때 사용한다. (함수의 인자로 받거나 api통신을 통해 데이터를 받아 올 때)
    ```javascript
        const superman = {
            name: 'clark',
            age: 33,
        }


        superman.birthDay;
        //undefined

        'birthDay' in superman;
        //false

        'age' in superman;
        //true
    ```

    ### for ... in 반복문
        ```javascript
            for(let key in superman){
                console.log(key) 
                console.log(superman[key])
            }
        ```

    ### mathod
    - 객체 프로퍼티로 할당 된 함수

    ```javascript
    const superman = {
        name: 'clark',
        age:30,
        fly(){ // == fly : function(){}
            console.log('날아갑니다.')
        }
    }
    ```


        #### this

            ```javascript
            //잘못된코드 예시
            const user = {
                name: 'Mike',
                sayHello(){
                    console.log(`Hello, I'm ${user.name}`);
                }
            }

            //user. 자리에 this.
            ```

    * 화살표 함수는 일반함수와 달리 자신만의 this를 가지지 않음,
        - 화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져옴 (전역객체를 가리킴) (mathod 함수)

## 15. 배열
```javascript
let students = ['','',...,''];

students[0];
```
- 배열은 문자 뿐만 아니라, 숫자, 객체, 함수 등도 포함할 수 있음
- length : 배열의 길이 students.length //뒤에 괄호 없어야함
- push(): 배열 끝에 추가 students.push('')
- pop() : 배열 끝 요소 삭제 students.pop()
- unshift() : 배열 앞에 추가 students.unshift('')
- shift() : 배열 앞 요소 삭제 students.shift()

- 반복문 for : array.length 이용
- 반복문 for ... of
    ```javascript
    for(let day of days){
        console.log(day)
    }
    ```
    - for 문 보다는 간단하지만 인덱스 활용을 못함