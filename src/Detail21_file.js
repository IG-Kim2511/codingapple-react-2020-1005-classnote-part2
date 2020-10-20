
// (4) 그래서 :id 자리에 입력한 숫자를 저기에 집어넣고 싶습니다. props.shoes[:id자리에 있는 숫자]
// 그런게 되냐고요? 라우터 라이브러리 사용법을 찾아보면 나올 것 같습니다.
// 찾아보면 useParams() 라는 훅을 사용하면 된다고하네요. 

// (5)useParams
// 1. 맨 위에서 import를 이용해 useParams를 가져왔고
// 2. 그걸 변수에 저장했습니다. 
// useParams() 라는 함수는 현재 URL에 적힌 모든 파라미터를 {파라미터1,파라미터2} 이런 식으로 저장해주는 고마운 함수입니다.
// 그걸 destructuring 문법을 이용해서 따로따로 변수로 빼서 저장한 것이고요.
// 그래서 id라는 변수는 :id 자리에 있던 숫자를 의미합니다.

// 그러니까 /detail/1로 접속하면 id라는 변수는 1이 되고
// /detail/100 으로 접속하면 id라는 변수는 이제 100이 되는 겁니다.

// (5-2) {props.shoes[id]}
// ????? : 왜인지 모르지만 에러가 나서 일단 여기로 옮겨놓음

// <h4 className="pt-5">file상품명.{props.shoes[id].title}</h4>
// <p>상품설명.{props.shoes[id].content}</p>
// <p>120000원.{props.shoes[id].price}</p>


// (6) '가격순 정렬'같은 기능을 사용해서 순서가 바뀌었을때, array의 순서대로 보여주는 방식때문에 제대로 구현이 안될수 있음
// /:id 자리에 입력한 값과 영구번호가 같은 {상품데이터}를 찾아서, 데이터바인딩해줘야 함. 
//  ---> Detail21_2file



import React, {useState} from 'react';

// (5)
import { useHistory ,useParams } from 'react-router-dom';

// (1-4)
function Detail21_file(props){

    let history = useHistory();

    // (5)
    let { id } = useParams();
    

    return(  
      <div className="container">
        <div className="row">
            <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
            // (1-4)  
            <h4 className="pt-5">file상품명.{props.shoes[0].title}</h4>
            <p>상품설명.{props.shoes[1].content}</p>
            <p>120000원.{props.shoes[2].price}</p>
            <button className="btn btn-danger">주문하기</button>         
            <button className="btn btn-danger" onClick={()=>{history.goBack()}}>뒤로가기</button>        
            <button className="btn btn-danger" onClick={()=>{history.push("/home")}}>뒤로가기</button> 
            
            // (5-2)
         

           


            </div>
        </div>
    </div> 
  
    )
  }

export default Detail21_file;