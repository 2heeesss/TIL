# transition

## `transition`(전환) 개요

transition: A상태에서 B상태로 전환되는 모습을 보여주는것 (A의 CSS가 B의 CSS로 바뀐다)

transition을 통해 다이나믹한 효과를 줄 수 있다

전환되는데 시간이 필요하다

사용 하는 프로퍼티

- `transition-delay: 0s`
- `transition-duration: 0s`
- `transition-property: all`
- `transition-timing-function: ease`

transition과 transform을 합치면 효과를 더 줄 수 있다

## `transition-property`, `transition-duration`

CSS가 바뀐다는것은 특정 프로퍼티를 바꾼다는것

한번에 바꾸는것이 아니라 시간에 따라 변경되기때문에 **어떤요소**를 **얼만큼의 시간**을 정해주는것이 `transition-property`, `transition-duration`이다

### `transition-property`

어떤 요소를 변경할것인지 정해주는 프로퍼티

사용 가능 값

- all (모든 프로퍼티)
- none
- margin-right(1개의 프로퍼티)
- margin-right, color(n개의 프로퍼티)

### `transition-duration`

얼만큼의 시간동안 변경할것인지 정해주는 프로퍼티

사용 가능 값

- <time>
    - 2s (2초)
    - 100ms (500미리초) 1000ms ===1s

### 사용 예시

마우스를 올렸을 때 스타일을 변경해보자

```css
.box:hover{
	backgroun-color: red;
	color: black;
	font-size: 60px;
}
```

- 위와같이 지정하면 box 클래스에 마우스를 올리는 순간 한번에 다 바뀐다

```css
.box {
	background-color: black;
	color: red;
	font-size: 30px;

	transition-property: all;
	transition-duration: 2s;
}
.box:hover{
	backgroun-color: red;
	color: black;
	font-size: 60px;
}
```

- box 클래스에 마우스를 올린다면
- 모든 프로퍼티가, 2초에 걸쳐 변하게 된다

```css
.box {
	background-color: black;
	color: red;
	font-size: 30px;
}

.box:hover{
	backgroun-color: red;
	color: black;
	font-size: 60px;

	transition-property: all;
	transition-duration: 2s;
}
```

- .box: hover 셀렉터에 transition을 적용하게된다면
- 마우스를 올릴때만 모든 프로퍼티가, 2초에 걸쳐 변하고
- 마우스를 내릴때는 적용이 되지않고, 한번에 변한다.
- **마우스를 올리고 내릴때 둘 다 transition을 적용하고 싶다면 box클래스에 작성해야한다**

## `transition-delay`, `transition-timing-function`

### `transition-delay`

변경사항을 n 초 또는 n미리초 만큼 지연시키는것

사용 가능 값

- <time>

요소가 여러개 있을때 차례대로 변경하도록 설정 가능

```css
.box {
	background-color: black;
	color: red;
	font-size: 30px;

	transition-property: all;
	transition-duration: 2s;
	transition-delay: 10s;
}
.box:hover{
	backgroun-color: red;
	color: black;
	font-size: 60px;
}
```

- 10초 뒤에 transition이 일어나게 된다

### `transition-timing-function`

transition이 일어나는 시간동안 중간 과정을 지정하는 프로퍼티

사용 가능 값

- 키워드
    - ease(기본 값): 빠르게 가다가 느려짐
    - ease-in: 중간지점 빠르다가 느려짐
        - `transition-timing-function: ease-in;`
    - ease-out: 느리게 가다가 빨라짐
    - linear: 속도 일정
    - 함수사용

## `transition (shorthand)`

transition은 단축으로 사용하는게 더 좋다

**시간을 사용하기 때문에 순서가 중요하다**(duration, timing-function 시간 프로퍼티의 순서가 중요)

- transition: property, duration, delay, timing-function

`transition: all 3s ease-in-out 1s;`

## transition + transform 활용 예

transform: 요소의 크기, 회전 등  

transition: 요소를 바뀌는 시간동안 행동을 지정

```css
.box {
	width: 100px;
	height: 100px;
	border: 10px solid red;

	transition: all 3s ease-in-out;
}

.box:hover {
	transform: rotate(360deg) translate(30px, 30px);
}
```

- transform: 360도 회전, 위치이동 30px, 30px 만큼
- transition: 모든 프로퍼티, 3초동안, ease-in-out 형태로 transition