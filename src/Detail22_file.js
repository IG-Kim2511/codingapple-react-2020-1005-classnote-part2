import React, {useState} from 'react';


import { useHistory ,useParams } from 'react-router-dom';


function Detail22_file(props){

    let history = useHistory();

    let { id } = useParams();
    

    return(  
      <div className="container">
        <div className="row">
            <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
 
            <h4 className="pt-5">file상품명.{props.shoes[0].title}</h4>
            <p>상품설명.{props.shoes[1].content}</p>
            <p>120000원.{props.shoes[2].price}</p>
            <button className="btn btn-danger">주문하기</button>         
            <button className="btn btn-danger" onClick={()=>{history.goBack()}}>뒤로가기</button>        
            <button className="btn btn-danger" onClick={()=>{history.push("/home")}}>뒤로가기</button> 

            </div>
        </div>
    </div> 
  
    )
  }

export default Detail22_file;