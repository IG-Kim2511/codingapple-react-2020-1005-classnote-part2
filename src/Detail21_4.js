// 🦄21c-(8)   (프로그래밍)
// '가격순 정렬'같은 기능을 사용해서 순서가 바뀌었을때, array의 순서대로 보여주는 방식때문에 제대로 구현이 안될수 있음
// /:id 자리에 입력한 값과 영구번호가 같은 {상품데이터}를 찾아서, Data binding해줘야 함. 

// (9) find() , filter()
// find() 라는 ES6 신문법이 있습니다. Array 안에서 원하는 자료를 찾고싶을 때 사용합니다.

// filter() 함수, 그냥 반복문 이런거 쓰셔도 전혀상관없습니다.
// 1. find()는 array 뒤에 붙일 수 있으며, 안에 콜백함수가 들어갑니다.
// 2. 콜백함수 내의 파라미터(상품)는 array 안에 있던 하나하나의 데이터를 의미합니다.

// 3. return 오른쪽엔 조건식을 적을 수 있습니다. 이게 참인 데이터만 새로운 변수에 저장해줍니다.
// 4. 조건식엔 그리고 그걸 현재 URL의 /:id에 적힌 값과 상품의 영구번호 (상품.id)가 같은지 비교하고 있는 겁니다.
 
// 그래서 /detail/0으로 접속시 찾은상품이라는 변수를 출력해보시면 아마 영구번호가 id : 0인 데이터가 나올겁니다.
// /detail/1로 접속시 찾은상품이라는 변수는 영구번호가 id : 1인 데이터일겁니다.
// 그래서 찾은상품이라는 변수를 이용해서 상품명, 가격 HTML 부분에 데이터바인딩을 했을 뿐입니다.
// 성공!

// 지금은 프론트엔드에서 모든 데이터를 다루고 있어서 어려운 + 반복문스러운 find() 함수를 사용한 것이지만
// 실제 개발할 땐 그냥 서버에 id : 0인 상품데이터를 Ajax로 요청하는 경우가 많을겁니다.
// 그럼 저렇게 find() 어쩌구를 쓰는게 아니라 ajax 요청하는 코드가 들어가있겠고
// ajax 요청을 성공하면 {} 중괄호 안에 깔끔하게 상품데이터가 하나만 딱 들어올 것 같군요.


import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Detail21_4(props){

  let { id } = useParams();

  // (9)-1.2.3.4.
  let 찾은상품 = props.shoes.find(function(상품){      
    return 상품.id == id
  });

  return (
    <div>  999
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="10%" />
       <h4 >{찾은상품.title}</h4>
      <p>{찾은상품.content}</p>
      <p>{찾은상품.price}원</p>               
     </div>  
  )
};

export default Detail21_4