/* eslint-disable */ 

import './App.css';
import { useState } from 'react';

function App() {

  // 자료를 잠깐 보관 = state 
  const [글제목, setData] = useState(['남자 코트 추천', '역삼역 맛집', 'Z플립5 실사용 후기']);
  const [하트, setHeart] = useState();
  
  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{ fontSize: "30px" }}>Dv Blog</h4>
      </div>

      {글제목.map((it, index)=> ( 
        <article className='list' key={index}>
          <div className='title_heart_area'>
            <h3>{it}</h3> 

            <div className='heart_area'>
              <button>❤️</button>
              <span>({하트})</span>
            </div>
          </div>

        <p>2023-08-09</p>
        </article>
      ))}
      

    </div>
  );
}

export default App;
