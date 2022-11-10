import React from 'react'
import './App.css';

function Header() {
  return (
    <>
        <div className='searchBox'>
            <input type="text" placeholder='Search for Colleges..' className='searchInp' />&nbsp;<i class="fa-solid fa-magnifying-glass" />
        </div>
        <div className='sortBox'>
            <button className='sortBtn'>CD Rating&nbsp;<i class="fa-solid fa-arrow-down-wide-short" /></button>
            <button className='sortBtn'>User Rating&nbsp;<i class="fa-solid fa-arrow-down-wide-short" /></button>
            <button className='sortBtn'>Fees&nbsp;<i class="fa-solid fa-arrow-down-wide-short" /></button>
            <button className='sortBtn'>Ascending&nbsp;<i class="fa-solid fa-arrow-down-a-z" /></button>
            <button className='sortBtn'>Descending&nbsp;<i class="fa-solid fa-arrow-down-z-a" /></button>
        </div>
    </>
  )
}

export default Header;