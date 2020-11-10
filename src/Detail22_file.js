// styled-components ( 'CSS in JS')

// 컴포넌트가 많은 경우 CSS를 하다보면 불편함이 생기는데
// 1. class 만들어놓은걸 까먹고 중복해서 또 만들거나
// 2. 갑자기 다른 이상한 컴포넌트에 원하지않는 스타일이 적용되거나
// 3. CSS 파일이 너무 길어져서 수정이 어렵거나
// 이런 경우가 있습니다.
 
// 그래서 class선언없이 Component에 CSS를 직접 넣음. 'CSS in JS'라고도 함.

// styled-components라는 인기 라이브러리를 설치하여 이용하시면 됩니다.


//(2)🌈 일단 설치부터 해봅시다 터미널을 여시고
// yarn add styled-components 혹은
// ⚡npm install styled-components


//(3)🌈
// 그리고 사용하고 싶은 컴포넌트 맨위에 무언가를 import 해오셔야합니다.
// 👆import styled from 'styled-components'

// (4)🌈
// '박스'Component with CSS가 만들어짐

// 이 라이브러리를 이용하시면 컴포넌트를 만들 때 스타일을 미리 주입해서 만들 수 있습니다.
// 제가 한번 예시로 padding : 20px인 div박스를 styled-components를 이용해 만들어보겠습니다.

// 1. div박스를 하나 만들고 싶으면 저렇게 styled.div 라는걸 사용하시면 됩니다. p태그 만들려면 styled.p 이런 식입니다.
// 2. 그리고 그 오른쪽에 “ backtick 기호를 이용해서 기본 스타일을 다 넣어주시면 됩니다.
// 3. 그리고 그걸 변수로 저장하면 컴포넌트가 완성됩니다. 원하는 곳에 사용하시면 됩니다.

// 그럼 최종적으로 padding : 20px인 div박스를 저렇게 만들 수 있습니다.
// class 이런거 선언 필요없이 <컴포넌트>를 하나 만들었죠?

// (4-2)🌈  let 제목

// (5)🌈 props로 스타일링하기 

// 여러가지 사용법 중 가장 유용한건 바로 props로 스타일링하는 방법입니다.
// 예를 들면 위에서 만든 제목 (h4) 요소가 여러가지 색깔 버전으로 필요할 때 어떻게?

// 색상기입란에 ${ props => props.색상 } 이라는 코드를 적었습니다.
// – ${} 이라는 문법은 문자를 생성하는 “ 백틱 기호안에서 쓸 수 있는 ES6 문법인데, 문자 중간중간 함수나 변수를 넣음
// – 그리고 props.색상이라는 props 변수를 여기에 집어넣은 겁니다. 

// (5-2)🌈
// 그냥 ${ props.색상 } 이렇게 넣으면 안되고 저렇게 콜백함수로 넣으셔야합니다.

// (5-3)🌈
// 자바스크립트에서 variable 미리 지정하는 것처럼, 
// color : ${색상}; 으로 일단 변수화 한 후 , 
// <제목 색상="blue">  나중에 지정.....으로 이해

// props 로 미리 빵꾸를 뚫어놓으신 부분에 원하는 문자를 전송해줄 수 있습니다.
// 예제에선 props.색상이라는 props에, red라는 문자가 들어가서 컴포넌트가 생성됩니다.


// (6)🌈
// 리액트에서 props 전송하실 땐 두가지 방법이 있습니다. 
// 그냥 일반 텍스트를 전달하고 싶으면 “” 따옴표 안에 쓰시면 되고
// 변수나 자료형을 담고 싶으면 {} 중괄호 안에 쓰시면 됩니다.

// (7)🌈
// 저처럼 옛날 개발자들은 CSS가 편합니다.

import React, {useState} from 'react';
import { useHistory ,useParams } from 'react-router-dom';

// (3)🌈
import styled from 'styled-components'

function Detail22_file(props){

    let history = useHistory();

    let { id } = useParams();
    
    // (4)🌈
    let 박스 = styled.div`
    padding : 20px;
    background-color: yellow;`;

    // (4-2)🌈 (5) (5-2) (6)
    let 제목 = styled.h4`
    font-size : 50px; 
    color : ${ props =>props.색상}
    `;

    return(  
      <div>

      // (4)🌈 (4-2) (5)
      <박스><제목 색상={'red'}>  상세페이지 </제목>styled-components  </박스>
      <박스><제목 색상="blue">  상세페이지 </제목>styled-components  </박스>
      <박스><제목 색상={'green'}>  상세페이지 </제목>styled-components  </박스>

       
    </div> 
  
    )
  }

export default Detail22_file;