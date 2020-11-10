
// (7) useParams  👉 공식으로 외워서 씀

// 0. destructuring 문법
// https://iankim2511.tistory.com/166

// 0-1. 배열 디스트럭처링
// const arr = [1, 2, 3]
// const [one, two, three] = arr 
// console.log(one) 👉 1

// 0-2. 객체 디스트럭처링
// const obj1 = {a: 1, b: 2, c: 3}
// const {c, b, a} = obj1 // key의 값을 가져오므로 순서는 상관없습니다.
// console.log(c) 👉 3

// 1. import {useParams } from 'react-router-dom';
// 2. 그걸 변수에 저장했습니다. 

// useParams() 라는 함수는 현재 URL에 적힌 모든 url parameter를 {parameter1,parameter2} 이런 식으로 저장해주는 함수입니다.
// 그걸 destructuring 문법을 이용해서, 숫자로 바꿈 + 변수로 빼서 저장
// 그래서 id라는 변수는 :id 자리에 있던 숫자를 의미합니다.

// /detail/1로 접속하면 👉 url parameter는 {1} 👉destructuring 문법👉 1👉 변수(let id)에 저장함. 
// /detail/3로 접속하면 👉 url parameter는 {3} 👉destructuring 문법👉 3👉 변수(let id)에 저장함. 

// 3. ????? : 왜인지 모르지만 에러가 나서 일단 여기로 옮겨놓음


// (8) '가격순 정렬'같은 기능을 사용해서 순서가 바뀌었을때, array의 순서대로 보여주는 방식때문에 제대로 구현이 안될수 있음
// /:id 자리에 입력한 값과 영구번호가 같은 {상품데이터}를 찾아서, 데이터바인딩해줘야 함. 
//  👉 Detail21_4.js

import React, {useState} from 'react';

// (7)-1
import { useHistory ,useParams } from 'react-router-dom';

function Detail21_3(props){

    let history = useHistory();

    // (7)-2
    let { id } = useParams();

    return(   
    <div>            
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="10%" />     
      <div >
        (7)-3
        <h4 >file상품명.{props.shoes[id].title}</h4>
        <p>상품설명.{props.shoes[id].content}</p>
        <p>120000원.{props.shoes[id].price}</p>
      </div>
    </div>
    
  
    )
  }

export default Detail21_3;