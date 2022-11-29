import React,{useContext,useEffect,useState} from 'react'
import axios from 'axios'
import { Clicked } from './Components/DataComp'

const AppContext=React.createContext()
const allMealsUrl="https://www.themealdb.com/api/json/v1/1/search.php?s="
const randomUrl='https://www.themealdb.com/api/json/v1/1/random.php'

const getFavoritesFromLocal=()=>{
    let favorites=localStorage.getItem('favorites')
    if(favorites){
        favorites=JSON.parse(localStorage.getItem('favorites'))
    }
    else{
        favorites=[]
    }
    return favorites
}
function AppProvider({children}) {
    const [meals,setMeals]=useState([])
    const [loading,setLoading]=useState(false)
    const [searchTerm,setSearchTerm]=useState('')
    const [showModal,setShowModal]=useState(false)
    const [selectedMeal,setSelectedMeal]=useState(null)
    const [favorites,setFavorites]=useState(getFavoritesFromLocal)
    
    const addFavorites=(idMeal)=>{
        const allreadyFav=favorites.find(meal=>meal.idMeal===idMeal)
        if(allreadyFav) return
        const meal=meals.find(meal=>meal.idMeal===idMeal) 
        const updateFav=[...favorites,meal]
        setFavorites(updateFav)
        localStorage.setItem('favorites',JSON.stringify(updateFav))
    }
    const removeFromFav=(idMeal)=>{ 
        const updateFav=favorites.filter(meal=>meal.idMeal!==idMeal)
        setFavorites(updateFav)
        localStorage.setItem('favorites',JSON.stringify(updateFav))
    }
    const selectMeal=(idMeal,favoriteMeal)=>{
        let meal;
        if(favoriteMeal){
            meal=favorites.find(meal=>meal.idMeal===idMeal)
        }
        else{
            meal=meals.find(meal=>meal.idMeal===idMeal)
        }
        setSelectedMeal(meal)
        setShowModal(true)
    }
    const closeModal=()=>{
        setShowModal(false)
    }

    const fetchMeal=(url)=>{
        setLoading(true)
        axios(url)
        .then(response=>{
            setMeals(response.data.meals)
            setLoading(false)      
        })
        .catch(err=>console.log(err))
    }
    const setRandomMeal=()=>{
        fetchMeal(randomUrl)
    }
    useEffect(()=>{
        fetchMeal(allMealsUrl)
    },[])
    useEffect(()=>{
        if(!searchTerm) return 
        fetchMeal(`${allMealsUrl}${searchTerm}`)
    },[searchTerm])
    
  return (
    <AppContext.Provider value={{meals,loading,setSearchTerm,setRandomMeal,showModal
    ,selectMeal,selectedMeal,closeModal,addFavorites,favorites,removeFromFav,getFavoritesFromLocal
    }}>
        {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}
