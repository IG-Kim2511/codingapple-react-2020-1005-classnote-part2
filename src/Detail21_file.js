
// (6) (하드코딩) 그래서 :id 자리에 입력한 숫자를 저기에 집어넣고 싶습니다.
//1. props.shoes[:id자리에 있는 숫자]

//2. http:~~~/detail/2 접속하면,
// 페이지는 detail페이지 
// 상품설명은 2번상품이 나옴

// 그런게 되냐고요? 라우터 라이브러리 사용법을 찾아보면 나올 것 같습니다.
// https://reactrouter.com/web/guides/quick-start
// useParams() 라는 훅을 사용하면 된다고하네요. 

import React, {useState} from 'react';

import { useHistory } from 'react-router-dom';

// (1-4)
function Detail21_file(props){

    let history = useHistory();

    return(   
    <div>            
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="10%" />     
      <div >
        // (1-4)  (6)
        <h4 >file상품명.{props.shoes[0].title}</h4>
        <p>상품설명.{props.shoes[1].content}</p>
        <p>120000원.{props.shoes[2].price}</p>    
      </div>
    </div>
    
    )
  }

export default Detail21_file;