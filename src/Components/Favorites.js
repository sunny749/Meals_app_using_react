import React,{useContext} from 'react'
import { useGlobalContext } from '../Context'
import { useGlobalClicked } from './DataComp'


export default function Favorites() {
  const {favorites,selectMeal,removeFromFav}=useGlobalContext()
  // const {clicked,setClick}=useGlobalClicked()
  // console.log(clicked)
  return (
    <section className='favorites'>
      <div className='favorites-content'>
        <h5>Favorites</h5>
        <div className='favorites-container'>
          {
            favorites.map(item=>{
              const {idMeal,strMealThumb:image,strMeal}=item
              return <div key={idMeal} className='favorites-item'>
                <img src={image} alt='' onClick={()=>selectMeal(idMeal,true)} className='favorites-img'/>
                {/* <button className='remove-btn' onClick={()=>removeFromFav(idMeal)}> remove </button> */}
              </div>
            })
          }
        </div>
      </div>
    </section>
  )
}

