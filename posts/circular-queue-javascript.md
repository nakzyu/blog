---
title: Circular Queue(원형 큐) javascript
publishedDate: "2021-03-16 21:50:00"
tag: Javascript
---

### 원형 큐를 사용하는 이유

1\. dequeue시 shift 연산을 하지 않는다. 따라서 배열 인덱스를 재배치할 필요가 없기 선형 큐에 비해 메모리 사용량이 훨씬 적다.

### 원형 큐 구현

#### 1\. 배열 생성

```js
const size = 5;
const cq = Array(size).fill(null);
```

사이즈가 5인 배열을 만들고, null로 해당 배열을 채워보자. 시각화하면 아래와 같다.

![relation](/images/posts/circular-queue-javascript/R1280x0.png)

---

#### 2\. 포인터 생성

큐에서는 두종류의 포인터가 필요하다.

1\. enqueue시 삽입할 위치를 가르키는 포인터

2\. dequeue시 삭제할 위치를 가르키는 포인터

보통 1을 front, 2를 rear라고 많이 하는것 같아, 이글에서도 그렇게 부르도록 하겠다. (head & tail 과 같은 식으로 불러도 개념은 똑같으니, 상관은 없다.)

```js
let front = 0;
let rear = 0;
```

![relation](/images/posts/circular-queue-javascript/R1280x0-2.png)

(여기서, front === rear 이면 원형 큐가 비어있음을 알 수 있다.)

```js
const isEmpty = () => rear === front;
```

---

#### 3\. enqueue 

enqueue하기 위해, 포인터들의 위치를 결정해야 하는데, 이때 나머지 연산자(%)를 사용한다.

(정수 % queue의 size)의 연산을 하게되면, queue의 size안에서 순환하는 인덱스를 얻을수 있다.

```js
const enqueue = (item) => {
  cq[rear] = item;
  rear = (rear + 1) % size;
  return item;
};

enqueue("a");
```

현재 rear의 위치에 a를 삽입하고 rear를 한칸 앞으로 옮긴다.

![relation](/images/posts/circular-queue-javascript/R1280x0-3.png)

```
enqueue("b")
```

![relation](/images/posts/circular-queue-javascript/R1280x0-4.png)

```
enqueue("c")
```

![relation](/images/posts/circular-queue-javascript/R1280x0-5.png)

---

#### 4\. dequeue 

dequeue는 front 포인터가 가르키는곳의 요소를 제거하고, front를 1칸 앞으로 이동시킨다.

```js
const dequeue = () => {
  const val = cq[front];
  cq[front] = null;
  front = (front + 1) % size;
  return val;
};
dequeue();
```

![relation](/images/posts/circular-queue-javascript/R1280x0-6.png)

---

#### 5\. 버퍼 공간 생성 & isFull

만약 아래처럼 dequeue를 한번도 하지않고 enqueue를 계속해서 실행하면, front와 rear의 위치는 같아지게 될것이다.

```js
enqueue("a");
enqueue("b");
enqueue("c");
enqueue("d");
enqueue("e");
```

![relation](/images/posts/circular-queue-javascript/R1280x0-7.png)

앞서서, isEmpty를 아래와 같이 정의 하였는데,

```js
const isEmpty = () => rear === front;
```

위 논리대로 라면, 배열이 꽉 차있는데도 Empty가 true가 된다.

이를 방지하기 위한 테크닉으로, 배열 한칸을 추가해 항상 비워놓고 사용 하지 않는다.

사이즈가 n인 원형큐를 만들고 싶다면, n+1의 배열을 생성하면 되는것이다.

```js
const size = 6;
const cq = Array(size).fill(null);

...

enqueue("a")
enqueue("b")
enqueue("c")
enqueue("d")
enqueue("e")
```

![relation](/images/posts/circular-queue-javascript/R1280x0-8.png)

위와같이 구조를 변경한다면, 현재 상태가 Full인지 혹은 Empty인지 명확하게 알 수 있다.

```js
const isFull = () => (rear + 1) % size === front;
```

---

#### 6\. 전체 코드

#### \*\*JS

더보기

```js
const size = 6;

const cq = Array(size).fill(null);

let front = 0;
let rear = 0;

const isEmpty = () => rear === front;

const isFull = () => (rear + 1) % size === front;

const enqueue = (item) => {
  if (isFull()) {
    console.log("큐가 가득참");
    return;
  }
  cq[rear] = item;
  rear = (rear + 1) % size;
  return item;
};

const dequeue = () => {
  if (isEmpty()) {
    console.log("큐가 비어있음");
    return;
  }
  const item = cq[front];
  cq[front] = null;
  front = (front + 1) % size;
  return item;
};

/* 큐의 가장 앞에있는 요소를 얻음 */
const peek = () => cq[front];

/* 큐의 모든 요소가 null이 될때까지 dequeue를 실행 */
const clear = () => {
  while (true) {
    if (!dequeue()) break;
  }
  front = rear;
};
```
