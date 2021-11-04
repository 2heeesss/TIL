# git 사용법 정리

## fork 방법

1. 기여하려는 저장소 fork
    - 협업하고자 하는 github 레포지토리 Fork 클릭
2. 내 로컬 저장소에 Clone
    - github 레포지토리 주소 복사
        ```bash
            cd 레포지토리 저장할 로컬 디렉토리
            git clone https://주소
        ```
3. 원격 저장소 Remote 설정
    - PR 보낼 곳을 추가하기
    - 원격 저장소의 git 주소는 **fork 하기 전 원래 저장소**
        ```bash
            git remote add upstream https://fork전_원래_저장소
        ```
4. PR용 branch 생성하기
    - 코드를 수정하고 PR을 보낼 용도로 사용할 새 branch 설정
        ```bash
            git checkout -b 내branch이름
        ```
5. 코드 수정하기
    - 수정하거나 추가할 부분 작성 후 저장
        ```bash
            git add .
            git commit -m "커밋 메세지"
        ```
6. PR용 branch에 push
    - pr용 branch에 Push
        ```bash
            git push origin 내branch이름
        ```
7. fork한 기존 레포지토리 확인
    - pr란에 `compare & pull request` 누르기
8. PR 승인이 되었다면 branch 삭제하기
    - merge 되었다면 삭제해도 됨
        ```bash
            git branch -D 내branch이름 #local 삭제
            git push origin :내branch이름 #remote 삭제
        ```
