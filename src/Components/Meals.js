import React,{useState} from 'react'
import { useGlobalContext } from '../Context'
import 'bootstrap/dist/css/bootstrap.min.css'

import DataComp from './DataComp'

export default function Meals() {
    const {meals,loading}=useGlobalContext()
  return (<>{
        loading?<h4 className='text-center'>Loading...</h4>
        :meals?<div className='div-container'>
            {
            meals.map(singlemeal=>{
            const {idMeal:id,strMeal:title,strMealThumb:image}=singlemeal
            return <div key={id}>
              <DataComp title={title} id={id} image={image} ></DataComp>    
            </div>
        })
        } 
    </div>
        :<h4 className='text-center text-danger pt-5 mt-5'>Sorry No Meals Matched To Your Search.Please Search Other Meal</h4>  
    }
  </>
 )
}

