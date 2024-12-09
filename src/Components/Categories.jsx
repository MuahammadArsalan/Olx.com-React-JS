import React from 'react'
import logo from '../assets/Images/car.png'
import { RiArrowDropDownLine } from 'react-icons/ri'
import '../Css/Categories.css'
import carBanner from '../assets/Images/car banner cat component.jpeg'
const Categories = () => {
  return (
<>
<section>
<div id='catDiv' className='flex justify-around flex-wrap mx-8 text-[15px] text-slate-800'>
  
<span className='flex gap-2'>

<p className='m-auto font-bold text-[18px] text-slate-600'>All categories</p>
<p className='m-auto'><RiArrowDropDownLine  className='text-5xl'/> </p>
</span>

<p className='m-auto text-[15px] text-slate-800'>Mobile Phones</p>
<p className='m-auto text-[15px] text-slate-800'>Cars</p>
<p className='m-auto text-[15px] text-slate-800'>MotorCycles</p>
<p className='m-auto text-[15px] text-slate-800'>Video-Audios</p>
<p className='m-auto text-[15px] text-slate-800'>Houses</p>
<p className='m-auto text-[15px] text-slate-800'>Tablets</p>
<p className='m-auto text-[15px] text-slate-800'>Lands & Property</p>
</div>


<div className='mx-6'><img className=' rounded-md' src={carBanner} alt="carBaner" id='carBanner' /></div>

</section>
</>  )
}

export default Categories