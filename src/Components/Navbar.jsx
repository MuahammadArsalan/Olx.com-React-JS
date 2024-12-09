import React from 'react'
import OlxLogo from '../assets/Images/olx logo.jpg'
import Car from '../assets/Images/car.png'
import House from '../assets/Images/house.jpeg'
import '../Css/navbar.css'

const Navbar = () => {
 
       return (
    <>
    <section id='sec' style={{width:"50vw"}} className='flex flex-wrap justify-around p-2' > 


    <div>
<img src={OlxLogo} id='img' width={90} height={60} alt='logo' />
    </div>


<div className="flex"  id='navItem'>
    <div> 
<img src={Car} id='img' width={50} height={50} alt='car' />
    </div>
    <div className='flex'> 
    <p className='font-bold ml-2 p-3 text-sm'>MOTORS</p>
    </div>
    </div>    
    
<div className="flex" id='navItem'>
    <div> 
<img src={House} id='img' width={50} height={50} alt='car' />
    </div>
    <div className='flex'> 
    <p className='font-bold ml-2 p-3 text-sm'>PROPERTY</p>
    </div>
    </div>    
    

    </section>

    </>
  )
}

export default Navbar