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


// 32c-(4)
// 그 다음 redux를 이용한 개발환경을 셋팅하시려면 index.js를 열어 다음과 같이 작성합니다.

// 1 <Provider>라는걸 import 해오신 다음에 
// import {Provider} from 'react-redux';

// 2 내가 state값 공유를 원하는 컴포넌트를 다 감싸시면 됩니다.
// 저는 <App> 컴포넌트를 감쌌습니다.
// 그럼 <App>컴포넌트와 그 안에있는 모든 HTML, 컴포넌트들은 전부 state를 직접! props 전송없이! 사용할 수 있습니다
// <에러...'getState'어쩌구> :  store 추가코딩 끝내면 사라짐

// 3 redux에서 state를 하나 만드시려면 createStore() 함수를 쓰셔야합니다. 
//  createStore(콜백함수) 이렇게 사용하시면 되며, (자동으로 import됨 (or 직접 import))
// 콜백함수엔 내가 원하는 state 초기값을 넣음

// 4 이제 <Provider>에 만든 state를 props처럼 등록하면 끝
// 이러면 하위컴포넌틀이 props전송없이 state를 사용가능합니다.
// {id : 0, name : ‘멋진신발’, quan : 2} 이렇게 생긴 장바구니용 데이터 state를 redux store 안에 만들었습니다.
// (그리고 redux 설치 후엔 state들을 store라는 명칭으로 부릅니다. 아까 변수명이 store이기도 하고요)


import {BrowserRouter} from 'react-router-dom'

// 32-(4-1)
import {Provider} from 'react-redux';

// 32c-(4-3)
import {createStore} from 'redux';

// 32c-(4-3)
let store = createStore(()=>{ return[{ id : 0, name : '멋진신발', quan : 2 }]   });

ReactDOM.render(
  
  // 19-(2-2) index.html 기본코딩 되어있는 것 : index.html에서 id'root'인 html에 App컴포넌트를 넣어달라는 뜻

  // 19-(2-4)
  <React.StrictMode>
    <BrowserRouter>
    // 32c-(4)-2 . 32c-(4)-4
    <Provider store={store}>
    <App />
    </Provider>   
    </BrowserRouter>      
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
