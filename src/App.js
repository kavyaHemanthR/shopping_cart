
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Favourites from './pages/favourites/Favourites';
import Details from './pages/details/Details';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favourites' element={<Favourites />}/>
        <Route path='/recipe-item/:id' element={<Details />}/>
      </Routes>
    </div>
  );
}

export default App;
