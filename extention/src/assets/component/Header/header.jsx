import '../Header/header.css'
import React from 'react'
import logo from '../../../assets/logo.svg'
import sun from '../../../assets/icon-sun.svg'
const header = () => {
  return (
<div className='maincon'>
 <div className='subcon'>
        <div className='logo-icon'>
            <img src={logo} alt="logo" />
        </div>
        
        <div className='theme-icon'> 
           <img src={sun} alt="sun-logo"/>
        </div>
        
    </div>
</div>
    
   
  )
}

export default header