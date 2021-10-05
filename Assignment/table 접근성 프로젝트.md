## 1. 접근성이 좋지 않은 테이블이 있는 웹페이지를 선정

- [고속버스 여행권 이용 안내](https://www.kobus.co.kr/adtnprdnew/frps/frpsPrchGd.do)

![1](https://user-images.githubusercontent.com/65802921/136032092-8862d3e3-ed52-4c96-a7ec-bb97f5b0dc32.jpg)

```html
<table>
    <caption>구매안내</caption>
    <colgroup>
        <col style="width: 22%;">
        <col style="width: 27%;">
        <col style="width: 18%;">
        <col style="width: auto;">
    </colgroup>
    <thead>
        <tr>
            <th scope="col">구분</th>
            <th scope="col">내용</th>
            <th scope="col">구분</th>
            <th scope="col">내용</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">발행처</th>
            <td colspan="3">KOBUS</td>
        </tr>
        <tr>
            <th scope="row">이용권종</th>
            <td>일반권</td>
            <th scope="row">구매 매체</th>
            <td>홈페이지 / 모바일 <span class="td_desc">(*신용카드로만 구매 가능)</span></td>
        </tr>
        <tr>
            <th scope="row">버스이용등급</th>
            <td><span class="accent2">우등, 일반고속(프리미엄 제외)</span></td> <!-- 190319 수정 - 문구 수정 & 강조 -->
            <th scope="row">상품 종류</th>
            <td>
                <!-- 190319 수정 -->
                <ul class="desc_list">
                    <li>4일권 (금~일 제외) &nbsp;&nbsp;<span class="txt_black2">75,000원</span></li>
                    <li>3일권 (금~일 포함) &nbsp;&nbsp;<span class="txt_black2">80,000원 ( 신규시행 )</span></li>
                    <li>5일권 (금~일 포함) &nbsp;&nbsp;<span class="txt_black2">100,000원</span></li>
                    <li>7일권 (금~일 포함) &nbsp;&nbsp;<span class="txt_black2">120,000원</span></li>
                </ul>
                <!-- //190319 수정 -->
            </td>
        </tr>
    </tbody>
</table>
```

## 2. 웹표준 준수 및 웹접근성 관점에서 기존 서비스의 문제점 분석

- 빈약한 테이블 요약 정보 제공
- 테이블 요약 정보 스크린 리더로 읽지 못함
- 강조 하고자 하는 요소 css로만 강조
- 구분 / 내용 을 보기 힘들게 만들어놓음
- 보조언어 설정 안함

## 3. 해상 이슈를 WCAG 가이드라인에 맞춰 수정 계획 선정

- 요약정보 보충하기
    - 스크린 리더 이용 고객의 컨텐츠 이해를 도울 수 있도록 작성된 설명을 추가하기
- caption  숨기기
    - 웹 접근성에 맞춰 caption 숨기기
- 강조 요소 strong 태그 사용하기
    - 스크린 리더로 요소를 들을 때 해당 요소가 강조하는 요소인지 알 수 있도록 작성하기
- 가독성 증가시키기
    - view port의 사이즈를 줄였을때에도 표의 구분과 내용을 잘 확인 할 수 있도록 열을 2개로 작성하기
- 보조언어 설정
    - 스크린 리더로 요소를 들을 때 해당 요소가 영어라면 잘 들을 수 있도록 작성하기

## 4. 웹접근성 관련 체크리스트 작성

- [ ]  레이아웃으로 table을 사용하지 않았는가
- [ ]  테이블 헤더와 scope를 사용하였는가
- [ ]  테이블 caption을 사용하였는가
- [ ]  caption 숨기는 방법은 올바르게 작성하였는가
- [ ]  복잡한 테이블은 피하였는가
- [ ]  레이아웃만을 위해 빈 셀을 만들지 않았는가

- [ ]  시맨틱하게 html을 작성하였는가
- [ ]  보조기기만으로 콘텐츠를 확인할 수 있는가
- [ ]  언어에 알맞은 속성을 부여했는가
- [ ]  강조 요소는 알맞게 강조를 하였는가

## 5. HTML/CSS를 활용하여 구현(자바스크립트는 선택사항)

### 전체 코드 확인하기(링크 넣기)

### 가독성 증가시키기

- 수정 전
    ![2](https://user-images.githubusercontent.com/65802921/136032232-61ffe27a-6fbf-47c0-9cf4-6c4040a0a75f.jpg)
    
- 수정 후
    ![3](https://user-images.githubusercontent.com/65802921/136032264-c96f0dce-3cef-4877-b17b-8a1435717652.jpg)
    
- 수정 내용
    - 필요한 열만 사용하여 4개의 열에서 2개의 열로 줄여 가독성 증가시킴
    - 사용자의 view port가 줄어들었을때, 수정 전의 경우 텍스트가 줄바꿈되어 가독성이 안좋게 되어있다.
    - 수정 후의 경우 view port가 줄어들어도 원래 형태를 유지하기 때문에 가독성이 증가하였다.

### 요약정보 보충하기

- 수정 전
    
    ```html
    <caption>구매안내</caption>
    ```
    
- 수정 후
    
    ```html
    <caption class="hidden">고속버스 프리패스 구매안내 <br>
    		해당 상품 종류는 며칠인지에 따라 금액이 다르게 측정되어 있습니다.
    </caption>
    
    ```
    
- 수정 내용
    - 스크린 리더를 사용하는 고객도 테이블의 정확한 내용을 인지 할 수 있도록 좀 더 세밀한 내용 전달
    - 상품 금액 셀을 스크린 리더가 읽을때 고객이 하나의 가격만 듣고 스크린 리더를 끄지 않도록 하기 위함
    

### caption 숨기기

- 수정 전
    
    ```css
    caption {
                height: 0;
                width: 0;
                font-size: 0;
                line-height: 0;
                margin: 0;
                padding: 0;
                text-indent: -9999px;
                display: table-caption;
            }
    ```
    
- 수정 후
    
    ```css
    .hidden {
                position: absolute !important;
                width: 1px;
                height: 1px;
                overflow: hidden;
                clip: rect(1px 1px 1px 1px);
                clip: rect(1px, 1px, 1px, 1px);
            }
    ```
    
- 수정 내용
    - text-indent로 caption을 숨겼을 경우, 포커싱 되었을때 스크린 밖에 위치해 있기 때문에 정확한 위치를 표시 할 수 없어 혼란을 줄 수 있다.
    - 화면의 이동 없이 해당 위치에서 정보를 전달하기 위해 caption 숨기기 방법 변경

### 강조 요소 strong 태그 사용하기

- 수정 전
    
    ```html
    <td><span class="accent2">우등, 일반고속(프리미엄 제외)</span></td>
    ```
    
- 수정 후
    
    ```html
    <td><span class="accent2"><strong>우등, 일반고속(프리미엄 제외)</strong></span></td>
    ```
    
- 수정 내용
    - 해당 요소를 강조할때는 CSS로 색상만 입히는것이 아닌 주변기기를 사용하여 웹을 접근하는 모든사람이 해당 요소를 강조하고있다는것을 알아야한다.
    - CSS로 색상입히기, strong태그로 요소 강조하기

### 보조언어 설정

- 수정 전
    
    ```html
    <td>KOBUS</td>
    ```
    
- 수정 후
    
    ```html
    <td lang="en">KOBUS</td>
    ```
    
- 수정 내용
    - 스크린리더가 해당 내용을 읽을때 요소가 영어임을 인지하여 정보를 잘 전달할 수 있다.

## 6. 문법 검사 결과 제출

### html 문법검사

![4](https://user-images.githubusercontent.com/65802921/136032269-25eba5f8-d1c9-4f0b-89ad-0253e23a4e84.jpg)

## 7. 라이트하우스에서 접근성 및 SEO 관련 분석 리포트 제출

### 접근성

![5](https://user-images.githubusercontent.com/65802921/136032273-4458de4d-c031-4b62-8f48-896ecc6e3bf5.jpg)

1. 유저의 컨텐츠 확대 가능하게 하기
    - 문제점: 사용자의 웹 페이지 확대를 막아놓아 시력이 저하된 사용자가 웹 페이지를 보기 불편하다.
    - 해결방안: meta viewport태그의 요소의 속성을 변경하기 
    `maximum-scale = 5.0, user-scalable = "yes"`

### SEO

![6](https://user-images.githubusercontent.com/65802921/136032276-5ae15fbd-afb1-45f3-b20b-9f6a34c56364.jpg)

1. 문서의 설명이 meta 요소에 포함되도록 하기
    - 문제점: HTML 문서에 meta description이 없어서 페이지 요약내용이 검색에 노출되지 않는다.
    - 해결방안: meta description태그 추가하기
        
        ```html
        <meta name="description" content="고속버스 프리패스 여행권 이용안내 및 이용절차">
        ```
        
2. robots.txt 파일 작성하기
    - 문제점: 크롤러가 액세스 할 수있는 파일을 제어하지 않고있다.
    - 해결방안: `robots.txt` 파일 추가하기

## 8. 프로젝트 완료 후기(시행착오 및 성장기)

혼자 진행했던 프로젝트를 반성하게 되는 프로젝트였다. 지금까지 프로젝트를 수행하면서 단순히 기능적인 측면만 생각했었다. 모두 나와 비슷한 환경에서 웹 페이지를 볼것이라는 착각에서 비롯된 생각에 여러 사람들을 대응하지 못하였다. 

화면을 제대로 보지 못하는 사람, 오디오 요소를 듣지 못하는 사람 등 다양한 사람들이 있다. 하지만 그런 사람들을 위한 웹 페이지를 제대로 만든적은 없었다. 내가만든 웹페이지를 많은 사람들이 방문해주었으면 했지만, 정작 나는 다양한 사람들을 수용할 수 없었다. 웹 접근성을 제대로 적용하지 않았기 때문이다. 

웹 접근성과 웹 표준을 생각하며 이전 프로젝트를 하나씩 확인하는 계기가 되었다. 어떤점은 좋았고, 어떤점에서 고칠 게 있는지 보이기 시작했다. 이렇게 스스로 피드백을 할 수있는, 성장 가능한 환경에 놓여지게 되어 좋은 경험이라고 생각한다.

또한, 라이트하우스를 처음 사용하며 성능, 접근성, 웹 표준, SEO, PWA 부분에서 다양하게 피드백을 받을 수있는 경험이 좋았고, 막연히 추상적으로 생각하던 접근성을 정량적으로 평가받는 부분이 가장 인상깊었다.