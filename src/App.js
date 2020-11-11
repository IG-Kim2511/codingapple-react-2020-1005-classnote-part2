// 18-(1)
/*eslint-disable*/

// 30-(2)-3
import React,{useContext, useState} from 'react';
import './App.css';

// 16-(1)-2
import { Navbar , Nav ,NavDropdown , Form , FormControl, Button, Jumbotron} from 'react-bootstrap';

// 17 - (2)-4
import data2mynaming from './data2.js'

// 17 - (3)
import {naming,naming2} from './data3.js'

// 17-(4)-2
import data4naming from './data4.js'

// 19-(3)-1 20-(3-3) 20-(8)-2
import { Link, Route, Switch, useHistory } from 'react-router-dom'

// 20-(2-3)
import Detail20_file2 from './Detail20.js'

// 21 - (1)
import Data21 from './data21.js'
import Detail21_file from './Detail21_file.js'
import Detail21_3 from './Detail21_3.js'
import Detail21_4 from './Detail21_4.js'

// 22
import Detail22_file from './Detail22_file.js'
// 23
import Detail23_file from './Detail23_file.js'
// 24
import Detail24_file from './Detail24_file.js'
// 25
import Detail25_file from './Detail25_file.js'

// 26-(2)
import axios from 'axios';

// 27
import Detail27_file from './Detail27_file.js'
// 28
import Detail28_file from './Detail28_file.js'
// 30
import Detail30_file from './Detail30_file.js'
// 31
import Detail31_file from './Detail31_file.js'
// 32-(1)
import Cart32 from './Cart32.js'
// 33
import Cart33 from './Cart33.js'
// 34
import Cart34 from './Cart34.js'
// 35
import Detail35_file from './Detail35_file.js'


//👉🌈⚡🦄 ⭐😀👻👽🍉🍒🔥

// 🦄 15 react bootstrap (쇼핑몰 프로젝트 : 프로젝트 생성 & Bootstrap 설치)

// (2) react bootstrap
// react bootstrap이라고 구글 검색하면 맨 처음에 나오는 사이트로 들어갑시다. 
// 터미널 : npm install react-bootstrap bootstrap

// (2)-2
// 👉 public/index.html
// react bootstrap사이트에 있는 CSS 파일 👉 index.html 파일의 <head> 태그 안에 복사붙여넣기함
// https://react-bootstrap.github.io/getting-started/introduction

// (2)-3 bootstrap Component 복붙

// (2)-4 사용할 Componetn들을 import함.  import { Navbar , Nav , Button} from 'react-bootstrap';
// 👉 16강에서 자세히 설명

//(4) yarn
// yarn이 뭐하는 애냐면 npm이나 npx를 대체해서 이용할 수 있게 도와주는 친구입니다.
// npm보다 훨씬 빠른 라이브러리 설치속도와 안정성을 자랑합니다. 
// 일단 설치해놓으면 npx create-react-app 어쩌구 하실 때 자동으로 yarn이 구동되어 빨라집니다. 
// 누군가가 npm install 어쩌구 하라고 하면 그거 대신 yarn add 어쩌구 라고 사용하시면 더 빠르게 설치할 수 있으며
// npm run start 로 미리보기 띄울 때도 yarn start 이걸로 대체할 수 있습니다. 


function App15() {
  return (
   <div className="App">
      <p className="black-nav">🦄15 react bootstrap (쇼핑몰 프로젝트 : 프로젝트 생성 & Bootstrap 설치)</p>
      // (2)-3
      <button type="button" class="btn btn-primary">Primary</button>
    </div>
  );
}

// 🦄16 React Bootstrap.쇼핑몰 레이아웃 디자인

// (1) React Bootstrap 홈페이지에서 Import Components 복사-붙여넣기

// (1-2) 👆 import { Navbar , Nav,~~} from 'react-bootstrap';
//  사용할 component이름  Navbar , Nav,~~}  모두 목록에 추가

// (1-3) 대문자 시작 태그들 모두가 Component

// (2)Jumbotron() bootstrap 검색어 : jumbotron, layout)

// (3) Bootstrap코딩에도 <className=”background”> 클래스 정하고, CSS 작성
// 👉 App.css

// (4) image가져오기
// 1. src폴더 안의 파일
// background-image : url(./background.jpg);  

// 2. src폴더 안 image폴더에서의 파일
// background-image : url(./images/background.jpg);  

// (참고)
// 다른 src 폴더 등의 파일들은 리액트 앱을 발행했을 때 저절로 압축이 되는데
// public 폴더는 리액트 앱을 발행했을 때 사이트 루트경로에 그대로 남아있습니다.

// (5) react-bootstrap 사이트에서 layout + 선생님이 준비한 이미지파일 주소

function App16() {
  return (
   <div className="App">
    <p className="black-nav ">🦄16 React Bootstrap.쇼핑몰 레이아웃 디자인  </p>

    <div>
     <Navbar bg="light" expand="lg" className='background'>
        <Navbar.Brand href="#home">..</Navbar.Brand>
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

   // (2) Jumbotron
     <Jumbotron >
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

    // (5)
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

//🦄17 import/export 문법, export default 작명 (variable, array, function), import 작명 from './data4.js'
// 👉data2.js
// 👉data3.js
// 👉data4.js
// 👆 import

// (2)  data2.js / export default mynaming
// 1. src폴더에 data2.js 파일 만듬

// 2. 3. 👉data2.js

// (2)-4
// App.js에서 data2.js에서 배출한 변수를 쓰고 싶다면, 'import 작명 from 경로' 사용
// 경로 쓸때 ./라고 쓰는 것은 현재경로입니다.

// (2)-5 mynaming 데이터바인딩

// (2)-6 import이름: mynaming , export이름: data2mynaming ..... 각자이름이 같을 필요 없음 

// (3) 변수 2개 export할때... array 형식 사용 , 
// 👉data3.js

// (3)-2 Data binding

// (3)-3 import이름: {naming,naming2} , export이름: {naming,naming2} ..... 각자이름이 같아야함

// (4) export default
// 👉data4.js
// 1. data4.js 에 데이터를 다 저장하고 export default 로 내보내줍니다.

// 1-1. export default 뒤에 data,array를 그대로 집어넣어도 됨
// 1-2.변수에 저장했다가,  export default 변수명 해도 됨
//  👉 let 작명 = [ ~~~~ ]  , export default 작명

// 2. import data4naming(작명) from './data4.js';

// 3. 그걸로 state를 만듬 :  useState([]); 안에 넣기

// 4. Data binding

function App17() {

  // (4)-3
  let [shoes,shoes변경]=useState(data4naming);

  return (
   <div className="App">
    <p className="black-nav">🦄17 import/export 문법, export default 작명 (variable, array, function), import 작명 from './data4.js' </p>
    <p>
      // (2)-5
      import data2mynaming from './data2.js' 
      {data2mynaming}

      // (3)-2
      import {naming,naming2} from './data3.js'  
      {naming2}
    </p>

     <div>
    // (4)-4
    import data4naming from './data4.js'
      <h4> {shoes[0].title} </h4> 
      <h4> {shoes[1].content} </h4> 
      <h4> {shoes[2].price} </h4>       
     </div>
   </div>
    );
 }

// 🦄18 map()활용2. Component,props쓰기.{'text'+(props.i+1)}.(상품목록 Component 만들기 + 반복문)
// (1)일단 터미널창에 뜨는 warning부터 해결합시다. 이런 잔소리가 귀찮다면, 페이지 맨 위에 /*eslint-disable*/ 이라는 코드를 추가합니다.

// (2)
// App이라는 컴포넌트에 있는 state를 Card에서 쓰고싶으면 props로 전송해주어야합니다.
// 1. <Card>를 첨부할 때 shoes={shoes}로 전송하는 문법을 썼고
// 2. Card 컴포넌트 안에 shoes를 갖다쓸 땐 props.shoes 라고 사용했습니다.

// (3) 각각의 Card 컴포넌트마다 다른 데이터 전송해주기 
// 각각의 Card마다 shoes[0], shoes[1] … 이런 식으로 전송해주면 되겠구만요.
// 1. 그니까 shoes라는 [ {}, {}, {} ] 이렇게 생긴 데이터를 다 전송하는게 아니라
// shoes 안에 있던 하나의 {} 오브젝트만 각각 전송하자는 겁니다.

//  shoes={shoes[0] : data.js의 0번째 자료 의미함  [ {0번째}, {1번째}, {2번째} ]
//  shoes={shoes[1] : data.js의 1번째 자료 의미함  

// 2.위에서 shoes[0] 이라는 데이터를 shoes라는 이름으로 props로 전송했기 때문에
// props.shoes[0].title 이게 아니라
// props.shoes.title 이렇게 통합해서 쓸 수 있음 (다음단계 프로그래밍 코딩을 위해 필요함)

// (4) Card2 컴포넌트 반복문 돌리기- 프로그래밍
// 1.<Card2> 3개를 map 반복문으로 돌려보았습니다.
// { }
// 변수~state~함수~array.map((a,i)=>{ })
// return <Card2/>
// shoes={shoes[i]} i={i}

// 2. map 반복문 안엔 2개의 파라미터가 들어갈 수 있는데 (a, i 이렇게 써놓은거요)
// 왼쪽거는 shoes라는 array에 있던 하나하나의 데이터를 의미하고,
// i는 반복문 돌면서 1씩 증가하는 정수입니다. 0,1,2 … 이런 식으로 변하는 변수겠네요.
// state,변수~~뿐만이 아니라, map(a,i)함수 내의 i도 가져와서 props로 사용 가능함
// (a를 넣어도 됨)

// 3.현재 모든 상품이미지들은 Card 컴포넌트 안에 <img src=”~~~/shoes1.jpg”> 이렇게 하드코딩되어있습니다.

// Q: 각각 컴포넌트마다 shoes1.jpg / shoes2.jpg / shoes3.jpg 라는 데이터로 데이터바인딩하기
// <Card> 반복문 돌릴 때 map 안에 i라는 변수 활용. (1.2.3....변수)
// 'text'+변수+'text'형태로 만들기
// <img src="https:파일주소1.jpg" />  👉
// 👉 <img src={ 'https:파일주소'+i+'.jpg'}/>

// 4.
// props전송받았으므로 i👉props.i

// 우리가 필요한 숫자는 1,2,3 (i는 0,1,2)
// 그래서 props.i 👉 (props.i + 1) 로 완성
// 👉 <img src={ 'https:파일주소'+(props.i + 1)+'.jpg'}/>

// ⚡체크포인트 :{'text'+(props.i+1)} 형태

function App18() {

  let [shoes,shoes변경]=useState(data4naming);

  return (
   <div className="App">
    <p className="black-nav">🦄18 map()활용2.Component,props쓰기.(상품목록 Component 만들기 + 반복문)</p>  
    <div >
      //  (2)-1
      <Card shoes={shoes}></Card>  
        <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
          <h4> {shoes[1].title} </h4> 
          <p>{shoes[1].content} & {shoes[1].price}  </p>          
        </div>
        <div >
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="20%" />
          <h4> {shoes[2].title} </h4> 
          <p>{shoes[2].content} & {shoes[2].price}  </p>          
        </div>    
     </div>    
    <div >     
      // (3)-1
      <Card2 shoes={shoes[0]}></Card2>
      <Card2 shoes={shoes[1]}></Card2>
      <Card2 shoes={shoes[2]}></Card2>
    </div>
    <div >     
      // (4)-1 (4)-2
      {
        shoes.map( (a,i)=>{
          return <Card2 shoes={shoes[i]} i={i}></Card2>
             // return <Card2 shoes={a}></Card2>
        }  )
      }      
    </div>
   </div>
    );
 }

 function Card(props){
   return(
    <div>
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="20%" />
      // (2)-2
      <h4> {props.shoes[0].title} </h4> 
      <p>{props.shoes[0].content} & {props.shoes[0].price}  </p>    
    </div>
   )
 }

  function Card2(props){
   return(
    <div >
      //(4)-4
      <img src={"https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg"} width="20%" />
      // (3)-2
      <h4> {props.shoes.title} </h4> 
      <p>{props.shoes.content} & {props.shoes.price}  </p>    
    </div>
   )
 }

// 🦄19 React Router 1: npm.import,BrowserRouter,path=""
// 👉  index.js

// (router 라우터 ((데이터 전송시의 최적 경로를 선택하는 장치)) ) (route 루트. 길)
// React-Router 특징 : 각각 페이지마다 다른 HTML 파일을 보여주는게 아닙니다.
// HTML 내부의 내용을 갈아치워서 다른 페이지처럼 흉내내는 것일 뿐입니다.

// (1)
// 터미널: npm install react-router-dom
// (react-router-dom이라는 공식 라이브러리를 설치해서 이용)

// (2)  👉  index.js
// 0. App.js에 있는 <App> 컴포넌트를 index.html에 꽂아주세요~ 뭐 이런 작업을 시키는 파일이라고 보시면 됩니다.
// <React.StrictMode>
//       <App/> 
//   </React.StrictMode>,
// document.getElementById('root')

// 1. import { BrowserRouter } from 'react-router-dom';

// 2. <BrowserRouter>라는 태그를 추가
// <BrowserRouter>
//    <App/>
// </BrowserRouter>

// 3. <HashRouter>도 사용 가능함 
// 사이트 방문시 URL 맨 뒤에 /#/이 붙은채로 시작합니다.

//(3) Q: / 여기로 접속하면 메인페이지를,/detail로 접속하면 상세페이지를 보여주기
 
// 1. (👉App.js) 👆 import {  Route, Link, Switch } from 'react-router-dom';
//( Link, Switch는 다음시간에 )

// 2.  원하는 곳에 <Route></Route>  , <Route/>태그를 작성합니다.
// 3.  <Route>안에 path와,  path 방문시 보여줄 HTML 을 적으시면 됩니다. 
// 계속 추가 끝없이 가능

// (4-4) 컴포넌트 route하기
// 방법 2가지

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
    <p className="black-nav">🦄19 React Router 1: npm.import,BrowserRouter,path=""</p>

    (//21강에서 배울 내용 Link )
    <nav className="ig_nav">
      <Link to='/'>Home</Link>
      <Link to='/detail'>Detail</Link>
      <Link to='/component'>component</Link>
      <Link to='/component2'>component2</Link>
      <Link to='/main2'>main2</Link>
      <Link to='/detail2'>detail2</Link>
     </nav>
     
    // (3)-2 (3)-3 
    <Route path="/"> <div>메인페이지인데요</div></Route>
    <Route path="/detail"><div>상세페이지인데요</div></Route>
    <Route path="/ㄴㄻㄴㄹㅇ">계속 추가 끝없이 가능</Route>

    // (4-4)
    <Route path="/component2" > <Card3/> </Route>

    <Route path="/component" component={Card3}></Route>    

    // (5)
    <Route exact path="/">메인페이지⭐</Route>

    // (6)-1
    <Route path="/main2">     
      <Jumbotron>
        <h1>Hello, world!</h1>   
     </Jumbotron>
    </Route>

    // (6)-2
    <Route path="/detail2">
        <div className="container">    
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="20%" />
            </div>         
         </div> 
    </Route>    
   </div>
  );
}

// (4-4)
function Card3(){
  return(
  <div> 이것은 Component Card 입니다 🙄</div>
  )
}

// 🦄20 React Router 2: Link, Switch, useHistory,history.goBack,push
//👉 Detail20.js

// (1) Component 함수 만듬

// (3) Link 태그로 페이지 이동버튼 만들기 

//(3-3) ‘react-router-dom’ library 에서 가져온 Link 쓸수 있음.
// 일종의 component.
// html 태그처럼 사용

//(3-4) 페이지 이동버튼으로 바꾸길 원하는 글자들에 <Link> 태그를 감싸보시길 바랍니다.
// 첫글자 대문자
// 그 다음에 to 라는 속성을 이용해서 경로를 적어주시면 페이지 이동버튼이 완성됩니다.

// Link 태그를 사용하고 to 속성을 이용해 경로만 지정해주면 됩니다.
// 어찌보면 <a> 태그 만드는 것과 매우 유사합니다.
 
// 그럼 Detail이라는 글자를 누르면 /detail 경로, Home이라는 글자를 누르면 / 경로로 이동합니다.

//(3-5) 24강에 나오는 내용 : <Nav.Link> 안에 <Link> 쓰면 브라우저 콘솔창에 warning이 뜹니다
// 저번 Router 했을 때부터 뜨는, 
// 콘솔창에 “a태그 안에 a태그 넣으면 안될 것 같은디요” 라고 워닝을 해결해봅시다.

// as라는 것은 react-bootstrap 문법인데 
// 그냥 기본 a태그 대신 사용할 HTML태그 혹은 컴포넌트를 집어넣을 수 있습니다.
// 그래서 Link 태그를 집어넣은 것일 뿐입니다
// as={Link} :  as={Link} 속해있는 태그는 link태그처럼 써달라는 의미

// (4) (5) (6) (7) 👉 Detail20.js (src 폴더 내에 Detail20.js )

// (4)-5 👆 import Detail20_file2 from './Detail20.js'

// (4)-6 src폴더내에 component파일만 모아놓은 폴더를 만들기도 함

// (8) Switch 컴포넌트에 대해 알아보자
// 새로운 Route는 path를 /:id 라고 적었는데, 이게 뭐냐면 URL 파라미터라는 문법인데
// 그냥 / 슬래시 뒤에 모든 문자가 오면 이 Route로 안내해주세요~를 뜻합니다. (다음 시간에 배울 예정)
// 암튼 아무 문자나 넣어도 이 경로로 이동을 시켜주라고 코드를 짜놓았습니다.

// Q. 그럼 /detail로 이동하면 어떤게 보이죠?
// A. (1) <Detail> (2) <div>새로 만든 route입니다</div> 이거 둘다 보여줍니다.
// (왜냐면 리액트 라우터는 그냥 URL 매치되는 것들 전부 다 보여준다니깐요)

// 이런걸 방지하고 싶다, 그냥 한번에 하나의 <Route>만 보여주고 싶다 그러면
// <Route>들을 위에서 import 해온 <Switch> 태그로 감싸면 됩니다.

// (8)-2
//1. 👆 import { Switch } from 'react-router-dom' 추가
//2. <Switch> 태그로  전부 감쌈
//  다 감싸면 이제 여러개의 Route가 매칭이 되어도 맨 위의 Route 하나만 보여줍니다.
// 이걸 응용하시면 이전시간에 겪었던 / 경로 문제도 exact 쓰지않고 해결할 수 있습니다.
// 일반적으로 switch로 감싸고 사용함 (exact사용할 필요 없어짐)


function App20() {
  return (
   <div className="App">
    <p className="black-nav">🦄20 React Router 2: Link, Switch, useHistory,history.goBack,push </p>
    <Nav>
    // (3-2) (3-4)
      <Nav.Link> <Link to='/'>Home</Link></Nav.Link>
      <Nav.Link><Link to='/detail'>Detail</Link> </Nav.Link>

      // (3-5)
      <Nav.Link as={Link} to="/"> Home </Nav.Link> 
      <Nav.Link as={Link} to="/detail"> Detail </Nav.Link> 
    </Nav>
    
    <Route path="/">     
      <Jumbotron>
       <h1>Hello, world!</h1>          
     </Jumbotron>
    </Route>
 
      // (1) Component function
      <Route path="/detail">
        <Card20/>
      </Route>

        // (4) .js
      <Route path="/detail">
        <Detail20_file2></Detail20_file2>     
      </Route>     

      // (8-2)
    <Switch>    
      <Route path="/detail">
        <Card20/>
      </Route>
   
      <Route path="/detail">
        <Detail20_file2></Detail20_file2>     
      </Route>

      //  (8)
      <Route path="/:id">
      <div>아무거나 적었을때 이거 보여주세요.</div>
      </Route>
    </Switch>
   </div>
  );
}

// (1)
function Card20(){
  return(
    <div>
    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="10%" />
    </div>
  )
}

//🦄21 React Router 3: url parameters ":작명". useParams().destructuring 문법.find(). filter()(React Router 3 : URL 파라미터로 상세페이지 100개 만들기)
// 👉Data21파일 , 
// 👉Detail21_file.js
// 👉Detail21_3.js 
// 👉Detail21_4.js 

// URL 파라미터에 대해 알아봅시다.
// 상세페이지 5조 5억개 정도는 한번에 만들어낼 수 있습니다.
// 그래서 우리도 상품 3개에 해당하는 각각의 상세페이지를 만들어주도록 합시다.

// (1)
// 1 Data21.js 파일 만듬
// 2 state 만듬
// 3 Data binding 
// 4 Component props

//(2) state 만들 땐 state를 필요로하는 컴포넌트들 중 가장 최상위 컴포넌트에 보관하시길 바랍니다.
// 그냥 모든 중요한 데이터는 App Component or Redux 파일에 보관...

// (3) Q: 상세페이지 3개 만들기
// /detail/0으로 접속하면 0번째 상품의 상세페이지
// /detail/1으로 접속하면 1번째 상품의 상세페이지
// /detail/2으로 접속하면 2번째 상품의 상세페이지
// 가 출현하게 만들겁니다.
// (왜냐면 일반적인 블로그, 쇼핑몰들도 이렇게 숫자로 페이지들을 구분하니까요.)

// 이런 식으로 3개의 페이지를 만들었습니다. 완성!
// 하지만 이거 너무 반복적이죠 반복문을 돌리고 싶은 충동도 생기고요.
// 근데 URL 만드실 땐 반복문은 안쓰고 보통 URL 파라미터 문법을 이용해 축약을 시켜줍니다.

// (4) url 파라미터  (url parameters) ":id작명"
// : 뒤에 아무이름 가능. 
// : 이거 콜론기호를 쓰시면 되는데, ':id작명' 자리에 아무 문자나 입력하면 <Detail> 컴포넌트를 보여주세요~ 입니다.
// 그럼 이제 /detail/1234 아무거나 입력해도 <Detail> 컴포넌트를 보여줍니다.

// 파라미터는 2개 3개 몇개든 추가할 수 있습니다. /detail/:id/:작명2 이런 식도 가능합니다.
// 그럼 /detail/0 혹은 /detail/1 이렇게 접속하면 이제 상세페이지가 잘 뜨죠
// 근데 항상 같은 상품명이 뜨는게 문제입니다. 이걸 해결해봅시다.

// (6)
// 각각 URL 접속시 상품명을 다르게 보여줘야 하는데..
// 지금은 어떤 URL로 접속하든 항상 0번째 상품명만 보이죠?
// /detail/0으로 접속하면 0번째 상품명
// /detail/1으로 접속하면 1번째 상품명
// 이 보여야합니다.
// Detail 페이지에서 데이터바인딩을 이렇게 하면 되겠죠
// 👉Detail21_file.js

// (7) 👉Detail21_3.js

// (8) (9) 👉 Detail21_4.js /  find() 라는 ES6 신문법

function App21() {

// (1)-2 (2)
  let [shoes,shoes변경] = useState(Data21);

  return (
   <div className="App">
    <p className="black-nav">🦄21 React Router 3: url parameters ":작명". useParams().destructuring 문법.find(). filter() (21 React Router 3 : URL 파라미터로 상세페이지 100개 만들기)</p>

    <nav className="ig_nav">
      <Link to='/'>Home</Link>
      <Link to='/detail'>Detail</Link>
      <Link to='/detail/0'>Detail0</Link>
      <Link to='/detail/1'>Detail1</Link>
      <Link to='/detail/2'>Detail2</Link>
     </nav>
    
      <Route path="/">          
        <h1>Hello, world!</h1>  
      </Route>

    <switch>
      <Route path="/detail">
        // (1)-3 (1)-4
        <Detail21_file shoes={shoes}/>   
      </Route>

      // (3)
      <Route path="/detail/0">
        <Detail21_file shoes={shoes}/>   
      </Route>

      <Route path="/detail/1">
      <Detail21_file shoes={shoes}/>   
      </Route>

      <Route path="/detail/2">
        <Detail21_file shoes={shoes}/>   
      </Route>

      // (4) (6) (7)
      <Route path="/detail/:id">
        <Detail21_file shoes={shoes}/>   
      </Route>
      // (7)
      <Route path="/detail/:id">
        <Detail21_3 shoes={shoes}/>   
      </Route>

      // (8) Detail21_2
      <Route path="/detail/:id">
        <Detail21_4 shoes={shoes}/>   
      </Route>
    </switch>
   </div>
  );
}

// 🦄22 styled-components를 이용한 class없는 CSS스타일링
// 👉 Detail22_file

// 그냥 일반 CSS가 편함
// 공부x 👉 입사해서 필요해지면 공부


function App22() {

// 🌈(1-2)
  let [shoes,shoes변경] = useState(Data21);

  return (
   <div className="App">
    <p className="black-nav">🦄22 styled-components를 이용한 class없는 CSS스타일링</p>

    <nav className="ig_nav">
    <Link to='/'>Home</Link>
    <Link to='/detail'>Detail</Link>
    </nav>

    👉  Detail22_file.js
      <Route path="/detail">
        <Detail22_file />   
      </Route>
   </div>
  );
}

//🦄 23 SASS를 쓰자 (SASS 문법 10분 총정리)
// 👉 Detail23_file.js
// 👉 Detail23.Sass
// 👉_reset23.scss

// SASS 문법으로 작성한 뒤에  -👉 CSS로 컴파일
// node-sass라는 라이브러리만 설치하시면 CSS로 컴파일 알아서 해줌
// ⚡설치: 터미널 에서 npm install node-sass  / yarn add node-sass

function App23() {

    let [shoes,shoes변경] = useState(Data21);
  
    return (
     <div className="App">
      <p className="black-nav">🦄23 SASS를 쓰자 (SASS 문법 10분 총정리)</p>
  
      <nav className="ig_nav">
      <Link to='/'>Home</Link>
      <Link to='/detail'>Detail</Link>
     </nav> 

        👉 Detail23_file.js
        👉 Detail23.Scss  
       <Route path="/detail">
        <Detail23_file />   
      </Route>   
     </div>
    );
  }

  // 🦄24 Lifecycle Hook(예전문법)(componentDidMount(.)) useEffect(신문법)
  //  👉🦄 Detail24_file.js  

function App24() {

    let [shoes,shoes변경] = useState(Data21);
  
    return (
     <div className="App">
        <p className="black-nav">🦄24 Lifecycle Hook(예전문법)(componentDidMount(.)) useEffect(신문법)</p>
        <nav className="ig_nav">
          <Link to='/'>Home</Link>
          <Link to='/detail'>Detail</Link>
        </nav>  

            👉🦄 Detail24_file.js  
          <Route path="/detail">
            <Detail24_file />   
          </Route>     
      </div>
    );
  }

  // 🦄25 useEffect 숙제 풀이 & 나머지 기능
  //  👉🦄 Detail25_file.js  

function App25() {

    let [shoes,shoes변경] = useState(Data21);
  
    return (
     <div className="App">
        <p className="black-nav">🦄25 useEffect 숙제 풀이 & 나머지 기능</p>  
         <nav className="ig_nav">
            <Link to='/'>Home</Link>
            <Link to='/detail'>Detail</Link>
          </nav>      

          👉🦄 Detail25_file.js  
        <Route path="/detail">
          <Detail25_file />   
        </Route>         
     </div>
    );
  }

  // 🦄26 Ajax.axios.get(URL).then(.).catch(.).fetch(URL).then(.) (리액트에서의 Ajax 요청방법 & Ajax는 무엇인가)

// ● Ajax는 서버에 새로고침없이 요청을 할 수 있게 도와주는 일종의 자바스크립트 코드
// 서버는 누군가 요청을 하면 데이터를 갖다주는 프로그램일 뿐
 
// GET, POST 이런 요청방법이 있습니다.
// GET : 데이터, 웹페이지 같은걸 읽고싶을 때 하는 요청  : 웹브라우저 검색
// POST : 데이터를 서버로 보내고 싶을 때 하는 요청 : 로그인

// ●Ajax는 
// 1. jQuery Ajax를 쓰든가,
// 2. axios 설치해서 쓰든가, 
// 3. 쌩자바스크립트 fetch()를 쓰든가 하시면 됩니다.
// 근데 리액트 개발환경에선 axios 혹은 fetch()를 많이 사용합니다.
// 우린 더 호환성이 좋고 참고할 문서도 많은 axios를 설치해서 이용합시다.

// (2) 터미널에 👉npm install axios  / yarn add axios
// 상단에 👆 import axios from 'axios';

// (3) button, onClick 준비


// (4) axios.get() 이라고 작성하면 GET요청을 새로고침 없이도 몰래 할 수 있습니다.
// GET요청을 할 목적지 (URL)은 괄호안에 문자형태로 적어주시면 됩니다.
// https://codingapple1.github.io/shop/data2.json
// GET 요청 끝! 그럼 이제 버튼을 누를 때마다 데이터를 몰래 가져오네요.
// 진짜 상품데이터가 오는지 확인하고 싶으면 이걸 그대로 브라우저 주소창에서 GET 요청 해보시면 됩니다.
// 브라우저 주소창에 이 URL을 복붙하면 자료 3개가 나오죠?

// (5) 가져온 데이터를 출력하고 싶으면 하단처럼 작성합니다.
//  .then(()=>{ 요청성공시실행할코드 })
//  .catch(()=>{ 요청실패시실행할코드 })
 
//  .get() 함수 바로 뒤에 쩜찍어서 저렇게 두개의 함수를 붙일 수 있습니다. 
//  각각 요청성공/실패시 실행할 코드를 담을 수 있습니다. 
//  더보기를 눌렀을 때 성공/실패메세지를 띄우고 싶다면 다 저런 함수안에 담으시면 됩니다.

// onClick = { ( ) => {axios.get(URL).then(콜백함수).catch(콜백함수)} }

// (5-2) 서버 없는 주소 때..console.log('실패했음');

// (6) 요청 성공시 데이터를 출력해보고 싶으면 하단과 같이 작성합니다.
// then 안의 콜백함수 안에 파라미터를 추가하면 그게 받아온 데이터입니다.
// result ('result' x) : 받아온 모든 코드 출력 

// (6-2)
// result ('result' x) : 실제로 받아온 데이터만 출력 

//  (7) vanilla JS 문법. fetch()
// fetch(요청할URL).then() 이렇게 거의 똑같이 사용가능합니다.
// 하지만 가져온 자료가 JSON이라면 object로 자동 변환이 안됩니다.

// (참고)  JSON 
// 우리가 요청한 데이터는 array/object 자료가 아닌 JSON이라는 자료형입니다.
// 따옴표가 다 쳐있죠? 왜냐면 서버와 통신할 때는 텍스트만 전송할 수 있습니다.
// 그래서 텍스트럼 보이게 하기 위해서 Object에 따옴표를 다 친겁니다.
// 그걸 전문용어로 JSON이라고 합니다.

// JSON은 Object 자료형처럼 어쩌구.title 이런 식으로 정보를 뽑지 못해서, JSON자료는 Object로 변환을 해주어야합니다.

// axios라이브러리 쓰시면 JSON 자료를 가져와도 지가 알아서 따옴표를 제거한 Object로 자동으로 변환해줌 (편함)
//  fetch()는 그런거 안해줍니다. undefined 뜸

function App26() {

    let [shoes,shoes변경] = useState(Data21);
  
    return (
     <div className="App">
      <p className="black-nav">🦄26 Ajax.axios.get(URL).then(.).catch(.).fetch(URL).then(.)    (리액트에서의 Ajax 요청방법 & Ajax는 무엇인가)</p>

      // (3)
      <button  onClick={()=>{  }}>더보기</button>

      // (4) console확인👉👉
      <button  onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json')
         // (5)
        .then(()=>{
          console.log('성공했음');
        })
        .catch(()=>{
          console.log('실패했음');
        })  
        }}>더보기</button>

      // (5-2)
      <button  onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2222222222222.json')        
        .catch(()=>{
          console.log('실패했음');
        })  
        }}>더보기</button>
       
      <button  onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json')
         // (6)
         .then((result)=>{  console.log(result); })
        }}>더보기</button>
     
      <button  onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json')
         .then((result)=>{
              // (6-2)
          console.log(result.data);
        })
        }}>더보기</button>
        
        // (7)
        <button  onClick={()=>{
          fetch('https://codingapple1.github.io/shop/data2.json')
           .then((result)=>{              
            console.log(result.data);
          })
          }}>더보기</button>
     </div>
    );
  }

//🦄 27 리액트에서의 Ajax 요청방법 2 & 숙제풀이
// 👉 Detail27_file.js

// 숙제해설 : 더보기 버튼을 클릭하면, 상품레이아웃 3개 추가하기 

// (1)
// 저번 시간에 상품 데이터 3개를 요청하는건 완료했습니다. 
// 이제 그 데이터로 레이아웃을 만들어봅시다.
// 상품레이아웃은 <Card> 컴포넌트 + map 반복문으로 만들었습니다.
//  shoes라는 state 갯수 만큼 <Card> 레이아웃을 생성해주세요~ 라고 코드를 짰었습니다.

// HTML 생성은 생각할 필요 없습니다.
// “shoes 라는 state에 데이터 몇개를 추가해주세요~” 데이터 조작
// 그럼 state에 데이터 3개가 추가되면 <Card> 레이아웃은 알아서 6개가 될테니까요.
// 리액트 환경에서 여러분이 할 일은 그냥 데이터 조작입니다. 그럼 HTML은 알아서 바뀜 ㅅㄱ

// (2)
// 그래서 더보기 버튼을 클릭하면
// 1. ajax 요청으로 데이터 3개를 가져오고
// 2. ajax 성공하면 shoes라는 state에 추가하도록 합시다.

//  then 함수 안에서 ajax가 성공했을 때의 코드를 작성하실 수 있습니다.
// 거기서 shoes변경() 함수로 shoes라는 state에 데이터를 추가했습니다.

// ...연산자는 괄호를 벗겨줌

// (3)
// 이번엔 state 데이터를 변경하기 위해 사본을 하나 생성하는게 아니라, 약간 한번에 처리를 해봅니다.

// […shoes, …result.data ]
// 1. shoes라는 기존 state 데이터를 괄호 벗겨서 여기 넣어주시고,
// 2. result.data라는 ajax 성공시 받아오는 데이터도 괄호 벗겨서 여기 넣어주세요
// 3. 그리고 이걸 전부 [ ] 대괄호로 감싸서 array를 만들어주세요

// 이러면 기존 state 사본생성 없이도 원하는 데이터를 쉽게 추가 가능

// (지금 Array 데이터를 다루고 있지만 Object 데이터들도 마찬가지로 … 괄호벗기기 연산자 사용가능합니다)

// (3-2)
// shoes 에 .... 붙이면 데이터만 남아서 [ { }, { }, { } ]
// result.data  에 .... 붙이면 데이터만 남아서 [ { }, { }, { } ]

//  shoes변경 [ { }, { }, { } , { }, { }, { } ] 이렇게 데이터가 남음

// (3-3)
// 버튼 클릭하면, 데이터 가져와서, 추가된버전으로  shoes state 변경시킴
// […shoes ] 👉 shoes변경 👉 […shoes, …result.data ]

// (3-4)
// Q. 버튼을 2번재 클릭할때, 새로운 url로 데이터 요청하고 싶다면?
// A. 버튼 누른 횟수를 변수나 state에 저장 후 
// 버튼을 1회 누르면 data2.json, 
// 2회누르면 data3.json 이 경로로 요청하도록 코드를 바꿔주시면 되겠네요.

// Q. 더보기로 보여줄 상품이 3개 밖에 없습니다. 근데 사용자가 버튼을 또 클릭하면 어쩌죠
// A. 보여줄 상품의 마지막에 도달했을 시 버튼을 숨기거나 하시면 됩니다.

// Q. 실패했을 경우 어쩌죠 
// A. catch() 함수 안에 실행 원하는 코드를 담으시면 됩니다. “요청실패시 사용자에게 알림창 UI를 보여줍니다~” 이런 코드도 괜찮겠네요.

// (4) 👉 캡쳐정리 확인
// Q: 버튼 클릭때 ' 로딩중 ' 띄우기 
// A: 클릭한때  '로딩중html' 띄우게함
// axios서버 받거나,실패시 '로딩중html' 안보이게 함
// 이전시간에 배운 리액트 html미리 만든 후,  if문 활용하기 문법 

// (5) post : 서버에 데이터 보내기
// axios.post('url',(보낼 데이터));

// (6) 👉 Detail27_file.js

function App27() {

  let [shoes,shoes변경] = useState(Data21);

  return (
   <div className="App">
    <p className="black-nav">🦄27 리액트에서의 Ajax 요청방법 2 & 숙제풀이</p>

    <nav className="ig_nav">
    <Link to='/'>Home</Link>
    <Link to='/detail'>Detail</Link>
   </nav>

    <switch>
     <Route path="/"></Route>
      <Route path="/detail">
        <Detail27_file />   
      </Route>   
    </switch>  
    
    // (1)
    <div className="container">
      <div className="row">
      {
        shoes.map( (a,i)=>{
          return <Card2 shoes={shoes[i]} i={i}></Card2> 
        }  )
      }
      </div>
    </div>

    <button  onClick={()=>{
      // (3-4)
      axios.get('https://codingapple1.github.io/shop/data2.json')
       .then((result)=>{
           console.log(result.data);
          //  (2) (3) (3-2) (3-3)
           shoes변경([...shoes,...result.data]);
      })
      .catch(()=>{
        console.log('실패했음');
      })  

      // (5)
      // axios.post('url',( id : 'codingapple', pw: 1234));
      // .then( (result)=>{}  )
      // .catch( ()=>{}  )
      }}>더보기</button>   
   </div>
  );
}

// 🦄28 Component를 3단계로 만들면 state 전달은 어떻게 하죠? props 두번 
// <App> 👉 <Detail> 👉 <Info>
// 이렇게 컴포넌트를 여러개 만들어놨는데 <App>에 있는 state 데이터를 <Info>가 쓰거나 변경하고 싶으면 어떻게 하냐는 소리입니다.

// 결론부터 말하자면 App에서 Detail, 그리고 Detail에서 Info로 state를 전송하면 됩니다.
// = 그냥 props문법 두번 쓰시면 됩니다.
// 하위 컴포넌트들이 상위 컴포넌트의 state를 변경하고 싶을 때도 state변경함수를 props로 전달만 잘 해주시면 됩니다

// (1)
// <App>재고데이터 가져와서 <Info>에 표시하기
// 재고데이터를 state에 저장해서 하나 만들어보도록 합시다.

// (1-2)
// 그냥 예제기 때문에 대충 [10,11,12] 이런 데이터를 저장하면 될듯요. (각각 상품 0,1,2의 재고데이터입니다)
// let [재고, 재고변경] = useState([10,11,12]);

// (1-3) (1-4) 👉 Detail28_file

// (1-5)
// props로 재고라는 state 데이터를 2번 전송했습니다.
// <App> 👉 <Detail> 👉 <Info> 이런 순서로요.
// 그럼 이제 Info라는 컴포넌트 내에서도 재고라는 state를 사용가능합니다.

// 하위 컴포넌트가 많으면 많아질 수록 props의 양이 증가합니다.
// 지금 props로 보낼게 하나라 그렇지 수십개면 어떡합니까.
// 그러니 컴포넌트 만들땐 각오하고 만드는게 좋습니다. (props hell)

// (2) (2-2) 👉 Detail28_file

// (3) 오늘의 교훈 : 함수든 변수든 부모가 가진걸 자식컴포넌트가 사용하려면 항상 props로 전송해서 쓸 수 있습니다.
// 이게 귀찮으면 컴포넌트를 많이 만들지 않으면 되겠습니다.
// 혹은 나중에 배울 Context 문법 혹은 redux를 사용하면 됩니다.

function App28() {

  let [shoes,shoes변경] = useState(Data21);
  
  // (1-2)
  let[재고state,재고state변경] = useState([10,11,12]);

  return (
   <div className="App">
    <p className="black-nav">🦄28 Component를 3단계로 만들면 state 전달은 어떻게?props 두번 </p>
    <p className="black-nav">🦄29 👉 캡쳐정리</p>

    <nav className="ig_nav">
      <Link to='/'>Home</Link>
      <Link to='/detail'>Detail</Link>
     </nav>

    <switch>
     <Route path="/"></Route>
      <Route path="/detail">
      // (1-4) (2-2)
        <Detail28_file shoes={shoes} 재고state={재고state} 재고state변경={재고state변경}/>   
      </Route>   
    </switch>  
    
   </div>
  );
}

// 🦄29 만든 리액트 사이트 build & Github Pages로 배포해보기
// 👉 캡쳐 정리
// npm run build / yarn build

// 1. 깃헙에 저장소 만듬 + 배포 주소 확인
// 2. 👉 package.json 에 깃헙에 만든 저장소 배포 주소 추가
// "homepage": "https://ig-kim2511.github.io/test1024_2/"

// 예시:
// {
//  {~~~},
//  {~~~},
// "homepage": "https://ig-kim2511.github.io/test1024_2/"
// }

// 3. npm run build
// 4. build명령으로 생긴  build폴더 내용을 업로드 (폴더x, 폴더안의 내용만)

function App29() {}


// 🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄
// 🦄 30 컴포넌트 많을 때 props 쓰기 싫으면 Context API 
// props 전송 없이도 하위 컴포넌트들 끼리 state 값들을 똑같이 공유할 수 있습니다.
// 리액트 기본 문법 Context API 사용법에 대해 알아봅시다.
// (물론 중첩된 컴포넌트가 몇개 없으면 props가 가장 간단하고 좋습니다)
// 이게 더 복잡해서, 선생님은 그냥 props 씀. 참고삼아 알아두자.

// (2)
// 1. 일단 같은 state 값을 공유하고 싶으면 context부터 만드십시오. 
// createContext()라는 함수...변수로 만듬
// 여러개 만들 수 있음
// function 바깥에 만듬

// 2. 아까만든 특별한 컴포넌트로 state 값 공유를 원하는 컴포넌트들을 <범위></범위>로 전부 감쌉니다.
// 그리고 value={state이름} 이렇게 공유할 state를 집어넣으면 됩니다. 끝!
// 그럼 이제 <범위></범위> 안에 있는 모든 HTML & 컴포넌트는 재고 state를 이용가능합니다.

// 3. state를 사용하고 싶으면 useContext() 라는 훅을 이용해서 사용을 원하는 context를 불러오셔야합니다.
// 위에서 쓴건 재고context에 들어있는 state를 변수로 저장해 쓰겠습니다~ 라는 문법입니다.
// 그럼 이제 let 재고라는 변수엔 아까 지정해놨던 재고라는 state 데이터가 그대로 들어있습니다.
// 여기까지가 props 전송없이 state를 쓰는 법이라 보시면 되겠습니다.
// (그리고 useContext 훅을 쓰려면 상단에 ‘react’ 로부터 import 해오시면 됩니다. 쓰는순간 import에 자동 추가됨)

// 4. 데이터바인딩. [ ]array활용

// (3)
// Detail.js 라는 곳에서 재고라는 state를 쓰고싶으면 ,  그냥 똑같이 하시면 됩니다. 
// 1,2 : 똑같음.  
// 3: Route 감싸는법. 확인 ↓ 

// 4 근데 Detail.js에서 3번 말대로 useContext(범위)를 쓰려고 했으나, 재고context is not defined 라는 에러가 뜨네요.
// 왜냐면 재고context 라는 변수는 App.js에 있으니까요.  
// 변수를 App.js에서 export하고 Detail.js에서 import 해주시면 됩니다. 각각 export와 import 하나씩 추가해주었습니다.

// (2)-1 . (3)-1
let 재고context = React.createContext();

// (3)-4
export let 재고context2 = React.createContext();

function App30() {

  let [shoes,shoes변경] = useState(Data21);
    
  // (2)-2
  let[재고state,재고state변경] = useState([10,11,12]);

  return (
   <div className="App">
    <p className="black-nav">🦄30 컴포넌트 많을 때 props 쓰기 싫으면 Context API  </p>


    <nav className="ig_nav">
      <Link to='/'>Home</Link>
      <Link to='/detail'>Detail</Link>
     </nav>

  // (2)-2. (3-2)
      <재고context.Provider value={재고state}>
        <div className="row">
        {
          shoes.map( (a,i)=>{       
            return  <Card30 shoes={shoes[i]} i={i}></Card30>        
          }  )
        }
        </div>
      </재고context.Provider>


      <switch>
     <Route path="/"></Route>
      <Route path="/detail">
      // (3)-3
      <재고context2.Provider value={재고state}>
        <Detail30_file shoes={shoes} 재고state={재고state} 재고state변경={재고state변경}/>
        </재고context2.Provider>   
      </Route>   
    </switch>  
    
   </div>
  );
}

function Card30(props){
  // (2)-3
  let 재고c = useContext(재고context);
  return(
   <div className="col-md-4">
   <img src={"https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg"} width="100%" />
   <h4> {props.shoes.title} </h4> 
   <p>{props.shoes.content} & {props.shoes.price}  </p>   

   // (2)-4
   <div className="useContext">
    <p>재고context: {재고c}👻</p>
    <p>재고context: {재고c[1]}👻</p>
    <p>재고context: {재고c[props.i]}👻</p>
   </div>
 </div>
  )
}

// 🦄31 Tab 만들기와 리액트에서의 애니메이션 (react-transition-group)
// 👉👉 Detail31.js

function App31() {

  let [shoes,shoes변경] = useState(Data21);
  
  // (1-2)
  let[재고state,재고state변경] = useState([10,11,12]);

  return (
   <div className="App">
    <p className="black-nav">🦄31 Tab 만들기와 리액트에서의 애니메이션 (react-transition-group)</p>
   
    <nav className="ig_nav">
      <Link to='/'>Home</Link>
      <Link to='/detail'>Detail</Link>
     </nav>

    <switch>
     <Route path="/"></Route>
      <Route path="/detail">
        <Detail31_file shoes={shoes} 재고state={재고state} 재고state변경={재고state변경}/>   
      </Route>   
    </switch>  
    
   </div>
  );
}
// 🦄32 Redux 1 : props 싫으면 쓰세요
// 👉👉 Cart32.js
// 👉👉 index.js

//(1) Cart32.js만들고, import, export , route 

// (3)
// 데이터를 보관하기 위한 Redux 설치/셋팅 
// redux를 이용하려면 라이브러리 2개를 설치하셔야합니다.  
// (redux, react-redux 두개의 라이브러리입니다)

// redux는 데이터를 엄격하게 관리하는 기능, 
// react-redux는 리덕스를 리액트에서 쓸 수 있게 도와주는 기능을 제공합니다
// 터미널 : npm install redux react-redux /  yarn add redux react-redux  둘 중 하나 하시면 됩니다.

//(4) 👉👉 index.js

function App32() {

  let [shoes,shoes변경] = useState(Data21);
  

  let[재고state,재고state변경] = useState([10,11,12]);

  return (
   <div className="App">
    <p className="black-nav">🦄32 세계최고로 쉬운 Redux 1 : props 싫으면 쓰세요</p>
  
      
      <nav className="ig_nav">
        <Link to='/'>Home</Link>
        <Link to='/detail'>Detail</Link>
        <Link to='/cart'>cart</Link>
    </nav>

       //(1)
      <Route path="/cart">
        <Cart32></Cart32>
      </Route>   
    
   </div>
  );
}

// 🦄33 Redux 2 : reducer/dispatch로 데이터 수정하는 법 
// 👉👉 Cart33.js
// 👉👉 index.js

function App33() {

  let [shoes,shoes변경] = useState(Data21);
  let[재고state,재고state변경] = useState([10,11,12]);

  return (
   <div className="App">
    <p className="black-nav">🦄33 Redux 2 : reducer/dispatch로 데이터 수정하는 법</p>
    <nav className="ig_nav">
    <Link to='/'>Home</Link>
    <Link to='/detail'>Detail</Link>
    <Link to='/cart'>cart</Link>
</nav>
     
      <Route path="/cart">
        <Cart33></Cart33>
      </Route>   
    
   </div>
  );
}

// 🦄34 Redux 3 : state와 reducer가 더 필요하면
// 👉👉 Cart34.js
// 👉👉 index.js

function App34() {

  let [shoes,shoes변경] = useState(Data21);
  let[재고state,재고state변경] = useState([10,11,12]);

  return (
   <div className="App">
    <p className="black-nav">🦄34 Redux 3 : state와 reducer가 더 필요하면</p>    
    <nav className="ig_nav">
      <Link to='/'>Home</Link>
      <Link to='/detail'>Detail</Link>
      <Link to='/cart'>cart</Link>
    </nav>     
      <Route path="/cart">
        <Cart34></Cart34>
      </Route>       
   </div>
  );
}
// 🦄35 Redux 4 : dispatch할 때 데이터 실어보낼 수 있음
// 👉👉 index.js
// 👉👉 Detail35.js


function App35() {

  let [shoes,shoes변경] = useState(Data21);
  let[재고state,재고state변경] = useState([10,11,12]);

  return (
   <div className="App">
    <p className="black-nav">🦄35 Redux 4 : dispatch할 때 데이터 실어보낼 수 있음</p>    
    <nav className="ig_nav">
    <Link to='/'>Home</Link>
    <Link to='/detail'>Detail</Link>
    <Link to='/cart'>cart</Link>
    </nav>     
      <Route path="/cart">
        <Cart34></Cart34>
      </Route>       
      <Route path="/detail">
      <Detail35_file shoes={shoes} 재고state={재고state} 재고state변경={재고state변경}/>   
    </Route>   
   </div>
  );
}
// 🦄36 장바구니 기능 완성하기 - 일단 지나쳤던 코딩 마무리
// 👉👉 캡쳐 확인
// 👉👉 index.js
// 👉👉 Detail35.js
// 👉👉 Cart36.js

// ⚡(1) 메인페이지의 <Card>를 클릭, 상세페이지 이동시키자
// 이거 어떻게 합니까. 그냥 router 시간에 배웠던거 활용하면 되겠죠?
// history.push(‘/detail’) 이런거 쓰면 페이지 이동된다고 했으니

// 1. <Card> 써있는 곳에다가 onClick 일 때 저거 동작시키면 되겠네요? - 안됨
// 왜냐면 <컴포넌트>는 div가 아니라 JS이라서, onClick 속성을 달아도 동작안됨

// 2. 그냥 <Card> 컴포넌트를 정의한 곳으로 가서 div에 직접 onClick을 사용.

// 3. 근데 지금은 모든 <Card> 컴포넌트를 클릭하면 /detail/0 으로 이동시키라고 하드코딩 해놨는데

// 4. 이걸 약간 동적으로 바꾸면.. /detail 뒷부분에 props.shoes.id를 더했습니다.
// Card 컴포넌트에서 쓰는 props 중에 shoes라는 이름의 props, 거기에 저장된 id 항목을 더해주세요
// 정해진 id따라서 페이지 이동

// 현재 사용중인 3개의 <Card>에 보내지는 props.shoes.id는 각각 0,1,2 이런 식으로 될테니
// 그럼 이제 각각 /detail/0, /detail/1 이렇게 다른 페이지로 이동시켜주겠군요.
// ⭐뭔말 하는지 모르겠으면 위의 코드해석하려하지말고, <Card>안에 있는 props부터 콘솔창에 출력해봅시다.

//(1) Apps.js

// <Card36  onClick={}></Card36>  👉 ⊗

// function Card(props){
//   let history = useHistory();
//   return(
//     <div onClick={()=>{ history.push('/detail/'+ props.shoes.id) }}>gogo</div>
//   )
// }


// ⚡(2) 장바구니에 있는 + 버튼을 누르면 지금 맨 위의 첫째 상품의 수량만 ++ 되고 있습니다.
// 고쳐보도록 합시다. 
// redux를 사용하고 있다면 여러분이 고쳐야할 곳은 … 90% 확률로 reducer 내부입니다.

// (2)-1  Cart.js
// 버튼에서 dispatch할 때 {데이터 : a.id } 라는 오브젝트도 함께 전달되게 만들어놨습니다.
// a.id는 그냥 버튼 주변에 있던 상품의 id입니다. (전체코드는 영상 6:18 참고)

// (2)-1
// <button onClick={ ()=>{ props.dispatch(type : '수량증가' , 데이터: a:id)} }> + </button>

// (2)-2 index.js
// 이제 보낸 데이터를 가지고 아까 하려던거 이거 
// copy[방금 누른 +버튼 옆의 상품번호].quan++
// 이렇게 reducer 내부를 수정해봅시다.

// function reducer(state = 초기값, 액션){
//   if (액션.type === '수량증가') {
//     let copy = [...state];
// (2)-2
//     copy[액션.데이터].quan++;
//     return copy
//   } }


//⚡(3). 주문하기버튼 누르면 진짜 페이지 내의 상품을 장바구니에 추가하기
//(3)-2 이제 주문하기를 누를 때 마다 , 찾은상품.id / 찾은상품.name이라는 실제 페이지내의 상품데이터가 redux store에 저장됩니다.

//(3)-2  Detail.js
// <button onClick={()=>{ props.dispatch( {type:'항목추가',데이터:{id:찾은상품.1, name:찾은상품, quan:1}} )}}>주문하기</button>

//⚡(4). 같은 상품을 계속 주문하면 항목추가 X 수량증가 O
// “{액션.데이터}이거 안의 id를 기존 state에 있던 상품들의 id와 비교해서.. id가 같은게 이미 있다면 push() 하지말고 그 상품의 quan만 1 증가시켜주세요”

// (4)-2
// 특정 값이 array 안에 있는지 찾고 싶으면 자바스크립트 기본함수 중에 findIndex() 라는게 있습니다.
// state라는 array 자료에 액션.데이터에 있던 id가 있는지 찾고 싶으면
// let 몇번째있니 = state.findIndex( (a)=>{ return a.id === 액션.데이터.id } )
// a는 state 안에 있던 하나하나의 자료 {} 를 의미하고
// 이 자료안의 id를 === 액션.데이터.id와 비교하는겁니다.
// 그레서 맞는게 있으면 그게 몇번째인지를 이 자리에 남겨줍니다.
// (그 숫자를 변수에 저장해서 쓰시면 됩니다)

// (4)-3 “id가 이미 있으면 그거의 상품수량만 1 증가시켜주세요~” 라는 간단한 if/else 문. 

// index.js
// let 초기값 =
// [ {id : 0, name : '멋진신발', quan : 2}, 
// { id : 1, name : '멋진신발22', quan : 3 } ];

// function reducer(state = 초기값, 액션){
// if(액션.type ==="항목추가"){
// (4)-2
//   let found = state.findIndex((a)=>{return a.id === 액션.데이터.id});
// (4)-3
//   if(found >=0){
//     let copy = [...state];
//     copy[found].quan++;
//     return copy

//   }else{
//     let copy = [...state];
// copy.push(액션.데이터);
// return copy

//   }


// }else if(){
//   let copy = [...state];
//   copy[액션.데이터].quan++;
//   return copy
// }else if(){
//   let copy = [...state];
//   copy[액션.데이터].quan--;
//   return copy

// }else{
//   return state
// }

// }

// 🦄🦄🦄🦄🦄🦄
// 🦄40 PWA : Progressive Web App 발행하기
// 👉 캡쳐본 확인

// (1)
// index.js에서 serviceWorker.register();
// npm run build

// (2)
// 👉 build/manifest.json
// 👉 build/precache-manifest.js
// 👉 build/service-worker.js

// (2)-1 build/manifest.json
// {
//   "version" : "여러분앱의 버전.. 예를 들면 1.12 이런거",
//   "short_name" : "설치후 앱런처나 바탕화면에 표시할 짧은 12자 이름",
//   "name" : "기본이름",

//   "icons" : { 여러가지 사이즈별 아이콘 이미지 경로 },
// 이미지 사이즈/브라우저 사이즈/os/ 별로
// 각기 이미지 설정
// 이미지 경로
// 구글검색  , 튜토리얼 참고해서 설정

//   "start_url" : "앱아이콘 눌렀을 시 보여줄 메인페이지 경로",
//   "display" : "standalone 아니면 fullscreen",
//   "background_color" : "앱 처음 실행시 잠깐 뜨는 splashscreen의 배경색",
//   "theme_color" : "상단 탭색상 등 원하는 테마색상",
// }


//(2)-2  👉 build/service-worker.js

//  앱은 하드에 이미 설치되어 있는걸 그대로 가져와서 씁니다
// 이걸 흉내내도록 도와주는 파일이 바로 service-worker 라는 파일입니다.

// 이 파일에 설정을 잘 해주면 이제 여러분의 웹앱을 설치했을 때 어떤 CSS, JS, HTML, 이미지 파일이 하드에 설치될지 결정할 수 있습니다.

// 그럼 이제 다음에 앱을 켤 때마다 서버에 CSS,JS,HTML 파일을 요청하는게 아니라 Cache Storage에 저장되어있던 CSS,JS,HTML 파일을 사용하게 됩니다.

// (그럼 이제 오프라인에서도 사용이 가능해지는거죠)
// 설정은 이미 되어있습니다.
// precache-manifest 라는 파일에 어떤 파일을 설치할지 다 경로가 적혀있고
// 그걸 service-worker.js에서 가져와서 사용하고 있습니다.


// (2)-3 👉 build/precache-manifest.js

// 필요하면 precache-manifest 파일만 조금 건드셔서 마음에 안드는 파일은 제거하시면 되고요. 
// 그냥 쌩으로 service worker 파일을 만들고 싶다면 
// 구글 공식 튜토리얼이나 크롬브라우저 권장 튜토리얼을 참고하십시오.
// service worker 제작에 필요한 문법이 따로 있고 그걸 학습하셔야합니다. 
// (공식 튜토리얼) https://developers.google.com/web/fundamentals/primers/service-workers
// (샘플) https://googlechrome.github.io/samples/service-worker/basic/


// (3)
// 👉 node_modules/react-scripts/config/webpack.config.js 
// 나의 PWA를 커스터마이징하려면
// 지금 PWA 발행이 쉽고 간단한 이유는 구글의 workbox 라는 라이브러리 덕분입니다.
// 이게 create-react-app 설치할 때 함께 설치되었기 때문입니다.
// 그래서 PWA 발행방식 같은걸 커스터마이징 하고싶으면 workbox 사용법을 익히셔야하는데
// 구글 직원들이 써놓은 개발문서 같은거 보면 매우 불친절하고 어렵습니다. 

// 그래서 빠르게 커스터마이징 방법 하나만 알려드리겠습니다. 
// Q. 하드에 설치할 파일 중에 HTML을 제외하고 싶다면?
// 이런 경우 많습니다. HTML 파일은 너무 자주 변해서 하드에 저장해놓기 싫다면 여길 수정하시면 됩니다.

// 여러분 프로젝트 폴더 내의 
// node_modules/react-scripts/config/webpack.config.js 파일을 찾으시면 됩니다. 
// 거기 하단 쯤에 보면 이런 코드가 있습니다. 
// "new WorkboxWebpackPlugin.GenerateSW({ 어쩌구~   "

// build 할 때 index.html 파일을 캐싱목록에서 제외해주게 됩니다.
// 오늘도 service-worker 쉽게 만들어주는 구글신님께 감사인사를 올리도록 합시다. 
// (근데 여러분 사이트가 페이스북, 인스타, 유튜브처럼 입장과 동시에 Ajax로 초기데이터들을 전부 받아오는 사이트라면 굳이 HTML 파일을 저렇게 할 필요는 없겠죠?)
 

function App(){
  return(
    <div>
       <App15/>      
       <App16/>      
       <App17/>      
       <App18/>    
       <App19/>    
       <App20/>    
       <App21/>    
       <App22/>    
       <App23/>    
       <App24/>    
       <App25/>    
       <App26/>    
       <App27/>    
       <App28/>    
       <App30/>    
       <App31/>    
       <App32/>    
       <App33/>    
       <App34/>    
       <App35/>   
        
    </div>
  )
}

export default App;
