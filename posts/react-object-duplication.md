---
title: React State - 객체 중복 피하기
publishedDate: "2022-12-07 11:45:00"
tag: React
---

클라이언트 개발을 하다보면 아래와같은 상황을 구현해야 하는 경우가 많이 생긴다.

- Array안에서 한가지 아이템을 선택하면, 해당 아이템의 정보를 보여줘야 하는 상황

이러한 상황에서 state 중복과 오류를 피할 수 있는 방법을 알아보자.

### 코드 예시

```jsx
const initialPeoples = [
  { name: "John", age: 20 },
  { name: "Jenny", age: 26 },
  { name: "Peter", age: 30 },
];

function AgeCounter() {
  const [peoples, setPeoples] = useState(initialPeoples);
  const [selectedPeople, setSelectedPeople] = useState(null);

  return (
    <>
      <ul>
        {peoples.map((people) => (
          <li
            key={people.name}
            onClick={() => {
              setSelectedPeople(people);
            }}
          >
            {people.name}, age {people.age}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          setPeoples(
            peoples.map((people) => ({ ...people, age: people.age + 1 }))
          );
        }}
      >
        Happy New Year!
      </button>
      <div>
        selected people is: {selectedPeople?.name}, age {selectedPeople?.age}
      </div>
    </>
  );
}
```

![image-20221207232649780](/images/posts/react-object-duplication/image-20221207232649780.png)

위 코드는 아래처럼 동작할 것이다.

- `initialPeoples` 에 인물의 정보를 포함한 객체 3개가 존재한다.
- `<ul>`태그 아래에서 해당 인물들의 정보를 모두 표시 한다.
- 특정 인물을 클릭하면, `selectedPeople`에 해당 객체를 저장한다.
  - 화면 최하단에 선택된 `selectedPeople` 정보를 표시한다.
- `Happy New Year!` 버튼을 누르게 되면, 인물들의 나이가 한살 씩 증가한다.
  - `selectedPeople`에 표시되는 나이도 +1이 된다.

얼핏보면 문제가 없는 코드라고 생각하기 쉽다! 그러나..

John을 선택한 후, `Happy New Year!` 버튼을 눌러도, `selectedPeople` 에 표시되는 나이는 올라가지 않는다!

![image-20221207232623367](/images/posts/react-object-duplication/image-20221207232623367.png)

그 이유는 `selectedPeople` 에 저장된 객체와, 내가 `Happy New Year!` 버튼을 눌러 나이를 올린 객체는 다른 객체이기 때문이다.

```jsx
<button
  onClick={() => {
    setPeoples(peoples.map((people) => ({ ...people, age: people.age + 1 })));
  }}
>
  Happy New Year!
</button>
```

setState(setPeoples)는 렌더링 라이플사이클 안에서, 이전 객체에 대한 포인터를 지닌채로 객체안의 프로퍼티 일부를 수정하는 형태로 동작하지 않고, 항상 새로운 객체를 생성하도록 강요된다.

`     peoples.map((people) => ({ ...people, age: people.age + 1 }))` 이 구문에서 이미 객체 생성 예약어`{}`를 사용하면서, `map`을 통해 만들어진 새로운 배열에 새로운 객체를 저장하였다. 따라서 새로운 배열의 새로운 객체 age가 올라간것과 `selectedPeople` 안에 있는 객체는 전혀 연관이 없기때문에, Happy New Year! 버튼을 눌러도 나이가 올라가지 않는다.

또한 이는 필요없는 객체를 중복으로 저장하고 있는 안티패턴이다.

### 어떻게 수정하면 될까?

`selectedPeople`이라는 state를 제거하고 `selectedPeopleName` 이라는 인물의 고유한 name을 값으로 가지는 state로 대체한다.

그리고 아래처럼 `selectedPeople`를 state가 아닌 일반변수로 새로 선언하여 사용한다!

```jsx
const initialPeoples = [
  { name: "John", age: 20 },
  { name: "Jenny", age: 26 },
  { name: "Peter", age: 30 },
];

function AgeCounter() {
  const [peoples, setPeoples] = useState(initialPeoples);
  const [selectedPeopleName, setSelectedPeopleName] = useState(null);
  const selectedPeople = peoples.find(
    (people) => people.name === selectedPeopleName
  );

  return (
    <>
      <ul>
        {peoples.map((people) => (
          <li
            key={people.name}
            onClick={() => {
              setSelectedPeopleName(people.name);
            }}
          >
            {people.name}, age {people.age}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          setPeoples(
            peoples.map((people) => ({ ...people, age: people.age + 1 }))
          );
        }}
      >
        Happy New Year!
      </button>
      <div>
        selected people is: {selectedPeople?.name}, age {selectedPeople?.age}
      </div>
    </>
  );
}
```

![image-20221207233846531](/images/posts/react-object-duplication/image-20221207233846531.png)

#### 이제 John을 선택한 후 `Happy New Year!`버튼을 눌러도, 나이가 정상적으로 올라간다.
