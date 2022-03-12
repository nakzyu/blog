---
title: 데이터베이스 - [SQL 3]
description:
publishedDate: "2022-03-11 17:21:00"
tag: CS
---

## 데이터 검색 (2)

### 집계 함수

- 특정 컬럼에 집계합수를 통해 다양한 통계 연산을 수행할 수 있는 기능
- SELECT 절 또는 HAVING절에 기술
- 집계함수의 종류
  - COUNT
  - SUM
  - AVG
  - MAX
  - MIN

### 그룹 질의

- 특정 기준으로 레코드를 그룹화하고 각 레코드 그룹에 대해 집계 함수를 적용하는 질의

```sql
SELECT 질의
    GROUP BY 컬럼
```

- `[주의] SELECT절에 그룹의 기준과 집계 함수 이외의 컬럼은 포함될 수 없음`

### 그룹 질의의 사용

```
소속학과별 교수의 수를 출력하시오.
```

![table](/images/posts/db-sql-3/table.png)

```sql
SELECT 소속학과, COUNT(*) AS 교수수
    FROM 교수
    GROUP BY 소속학과
```

- 아래와 같은 구문은 `[주의]`를 위반함 (컬럼값의 원자성을 위배함)
- 컬럼 값이 "교수이름들" 이 아니라 "교수이름" 이기 때문

![table2](/images/posts/db-sql-3/table2.png)

## 뷰의 사용
