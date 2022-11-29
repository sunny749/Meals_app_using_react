import './App.css';
import Search from './Components/Search';
import Favorites from './Components/Favorites';
import Meals from './Components/Meals';
import Modal from './Components/Modal';
import { AppProvider } from './Context';
import { useGlobalContext } from './Context';


export default function App() {
  const {showModal,favorites}=useGlobalContext()
  return (
   <main>
    <Search></Search>
    {favorites.length>0&&<Favorites />}
    <Meals></Meals>
    {showModal&&<Modal/>}
   </main>
  );
}


