import React from 'react'
import SingleQuestion from './SingleQuestion'

const Questions = ({questions,toggleQuestions,activeId}) => {
  return (
    <div className='container'>
        <h1>Questions</h1>
        {questions.map((question)=>{

           return  <SingleQuestion key={question.id} {...question} toggleQuestions={toggleQuestions} activeId={activeId}/>
        })}
      
    </div>
  )
}

export default Questions
