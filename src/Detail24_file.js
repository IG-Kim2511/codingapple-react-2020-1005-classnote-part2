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

// (2)예전 문법 class이용
// 위에서 설명한 Hook들은 원래 class로 만든 컴포넌트에서 사용가능합니다.

// class 컴포넌트 작성하는 곳 안에 그냥 대충 작성하시면 됩니다.
// 가장 유용한 Hook 두개는

// 1. componentDidMount() {} 

// 2. componentWillUnmount() {} 


import React, {useState} from 'react';
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


    
    return(  
           <div className="container">      
        <div className="my-alert">
            <p>  my-alert </p>      
        </div>
  
              
    </div> 
  
    )
  }

export default Detail24_file;