import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 19-(2-3) './'없이 넣은 경로이름 : 설치했던 react library... 불러옴(import)
// 19-(2-4)  <BrowserRouter> vs <HashRouter> 
//  HashRouter를 복붙하시면 사이트 방문시 URL 맨 뒤에 /#/이 붙은채로 시작합니다.
//  BrowserRouter를 복붙하시면 사이트 방문시 # 그런거 없이 깔끔해집니다.

//  Q. URL이 #기호로 드러워지는 HashRouter를 왜쓰죠?
//  A. 원래는 브라우저 주소창에 뭔가 페이지를 입력하면 서버에게 특정 페이지좀 보여달라는 요청이 됩니다. 
//  근데 우리는 요청할 서버가 없고 그냥 리액트가 라우팅을 담당하고 있습니다. 
//  그래서 잘못하면 있지도 않은 페에지를 서버에 요청을 해서 404 Page Not Found 이런 에러도 뜨고 그럴 수 있습니다. 
//  실수로 서버에게 요청하지 않게 하려면 안전하게 #을 붙여주어야합니다. 
//  왜냐면 브라우저 주소창에서 # 뒤에 붙은 것들은 절대 서버로 요청되지 않으니까요.


import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  
  // 19-(2-2) 이 파일은 App.js에 있는 <App> 컴포넌트를 index.html에 꽂아주세요~ 뭐 이런 작업을 시키는 파일이라고 보시면 됩니다.
  // 19-(2-4)
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>      
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
