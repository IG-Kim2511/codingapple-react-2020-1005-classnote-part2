// 🦄34
// (1) Q: Cart 페이지에 조그만한 alert UI를 하나 추가 + 열기 & 닫기 기능

// 이 html button을 보여주고 안보여주는 state를 하나 만들어주고 싶은데
// useState를 쓰셔도 되지만, redux를 배운 기념으로
// redux에 state를 만들어서 이용해보도록 하겠습니다.
// true/false 값을 담으면 되겠죠? 근데 잘 생각해보면 어디에 저장할지가 문제입니다. 
// true면 보여주고,  false면 안보여줌

// redux store에선 reducer를 하나 더 쓰시면 됩니다.
// (일반 컴포넌트에선 useState()를 하나 더 쓰시면 됩니다.)
// 그래서 state + reducer 세트를 하나 더 만들어서 여기에 UI의 true/false 값을 저장해봅시다.

// (2) →→ index.js

// (3)
// reducer 2개 만든거 사용하기
// props작명 : state
// reducer가 2개 다 떠서 엉켜버림.

// 각 reducer마다 따로 props지정해야 함.
// props작명 : state.reducer,     
// props작명2 : state.reducer2  

// (4) React if statement : Conditional rendering
// if: true면 보여주고, else: false면 안보여줌
// { }
// ?
// ( )
// :

// (5) Q: 닫기버튼 클릭하면 alert창이 닫혀야 함

// (5)-2  →→ index.js
// reducer2 내에 미리 데이터 수정하는 방법을 만들어두신 다음

// (5)-3 : 버튼을 클릭한 때 dispatch로 수정하시면 됩니다. 

// (6)교훈 : 간단한 조작은 useState()이 더 편함
// 이거 UI 하나 만드는데 redux에 굳이 저장할 필요는 없습니다.
// redux가 있다고 해도 redux에 state 저장할지말지는 선택입니다.
// 내가 이 state 데이터를 다른 컴포넌트에서 쓸 일이 없다면
// useState()로 Cart 컴포넌트 안에 간단하게 만드십시오. 
// 많은 컴포넌트들이 공유하는 값은 redux store안에 보관하십시오.


// 🦄35-(2) dispatch로 데이터 보내기  -→ index.js

// 🦄36

import React from 'react';
import {Table} from 'react-bootstrap'
import { connect } from 'react-redux';

function Cart(props){
    return(
     <div>
        <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>

        { props.props작명.map((a,i)=>{
            return (
            <tr key={i}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.quan}</td>          
              <td>
              <button onClick={()=>{ props.dispatch  (  { type:'수량증가' } )}}> + dispatch </button>
              <button onClick={ ()=>{ props.dispatch( {type:'수량감소'} )  } } > - dispatch </button>
              
              // 35-(2)
              <button onClick={()=>{ props.dispatch  (  { type:'수량증가', payload: { name:'kim'  }} )}}> + payload </button>
                 </td>
            </tr>
            )
          })  }
        </Table>
        // (1) 
        <div className="my-alert2">
        <p>지금 구매하시면 20% 할인</p>
        <button>alert닫기</button>
      </div>   
        (4)
        {   props.props작명2 === true
           ? (<div className="my-alert2">
              <p>지금 구매하시면 20% 할인</p>
              // (5) (5)-3
              <button onClick={()=>{ props.dispatch({type:'alert닫기'}) }}>alert닫기</button>
            </div>   )
            : null
          }
       
      </div>
    )
}



function index의store의state를props로바꿔주는함수(state){
    return{
      // 
      props작명 : state.reducer,     
      props작명2 : state.reducer2     
    }

}



// export default Cart;

export default connect(index의store의state를props로바꿔주는함수)(Cart)