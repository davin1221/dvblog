import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // 자료를 잠깐 보관 = state 
  const [글제목, setData] = useState('남자 코트 추천');

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{ fontSize: "30px" }}>DV BLOG</h4>
      </div>

      <div className='list'>
        <h3>{글제목}</h3>
        <p>2023-08-09</p>
      </div>

    </div>
  );
}

export default App;
