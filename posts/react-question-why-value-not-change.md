---
title: React 사용시 흔한 실수 - 화면의 값이 바뀌지 않는 이유
description: React 사용시 흔한 실수 - 화면의 값이 바뀌지 않는 이유
publishedDate: "2022-10-15 00:00:00"
tag: React
---

리액트에 입문하는 99%의 사람들은, 장담컨대 아래와 같은 현상에 당혹스러움을 느꼈을 것 이다.

```js
const Counter = () => {
  let counter = 0;
  return <button onClick={() => counter++}>{counter}</button>;
};
```

버튼을 눌렀는데 왜 화면에 카운터가 안올라가지..?

위 상황에서 버튼을 눌렀을 때 왜 counter가 올라가지 않는지 지금은 알고있는가?

useState를 쓰면 된다는 건 알아도 useState를 쓰면 왜 카운터가 올라가는지에 대해서 알고있는 사람은 많지 않을 것이다.

## 그럼, 본질적으로 리액트는 어떻게 동작할까?

```js
/* html */
<body>
  <div id="app"></div>
</body>;

/* js */
const $app = document.getElementById("app");
const jsx = <div>안녕하세요</div>;
ReactDom.render(jsx, $app);
```

JSX.Element를 넘겨받은 후 그것을 순수한 HtmlElement로 파싱한 후, 특정 HtmlElement를 지정하고,

해당 HtmlElement아래에 파싱된 값`<div>안녕하세요</div>`을 렌더링 하는것이다.

이해를 돕기 위해 그것을 바닐라 JS로 표현하면 아래와 같다.

```js
const $app = document.getElementById("app");
const $divElement = doucment.createElement("div");
$divElement.innerText = "안녕하세요";
$app.appendChild($divElement);
```

다시 본론으로 넘어와서, 아래와 같은 코드를 동작시키면 어떤 일이 일어날까?

```js
const $app = document.getElementById("app");
let jsx = <div>안녕하세요</div>;
ReactDom.render(jsx, $app);
setTimeout(() => {
  jsx = <div>반갑습니다</div>;
}, 3000); // 3초후에 jsx의 값을 <div>반갑습니다</div>로 바꾼다
```

정답은 화면에 보여지는 텍스트는 "안녕하세요"는 "반갑습니다"로 바뀌지 않는다. 이유는 글을 시작하면서 들었던 카운터 예제와 같다.

## 왜냐하면...

ReactDom.render()를 새로 호출하지 않았기 때문이다!

```js
const $app = document.getElementById("app");
let jsx = <div>안녕하세요</div>;
ReactDom.render(jsx, $app);
setTimeout(() => {
  jsx = <div>반갑습니다</div>; // jsx의 값을 <div>반갑습니다</div>로 바꾼다
  ReactDom.render(jsx, $app); // 바꾼 값을 $app 아래에 다시 적용시킨다.
}, 3000);
```

타임아웃 콜백 안에서 ReactDom.render()를 다시 호출 해주면 화면에 텍스트는 그제서야 "반갑습니다" 로 바뀐다.

그럼 처음 카운터 예제에 적용 시켜 보자면...

```js
const Counter = () => {
  let counter = 0;
  return <button onClick={() => counter++}>{counter}</button>;
};
```

아니, 여기다가 어떻게 적용을 시켜야 하지?

ReactDom.Render를 어떻게 적용시켜야 할지 막막한가?

우리는 여기서 ReactDom.Render 함수를 실제로 임포트 해야할 필요가 없다.

```js
const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
  );
};
const $app = document.getElementById("app");
ReactDom.render(<Clicker />, $app);
```

useState의 반환값 배열의 setState(여기서는 setCounter)함수는, 함수가 실행되면 내부에서 ReactDom.Render 를 호출한다.

counter의 상태값이 바뀔때 마다, 즉 setState를 호출 할때마다 ReactDom.Render함수또한 같이 호출 되기 때문에 우리는 이제 버튼을 클릭 하였을때 counter가 올라가는 것을 확인 할 수 있다.

## 요약하자면...

처음 Counter 예제에서 버튼을 눌렀을때 카운터가 올라가지 않는 이유는 간단하다.

실제 HtmlElement를 건드린 적이 없기 때문이다.

객체인 JSXElement를, ReactDom.render를 이용해서 실제 HtmlElement로 파싱한 후 DOM에 렌더링을 해주어야 화면에 값이 바뀌는것을 확인 할 수 있다.
