import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'


const Navbar = () => {
    const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext)
  return (
    <nav className='nav-container'>
        <div>
            <NavLink to={'/'} style={{textDecoration: 'none',color:'gray'}}><h2>Food Recipe</h2></NavLink>
        </div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter...' name='recipe-name'
                value={searchParam}
                onChange={(e)=>setSearchParam(e.target.value)}
            />
        </form>
        <div className='nav-right'>
            <NavLink to={'/favourites'} style={({isActive})=>isActive? {textDecoration: 'none',color:'black'} : {color:'gray', textDecoration: 'none'}}>Favourites</NavLink>
            <NavLink to={'/'} style={({isActive})=>isActive? {textDecoration: 'none',color:'black'} : {color:'gray', textDecoration: 'none'}}>Home</NavLink>
        </div>
    </nav>
  )
}

export default Navbar
