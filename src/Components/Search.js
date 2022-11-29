import React,{useState} from 'react'
import { useGlobalContext } from '../Context'
export default function Search() {
  const [search,setSearch]=useState('')
  const {setSearchTerm,setRandomMeal}=useGlobalContext()
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(search){
        setSearchTerm(search)
    }
  
  }
  const surpriseHandle=()=>{
    setSearch('')
    setSearchTerm('')
    setRandomMeal()
  }
  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Type favorite meal' className='form-input' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button type='submit' className='btn btn-primary  active' >Search</button>
        <button type='button' className='btn btn-secondary ' onClick={surpriseHandle}>surprise me!</button>
      </form>
    </header>
  )
}

