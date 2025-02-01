import { useState } from 'react';
import data from './data'
import Questions from './Questions';

const App = () => {
  const [questions,setQuestion]=useState(data);
  const [activeId,setActiveId]=useState(null)

  const toggleQuestions=(id)=>{

    const newActiveId=id===activeId?null:id;
    setActiveId(newActiveId)

  }

  return (

<main>

<Questions questions={questions} toggleQuestions={toggleQuestions} activeId={activeId}/>
</main>
   
  )
};
export default App;
