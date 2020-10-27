
// (3)-4
// (3)-5 데이터바인딩

import Axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import { Form } from 'react-bootstrap';
import { useHistory ,useParams } from 'react-router-dom';
import styled from 'styled-components'


// (3)-4
import {재고context2} from './App.js';

function Detail30_file(props){   

// (3)-4
  let 재고c = useContext(재고context2);

  return(  
  <div className="container">    

    <Info 재고state={props.재고state}/>

    <button className='btn btn-danger' onClick={ () => { props.재고state변경([9,11,12]) }  }> 주문하기 </button>
    // (3)-5
    <p>재고context2 :{재고c}</p>
  

  </div>   
  )
}

// (1-3)
function Info(props){
return(
  <div>  

   <p> 재고 :  {props.재고state[0]}</p>     
  </div>
)
}

export default Detail30_file;