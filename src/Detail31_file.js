

import Axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import { Form } from 'react-bootstrap';
import { useHistory ,useParams } from 'react-router-dom';
import styled from 'styled-components'


import {재고context2} from './App.js';

function Detail31_file(props){   

  let 재고c = useContext(재고context2);

  return(  
  <div className="container">    

    <Info 재고state={props.재고state}/>

    <button className='btn btn-danger' onClick={ () => { props.재고state변경([9,11,12]) }  }> 주문하기 </button>

    <p>재고context2 :{재고c}</p>
  

  </div>   
  )
}


function Info(props){
return(
  <div>  

   <p> 재고 :  {props.재고state[0]}</p>     
  </div>
)
}

export default Detail31_file;