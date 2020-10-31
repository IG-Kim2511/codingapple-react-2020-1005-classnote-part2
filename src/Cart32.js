// 32강
// (2)
// Cart.js 장바구니 페이지 만들기 (컴포넌트로)
// src 폴더 안에 Cart.js라고 하나 만드시면 되겠습니다. 

// 그리고 장바구니스러운 표 레이아웃을 추가합니다.
// 그냥 Bootstrap table 레이아웃을 넣으면 되겠군요.
// 참고로 tr은 가로줄을 하나 생성해주세요~
// td/th는 세로줄을 하나 생성해주세요~ 라는 HTML 태그입니다. 
// 합하면 표가 생성됩니다.
// (Bootstrap 사이트에서 붙여넣을 때 thead, tbody 이런건 아무 쓸데없어서 지웠습니다.)

// (5)
// index.js  store에 있는 state 데이터 꺼내쓰는 법 
// 이제 저장한 데이터를 Cart.js 가서 써보도록 합시다.

// 진짜 <table>내에 아까 그 장바구니용 데이터를 데이터바인딩을 해보자는겁니다.
// 근데 그냥 하시면 안되고 store 안에 있는 데이터를 props의 형태로 등록하셔야 사용가능합니다.
// 그러려면 하단에 있는 2단계 스텝을 따라주시면 됩니다. 

// 1. 일단 장바구니 데이터사용을 원하는 컴포넌트.js 파일 밑에 아무데나 function을 하나 만들어줍니다.
// (export default라는 부분 하단에는 만드시면 안됩니다)

// 2. 그 다음에 맨 마지막 export default 하던 부분에 위와 같이 적으시면 됩니다.
// (connect 함수는 위에서 import 해오셔야합니다)

// (6)
// 1 : 저 함수는 index.js의 store 안에 있던 state를 props로 바꾸는 함수
// function (state){ return  { props작명 : state } } 
// state : store에서 가져온 데이터
// props작명 : state를 props로 옮김. + mynaming
// 그럼 store 안에 있던 모든 state 데이터가 props로 등록됩니다. 

// 그럼 이제 Cart.js에서 자유작명하셈 이라는걸 출력해보면 아까 저장해뒀던 redux내의 장바구니 state가 출력됩니다.

// { props작명 : state.name }
// 아니면 이렇게 원하는 state만 쏙쏙 뽑아서 등록하셔도 되고요. 

// 2 : connect 함수에 아까 만든 함수를 집어넣습니다. 그냥 react-redux 라이브러리 사용법입니다.
// 그리고 Cart 컴포넌트도 함께 소괄호 안에 집어넣어주시면 됩니다. 
// 그럼 redux store에 있던 데이터들이 props로 엮인 채로 컴포넌트가 export 됩니다. 

// 소괄호 두개붙이는건 자바스크립트 문법 맞아요? 
// 함수()() 이렇게 쓴건,  함수() 이렇게 쓴 부분이 또 다른 함수를 return 했기 때문에 또 소괄호를 뒤에 붙여서 쓸 수 있는 것입니다. 역시 그냥 라이브러리 사용법일 뿐입니다. 

// 3.props적용할때 처럼 function Cart(props) 파라미터 추가
// data binding할곳에 props 추가

// (1)
import React from 'react';
import {Table} from 'react-bootstrap'

// (5)
import { connect } from 'react-redux';

// (6)-3
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
        <tr>
          <td>1</td>
        //   (6-3)
          <td>{ props.props작명[0].name }</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </Table></div>
    )
}
// (5)-1 (6)-1
function index의store의state를props로바꿔주는함수(state){
    return{
      props작명 : state
    }

}

// (1)
// export default Cart;

// (5)-2 (6)-2
export default connect(index의store의state를props로바꿔주는함수)(Cart)