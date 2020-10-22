
//(1) 저번시간 숙제 : Detail 페이지 방문 후 2초 후에 alert 박스가 사라지게 해보십시오. 

// 1. UI 보이고 안보이고의 상태를 state로 저장해둠 (true/false 이런걸로)
// 2. state가 true일 때만 UI를 보여준다고 if문을 짜둠 
//  state를 만들고 state에 의해서 UI를 보여주도록 if문을 완성했습니다.

// (2)
//  Detail 컴포넌트 로드 후 2초 후에 alert라는 state를 false로 만들어주면 되는 것이군요.
// useEffect 안에 2초 타이머를 추가했고 2초 후에 alert 라는 state를 false로 변경

// (2-2)
// B: Detail 컴포넌트가 mount뿐만이 아니라, 업데이트(재랜더링)될 때도 저 useEffect 계속 실행됨
// 컴포넌트 업데이트시 진짜 실행되는지 실험해보도록 합시다.
// (실험을 위한... 코딩 추가)
// <input> 태그
//  inputData라는 state
//  { inputData }데이터바인딩

// (2-3)
// <input>에다가 뭔가 입력하면 계속 Detail 컴포넌트가 재렌더링됩니다. (업데이트됨)
// 그럼 <input>에다가 뭔가 입력할 때마다 useEffect() 이것도 실행되겠죠?
// 근데 useEffect()도 실행되면 안될 것 같죠? 맞습니다. 이건 자원낭비입니다.

// (3) 
// useEffect() 함수 끝부분에 대괄호[]  여기에는 state를 넣을 수 있습니다.

// 1. Detail컴포넌트 로드가 될 때 & 
// 2. alert라는 state가 변경이 될 때만 실행됩니다.

// 첫 mount때만 실행 후 , 업데이트때는 실행 안함 , 오직 [ ] 안의 state가 변경된때만 실행


// (3-2) state가 위에서 먼저 선언되어야 함

// (3-3) 대괄호 안에 state는 콤마로 여러개 넣을 수 있습니다

//(3-4)  [ ]안에 빈칸
// 그럼 이제 이 useEffect() 코드는 컴포넌트가 업데이트 될 때 절대 실행되지 않습니다.
// 그냥 컴포넌트 mount때 한번 딱 실행하고 싶은 코드를 담을 때 쓸 수 있는 일종의 트릭쇼입니다.


// (4) setTimeout 주의점
// setTimeout 타이머를 쓰셨으면 타이머해제도 해야합니다. 

// 방금 Detail 방문시 2초 후에 UI 사라지게 해주세요~ 라고 코드를 짰습니다.
// 근데 2초가 되기도 전에 Detail을 벗어나면 어떻게 될까요?
// 지금은 별 문제없는 것 같지만 코드가 길어지거나 꼬이면,
// 남아있는 타이머 때문에 이상한 현상이 일어날 수 있습니다.
// 그래서 컴포넌트가 사라질 때 타이머를 없애는 코드도 추가해주는게 좋습니다.

// (4-2)
// useEffect안에는 return + 함수를 추가하면,  컴포넌트가 사라질 때 특정 코드를 실행할 수 있다고 했습니다.

// 거기에 clearTimeout을 추가한겁니다.
// clearTimeout(타이머이름)
// 이렇게 쓰시면 타이머를 바로 해제할 수 있습니다.



import React, {useEffect, useState} from 'react';
import { useHistory ,useParams } from 'react-router-dom';
import styled from 'styled-components'


function Detail25_file(props){

    // (1) (3-2)
    let [ alert, alert변경 ] = useState(true);
   // (2-2)
  let [inputData,inputData변경]=useState('');


    // (1)
    useEffect(()=>{ 
    // (2)
            let 타이머 = setTimeout(() => {alert변경(false)}, 2000);  
     // (2-3)
        console.log('업데이트(재랜더링)될 때도 저 useEffect 계속 실행됨');} );
        
     // (3)
        useEffect(()=>{  
                let 타이머 = setTimeout(() => {alert변경(false)}, 2000);     
            console.log('업데이트(재랜더링)될 때도 저 useEffect 계속 실행됨');} 
            // (3-3)
            ,[alert,inputData]);
            
            // 
     useEffect(()=>{  
            let 타이머 = setTimeout(() => {alert변경(false)}, 2000);     
     console.log('업데이트(재랜더링)될 때도 저 useEffect 계속 실행됨');} 
      // (3-4)
        ,[ ]);
        
     // 
        useEffect(()=>{  
               let 타이머 = setTimeout(() => {alert변경(false)}, 2000);     
        console.log('업데이트(재랜더링)될 때도 저 useEffect 계속 실행됨');
        // (4-2)
        return ()=>{ clearTimeout(타이머)}   }  ,[ ]);
    

    return(  
           <div className="container">      
        <div className="my-alert">
            <p>  my-alert </p>      
        </div>
    //(1)
        {
            alert === true
            ? (<div className="my-alert2">
                <p>페이지 방문 후 2초 후에 alert 박스가 사라지게 해보십시오</p>
              </div>)
            : null
          }
              
     //(2-2)
    <input onChange={(e)=>{inputData변경(e.target.value)}} />

    {inputData}
    


    </div> 
  
    )
  }

export default Detail25_file;