Next.js, TypeScript, tailwindcss 를 사용하여 만든 포트폴리오 페이지
<br/>
<br/>

## Todo 페이지 에러
> Error: Text content does not match server-rendered HTML. <br/>
Warning: Text content did not match. Server: "0" Client: "1"

리코일을 이용하여 투두아이템을 관리하고 싶었다. recoil-persist를 이용하여 로컬스토리지에 아이템을 저장, 삭제하고자 했고 기능은 구현 되었으나 페이지를 새로고침할 경우 해당 에러가 발생했다. 이는 서버에서 렌더링된 HTML과 클라이언트에서 렌더링된 HTML의 텍스트 내용이 일치하지 않을 때 발생하는 에러로 일반적으로 서버에서 렌더링된 컨텐츠와 클라이언트에서 동적으로 변경된 컨텐츠가 일치하지 않을 때 발생한다고 한다. <br/>

로컬스토리지에 아이템을 저장하고 있는데 페이지를 새로고침할 경우 리랜더링이 일어나면서 서버측에서는 아이템이 하나도 없지만 클라이언트 측에는 여전히 내가 작성한 아이템이 있는 것이 문제였다.
<br/>

데이터 로딩 전에 로컬 스토리지에 저장한 데이터를 가져와서 프리렌더링 하면 되지 않을까? 라고 생각했지만 아래와 같은 에러가 발생했다.
> localStorage is not defined 

<br/>

서버 사이드 렌더링은 서버 환경에서 실행되기 때문에 브라우저 환경에서만 존재하는 window 객체에 접근할 수 없다.
로컬스토리지도 window 객체의 일부이기 때문에 서버사이드 렌더링 중에는 로컬 스토리지에 접근할 수 없었고 때문에 에러가 발생한 것. 

해결 
- todo 컴포넌트만 클라이언트 사이드 렌더링 처리하여 에러 해결.<br/>

        - useEffect 훅을 사용하여 초기 데이터를 가져오는 비동기 로직을 실행.
        - loading 상태를 사용하여 데이터 로딩 중임을 나타내고, 로딩이 완료되면 실제 컴포넌트를 렌더링.

<br/>
<br/>

## getStaticProps의 revalidate 속성 - Project 페이지
project 데이터가 추가될 경우 이를 반영하고 싶었다. <br/>
getStaticProps의 revalidate 속성을 사용할지 getServerSideProps를 사용할지 고민했다.

```js
return {
        props: {projects},
        revalidate: 1 
    }
```

getStaticProps는 빌드시에 실행되고 정적인 데이터를 미리 가져오는 반면 
getServerSideProps는 요청마다 실행되고 동적인 데이터를 가져온다.
때문에 실시간으로 데이터를 업데이트 해야할 경우에 적합하다.
프로젝트 데이터의 경우 정적인 데이터로 빌드시에 한번 가져오면 되기 때문에 getServerSideProps의 성능상 비용이 불필요하다고 느꼈고, revalidate 속성을 사용하여 정적 파일의 재생성 주기를 설정했다.