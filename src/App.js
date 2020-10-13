import React from 'react';
import './App.css';


// 15 쇼핑몰 프로젝트 : 프로젝트 생성 & Bootstrap 설치
//(1)yarn
// yarn이 뭐하는 애냐면 npm이나 npx를 대체해서 이용할 수 있게 도와주는 친구입니다.
// npm보다 훨씬 빠른 라이브러리 설치속도와 안정성을 자랑합니다. 
// 일단 설치해놓으면 npx create-react-app 어쩌구 하실 때 자동으로 yarn이 구동되어 빨라집니다. 
// 누군가가 npm install 어쩌구 하라고 하면 그거 대신 yarn add 어쩌구 라고 사용하시면 더 빠르게 설치할 수 있으며
// npm run start 로 미리보기 띄울 때도 yarn start 이걸로 대체할 수 있습니다. 

// (2)
// react bootstrap이라고 구글 검색하면 맨 처음에 나오는 사이트로 들어갑시다. 
// 터미널 : npm install react-bootstrap bootstrap

// (3)
// 사이트에 있는 CSS 파일을 index.html 파일의 <head> 태그 안에 복붙해

// (4) bootstrap Component 복붙

function App15() {
  return (
   <div className="App">
    <div className="black-nav"> 15 쇼핑몰 프로젝트 : 프로젝트 생성 & Bootstrap 설치 </div>
    // (4)
    <button type="button" class="btn btn-primary">Primary</button>

   </div>
  );
}

function App(){
  return(
    <div>
       <App15/>      
    </div>
  )
}

export default App;
