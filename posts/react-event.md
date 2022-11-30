---
title: React - 부모 요소 이벤트 방지하기, Event Bubbling, Capturing, and Propagation
publishedDate: "2022-11-30 22:42:00"
tag: React
---

요 주제는 사실 `React`와는 관련이 없는 `HTML` 및 `JS` 내용이다. `Event Bubbling and Capturing` 에 대한 이해를 갖춘다면 `React` 에서 동일하게 사용할 수 있다.

아래처럼 `div` 태그를 부모로 갖고, `button` 태그를 자식으로 갖는 컴포넌트가 `DOM`에 렌더링 되어있다고 하자.

```jsx
const Example = () => (
  <div
    onClick={(event) => {
      console.log("div clicked");
    }}
  >
    <button
      onClick={(event) => {
        console.log("button clicked");
      }}
    ></button>
  </div>
);
```

## Event Capturing과 Bubbling

button을 눌렀을때, JS는 이벤트 전파를 위해 아래와 같은 처리를 한다.

![relation](/images/posts/react-event/1.png)

#### 1 최상위 `Document`에서부터, `onClick` 이벤트를 발생시킨 `target`을 한단계씩 찾아간다.

- `target`을 찾아가는 이 동작을 `Event Capturing` 이라 한다.

#### 2 `target` 을 찾았다면 다시 최상위 `Document` 까지 지나온 길을 거슬러 올라간다

- 위로 거슬러 올라가는 이 동작을 `Event Bubbling` 이라 한다.
- 거슬러 올라가는 동안 Event Capturing을 발생시킨 해당 event(예제 기준으로는, onClick)가 element(target 자기자신인 `button`, `div`, `body`, `html`)에 등록되어 있다면 해당하는 모든 이벤트를 차례로 발생시킨다
- `target`인 `button`에 해당 이벤트가 있으니 콘솔에 `button clicked`가 출력된다
- 거슬러 올라가면서`button`의 부모인 `div`에 해당 이벤트가 있으니 콘솔에 `div clicked`가 출력된다
- body, html에는 해당 이벤트(onClick)이 등록된것이 없으니 더이상의 출력은 없다

## Div가 발생시키는 콘솔 출력을 막으려면? - Event Propagation

이벤트는 `Event Bubbling Phase` 에서 발생한다. 이 버블링을 막으면 이벤트가 실행되는것을 막을 수 있다. 이를 `Event Propagation` 이라 한다.

`event.stopPropagation()` 호출을 통해 propagation을 실행 시킬 수 있다.

```jsx
const Example = () => (
  <div
    onClick={(event) => {
      console.log("div clicked");
    }}
  >
    <button
      onClick={(event) => {
        event.stopPropagation();
        console.log("button clicked");
      }}
    ></button>
  </div>
);
```

위 예제처럼 `button`의 이벤트를 propagate한다면 이벤트는 더이상 위로 버블링되지 않는다. 따라서 `div`의 onClick이벤트를 실행시키지 않는다.
