

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




import Axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
// (2)
import { Form ,Nav} from 'react-bootstrap';
import { useHistory ,useParams } from 'react-router-dom';
import styled from 'styled-components'




import {재고context2} from './App.js';

function Detail31_file(props){   

  let 재고c = useContext(재고context2);

  // (3)-1
  let [clicked탭,clicked탭변경] =useState(0);

  return(  
  <div className="container">    

    <Info 재고state={props.재고state}/>

    <button className='btn btn-danger' onClick={ () => { props.재고state변경([9,11,12]) }  }> 주문하기 </button>

    <p>재고context2 :{재고c}</p>
  
    // (2) (2)-2 (3)-2
    <Nav className="mt-5"  variant="tabs" defaultActiveKey="link">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{clicked탭변경(0)}} >Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{clicked탭변경(1)}}>Option 2</Nav.Link>
        </Nav.Item>
     </Nav>

    //  (4)
      <TabContent clicked탭p={clicked탭}/>

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

function Info(props){
return(
  <div>  

   <p> 재고 :  {props.재고state[0]}</p>     
  </div>
)
}

export default Detail31_file;