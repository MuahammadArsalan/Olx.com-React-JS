import React from 'react'
import image1 from '../assets/Images/c1.png'
import image2 from '../assets/Images/c2.png'
import image3 from '../assets/Images/c3.png'
import image4 from '../assets/Images/c4.png'
import image5 from '../assets/Images/c5.png'
import image6 from '../assets/Images/c6.png'
import image7 from '../assets/Images/c7.png'
import image8 from '../assets/Images/c8.png'
import image9 from '../assets/Images/c9.png'
import image10 from '../assets/Images/c10.png'
import image11 from '../assets/Images/c11.png'
import image12 from '../assets/Images/c12.png'
import image13 from '../assets/Images/c13.png'
import image14 from '../assets/Images/c14.png'
const AllCategories = () => {
  return (
   
    <>
    <section>
    <h1 className='font-bold text-slate-700 text-2xl mx-4 p-5'>All categories</h1>

<div className='flex flex-wrap flex-row gap-10 m-10'>


<div>
<img src={image1} width={90} height={20} />
<p className='m-auto text-center font-bold text-[16px] text-slate-800'>Moblies</p>
</div>

<div>   
<img src={image2} width={90} height={20} />
<p className='m-autotext-center  font-bold text-[16px] text-slate-800'>Vehicles</p>
</div>
<div>
<img src={image3} width={90} height={20} />
<p className='m-auto font-bold text-center text-[16px] text-slate-800'>Property for <br />sale</p>

</div>

<div>
<img src={image4} width={90} height={20} />
<p className='m-auto font-bold text-[16px] text-slate-800 text-center'>Propertyfor <br />Rent</p>

</div>

<div>
<img src={image5} width={90} height={20} />
<p className='m-auto font-bold text-[16px] text-slate-800 text-center'>Electronics & <br />Home <br /> Appliances</p>

</div>
<div>
<img src={image6} width={90} height={20} />
<p className='m-auto font-bold text-[16px] text-slate-800 text-center'>Bikes</p>

</div>
<div>
<img src={image7} width={90} height={20} />
<p className='m-auto font-bold text-[16px] text-slate-800 text-center'>Business,<br /> Industrial &<br /> Agriculture <br />
Services
</p>

</div>
<div>
<img src={image8} width={90} height={20} />
<p className='m-auto font-bold text-[16px] text-slate-800 text-center'>Services</p>

</div>
<div>
<img src={image9} width={90} height={20} />
<p className='m-auto font-bold text-[16px] text-slate-800 text-center'>Jobs</p>

</div>
<div>
<img src={image10} width={90} height={20} />
<p className='m-auto font-bold text-[16px] text-slate-800 text-center'>Animals</p>

</div>
<div>
<img src={image11} width={90} height={20} />
<p className='m-auto font-bold text-[16px] text-slate-800 text-center'>Furniture & <br /> Home Decor</p>

</div>
<div>
<img src={image12} width={90} height={20} />
<p className='m-auto font-bold text-[16px] text-slate-800 text-center'>Fashion &<br /> Beauty</p>

</div>
<div>
<img src={image13} width={90} height={20} />
<p className='m-auto font-bold text-[16px] text-slate-800 text-center'>Books, Sports <br /> & Hobbies</p>

</div>
<div>
<img src={image14} width={90} height={20} />
<p className='m-auto font-bold text-[16px] text-slate-800 text-center'>Kids</p>

</div>
</div>


    </section>
    </>
  )
}

export default AllCategories