// 🦄35
// 35-(3) 주문하기button에 추가 
// props.dispatch작명({type:'항목추가35', payload:{ id:2, name:'새로운상품', quan:1}});
// 👉 index.js로 dispatch( ) 데이터 전송함
 
// (4)
// (5) connnect()함수 . import, export, function추가

// (6) Cart 페이지 방문하면 추가한 데이터가 안보이는 이유
// 원래 여러분 지금 데이터 저장하고 수정하고 그러는건 사이트 새로 들어올 때마다 초기화가 됩니다.
// 근데 우린 Detail -> Cart 페이지로 이동했을 뿐인데 state가 초기화가 되는 이유는
// 그냥 원래 개발단계에서 미리보기 띄우실 때 페이지를 이동하면 페이지를 껐다 켠 것 처럼 초기화 됩니다.
// 사이트 나중에 발행해보시면 아마 제대로 동작할겁니다.

// 그게 싫으면 주문하기 버튼을 눌렀을 때 
// history.push() 등의 라우터 함수를 이용해서 페이지 이동을 강제로 시켜보십시오.
// 저렇게 라우터 함수를 이용해서 페이지 이동을 시키면 개발환경에서도 초기화가 되지 않습니다. 

import Axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';

import { Form ,Nav} from 'react-bootstrap';
// (6)
import { useHistory ,useParams } from 'react-router-dom';
import styled from 'styled-components'

import {CSSTransition} from 'react-transition-group';
import './Detail31.scss'
import {재고context2} from './App.js';
// (5)
import { connect } from 'react-redux';

//⚡function
function Detail35_file(props){   

  let 재고c = useContext(재고context2);
  let [clicked탭,clicked탭변경] =useState(0);  
  let [clicked탭2,clicked탭변경2] =useState(0);
  let [스위치,스위치변경] = useState(false);
   // (6)
  let history = useHistory();

  return(  
  <div>    
    <button  onClick={ () => {       
      props.재고state변경([9,11,12]);
      // 35-(3)
      props.dispatch({type:'항목추가35', payload작명:{ id:2, name:'새로운상품', quan:1}});
      // (6)
      history.push('/cart');
     }  }> 항목추가35 </button>
  </div>   
  )
}

// (5)
function index의store의state를props로바꿔주는함수(state){
  return{
    // 
    props작명 : state.reducer,     
    props작명2 : state.reducer2,     
    props작명35 : state.reducer35     
  }
}

// (5)
export default connect(index의store의state를props로바꿔주는함수)(Detail35_file)

// export default Detail35_file;