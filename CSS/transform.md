# transform

## transform 개요

자리는 그대로 하되, 원래 형태의 요소를 크게, 작게, 늘리기 등등 변형할 수 있다.

transform을 늘린다고 해서 width, height가 늘어나지 않는다

여러가지 함수를 한번에 적용할 수 있다.

사용 가능 값

- none
- <transform-function>
    - 변형을 오른쪽 값부터 왼쪽값까지 변경

## 크기 - scale

### scale()

- 2D로 크기를 변경
- 사용 가능 값
    - 숫자 (소수점 사용가능)
- 값을 하나 또는 두개 사용한다
- `transform: scale(0.5)`
    - 요소가 차지하는 공간은 그대로 유지하고, 가로 세로 사이즈를 50%로 줄인다.
- `transform: scale(1.5, 0.5)`
    - x축은 1.5배, y축은 0.5배로 크기 변경

### scaleX()

- x축으로만 크기 변형 하고싶을 때 사용
- `transform: scaleX(2)`

### scaleY()

- y축으로만 크기를 변형하고 싶을 때 사용
- `transform: scaleY(2)`

## 회전 - rotate

- 값을 하나만 사용
- 사용 가능 값
    - <angle> (각도)
        - 45도 === 45deg
        - 0.25turn === 1/4 바퀴

가운데 원점을 기준으로 회전한다.

값이 양수일 경우 시계방향으로 움직인다

값이 음수일 경우 반시계방향으로 움직인다

`transform: rotate(180deg)`

`transform: rotate(0.5turn)`

크기를 늘리고, 회전하고싶으면?

- `transform: rotate(0.5turn) scale(2);`

## 이동 - translate

좌상단 0,0을 기준으로 위치를 이동시킬 수 있다

값을 하나 또는 두가지 사용

- 두가지 사용시 (x축, y축)
- 한가지 사용시 (x축, 0)

사용 가능 값

- <length>
- 퍼센트

`transform: translate(100px, 150px);`

- x축으로 100px, y축으로 150px 이동

`transform: translate(100px);`

- x축으로 100px 이동

`transform: translate(50%, 30%);`

- x축으로 width의 50%, y축으로 height의 30% 이동

## 기울이기 - skew

값을 하나 또는 두가지 사용

- 한가지 사용시 (x축, 0)
- 두가지 사용시 (x축, y축)

사용 가능 값

- <angle>

`transform: skew(20deg);`

- x축 기준으로 20도 기울이기

90deg로 기울이게된다면 눈에 보이지 않게된다

## 기준점 - transform-origin

transform의 기준점을 변경하는 프로퍼티

프로퍼티의 값에 따라 결과물이 완전히 달라진다.

**transform과는 별도의 프로퍼티**

사용가능 값

- 50% 50% (기본 값)
- 키워드
- <length>

`transform-origin: top left`

- transform의 기준점을 좌 상단을 기준점으로 사용

`transform-origin: bottom right`

- transform의 기준점을 우 하단을 기준점으로 사용

`transform-origin: 50px 100px`

- 요소의 좌상단을 기준으로 x축으로 50px, y축으로 100px 지점을 기준점으로 사용