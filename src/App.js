/* eslint-disable */ 

import './App.css';
import { useState, useRef } from 'react';


const Modal = ({글정보, id, onDelete}) => { 

  const handleDelete = () => { 
    if(window.confirm('해당 글을 삭제하시겠습니까?')) onDelete(글정보[id].id);
  }

    return (
      <article className='modal'>
        <div className='modal_title_date'>
          <h3>{글정보[id].title}</h3>
          <span>{new Date(글정보[id].date).toISOString().slice(0,10)}</span>
        </div>
        
        <p className='modal_content'>{글정보[id].content}</p>

        <span className='delete_area'>
          <button onClick={handleDelete}>삭제</button>
        </span>

      </article>
    )
}

function App() {

  const [글정보, setData] = useState([]);

  const [modal, setModal] = useState([{isTrue: false, id: 0}]);


  const handleHeart = (id) => { 
    const newInfo = 글정보.map((it)=> { 
                      if(it.id === id) { 
                        return {...it, heart: it.heart+1}
                      }
                      return it;
                    })

    setData(newInfo)
  }
  
  // 하트순 정렬
  const sortHeart = () => { 
   const sortInfo = [...글정보].sort((a,b) => b.heart - a.heart)
   setData(sortInfo);
  }

  // 가나다순 정렬 
  const sortAbc = () => { 
    const sortInfo2 = [...글정보].sort((a,b) => a.title.localeCompare(b.title));
    console.log("sortInfo2: ", sortInfo2)
    setData(sortInfo2);
  }

  const handleModal = (index) => { 
    setModal([{ isTrue: !modal[0].isTrue, id: index }]);
  }

  const [newItem, setNewItem] = useState({
    title:"", 
    content:"",
  })
  const handleChange = (e) => { 
    setNewItem({...newItem, [e.target.name]:e.target.value})
  }

  const id = useRef(0);

  const handleSubmit = () => { 
    if(newItem.title.length === 0) {
      alert("제목을 입력하세요.");
      return;
    } 
    
    if(newItem.content.length === 0) { 
      alert("내용을 입력하세요.");
      return;
    }

    const date = new Date().getTime();

    const 새글정보 = {
      id: id.current,
      title: newItem.title,
      content: newItem.content, 
      date: date,
      heart: 0
    }

    setData([새글정보, ...글정보]);

    id.current += 1;

    setNewItem({
      title:"", 
      content:"",
    })
  }

  const onDelete = (id) => { 
    setData((글정보)=> 글정보.filter((it)=> it.id !== id));
    setModal([{ isTrue: !modal[0].isTrue, id: '' }]);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{ fontSize: "30px" }}>Dv Blog</h4>
      </div>

      <div className='sort_btn'>
       <button onClick={sortHeart}>하트순으로 정렬</button>
       <button onClick={sortAbc} style={{marginLeft : "10px"}}>가나다순으로 정렬</button>
      </div>

      <div className='write_area'>
        <h3>글 작성</h3>

        <div className='write_title_area'>
          <span>제목</span>
          <input name='title' onChange={handleChange}
                 value={newItem.title}/>
        </div>

        <div className='write_content_area'>
          <div>
            <span>내용</span>
            <textarea name='content' 
                      onChange={handleChange}
                      value={newItem.content}/>
          </div>
          
          <div>
            <button onClick={handleSubmit}>작성</button>
          </div>
        </div>
      </div>
      

      
      <div className='list_area'>
        {글정보.map((it, index)=> { 
          return (
          <article className='list' key={it.id}>
            <div className='title_heart_area'>
              <h3 onClick={()=> handleModal(index) }>{it.title}</h3> 

              <div className='heart_area'>
                <button onClick={()=> handleHeart(it.id)}>❤️</button>
                <span>{it.heart}</span>
              </div>
            </div>

          <p>{new Date(it.date).toISOString().slice(0,10)}</p>
          </article>
          )
        })}
      </div>
      

      {
        modal[0].isTrue === true ?  <Modal 글정보={글정보} 
                                           id={modal[0].id} 
                                           onDelete={onDelete} /> : null
      }


    </div>
  );
}

export default App;
