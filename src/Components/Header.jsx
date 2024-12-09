import Button from '@mui/material/Button';
import React from 'react'
import { FaLocationArrow, FaLocationCrosshairs } from 'react-icons/fa6'



const Header = () => {
  return (
<>
<section className='flex flex-wrap justify-around'>



<div className='border border-grey w-[25vw] h-[6.5vh] max-w-xs m-5 rounded-sm'> 
    
<select className="border border-grey w-[25vw] h-[6.5vh] max-w-x rounded-sm">
<option disabled selected> <FaLocationArrow />Location</option>

<option> <FaLocationCrosshairs />Use Current Location</option>

<option value="">
<h1 style={{opacity:0.9,color:"grey"}}>Choose other location</h1></option>
<option>Pakistan</option>
<option>Karachi,Pakistan</option>
<option>Balochistan,Pakistan</option>
<option>Sindh,Pakistan</option>
<option>Khyber,Pakistan</option>
<option>Gilgit,Pakistan</option>
<option>Kashmir</option>
<option>Saddar,Pakistan</option>
</select>

</div>



<div className='flex w-[50vw]'>

<input
  type="text"
  placeholder="Find Cars , MobilePhones and many more ...."
  className="input input-bordered text-black font-black input-secondary border border-grey h-[46px] m-auto w-[600vw]" />
<div className='text-white m-auto p-4 bg-[#002f34] cursor-pointer'>
<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</div>
</div>


<div className='flex gap-2'>
<div className='m-auto'>
<Button variant="outlined">Login</Button>

</div>
<div className='m-auto'>
<Button variant="contained" className='ml-3'>Sell  <span className='text-white text-2xl'> + </span></Button>
</div>
</div>



</section>
</> 
 )
}

export default Header