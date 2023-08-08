import logo from './logo.svg';
import './App.css';

function App() {

  let post = "강남 우동 맛집!!"
  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{ fontSize: "30px" }}>DV BLOG</h4>
      </div>

      <h3>{ post }</h3>
    </div>
  );
}

export default App;
