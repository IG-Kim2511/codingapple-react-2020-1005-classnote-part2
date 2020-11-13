import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//🦄 19c-(2)-1
import {BrowserRouter} from 'react-router-dom'


//🦄 32c-(4)
// ⚡import {Provider, ReactReduxContext} from 'react-redux';

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


// 🦄33 -(4)
// reducer()함수 : 데이터 수정하는 법은 reducer로 만듬
// reducer : 수정된 state를 return하는 함수 

// 근데 reducer는 function안에
// 1. state 초기값과
// 2. state 데이터 수정방법이 들어있는 함수
// 그럼 장바구니 데이터를 조작할 수 있는 reducer를 한번 만들어봅시다. 

// (5)
// 1. 따로 state 변수를 만들고
// 2. 그걸 reducer에 default 파라미터 문법으로 집어넣습니다.  

// (5)-2  default parameter 문법
// reducer함수는 항상 state를 return해야만 함
// return할게 없으면 에러.
// 그래서 기본state를 파라미터에 지정해두고, 
// return할게 없으면(데이터 수정 안 했을때) 기본state를 return함

// (6)
// 이제 진짜 reducer 안에 기능개발을 좀 해보도록 합시다. 
// reducer는 데이터 수정방법을 정의하는 곳입니다.
// 그냥 이런 식으로 state 데이터 수정방법 쭉 나열하시면 됩니다. 
// 1. "수량증가"라는 데이터 수정방법 이름을 하나 작명해주었습니다. 
// (액션.type === 수량증가) 이런 식입니다.
// 2. if , 수정되면 수정된 state
// 3. else, 아니면 초기값state return
// (영어 : initialState,action ) 

// (6)-2
// "parameter 액션" 의미 : -------------👉 35강
// 일단 리덕스 사용법 정리부터 하자면 
// 1. reducer에 데이터 변경방법을 쭉 나열해놓습니다. 
// 2. 나중에 dispatch()로 reducer에 있던 데이터 변경방법을 동작시킵니다. 
 
// 근데 dispatch()를 사용할 땐 { type: 수량증가 } 이런걸 소괄호안에 넣을 수 있습니다.
// 소괄호안에 넣은 자료는 reducer() 의 그 둘째 파라미터로 도착한다고 보시면 됩니다. 
// (위에서 둘째 파라미터는 액션이라고 이름지어놨고요)
// 그래서 위의 코드는
// 1. { type: 수량증가 } 가 dispatch에 실려서 도착하면
// 2. state를 수량증가해서 return 해라 라는 뜻으로 reducer를 기능개발해놓은 것입니다. 


// (6)-3
// 진짜 데이터를 수정되게 만들어봅시다.
// ‘수량증가’ 요청이 들어오면 state데이터의 첫째 아이템의 quan 항목이 1 증가하게 해보겠습니다.
// 근데 array, object로 구성된 state 데이터를 수정하시려면 사본을 만드는게 좋다고 했죠
// 그래서 그렇게 수정하면 됩니다. 

//  if문 안에 데이터를 수정하는 3줄을 추가했습니다.
// 1. deep copy (state 데이터 카피본을 만들어서 )
// 2. copy한것을 수정. quan++ (quan 항목에 1을 더해주고 )
// 3. 수정된 copy return (그걸 return으로 퉤 뱉었습니다.  )
// (그냥 평소에 하던 state 수정방법입니다.)


// 🦄34 - (2) combineReducers()
// 그럼 redux에서 state를 하나 더 만들고 싶으면 ?
// 1. 다른 이름의 reducer + 초기값을 하나 더 만드시고 ,
// 2. 이걸 combineReducers()라는 함수안에 집어넣은 후에 ,
// 3. createStore()안에 넣으시면 됩니다.

// 34-(5)-2 
// if: true면 보여주고, else: false면 안보여줌
// 'alert닫기'가 작동되면, state는 false가 됨


// 🦄35-(1)Q: Detail 페이지에 장바구니 추가버튼 만들기
// 1. index.js : 데이터 수정하는 법을 미리 만들고
// 2. Detail.js : dispatch 하시면 됩니다. 
// 3. Detail.js : dispatch할 때 { id : 2, name : ‘어쩌구’ } 데이터를 함께 실어보내면 됩니다.

// 35-(2)'액션' parameter 의미
// dispatch안의 모든 데이터를 받아옴 : dispatch  (  { type:'수량증가', payload: { name:'kim'  }}

// 35-(3) 👉 detail35.js

// 35-(4) payload전송받은 데이터를 push로 state array에 추가함


// 🦄36
// 👉 Detail35.js

// (2) B: 2번 버튼눌러도, 1번 목록이  변함
// 👉 Cart36.js
// redux를 사용하고 있다면 여러분이 고쳐야할 곳은 … 90% 확률로 reducer 내부입니다.



//⚡coding 시작

//🦄 32-(4-1)
import {Provider, ReactReduxContext} from 'react-redux';

// 32c-(4-3) , 34
import {combineReducers, createStore} from 'redux';

// 32c-(4-3)
// let store = createStore(()=>{ return[{ id : 0, name : '멋진신발', quan : 2 }]   });


//🦄 33c-(4)
// function reducer(){
//   return [{id : 0, name : '멋진신발', quan : 2}, { id : 1, name : '멋진신발22', quan : 3 }]
// }
// let store = createStore(reducer);

// 33c-(5)
let 기본State = [ {id : 0, name : '멋진신발', quan : 2}, 
{ id : 1, name : '멋진신발22', quan : 3 } ];

// 33c-(5)-2 (6)-2 . 35c-(2)
function reducer( state = 기본State, 액션){  
// 33c-(6) (6)-3
 if(액션.type ==='수량증가'){
 let copy = [...state];
 copy[0].quan++;
 return copy 
 }
//  33c-(8)
else if (액션.type ==='수량감소'){
  let copy = [...state];
  copy[0].quan--;
  return copy 
 } 
 else{ 
  return state}
  }

//🦄 34-(2)-1
let initialState34 = true;

//34-(2)-1,  34-(5)-2
function reducer2(state = initialState34, action){
if(action.type === 'alert닫기'){
  state=false;
  return state;
}else{
  return state
} 
}

//🦄 35
let initialState35 =[ {id : 0, name : '멋진신발', quan : 2}, 
{ id : 1, name : '멋진신발22', quan : 3 } ];

// 35-(1)-1
function reducer35(state = initialState35, action){
if(action.type === '항목추가35'){
 let copy = [...state];
//  35-(4)
 copy.push(action.payload작명);
  return copy;
}else{
  return state
} 
}



// ⚡ store
// 32c
// let store = createStore(reducer);

// 34c-(2)-3
let store = createStore(combineReducers({reducer,reducer2,reducer35}));

// ⚡
ReactDOM.render(  
  //🦄 19-(2)-0
  <React.StrictMode>
  //🦄 19-(2)-2
    <BrowserRouter>
    //🦄 32c-(4)-2 . 32c-(4)-4
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


// 🦄40 
// serviceWorker.unregister();
serviceWorker.register();
