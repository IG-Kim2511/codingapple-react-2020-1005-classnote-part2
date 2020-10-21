// 🌈

// 23-(1) SASS문법으로 작성하고 싶으시면 그냥 파일명만 .css →.scss로 바꿔주시면 끝입니다.→ Detail.scss 파일
// 23-(2) import './Detail23.Scss'

// 23-(3)  → Detail23.Sass

// 23-(6)

// 23-(2)
import './Detail23.Scss';
import './Detail23.css';

import React, {useState} from 'react';
import { useHistory ,useParams } from 'react-router-dom';


import styled from 'styled-components'

function Detail23_file(props){

    let history = useHistory();

    let { id } = useParams();    

    let 박스 = styled.div`
    padding : 20px;
    background-color: yellow;`;

    let 제목 = styled.h4`
    font-size : 50px; 
    color : ${ props =>props.색상}
    `;

    return(  
      <div className="container">

      // 23-(3)
        <div className="red">
        <h4> h4 </h4>
            <p>    Detail23.Scss  </p>      
        </div>

        // 23-(6)
        <div className="my-alert">
            <p>  my-alert </p>      
        </div>
        <div className="my-alert2">
            <p>  my-alert </p>      
        </div>
        <박스><제목 색상={'red'}>  상세페이지 </제목>styled-components  </박스>
        <박스><제목 색상="blue">  상세페이지 </제목>styled-components  </박스>
        <박스><제목 색상={'green'}>  상세페이지 </제목>styled-components  </박스>

       
    </div> 
  
    )
  }

export default Detail23_file;