

import Axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';

import { Form ,Nav} from 'react-bootstrap';
import { useHistory ,useParams } from 'react-router-dom';
import styled from 'styled-components'

import {CSSTransition} from 'react-transition-group';
import './Detail31.scss'
import {재고context2} from './App.js';


function Detail35_file(props){   

  let 재고c = useContext(재고context2);


  let [clicked탭,clicked탭변경] =useState(0);
  

  let [clicked탭2,clicked탭변경2] =useState(0);

  let [스위치,스위치변경] = useState(false);

  return(  
  <div className="container">    

    <Info 재고state={props.재고state}/>

    <button className='btn btn-danger' onClick={ () => { props.재고state변경([9,11,12]) }  }> 주문하기 </button>

    <p>재고context2 :{재고c}</p>
  

    <Nav className="mt-5"  variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{clicked탭변경(0)}} >Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{clicked탭변경(1)}}>Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{clicked탭변경(2)}}>Option 3</Nav.Link>
        </Nav.Item>
     </Nav>


      <TabContent clicked탭p={clicked탭}/>
      

      <Nav className="mt-5"  variant="tabs" defaultActiveKey="link-0">
      <Nav.Item>
        <Nav.Link eventKey="link-0" onClick={()=>{스위치변경(false); clicked탭변경2(0)}} >Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false); clicked탭변경2(1)}}>Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false); clicked탭변경2(2)}}>Option 3</Nav.Link>
      </Nav.Item>
   </Nav>


  <CSSTransition in={스위치} classNames="wow"  timeout={500}>
    <TabContent2 clicked탭p2={clicked탭2} 스위치변경p={스위치변경}/>
   </CSSTransition>

  </div>   

  )

  
}


function TabContent(props){

  if (props.clicked탭p === 0){
    return <div>내용0</div>
  } else if (props.clicked탭p === 1){
    return <div>내용1</div>
  } else if (props.clicked탭p === 2){
    return <div>내용2</div>
  }
}


function TabContent2(props){

  useEffect(()=>{
    props.스위치변경p(true);
  });

  if (props.clicked탭p2 === 0){
    return <div>내용0</div>
  } else if (props.clicked탭p2 === 1){
    return <div>내용1</div>
  } else if (props.clicked탭p2 === 2){
    return <div>내용2</div>
  }
}


function Info(props){
return(
  <div>  

   <p> 재고 :  {props.재고state[0]}</p>     
  </div>
)
}

export default Detail35_file;