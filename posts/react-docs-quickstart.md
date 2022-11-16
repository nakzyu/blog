---
title: React State 사용 - 언제 사용해야 할까?
publishedDate: "2022-11-16 21:45:00"
tag: React
---

(React Docs Beta > Quickstart > Thinking in React 를 읽고 재구성한 글 입니다.)

### `state`를 언제 사용해야 하는가?

`state`를 선언하기 전에, 혹시 사용하지 말아야 하는 케이스가 아닌가? 부터 생각해보자. (아래 케이스에 해당하지 않으면 사용해도 된다.)

### `state`를 사용하지 말아야 하는 경우

- 렌더링 사이클 내에서 단 한번도 그 값이 바뀐적이 없다면? `state`가 아니다.
- `Parent Component`로부터 `props`를 통해 내려받았다면? `state`가 아니다.
- 당신이 만든 `state`가 이미 있는 `state`혹은 `props`로 전달받은 값으로부터 계산`compute`되어질 수 있다면? 그건 확실히 `state`가 아니다.
  - **이부분은 나도 잘 못 사용한 경우가 많은것 같다(...)**


예컨대 이런식으로는 하지 말라는것. 

```jsx
// 원래 가격이 price인 상품의 50% 할인된 가격도 같이 표시하려 할때
const Product = ({ price }) => {
  const [discountedPrice, setDiscountedPrice] = useState(price / 2);
  useEffect(() => {
    setDiuscountedPrice(price / 2);
  }, [price]);
  return (
    <div>
      원래 가격: {price}
      할인된 가격: {discountedPrice}
    </div>
  );
};
```


이런식으로 하자! (`compute`할 수 있는 값이라면, `state`로 선언하지 말 것)

```jsx
const Product = ({ price }) => {
  return (
    <div>
      원래 가격: {price}
      할인된 가격: {price / 2}
    </div>
  );
};
```


해당 계산된 값을 변수에 저장해서 쓰고싶다면,

```jsx
const Product = ({ price }) => {
  const discountedPrice = price / 2;
  return (
    <div>
      원래 가격: {price}
      할인된 가격: {discountedPrice}
    </div>
  );
};
```


혹 해당 값을 구하는 로직이 예시처럼 간단한 것이 아니고 복잡하다면, 렌더링을 최소화 하기 위해서 `useCallback`을 사용할 수도 있다. (tradeoff가 있으니 잘 판단해서 선택이 필요하다)

```jsx
const Product = ({ price }) => {
  const getDiscountedPrice = useCallback(() => price / 2, [price]);
  return (
    <div>
      원래 가격: {price}
      할인된 가격: {getDiscountedPrice()}
    </div>
  );
};
```

예제가 간단해서 "뭐야 저게? 당연한걸 말하고있어" 할 수도 있지만

시스템이 조금만 복잡해져도 위와같이 `compute`할수있는 값을 `state`로 쓰고있는경우가 꽤 있다고 생각한다. (당장 내가 쓴 코드만 찾아봐도 한트럭.. 🥹)

---

`state`를 사용하지 말아야 하는 경우를 확실히 숙지하고 나면, 자신의 코드를 개선하는 것 뿐 아니라 타인의 코드를 리뷰할때도 큰 도움이 될 것이라고 생각한다.
