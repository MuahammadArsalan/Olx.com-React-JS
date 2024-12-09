import React from 'react'
import image from '../assets/Images/beforefooter1.webp'
import playstore from '../assets/Images/playstore.svg'
import appstore from '../assets/Images/appstore.svg'
import appgallery from '../assets/Images/appgallery.svg'
const BeforeFooter = () => {
  return (
   <>
   <section>
<div className='flex justify-around flex-wrap'>


<div className='m-10'>
<img src={image} alt="mobile image" width={350} height={250}/>
</div>

<div className='m-auto'>
<h1 className='font-bold text-4xl text-slate-600'>TRY THE OLX APP</h1>
<p className='text-2xl text-slate-500'>Buy, sell and find just about anything <br />using  the app on your mobile.</p>
</div>
<div className='m-auto'>
<h1 className='font-bold text-[13px] text-slate-600'>GET YOUR APP TODAY</h1>
<div className="flex gap-2 my-10">
              <img src={appstore} alt="appstore"  id='image' width={110} height={70} />
              <img src={playstore} alt="playstore" id='image'  width={110} height={70} />
              <img src={appgallery} alt="appgallery" id='image'  width={110} height={70} />
            </div>
</div>



</div>
   </section>
   
   </>
  )
}

export default BeforeFooter