import React,{useState,useContext,useMemo} from 'react'
import { useEffect } from 'react'
import { AiOutlineLike } from "react-icons/ai"
import { AiTwotoneLike } from "react-icons/ai"
import { useGlobalContext } from '../Context'

export default function DataComp({image,title,id}) {
    const {selectMeal,addFavorites,removeFromFav,favorites,meals}=useGlobalContext()
    const [clicked,setClick]=useState()
    const likeHandler=()=>{
      if(clicked){
        removeFromFav(id)
        setClick(false)
        return
      }
      setClick(!clicked)
      addFavorites(id)
    }
 
    useEffect(()=>{
      if(!favorites) return 
      favorites.find(meal=>{
        if(meal.idMeal===id) setClick(true)
         })   
    },[])

  return (
    < >
        <div key={id} className="card border-0 card-container" >
            <img className='card-img-top card-img' src={image} alt='' onClick={()=>selectMeal(id)}/>
            <div  className='card-body'>
                <div className='d-flex justify-content-between align-items-center' >
                    <h5 className='card-title'>{title}</h5>
                    <p className='icon' onClick={likeHandler} >{clicked?<AiTwotoneLike style={{color:'red'}} size={25}/>:<AiOutlineLike size={25}/>}</p>
                </div>
            </div>
        </div>
    </>
  )
}

