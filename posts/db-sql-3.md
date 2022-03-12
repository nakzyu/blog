---
title: 데이터베이스 - [SQL 3]
description:
publishedDate: "2022-03-13 07:08:00"
tag: CS
---

## 데이터 검색 (2)

### 집계 함수

- 특정 컬럼에 집계합수를 통해 다양한 통계 연산을 수행할 수 있는 기능
- SELECT 절 또는 HAVING절에 기술
- 집계 함수는 테이블에 존재하는 전체 레코드를 대상으로 수행되어 단 하나의 값으로 결과를 생성함
- 집계함수의 종류
  - COUNT
  - SUM
  - AVG
  - MAX
  - MIN

### GROUP BY

- 특정 기준으로 레코드를 그룹화하고 각 레코드 그룹에 대해 집계 함수를 적용하는 질의

```sql
SELECT 질의
  GROUP BY 컬럼
```

- `[주의] SELECT절에 그룹의 기준과 집계 함수 이외의 컬럼은 포함될 수 없음`

* GROUP BY 예제
  - 같은 값을 가진 행끼리 하나의 그룹으로 뭉쳐줌

![groupby](/images/posts/db-sql-3/group-by.png)

### GROUP BY 사용

```
소속학과별 교수의 수를 출력하시오.
```

![table](/images/posts/db-sql-3/table.png)

```sql
SELECT 소속학과, COUNT(*) AS 교수수
  FROM 교수
  GROUP BY 소속학과
```

- 아래와 같은 구문은 컬럼값의 원자성을 위배하기에 존재할 수 없음
- 컬럼 값이 "교수이름들" 이 아니라 "교수이름" 이기 때문

![table2](/images/posts/db-sql-3/table2.png)

### HAVING

- 그룹 질의의 결과 레코드에 대해 출력 조건을 기술하기 위한 절
- WHERE과의 차이
  - WHERE 레코드에 대한 조건을 기술
  - HAVING 집계 결과 레코드에 대한 조건을 기술

### 중첩 질의

- SELECT문 내부에 독립적으로 실행 가능한 또 다른 SELECT 문이 내포되어 있는 질의
- 일반적으로 내부 질의의 처리결과를 외부 질의에서 재사용
- 중첩 질의 종류

  - FROM절에서 활용

    - FROM절에서 결과 집합을 SELECT에서 재검색

  - WHERE 절에서 활용
    - WHERE절에서 결과 집합을 활용하여 외부 질의에서 레코드의 출력 여부를 결정
    - IN, NOT IN, EXISTS, NOT EXSISTS

```sql
SELECT 컬럼1, 컬럼2, ..., 컬럼n
  FROM (SELECT 컬럼1, 컬럼2, ..., 컬럼m
          FROM 테이블
          WHERE 조건)
  WHERE 조건
```

```sql
SELECT 컬럼1, 컬럼2, ..., 컬럼n
  FROM 테이블1
  WHERE 컬럼i 연산자 (SELECT 컬럼j
                      FROM 테이블2
                      WHERE 조건)
```

### JOIN

- 테이블 간의 관련성을 이용하여 두개 이상의 테이블에서 데이터를 검색하는 질의 기법
- ER 모델링 및 정규화 기법으로 여러 테이블로 분리된 정보를 통합하여 검색 시 유용
- 질의 종류
  - INNER JOIN
  - OUTER JOIN

### INNER JOIN

- 두 개 이상의 테이블에서 조인 조건을 만족하는 레코드만 `결합하여 출력 결과에 포함시키는 연산`
- 조인 조건은 WHERE절이 아닌 ON절에 기록
- ANSI SQL 표준과 사실상의 표준인 Oracle사가 제안한 조인 형식이 사용

```sql
SELECT 컬럼1, 컬럼2, ..., 컬럼m
  FROM 테이블1 INNER JOIN 테이블2
  ON 조인조건1
  [WHERE 조건]
```

### NATURAL JOIN

- 두개 이상의 테이블을 하나의 테이블로 결합하는 내부 조인과 매우 유사
- 두 테이블에 `동일한 이름의 컬럼`에 대해 값이 같은 레코드를 결합하는 내부 조인

```sql
SELECT 컬럼1, 컬럼2, ..., 컬럼m
  FROM 테이블1 NATURAL JOIN 테이블2
  [WHERE 조건]
```

### OUTER JOIN

- INNER JOIN은 조인 조건에 일치하는 레코드만 결합하여 결과를 생성

  - 조인 결과에 정보의 손실이 발생

- OUTER JOIN은 조인조건에 맞지 않은 레코드도 질의 결과에 포함시키는 질의

- 외부 조인의 종류
  - LEFT OUTER JOIN
  - RIGHT OUTER JOIN
  - FULL OUTER JOIN

```sql
SELECT 별칭1.컬럼1, 별칭1.컬럼2, ... 별칭1.컬럼m,
       별칭2.컬럼1, 별칭2.컬럼2, ... 별칭2.컬럼n,
  FROM 테이블1 AS 별칭1
       LEFT | RIGHT [OUTER] JOIN
       테이블2 AS 별칭2
  ON 조건
  [WHERE 조건]
```

### SELF JOIN

- 한 테이블이 자기 자신과 조인되는 형태
  - 테이블 재귀적 사용에 필요함
- 동일한 이름의 테이블에 대한 조인이므로 반드시 테이블 이름에 대한 `별칭이 의무적으로 사용`

```sql
SELECT 별칭1.컬럼1, 별칭1.컬럼2, ... 별칭1.컬럼m,
       별칭2.컬럼1, 별칭2.컬럼2, ... 별칭2.컬럼n,
  FROM 테이블1 AS 별칭1
       INNER | OUTER JOIN 테이블2 AS 별칭2
  ON 조건
  [WHERE 조건]
```

## 뷰의 사용

### 뷰의 개념

- 데이터를 저장하고 있는 하나 이상의 테이블을 유도하여 생성하는 가상의 테이블
  - 데이터 독립성
    - 원본 테이블의 구조가 바뀌어도 뷰를 이용한 작업은 정의만 변경되어 응용 프로그램에 영향이 없음
  - 데이터 보안
    - 사용자에게 원본 테이블의 일부 컬럼에 대한 접근을 허용하여 보안 효과를 향상
  - 다양한 구조의 테이블 사용
    - 사용자의 요구사항에 맞는 테이블의 구조를 제공
  - 작업의 단순화
    - 복잡한 질의문을 뷰로 단순화
  - 데이터 무결성
    - WITH CHECK OPTION을 이용하여 뷰 생성에 위배되는 수정작업을 거부

### 뷰의 생성

- 생성되는 뷰의 구조는 SELECT 문의 결과로 결정

```sql
CREATE VIEW 뷰이름 AS
  ( SELECT 컬럼1, 컬럼2, ..., 컬럼m
      FROM 테이블
      [WHERE 조건] )
[WITH CHECK OPTION]
```

### 뷰의 수정 및 삭제

- 뷰의 수정은 생성과 동일하게 새로운 SELECT 문의 결과로 변경

```sql
ALTER VIEW 뷰이름 AS
  ( SELECT 컬럼1, 컬럼2, ..., 컬럼m
      FROM 테이블
      [WHERE 조건] )
```

```sql
DROP VIEW 뷰이름
```

### 뷰를 이용한 데이터 검색

- 뷰는 가상의 테이블이므로 데이터 조작은 테이블 조작과 동일하게 수행

### 뷰를 이용한 데이터 삽입

- 뷰에 대한 INSERT문은 원본 테이블에서 실행
  - PK, NOT NULL등의 제약사항에 위배되는 경우 삽입 불가
  - 원본 테이블에 존재하는 컬럼이지만 뷰에 없는 컬럼에 삽입하는 경우 실행 불가
  - 조인 질의 또는 그룹 질의가 적용된 뷰는 데이터 삽입 및 수정이 불가
  - WITH CHECK OPTION이 적용된 뷰는 위배되는 사항은 없지만 뷰에 맞지 않는 조건일 경우 실행 불가능
