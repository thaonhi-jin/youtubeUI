import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className="header-left">
      <i class="fa-solid fa-bars"></i>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="youtube-logoS" />
      </div>
      <div className="header-center">
        <div className="search">
          <input type="text" placeholder='Search' className='search-box' />
          <button className='search-btn'>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button> 
        </div>
      </div>
      <div className="header-right">
        <div className="user-info">
          <i class="fa-solid fa-video"></i>
          <i class="fa-solid fa-bell"></i>
          <img className='avatar' src="https://i.pinimg.com/280x280_RS/43/6b/63/436b6377ede7fd92a182f5749d43323e.jpg" alt="user-avatar" />
        </div>
      </div>
    </div>
  )
}

export default Header