

// 28강 (1-3)
// 이 state 데이터를 <Detail> 컴포넌트 내의 <Info> 컴포넌트에 보여주고싶습니다.
// 연습을 위해 <Info> 컴포넌트를 <Detail> 컴포넌트 안에 우선 하나 만들어보십시오.

// (1-4)
// 그럼 <App> -> <Detail> -> <Info> 이렇게 데이터를 전송해야합니다.
// 그냥 props 문법을 2번 써주시면 됩니다


// (2)
// Q. 주문하기 버튼을 클릭하면, 재고 state에서 1을 빼려면? (ex: 10 👉 9)
// 상위 요소가 가지고 있는 재고라는 state의 0번째 데이터에서 1을 빼고 싶은겁니다.

// 그럼 이 버튼을 눌렀을 때 재고[0] 데이터에서 1을 빼고 싶은데 어떻게하면 될까요?
// state를 다룰 땐 당연히 state 변경함수를 써야한댔죠?

// (2-2)
// 근데 state 변경함수도 상위 컴포넌트에 있기 때문에 이것도 props로 전송해서 쓰시면 됩니다.

// 버튼 클릭때 재고변경함수 동작함 [10,11,12]  👉 [9,11,12]



import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useHistory ,useParams } from 'react-router-dom';
import styled from 'styled-components'

// (1-3)
function Detail28_file(props){   

    return(  
    <div className="container">    
    // (1-4)  
      <Info 재고state={props.재고state}/>

      // (2) (2-2)
      <button className='btn btn-danger' onClick={ () => { props.재고state변경([9,11,12]) }  }> 주문하기 </button>

    </div>   
    )
  }

// (1-3)
function Info(props){
  return(
    <div>  
    // (1-4)
     <p> 재고 :  {props.재고state[0]}</p>     
    </div>
  )
}

export default Detail28_file;