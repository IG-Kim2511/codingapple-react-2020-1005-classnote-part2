// 🌈

// 23-(1) SASS문법으로 작성하고 싶으시면 그냥 파일명만 .css 👉.scss로 바꿔주시면 끝입니다.👉 Detail.scss 파일
// 23-(2) import './Detail23.Scss'

// 23-(3)  👉 Detail23.scss

// 23-(6)

import React, {useState} from 'react';
import { useHistory ,useParams } from 'react-router-dom';
import styled from 'styled-components'

// 23-(2)
import './Detail23.css';
import './Detail23.scss';


function Detail23_file(props){

    return(  
      <div className="container">

    //   23-(1-2) css 적용
      <div className="red_css">
            <p>    Detail23.css  </p>      
      </div>

      // 23-(3)
        <div className="red">
        <h4> h4 </h4>
            <p>    Detail23.scss  </p>      
        </div>

        // 23-(6)
        <div className="my-alert">
            <p>  my-alert </p>      
        </div>
        <div className="my-alert2">
            <p>  my-alert2 </p>      
        </div>
        <div className="my-alert3">
            <p>  my-alert3 </p>      
        </div>
              
    </div> 
  
    )
  }

export default Detail23_file;