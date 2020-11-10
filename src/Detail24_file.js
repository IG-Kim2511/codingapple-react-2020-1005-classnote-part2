// 🌈24
// 컴포넌트의 Lifecycle 
// 1. 생성 2. 삭제  3. 관련된 state가 변경되면 재렌더링(업데이트)

// 컴포넌트의  Hook ( Lifecycle Hook ) 
// 컴포넌트의 인생 중간중간 Hook을 걸 수 있습니다

// “Detail 컴포넌트 등장 전에 ~~함수실행”
// “Detail 컴포넌트 사라지기 전에 ~~함수실행”
// “Detail 컴포넌트 업데이트 되고나서 ~~함수실행”

// Hook을 사용하면 이런 코드를 짤 수 있다는 것이지요.
// Hook의 정확한 명칭은 Lifecycle Hook 이라고 합니다.

// (2)class로 만든 컴포넌트 Hook  : 예전 오리지널 문법 

// class 컴포넌트 작성하는 곳 안에 그냥 대충 작성하시면 됩니다.
// 가장 유용한 Hook 두개는
// 1. componentDidMount() {} 
// 2. componentWillUnmount() {} 

// (3) useEffect hook :  요즘 리액트개발에 많이 사용 (약간 더 짧고 쉬우니까요)

// 사용법: 그냥 function 컴포넌트 안에 넣어주시면 됩니다. (return 나오기 전에요)

// 1. 근데 미리 페이지 상단에서 useEffect를 import 해오신 후
// 2. useEffect() 를 사용하셔야합니다.
// 3. 그리고 안에 콜백함수를 집어넣습니다.
// 4. 콜백함수 안에는 Detail 컴포넌트가 첫 등장하고나서 실행하고싶은 코드가 있으면 적어주면 됩니다

// 조금 더 자세하게 알아보는… useEffect() 내의 코드의 실행조건은

// – 컴포넌트가 첫 등장해서 로딩이 끝난 후에 (전문용어로 mount 끝났을 때)
// – 컴포넌트가 재렌더링 되고난 후 때 (전문용어로 update 되고난 후에)

// 이제 Detail 컴포넌트 로드시나 업데이트시 뭔가 코드실행하고 싶은게 있으면 여기다 다 적으면 되겠죠?

// 5.console.log(1111); . Detail24_file부르면 출력됨

// (4) useEffect hook  : 컴포넌트가 사라질 때 (unmount 될때 )실행되는....
// useEffect() 안에는 return 추가
// 여기서의 return: JS의 return....  결과값 도출 시킴
// 그리고 여기 넣은 함수는 컴포넌트가 사라질 때 (unmount 될때 )실행됩니다.

// – 당연히 다른 곳에서 만들어 놓은 함수명을 입력하셔도 됩니다.
// – arrow function 집어넣으셔도 가능합니다.

// (5)
// useEffect Hook는 여러개 사용하셔도 됩니다.그냥 차례로 쭉 적으면 되는데 적은 순서대로 순차적으로 실행이 됩니다.

// (3-1)
import React, {useEffect, useState} from 'react';
import { useHistory ,useParams } from 'react-router-dom';
import styled from 'styled-components'

// (2)
class Detail2 extends React.Component {
    componentDidMount(){
      //Detail2 컴포넌트가 Mount 되고나서 실행할 코드 , Ajax도 이런곳에서 자주 사용
    }
    componentWillUnmount(){
      //Detail2 컴포넌트가 Unmount 되기전에 실행할 코드 (다른페이지로 넘어간다든지 등의 사유로)
    }
  }

function Detail24_file(props){

    // (3-2, 3-3, 3-4, 3-5)
        useEffect(()=>{ 
                console.log( 'detail24');        
                    });
    // (4) (5)
    useEffect(()=>{
        return function 어쩌구(){}
     });
    
    // 숙제: 첫화면에서 2초 동안 보이는 코드 👉 25강
    useEffect(()=>{ 
            let 타이머 = setTimeout(() => {                
            }, 2000);

    });
    return(  
           <div className="container">      
        <div className="my-alert">
            <p>  my-alert </p>      
        </div>
  
              
    </div> 
  
    )
  }

export default Detail24_file;