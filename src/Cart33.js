// 🦄33 
// redux를 쓴다면 state 데이터를 수정하고 싶을 때.
// 1. reducer 함수를 만들고 그곳에 데이터 수정하는 방법을 정의함
// 2. 그리고 원하는 곳에서 dispatch() 라는 함수를 써서, reducer에 써진 대로 데이터를 수정함

// Q: 장바구니 품목에 +/- 버튼 만들고, 이걸 누르면 실제 품목데이터가 1 증가/감소하도록 하기

// (2)
// (map 반복문을 적용해서 장바구니 항목이 여러개면 <tr>을 여러개 생성하도록 했습니다.)
// 그리고 <button>을 하나 추가해서 오늘의 기능을 개발하면 됨

// (3)
// 이제 + 버튼을 누르면 redux에 있는 state를 수정해야하죠
// useState() 이런걸로 만들었을 땐 그냥 state수정 함수를 쓰면 됐지만,
// redux에 있는 state는 
// 1. 데이터의 수정방법을 미리 정의해놓으셔야합니다. 
// 2. 그 다음에 데이터 수정방법에 따라서만 수정하셔야합니다.

// 33 -(4)(5)(6)→→ index.js

// (7) dispatch({데이터바인딩}) 
// dispatch() 를 쓰시면 HTML 안에서 reducer함수를 동작시킬 수 있음
// html버튼 클릭한 때마다,  "수량증가"라고 작명해놓은 state 수정방법이 동작합니다.
// (type : '데이터수정방법' 이부분만 잘 지정해주시면 됩니다.)

// 이제 버튼을 클릭할 때마다 수량이 1 증가하죠
// 이게 바로 redux에 있는 state 데이터 수정하는 법 끝입니다. 요약하면, 
// 1. reducer 만들어놓고 
// 2. dispatch로 수정요청하고 하시면 됩니다.

// (8) 복습: ‘수량감소’ - 버튼 만들기 
// if문 안에 데이터를 수정하는 3줄을 또 추가하고 ‘수량감소’라고 작명했습니다.
// 그 다음에  버튼을 만들고 이걸 누르면 ‘수량감소’ 요청을 하도록 코드를 짰습니다.

// 이제 redux 데이터들은 이런 스텝에 따라 수정하시길 바랍니다. 
// 1. reducer에 수정방법을 미리 정의하고
// 2. props.dispatch()로 수정방법을 실행해주시면 됩니다. 끝!

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
            // (2)
        { props.state.map((a,i)=>{
            return (
            <tr key={i}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.quan}</td>
            //   (7)
              <td>
              <button onClick={()=>{ props.dispatch  (  { type:'수량증가' } )}}> + </button>

            //   (8)
              <button onClick={ ()=>{ props.dispatch( {type:'수량감소'} )  } } > - </button>
              </td>
            </tr>
            )
          })  }


      </Table>

      
      
      
      </div>
    )
}



function index의store의state를props로바꿔주는함수(state){
    return{
        state : state
    }

}



// export default Cart;

export default connect(index의store의state를props로바꿔주는함수)(Cart)