**지인의 요청으로 RPG게임의 컨텐츠 체크기와 진행률을 볼 수 있는 대시보드 웹 어플리케이션 제작**

- 토이프로젝트
    
    배포 경로
    
    - [http://maplecheck.s3-website.ap-northeast-2.amazonaws.com/](http://maplecheck.s3-website.ap-northeast-2.amazonaws.com/)
    
    <br>

    ## 🛠 기술 스택
    
    ### **📚 Frameworkes & Libraries**
    
    - react.js@^18.2.0
    - react-bootstrap@^2.5.0
    - react-router-dom@^6.3.0
    - node-sass@^7.0.1
    - redux@^4.2.0
    - chart.js@^3.9.1
    - chartjs@^0.3.24

    <br>

    ## 🧐 프로젝트 빌드 및 실행 방법

    1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

    ```
    $ git clone https://github.com/ahnhuiwon/Doing-now.git
    ```

    2. 패키지를 설치합니다.

    ```
    $ npm install
    ```

    3. 서버를 실행합니다.

    ```
    $ npm start
    ```
    
    <br>

    ## 🙆‍♀️ 구현
    
    ### 필수 구현 사항
    
    - [x]  localstorage를 통한 컨텐츠 CRUD 구현
    - [x]  Bootstrap을 통한 반응형 레이아웃 수정
    - [x]  대시보드를 통한 컨텐츠 진행률 구현
    - [x]  컨텐츠 결과를 체크 할 수 있는 섹션 추가
    
    ### 추가 구현 사항
    
    - [ ]  로딩컴포넌트 구현
    - [x]  대시보드에 차트 및 그래프 추가 (2022-09-05 배포)
    - [x]  사냥 컨텐츠의 경우 스크린샷 기능 추가 (2022-09-05 배포)
    - [x]  컨텐츠 사이즈 조정 (2022-09-14 배포)
    - [x]  주간 보스 컨텐츠 추가 (2022-09-16 배포)
    - [ ]  컨텐츠 드래그앤드롭 기능 추가
    
    <aside>
    ⚠️ 로딩 컴포넌트의 경우 사용자 요청으로 인해 구현 취소
    
    </aside>

    <br>

    ## 📈 디렉토리 구조

    ```
    .
    ├── README.md
    ├── config
    ├── package.json
    ├── public
    │   ├── index.html
    │   ├── favicon.ico
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    └── src
         ├── components    
         ├── customhooks
         ├── json
         ├── redux
         ├── route
         └── style
    ```

    - components
        - 컴포넌트 리스트 목록 디렉토리
    - customhooks
        - 데이터 처리 및 수정 로직 관리 디렉토리
    - json
        - 초기 데이터를 셋팅하는 json 관리 디렉토리
    - redux
        - redux 관리 디렉토리
    - route
        - route 관리 디렉토리
    - style
        - stylesheet 및 이미지 관리 디렉토리