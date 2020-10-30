// 🦄33 
// redux를 쓴다면 state 데이터를 수정하고 싶을 때.
// 1. reducer 함수를 만들고 그곳에 데이터 수정하는 방법을 정의함
// 2. 그리고 원하는 곳에서 dispatch() 라는 함수를 써서, reducer에 써진 대로 데이터를 수정함


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

        { props.state.map((a,i)=>{
            return (
            <tr key={i}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.quan}</td>
              <td><button onClick={()=>{  }}> + </button></td>
            </tr>
            )
          })  }


      </Table></div>
    )
}



function index의store의state를props로바꿔주는함수(state){
    return{
        state : state
    }

}



// export default Cart;

export default connect(index의store의state를props로바꿔주는함수)(Cart)