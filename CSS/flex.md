# `flexbox`

## `flexbox` 개요

CSS3에 추가된 내용

가로 또는 세로로 정렬하는 방법을 편하게 해주는 속성

정렬하고 싶은 요소의 부모요소에 `display: flex;`

유연하게 동작하는 박스가 flexbox이다.

즉, 여러개의 요소들을 가로 또는 세로로 정렬하는 속성

## 용어 - `flex container,` `flex item`, `main axis`, `cross axis`

flexbox는 부모-자식간의 관계가 있어야 정렬가능하다. 1차원 정렬에 대한 이야기

- flex container: 아이템을 담고있는 부모요소
- flex item: 정렬하고자 하는 요소들
- main axis: 메인이 되는 축(기본은 x축). 축 방향 변경 가능
- cross axis: 교차축

## `Container - display`

display 지금까지는 block, inline, inline-block을 다뤘었다.

이들은 형제요소들간 관계를 정의하는 값이였다. flexbox는 자식요소들의 정렬을 정하는 값.

display 프로퍼티가 사용가능한 값

- <display-outside>
    - block, inline, inline-block
- <display-inside>
    - flexbox, grid

두개의 값을 같이 쓸 수 있다.

`display: inline-flex;`

컨테이너에 프로퍼티를 정의해야함

## `Container - flex-direction`

flex가 container, item 각각 어디에 쓸 수 있는 속성인지 알아야함

flex-direction: 플렉스 컨테이너 내의 아이템을 배치할 때 사용할 주축 및 방향을 지정할 수 있다.

1. 주축의 위치(수평, 수직)
2. 주축의 방향(정방향, 역방향)

**컨테이너에 사용하는 속성**

사용 가능한 값

- row
- row-reverse
- column
- column-reverse

## `Container - flex-wrap, flex-flow(shorthand)`

컨테이너에 사용하는 속성

### `flex-wrap`

강제로 한줄에 배치할것인지, 여러줄에 나눌것인지 정하는 속성

자신의 width, height를 지킬 수 있다.

사용 가능 값

- nowrap (기본값): 무조건 한줄에 배치
- wrap: flex-item 요소들이 내부 로직에 의해 분할되어 여러 행에 걸쳐서 배치.
- wrap-reverse

```css
.parent {
    background-color: lawngreen;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.box {
    height: 300px;
    width: 300px;
    border: black solid 30px;
    border-radius: 30px;
    font-size: 200px;
}
```

### `flex-flow`

- flex-direction, flex-wrap의 단축속성
- 두 속성을 스페이싱으로 구분해서 사용하면된다.
- `flex-flow: column wrap;`

## `Item - order`

플렉스는 그리드컨테이너 안에서 현재 요소의 배치순서를 지정한다.

단일 아이템에서 사용하는 속성

작은 값이 앞으로, 같은 숫자면 코드의 순서를 따라간다

단순히 눈에 보이는 순서만 바꾼다.

개발자도구로 확인한다면 html의 순서는 바뀌지 않는다.

사용 가능 값

- 기본값: 0;
- <integer>

## `Item - flex-grow`

요소가 차지할 수 공간에서 얼마나 차지할지 정하는 속성

사용할 수 있는 공간이 남았다면 그 공간을 더 차지하게 된다.

사용 가능 값

- <number>
- 음수는 지정불가

형제요소들이 flex-grow 같은 값을 갖는다면 같은 비율로 늘거나 줄어들게 된다.

값이 다를경우 그 비율에 맞춰 각각의 요소가 가져가게된다.

`flex-grow: 1;`

**flex-grow가 가능한 조건: 자식 요소의 크기가 부모요소보다 작을때**

## `Item - flex-shrink`

사용할 수 있는 공간이 없다면 자식요소가 줄어들게 된다.

**flex-shrink가 가능한 조건: 자식 요소의 크기가 부모요소보다 작을때**

사용 가능 값

- <number>
- 음수는 지정불가
- 기본값: 1

형제요소들의 flex-shrink의 값이 다르다면 그 비율에 맞춰 각각의 요소가 줄어들게 된다.

## `Item - flex-basis`

flex-basis: 플렉스 아이템의 초기 크기를 지정

flex-grow, flex-shrink 프로퍼티로 요소의 크기를 줄이거나 늘릴때, 생각하는대로 늘어나거나 줄어들지 않는다.

- 원래 요소의 사이즈가 있기 때문
- 늘어난 영역의 비율을 제어하기 때문 (기본 넓이 제외)

사용 가능 값

- <width> 기본값: auto
- content

flex-basis: 0; 으로 지정할 경우 grow했을때 정확한 비율로 늘어나게 된다.

## `Item - flex(shorthand)`

flex-grow, flex-shrink, flex-basis를 한번에 지정할 수 있는 단축속성

순서를 맞춰서 작성해야한다. 하나 또는 두개를 작성해도 괜찮다

- 작성하지않은 값들은 초기값을 따라간다
- 하지만 **flex-basis는 기본값이 0으로 동작한다.**

첫번째 값은 grow

- 두번째 값이 number === shrink
- 두번째 값이 length === basis

3가지 다 쓸 경우 grow, shrink, basis 순서

추가 사용가능 값

- flex: initial
    - flex: 0 1 auto
- flex: auto
    - flex: 1 1 auto
- flex: none
    - flex: 0 0 auto

## `Container - justify-content`

주축을 기준으로 아이템을 어떻게 정렬할지 정하는 속성

많이 사용하는 값

- justify-content: flex-start: 주축 시작하는곳부터
- justify-content: flex-end: 주축 끝나는위치에 정렬 (flex-direction속성에 따라 달라진다)
- justify-content: center: 주축 기준으로 가운데 자리잡는다
- justify-content: space-between: 요소 사이의 간격이 동일하게 늘어난다. 간격만 늘고 줄고한다.(시작과 끝부분은 딱 붙어서 자리를 유지함)
- justify-content: space-around: 각각 요소 앞뒤로 동일한 여백을 추가하게 된다. (시작과 끝 부분에도 여백 추가)

## `Container - align-items`

전체컨테이너 중에서 요소를 정렬하는 그 공간의 위치를 어디에 둘지 정하는 프로퍼티

많이 사용하는 값

- align-items: stretch : 교차축의 시작과 끝까지 전체 다 차지하게 되는 속성
- align-items: flex-start: 정렬공간을 시작부분으로 옮김
- align-items: flex-end: 정렬공간을 끝부분으로 옮김
- align-items: center: 정렬공간을 가운데로 옮김

**정렬하고자 하는 요소가 한줄일때**

## `Container - align-content`

**정렬하고자 하는 요소가 여러줄일때**

- align-content: flex-start: 교차축의 시작점
- align-content: flex-end
- align-content: center: 교차축의 가운데
- align-content: space-between;
- align-content: space-around;

## `Item - align-self`

아이템에 사용가능한 속성

한 요소의 align-items를 설정하는 프로퍼티