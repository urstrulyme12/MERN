import React, {useState} from 'react'
import MainHeader from './MainHeader'
import {Link} from 'react-router-dom'
import "./MainNavigation.css"
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';

function MainNavigation() {

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const handleOpen =()=>{

    setDrawerIsOpen(true);
  }
  const handleClose =()=>{

    setDrawerIsOpen(false);
  }
  return (
    <>
    {drawerIsOpen && <Backdrop/>}
    {drawerIsOpen && (<SideDrawer>
      <nav className='main-navigation__drawer-nav'>
        <NavLinks/>
      </nav>
    </SideDrawer>)} 
    <MainHeader>
        <button className='main-navigation__menu-btn' onClick={handleOpen} >
    <span></span>
    <span></span>
    <span></span>
        </button>
        <h1 className='main-navigation__title'>
            <Link to="/"> places</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
        <NavLinks/>
        </nav>
    </MainHeader>
    </>
  )
}

export default MainNavigation