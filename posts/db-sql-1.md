---
title: 데이터베이스 - [SQL 1]
description: DDL 및 SQL 기본적 조작 방법
publishedDate: "2022-03-11 07:15:00"
tag: CS
---

# DB 언어

## SQL

### SQL의 구성

- 데이터 정의 언어 (DDL)

  - 데이터베이스 내 객체를 생성 및 삭제하고 그 구조를 조작하는 명령어 집합
  - 데이터가 준수해야하는 제약 조건 기술
  - CREATE, ALTER, DROP 등

- 데이터 조작 언어 (DML)
  - DDL에 의해 정의된 테이블에 데이터를 조작하는 명령어의 집합
  - 데이터에 대한 CRUD
  - INSERT, UPDATE, DELETE, SELECT 등

## DDL

### DDL의 개념

- 데이터베이스 객체 종류

  - 데이터 저장
    - 테이블, 인덱스, 뷰
  - 데이터 조작
    - 트리거, 프로시저, 함수

- 데이터 정의 명령어 종류
  - CREATE
  - DROP
  - ALTER

### 스키마 정의

- 스키마 = 데이터베이스
- 한 조직의 DB 시스템 운영에 필요한 테이블, 인덱스, 뷰 등의 데이터베이스 객체의 집합

### 스키마 관리 구문 형식

- 스키마 생성

```sql
CREATE SCHEMA 스키마이름
```

- 스키마 삭제

```sql
DROP  SCHEMA 스키마이름
```

### 테이블 생성의 예

![sql-1-1](/images/posts/db-sql-1/db-sql-1-1.png)

### 데이터 타입의 개념

- 컬럼이 가질 수 있는 값의 범위, 즉 도메인을 결정
- 프로그래밍 언어에서의 변수를 생성하는 데이터 타입의 사용목적과 방법이 매우 유사

### 정수 데이터 타입

- TINYINT

  - 1바이트 정수, -128 ~ 127

- SMALLINT

  - 1바이트 정수, -32768 ~ 32767

- INT

  - 4바이트 정수, 약 -20억 ~ 약 20억

- BIGINT
  - 8바이트 정수

### 실수 데이터 타입

- 고정 소수형

  - DECIAML(M, N)
    - 전체 M자리, 소수점 이하 N자리
  - NUMERIC
    - DECIMAL 과 동일

- 부동 소수형
  - FLOAT
    - 4바이트 크기 부동 소수
  - FLOAT(P)
    - 소수점 이하 P개 자리의 부동 소수
  - DOUBLE
    - 8바이트 크기 부동 소수형

### 날짜 및 시간 데이터 타입

- 날짜 데이터 타입

  - DATE
    - "YYYY-MM-DD"
  - YEAR
    - "YYYY"

- 시간 및 데이터 타입

  - TIME
    - "HH:MI:SS" 형식의 시간

- 날짜 및 시간 데이터 타입
  - DATETIME
    - "YYYY-MM-DD HH:MI:SS"
  - TIMESTAMP
    - DATETIME과 동일

### 문자 데이터 타입

- CHAR(N)

  - 최대길이가 N인 고정길이 문자열

- VARCHAR(N)
  - 최대길이가 N인 가변길이 문자열

* TEXT, CLOB

  - 길이가 최대 2~4GB인 가변길이 문자열

* ENUM
  - 유한개의 문자열 집합중 하나의 값을 나타냄

- "DATABASE" 문자열 저장 시,
  - CHAR(10)
    - ['D', 'A', 'T', 'A', 'B', 'A', 'S', 'E', ' ', ' ']
  - VARCHAR(10)
    - ['D', 'A', 'T', 'A', 'B', 'A', 'S', 'E']
    - VARCHAR -> 공간 낭비가 없지만, 길이가 달라질 경우 레코드 전체 인덱스 정렬에 trade-off가 생김

### 테이블 수정 구문

```sql
ALTER TABLE 테이블이름
  ADD COLUMN 컬럼 데이터타입
  DROP COLUMN 컬럼
  CHANGE COLUMN 수정전 컬럼 수정후 컬럼
  MODIFY COLUMN 컬럼 데이터타입
```

### 테이블 삭제

- 존재하는 테이블을 스키마에서 삭제
- 삭제할 테이블의 모든 데이터가 소실됨, 복구가 불가능한 연산이므로 주의

```sql
DROP TABLE 테이블이름
```

### 제약 조건의 종류

- PRIMARY KEY

  - 기본키 지정
  - UNIQUE, NOT NULL

- FOREIGN KEY

  - 외래키 지정
  - 참조 컬럼 정의

- NOT NULL

  - NULL 이 될 수 없는 칼럼

- UNIQUE

  - 동일한 컬럼값을 가질 수 없음

- AUTO_INCREMENT

  - 레코드가 추가될 때 자동으로 속성값이 1부터 1씩 증가되어 입력

- CHECK
  - 컬럼값이 특정 조건 준수 여부 지정
