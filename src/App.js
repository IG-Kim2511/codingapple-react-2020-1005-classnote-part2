// 18-(1)
/*eslint-disable*/

import React,{useState} from 'react';
import './App.css';

// 16-(1)
import { Navbar , Nav ,NavDropdown , Form , FormControl, Button, Jumbotron} from 'react-bootstrap';

// 17 - (2) (2-2)
import data2mynaming from './data2.js'

// 17 - (3)
import {naming,naming2} from './data3.js'

// 17-(4-1)
import data4naming from './data4.js'

// 19-(3)
import {Link, Route, Switch} from 'react-router-dom'


// ⭐⚡😀💀🦄🍉🍒🍀🌈🔥

// 15 쇼핑몰 프로젝트 : 프로젝트 생성 & Bootstrap 설치
//(1)yarn
// yarn이 뭐하는 애냐면 npm이나 npx를 대체해서 이용할 수 있게 도와주는 친구입니다.
// npm보다 훨씬 빠른 라이브러리 설치속도와 안정성을 자랑합니다. 
// 일단 설치해놓으면 npx create-react-app 어쩌구 하실 때 자동으로 yarn이 구동되어 빨라집니다. 
// 누군가가 npm install 어쩌구 하라고 하면 그거 대신 yarn add 어쩌구 라고 사용하시면 더 빠르게 설치할 수 있으며
// npm run start 로 미리보기 띄울 때도 yarn start 이걸로 대체할 수 있습니다. 

// (2)
// react bootstrap이라고 구글 검색하면 맨 처음에 나오는 사이트로 들어갑시다. 
// 터미널 : npm install react-bootstrap bootstrap

// (3)
// 사이트에 있는 CSS 파일을 index.html 파일의 <head> 태그 안에 복붙해

// (4) bootstrap Component 복붙

function App15() {
  return (
   <div className="App">
    <div className="black-nav"> 15 쇼핑몰 프로젝트 : 프로젝트 생성 & Bootstrap 설치 </div>
    // (4)
    <button type="button" class="btn btn-primary">Primary</button>

   </div>
  );
}

// 16 React Bootstrap. 평화로운 쇼핑몰 레이아웃 디자인
// (1) React Bootstrap 홈페이지에서 Import Components 복사-붙여넣기
// (1-2) 사용할 component이름 (Navbar , Nav ,NavDropdown , Form , FormControl, Button) 모두 목록에 추가
// (1-3) 대문자 시작 태그들 모두가 Component

// (2) css className 추가 가능

// bootstrap 검색어 : jumbotron, layout

function App16() {
  return (
   <div className="App">
    <div className="black-nav">16 React Bootstrap. 평화로운 쇼핑몰 레이아웃 디자인  </div>

    <div>
    // (2)navbar
    <Navbar bg="light" expand="lg" className='background'>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>        
      </Navbar.Collapse>

   // Jumbotron
     <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

      // 상품 레이아웃
      <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          <h4>상품명</h4>
          <p>상품정보</p>
        </div>
        <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
          <h4>상품명</h4>
          <p>상품정보</p>
        </div>
        <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
          <h4>상품명</h4>
          <p>상품정보</p>
        </div>
      </div>
      </div>
      </Navbar>
    </div>
   </div>
  );
}

// 17 코드가 넘나 길어진다면 import / export 사용해보기

// (1) data.js /  import / export 문법
//src폴더에 data.js 파일 만듬
// export default [ ] 

// (1-2) 코드 그냥 useState([]); 안에 넣기

// (2)  data2.js / export default mynaming
// var naming변수 만듬
// name이라는 변수를 다른 파일에서 쓸수 있게 함(참고로 페이지의 가장 마지막 문단에 코딩함)
//export default mynaming2 ...이런식으로 2번 쓸 수 없음

// (2-2)
// App.js에서 data2.js에서 배출한 변수를 쓰고 싶다면, 'import 변수명 from 경로' 사용
// 경로 쓸때 ./라고 쓰는 것은 현재경로입니다.

// (2-3) mynaming 데이터바인딩

// (3) 변수 2개 export할때... array 형식 사용 , 

// (3-2) naming2 데이터바인딩


//  (4) export default
// (4-1) data4.js / import, export
// (4-2) 호출

function App17() {

  // (1-2)  (4)
  let [shoes,shoes변경]=useState(data4naming);

  return (
   <div className="App">
    <div className="black-nav">  17 코드가 넘나 길어진다면 import / export 사용해보기  </div>

    // (2-3)
    {data2mynaming}

    // (3-2)
    {naming2}

    <div>
    // (4-2)
      <h4> {shoes[0].title} </h4> 
      <h4> {shoes[1].content} </h4> 
      <h4> {shoes[2].price} </h4> 
      
     </div>

   </div>
    );
 }

// ⭐18 숙제 해설 : 상품목록 Component 만들기 + 반복문
// (1)일단 터미널창에 뜨는 warning부터 해결합시다. 이런 잔소리가 귀찮다면, 페이지 맨 위에 /*eslint-disable*/ 이라는 코드를 추가합니다.

// (2) 1번째 상품목록 Component 만들기 
// (2-2) function mynaming (){ return( <div> component'만들 html넣음</div>)}

// (2-3) 호출
// (2-4) props

// (3) 모든상품목록 Component 만들기

// (3-2)
// 각각의 Card 컴포넌트마다 다른 데이터 전송해주기 
// 각각의 Card마다 shoes[0], shoes[1] … 이런 식으로 전송해주면 되겠구만요.

// (3-3)
//  위에서 shoes[0] 이라는 데이터를 shoes라는 이름으로 props로 전송했기 때문에
// props.shoes[0].title 이게 아니라
// props.shoes.title 이렇게 써주시면 제목 등이 정상적으로 출력됩니다.

// 교훈은:
//  같은 컴포넌트라고 항상 같은 내용만 보여줄 수 있는게 아닙니다.
//  props 등을 이용해 각각 다른 내용을 전송해주면 됩니다.
//  그럼 같은 컴포넌트라고 해도 각각 다른 내용이 출력되는 컴포넌트를 만드실 수 있습니다.

// (4)  <Card> 3개를 map 반복문으로 돌려보았습니다.
// (4-2) 자료.map( ()=>{ return( 반복시킬HTML    }  )
// (shoes라는 state 갯수만큼 돌려야하니까 shoes에 map을 붙였습니다)
// map 반복문 안엔 2개의 파라미터가 들어갈 수 있는데 (a, i 이렇게 써놓은거요)
// a는 shoes라는 array에 있던 하나하나의 데이터를 의미하고,
// i는 반복문 돌면서 1씩 증가하는 정수입니다. 0,1,2 … 이런 식으로 변하는 변수겠네요.

// (4-3) 둘 다 맞는 코딩

// (5) src=""에 데이터바인딩하기

//(5-2) src = { } ...변수명,함수명을 넣을 수 있음

//(5-3) props 전송하시려면
// 1. i={i} 이렇게 전송해주시고 
// 2. props.i 이렇게 갖다쓴다고 배워봤습니다.

// (5-4)
// 근데 i는 0,1,2가 된댔는데 우리가 필요한 숫자는 1,2,3 이잖아요
// 그래서 (props.i + 1) 이런 변수를 집어넣은 것입니다.

function App18() {

  let [shoes,shoes변경]=useState(data4naming);

  return (
   <div className="App">
    <div className="black-nav">  18 숙제 해설 : 상품목록 Component 만들기 + 반복문  </div>  
    <div className="container">
      <div className="row">
      // (2) (2-3) (2-4)
      <Card shoes={shoes}></Card>  
        <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
          <h4> {shoes[1].title} </h4> 
          <p>{shoes[1].content} & {shoes[1].price}  </p>          
        </div>
        <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
          <h4> {shoes[2].title} </h4> 
          <p>{shoes[2].content} & {shoes[2].price}  </p>          
        </div>
      </div>
    </div>
    
// (3)
    <div className="container">
      <div className="row">
      // (3-2)
      <Card2 shoes={shoes[0]}></Card2>
      <Card2 shoes={shoes[1]}></Card2>
      <Card2 shoes={shoes[2]}></Card2>    
      </div>
    </div>

    // (4)
    <div className="container">
      <div className="row">
      // (4-2)
      {
        shoes.map( (a,i)=>{
          // (4-3) i  //(5-3) 
          return       <Card2 shoes={shoes[i]} i={i}></Card2>
          // (4-3) a
          // return       <Card2 shoes={a}></Card2>
        }  )
      }
      </div>
    </div>
   </div>
    );
 }

//  (2-2) (2-4)
 function Card(props){
   return(
    <div className="col-md-4">
    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
    // (2-4)
    <h4> {props.shoes[0].title} </h4> 
    <p>{props.shoes[0].content} & {props.shoes[0].price}  </p>    
  </div>
   )
 }

  // (3)
 function Card2(props){
   return(
    <div className="col-md-4">
    // (5) (5-2) (5-3)
    <img src={"https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg"} width="100%" />
    // (3-3)
    <h4> {props.shoes.title} </h4> 
    <p>{props.shoes.content} & {props.shoes.price}  </p>    
  </div>
   )
 }

// 🍀19 React Router 1 : 셋팅과 기본 라우팅
// (router 라우터 ((데이터 전송시의 최적 경로를 선택하는 장치)) ) (route 루트. 길)
// React-Router 특징 : 각각 페이지마다 다른 HTML 파일을 보여주는게 아닙니다.
// HTML 내부의 내용을 갈아치워서 다른 페이지처럼 흉내내는 것일 뿐입니다.

// react-router-dom이라는 공식 라이브러리를 설치해서 이용하시면 됩니다.
//설치: 터미널을 여시고 npm install react-router-dom

// (2) index.js 파일에 방문합니다.

// (3) 상단에 Route 라는 태그를 import 해오십시오.  
// Link, Switch는 다음시간에 쓸거라 미리 해놨습니다.
// import { Link, Route, Switch } from 'react-router-dom';

// (4)라우팅하려면 
// (4-2). 원하는 곳에 <Route></Route>  , <Route/>태그를 작성합니다.
// (4-3). <Route>안에 path와 path 방문시 보여줄 HTML 을 적으시면 됩니다. 
// 계속 추가 끝없이 가능

// (4-4) component 호출 2way

// (5) Q: 나는 /detail로 접속했는데 왜 상세페이지, 메인페이지 둘다 보여주죠? 
// 왜냐면 /detail이라고 적으면 /라는 경로도 포함되어있으니까요.
// 그래서 / 경로로 접속했다고 생각하고 메인페이지
// /detail 경로도 접속했다고 생각하고 상세페이지 둘다 보여주는 것입니다.

// a: 그런게 싫으시면 / 경로에 exact라는 속성을 부여해주시면 됩니다.

// (6) /main2 , /deteail2 경로에 <Jumbotron> html 추가
//  /deteail2 경로에 상세페이지 html 추가

function App19() {
  return (
   <div className="App">
    <div className="black-nav">🍀19 React Router 1 : 셋팅과 기본 라우팅 </div>
  
    // (4-2) (4-3)
    <Route path="/">메인페이지⭐</Route>
    <Route path="/detail">상세페이지😎 </Route>
    <Route pate="/4-2"/>4-2
    <Route path="/ㄴㄻㄴㄹㅇ">계속 추가 끝없이 가능</Route>

    // (4-4)
    <Route path="/component" component={Card3}></Route>
    <Route path="/component2" > <Card3/> </Route>

    // (5)
    <Route exact path="/">메인페이지⭐</Route>

    // (6)
    <Route path="/main2">     
      <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
     </Jumbotron>
    </Route>

    <Route path="/detail2">
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">상품명</h4>
            <p>상품설명</p>
            <p>120000원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
          </div> 
      </Route>
    
   </div>
  );
}

// (4-4)
function Card3(){
  return(
  <div>Component 🙄</div>
  )
}

// 🍀20 React Router 2 : Link, Switch, history 기능

function App20() {
  return (
   <div className="App">
    <div className="black-nav">🍀20 React Router 2 : Link, Switch, history 기능 </div>
  
    <Route path="/">     
      <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
     </Jumbotron>
    </Route>

    <Route path="/detail">
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">상품명</h4>
            <p>상품설명</p>
            <p>120000원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
          </div> 
      </Route>
    
   </div>
  );
}

function App(){
  return(
    <div>
       <App15/>      
       <App16/>      
       <App17/>      
       <App18/>    
       <App19/>    
       <App20/>    
    </div>
  )
}

export default App;
