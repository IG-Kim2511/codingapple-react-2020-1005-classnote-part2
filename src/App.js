import React from 'react';
import './App.css';

// 16-(1)
import { Navbar , Nav ,NavDropdown , Form , FormControl, Button, Jumbotron} from 'react-bootstrap';



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

function App(){
  return(
    <div>
       <App15/>      
       <App16/>      
    </div>
  )
}

export default App;
