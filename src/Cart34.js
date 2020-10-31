// 🦄34
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

      
      <div className="my-alert2">
        <p>지금 구매하시면 20% 할인</p>
        <button>닫기</button>
      </div>     
      
      
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