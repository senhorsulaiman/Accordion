import React from 'react'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'

const SingleQuestion = ({id,title,info,activeId,toggleQuestions}) => {

    // const [isOpen,setIsOpen]=useState(false)

    const isActive=id===activeId;
  return (
    <article className='question'>

        <header>

            <h5>{title}</h5>

            <button onClick={()=>toggleQuestions(id)}>
                    {isActive?
                <FaMinusCircle/>: <FaPlusCircle/> }
               
                
                </button>
        </header>
            {isActive &&  <p>

{info}
</p>}
       
    </article>
  )
}

export default SingleQuestion
