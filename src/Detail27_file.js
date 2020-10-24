
// (27-6)
// 페이지 방문하자마자 Ajax요청을 실행하고 싶을때 
// (Ajax를 이용해서 페이지 내용을 받아오거나 그럴 때가 있습니다.)
// useEffect() 함수안에 넣으면 됨( 컴포넌트 등장시/업데이트시 실행되는 함수)
// 그 컴포넌트가 등장시/업데이트시 ajax 요청을 실행하겠군요.

// 하지만 업데이트시 매번 ajax 요청을 하기 싫을 때도 있겠죠?
// 그럼 위처럼 useEffect() 안에 대괄호를 추가해주시면 되겠군요.
// 그럼 등장시에만 한번 실행되고 끝납니다.

import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useHistory ,useParams } from 'react-router-dom';
import styled from 'styled-components'


function Detail27_file(props){

    let [ alert, alert변경 ] = useState(true);

     let [inputData,inputData변경]=useState('');

        useEffect(()=>{  

        // (27-6)
        Axios.get()

        let 타이머 = setTimeout(() => {alert변경(false)}, 2000);     
        console.log('업데이트(재랜더링)될 때도 저 useEffect 계속 실행됨');
        return ()=>{ clearTimeout(타이머)}   }  ,[ ]);
    

    return(  
           <div className="container">      
        <div className="my-alert">
            <p>  my-alert </p>      
        </div>
  
        {
            alert === true
            ? (<div className="my-alert2">
                <p>페이지 방문 후 2초 후에 alert 박스가 사라지게 해보십시오</p>
              </div>)
            : null
          }
              

    <input onChange={(e)=>{inputData변경(e.target.value)}} />

    {inputData}
    
    </div> 
  
    )
  }

export default Detail27_file;