

// 31
// 탭을 만들어봅시다
// Detail.js에다가 HTML부터 짜보도록 합시다. 
// 탭은 별거 아니고 그냥 버튼3개, div 3개가 있는 UI입니다.
// 그리고 버튼을 누르면 각각 거기 맞는 div를 보여줄 뿐입니다. 

// 이것도 역시 UI 만드는 법을 떠올리시면 쉽습니다.
// 1. 몇번째 버튼 눌렀는지를 state로 저장해둠
// 2. state에 따라 div를 보이게/안보이게 해주시면 됩니다. 
// 이번엔 state에 true/false 같은 데이터를 저장하는게 아니라 숫자를 저장할겁니다.
// 버튼이 3개니까 몇번째 버튼을 눌렀는지 0,1,2 같은 숫자데이터를 저장해야 할 것 같으니까요.

// (2)
// React-bootstrap 사이트 들어가셔서 Tabs 라고 검색한 뒤에,
//  버튼들을 복붙해서 진짜 버튼같은 UI를 만들어봅시다. 
// (상단에 import 해오셔야합니다 react-bootstrap으로부터요)

// (2)-2 캡쳐확인
// 추가: className="mt-5" , eventKey="link-0" , defaultActiveKey="link"
// 삭제:  href="/home"

// (3)-1
// 일단 UI의 상태를 저장할 state부터 만들어줍시다.
// 그리고 버튼을 누르면 각각 state가 0,1,2로 변하도록 만들면 되겠네요. 
// ( Detail 컴포넌트 안에서만 쓸 것 같으니 여기다가 state 만들어놨습니다. )
// default value : 0

// (3)-2
// 그 다음에 버튼에다가 onClick을 입력해서 버튼을 클릭하면,
//  state가 각각 0, 1, 2로 변하게 만들어주면 되겠습니다. 
// 그 다음은 state의 현재상태에 따라 UI를 보여주면 됩니다
// state가 0이면 0번 div를 보여줌
// state가 1이면 1번 div를 보여줌

// (4)
// 탭클릭때 보여줄 div를 Component로 만듬
// props전송

// (4)-2
// if/else문 : if( ){ return <div><div> } 형식
// clicked탭 state를 써야하는데 그건 부모 컴포넌트에 있죠? props로 전송하면 쓸 수 있겠군요. 

// (5) css 애니메이션 넣기
// 애니메이션을 어떻게 넣냐면, HTML CSS 짤 때랑 똑같습니다.
// 애니메이션 주는 class를 CSS를 열심히 짜서 제작해놓고, 컴포넌트 등장/업데이트시 class를 부착하시면 됩니다. 
// (css 만들고, Component에 class로 넣음)

// (5)-2
// 라이브러리 설치 후 사용도 좋은 방법입니다. 
// react-transition-group 이라는 라이브러리를 설치하시면 간단한 애니메이션 부여하기 쉽습니다.

// 터미널 
// yarn add react-transition-group
// npm install react-transition-group

// 설치가 끝났다면 
//  import {CSSTransition} from 'react-transition-group';

// (5)-3 import './Detail31.scss'

// (6) 2번째 탭 만듬...: clicked탭2 state, tab html, tabContent2 Component, props ...

// (6-2)
// step1. <CSSTransition>으로 애니메이션 적용할 HTML들 감싸면 됩니다.
// step2. 그리고 거기에 in, classNames, timeout 속성 넣으십시오.
// in은 스위치입니다. true일 때 애니메이션 동작
// classNames는 어떤 애니메이션을 적용할지 작명
// timeout은 작동시간

// (6-3)
// step3. 그럼 Detail.js에 딸려있는 CSS 파일로 가셔서 애니메이션을 하나 디자인해주시면 됩니다.
// 👉👉Detail31.scss

// (6-4)
// step4. 평소엔 in={true} 이걸 false로 해놨다가 원할 때 true로 바꿔주시면 됩니다. 
// 그래서 일단 바꾸기 쉽게 하기 위해 true라고 하드코딩하지말고 state로 만들어놨습니다. 
// state만들고 true/false자리에 집어넣어봤습니다.
// 그 다음에 언제 false, 언제 true가 될지 알아서 정의해주시면 됩니다.
// (false에서 true로 변할 때 애니메이션이 동작합니다.)

// 탭의 버튼을 누르면 스위치가 false로 바뀌게 했습니다.

// (6-5)
// 컴포넌트가 로드될 때 스위치가 true로 바뀌게 했습니다. (useEffect 이용)

// (6-6) props추가 :  스위치변경p={스위치변경}

// (6-7) 스위치변경(false); (버튼누르면 스위치 꺼짐(false)) 👉 다시 켜지면서 애니메이션 

// (7) react-transition-group 라이브러리 : 홈페이지 참고

import Axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
// (2)
import { Form ,Nav} from 'react-bootstrap';
import { useHistory ,useParams } from 'react-router-dom';
import styled from 'styled-components'

//(5)-2
import {CSSTransition} from 'react-transition-group';
// (5)-3
import './Detail31.scss'


import {재고context2} from './App.js';

function Detail31_file(props){   

  let 재고c = useContext(재고context2);

  // (3)-1
  let [clicked탭,clicked탭변경] =useState(0);
  
  // (6)
  let [clicked탭2,clicked탭변경2] =useState(0);

  // (6-4)
  let [스위치,스위치변경] = useState(false);

  return(  
  <div className="container">    

    <Info 재고state={props.재고state}/>

    <button className='btn btn-danger' onClick={ () => { props.재고state변경([9,11,12]) }  }> 주문하기 </button>

    <p>재고context2 :{재고c}</p>
  
    // (2) (2)-2 (3)-2
    <Nav className="mt-5"  variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{clicked탭변경(0)}} >Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{clicked탭변경(1)}}>Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{clicked탭변경(2)}}>Option 3</Nav.Link>
        </Nav.Item>
     </Nav>

    //  (4)
      <TabContent clicked탭p={clicked탭}/>
      
      // (6) (6-7)
      <Nav className="mt-5"  variant="tabs" defaultActiveKey="link-0">
      <Nav.Item>
        <Nav.Link eventKey="link-0" onClick={()=>{스위치변경(false); clicked탭변경2(0)}} >Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false); clicked탭변경2(1)}}>Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false); clicked탭변경2(2)}}>Option 3</Nav.Link>
      </Nav.Item>
   </Nav>

  //  (6-2)  (6-4)   (6-6)
  <CSSTransition in={스위치} classNames="wow"  timeout={500}>
    <TabContent2 clicked탭p2={clicked탭2} 스위치변경p={스위치변경}/>
   </CSSTransition>

  </div>   

  )

  
}

// (4) 
function TabContent(props){
  // (4-2)
  if (props.clicked탭p === 0){
    return <div>내용0</div>
  } else if (props.clicked탭p === 1){
    return <div>내용1</div>
  } else if (props.clicked탭p === 2){
    return <div>내용2</div>
  }
}

// (6)
function TabContent2(props){
// (6-5) (6-6)
  useEffect(()=>{
    props.스위치변경p(true);
  });

  if (props.clicked탭p2 === 0){
    return <div>내용0</div>
  } else if (props.clicked탭p2 === 1){
    return <div>내용1</div>
  } else if (props.clicked탭p2 === 2){
    return <div>내용2</div>
  }
}





function Info(props){
return(
  <div>  

   <p> 재고 :  {props.재고state[0]}</p>     
  </div>
)
}

export default Detail31_file;