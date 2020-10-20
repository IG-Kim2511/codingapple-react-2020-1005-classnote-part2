
// 20-(2)
// 1. src 폴더 내에 Detail20.js 파일을 만들고
// 2. 컴포넌트 생성하는 코드를 담았습니다. 
// 근데 이거 쓰시려면 맨 위에 항상 import React를 해오셔야합니다.
// 3. 맨 마지막줄에 Detail20 이라는 함수를 export 해주었습니다.


// 20-(4) 페이지 이동 함수를 사용하시면 됩니다.
// 예시를 위해 Detail 페이지(컴포넌트)에 뒤로가기 버튼을 하나 만들어봅시다.
// onClick={()=>{  }
 
// (5)
// 그런거 만들고 싶으시면 useHistory() 라는 함수를 하나 import 해오시면 됩니다.

// 1. import 를 해오시고 
// import { useHistory } from 'react-router-dom';

//  2. let history 라는 변수에 그 함수를 저장하시면 됩니다.
// useHistory()는 여러분의 코딩생활을 편하게 해주는 일종의 Hook입니다. (useState 이런거랑 비슷한겁니다)
// 그럼 이제 history 라는 변수엔 큰 object {} 자료가 하나 저장이 되어있습니다.
// 그 object 안에는 페이지 이동 내역 + 유용한 함수가 저장되어있습니다.


// (6) history.goBack()
// history에 저장된 여러 자료들 중 가장 유용한건 goBack()이라는 함수입니다.
// 이 함수를 실행하면 페이지가 뒤로갑니다.
// 그래서 뒤로가기 버튼을 눌렀을 때 goBack() 함수를 실행하도록 코드를 짜본겁니다.
// 그럼 이제 뒤로 잘 가죠?

// Q. 이런걸 어케알고 코드를 짜는거죠?
// A. 이런 라이브러리 사용법은 찾아서 읽거나 검색해봐야 알 수 있습니다. 저도 찾아본거임
// go back(); : 외울 수 없음
// -> 구글검색 react router library

// (7) push("/~~~")  : 특정경로로 이동시킴


// // 20-(2)
import React, {useState} from 'react';

// 20-(5)
import { useHistory } from 'react-router-dom';

function Detail20_file(){
    // 20-(5)
    let history = useHistory();

    return(  
      <div className="container">
        <div className="row">
            <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
            <h4 className="pt-5">file상품명</h4>
            <p>상품설명</p>
            <p>120000원</p>
            <button className="btn btn-danger">주문하기</button> 

            //  20-(4)  (6)
            <button className="btn btn-danger" onClick={()=>{history.goBack()}}>뒤로가기</button> 
            
            //   (7)
            <button className="btn btn-danger" onClick={()=>{history.push("/home")}}>뒤로가기</button> 
            </div>
        </div>
    </div> 
  
    )
  }

export default Detail20_file;