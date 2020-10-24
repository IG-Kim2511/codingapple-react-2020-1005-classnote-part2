

import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useHistory ,useParams } from 'react-router-dom';
import styled from 'styled-components'


function Detail28_file(props){

    let [ alert, alert변경 ] = useState(true);

     let [inputData,inputData변경]=useState('');

        useEffect(()=>{  

        Axios.get()
        .then( (result)=>{}  )
         .catch( ()=>{}  )

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

export default Detail28_file;