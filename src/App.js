/* eslint-disable */ 

import './App.css';
import { useState } from 'react';


const Modal = (props) => { 

    const editTitle = () => {
      props.글정보.map((it)=> {
        console.log(it)
      })
    }

    return (
      <article className='modal'>
        <h4>{props.글정보[0].title}</h4>
        <p>{props.글정보[0].date}</p>
        <p>{props.글정보[0].content}</p>
        <button onClick={editTitle}>글수정</button>
      </article>
    )
}

function App() {

  const [글정보, setData] = useState([
    {id: 1, title: '여자 코트 추천', heart: 0, date: '2023-08-11', content:'퍼스널 컬러에 따른 코트 추천! 무엇이 있을까요?'},
    {id: 2, title: '역삼 우동 맛집', heart: 2, date: '2023-08-12', content:'역삼 우동 맛집. 역시 역전우동 ~'},
    {id: 3, title: '아이폰14pro 실사용 후기', heart: 3, date: '2023-08-13', content: '아이폰14 pro 새로우 기능 다이나믹 아일랜드!'},
  ]);

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
  
  const sort = () => { 
   const sortInfo = [...글정보].sort((a,b) => b.heart - a.heart)
   setData(sortInfo);
  }

  const handleModal = (id) => { 
    const newModal = modal.map((it)=> { 
                        return [{isTrue: !isTrue, id: id}]
                      })
    setModal(newModal)
    }
  }


  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{ fontSize: "30px" }}>Dv Blog</h4>
      </div>

      <div className='sort_btn'>
       <button onClick={sort}>하트순으로 정렬</button>
      </div>
      

      {글정보.map((it)=> { 
        return (
        <article className='list' key={it.id}>
          <div className='title_heart_area'>
            <h3 onClick={()=> handleModal(it.id)}>{it.title}</h3> 

            <div className='heart_area'>
              <button onClick={()=> handleHeart(it.id)}>❤️</button>
              <span>{it.heart}</span>
            </div>
          </div>

        <p>{it.date}</p>
        </article>
        )
      })}

      {
        modal.isTrue === true ?  <Modal 글정보={글정보}/> : null
      }


    </div>
  );
}

export default App;
