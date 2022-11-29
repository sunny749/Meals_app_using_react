import React from 'react'
import { useGlobalContext } from '../Context'

export default function Modal() {
  const {selectedMeal,closeModal}=useGlobalContext()
  const {strMealThumb:image,strSource:source,strInstructions:text,strMeal:title}=selectedMeal
  return (
    <aside className='modal-overlay'>
       <div className='modal-container'>
        <img src={image} alt={title} className='img modal-img'/>
        <div className='modal-content'>
          <h4>{title}</h4>
          <p>Cooking Instructions</p>
          <p>{text}</p>
          <a href={source}>Original Source</a>
          <button className='btn btn-danger ' onClick={()=>closeModal()}>close</button>
        </div>
       </div>
    </aside>
   
  )
}

