# grid

## Grid 개요

flex는 주축으로 아이템을 정렬하는것.

grid는 주축과 교차축으로 아이템을 정렬(2차원으로)

## Container - display

외부레이아웃과 내부레이아웃 한꺼번에 정의하기

`display: inline-grid;`

## Container - grid-template-rows, grid-template-columns

컨테이너에 사용할 수 있는 속성

### grid-template-rows

- 몇개의 그리드 row를 사용할것인지

### grid-template-columns

- 몇개의 그래드 columns를 사용할것인지
- 명시적으로 크기를 입력해줘야한다.
- `grid-template-columns: 80px 80px;`
- 1대 1대 1로 같은 비율을 주고싶다면
- `grid-template-columns: 1fr 1fr 1fr;`
    - 함수표기법
    - `grid-template-columns: repeat(3, 1fr);`

## Container - grid-template-areas

아이템들을 사각형으로 만들어야한다.

각각 아이템의 이름을 붙여주고 적용해야한다.

```css
.a {
    grid-area: a;
}

.b {
    grid-area: b;
}

.c {
    grid-area: c;
}

.d {
    grid-area: d;
}

.e {
    grid-area: e;
}
```

- `grid-area: header;`
- `grid-area: main;`

```css
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-template-areas:
    "a a ."
    "a a ."
    "b b b"
    "c d e";
```

## Container - row-gap, column-gap, gap

각각 행, 열간의 간격을 설정한다.

`row-gap: 20px;`

`column-gap: 20px;`

이 둘을 단축속성으로 gap프로퍼티를 사용할 수 있다

순서가 중요하다. 앞쪽이 row, 뒤쪽이 colum 으로 동작한다.

`gap: 20px, 20px;`

## Container - grid-auto-row, grid-auto-columns

요소가 넘쳐날때 그 요소의 크기를 정하는 프로퍼티

`grid-auto-rows: 100px` : 넘쳐나는 요소의 row를 100px로 고정

`grid-auto-colums: 100px` : 넘쳐나는 요소의 column을 100px로 고정

## Container - grid-auto-flow

아이템들이 어떻게 흘러갈건지 정하는 속성

사용가능 값

- row (기본값)
- column
- dense(추가로 붙이는 값)
    - 빈 영역에 다음 요소가 채워지게 된다.

## Container - grid (shorthand)

grid를 사용하는 단축속성

명시적인 속성

- grid-template-rows
- grid-template-columns

암시적인 속성

- grid-auto-columns
- grid-auto-rows
- grid-auto-flow

슬래쉬를 기준으로 앞쪽이 row, 뒤쪽이 column

`grid: auto-flow /  1fr 1fr 1fr`

row: 명시적, column: 명시적

- grid-template-rows, grd-template-columns

row: 명시적, column: 암시적

- grid-template-rows, gridgrid-auto-columns

row: 암시적, column: 명시적

- grid-auto-rows, grid-template-columns
