import React from 'react'
import twitter from '../assets/Images/twitter.svg'
import facebook from '../assets/Images/facebook.svg'
import insta from '../assets/Images/insta.svg'
import youtube from '../assets/Images/youtube.svg'
import playstore from '../assets/Images/playstore.svg'
import appstore from '../assets/Images/appstore.svg'
import appgallery from '../assets/Images/appgallery.svg'
import '../Css/footer.css'


// const Footer = () => {
//   return (
//    <>
//    <section className=''>

//    <footer className="footer flex flex-wrap justify-around bg-[#ebeeef] text-[#557477] p-10">
  
  
//   <div>

//     <h4 className="footer-title text-[14px] font-bold text-slate-700">POPULAR CATEGORIES</h4>
//    <div className='mt-5'>
    
//    <p className="link link-hover text-[13px] my-[8px]">Cars</p>
//     <p className="link link-hover text-[13px] my-[8px]">Flats for rent</p>
//     <p className="link link-hover text-[13px] my-[8px]">Mobile Phones</p>
//     <p className="link link-hover text-[13px] my-[8px]">Jobs</p>
//    </div>
//   </div>


//   <div>
  



//     <h4 className="footer-title text-[14px] font-bold text-slate-700">TRENDING SEARCHING</h4>
//    <div className='mt-5'>
    
//    <p className="link link-hover text-[13px] my-[8px]">Bikes</p>
//     <p className="link link-hover text-[13px] my-[8px]">Watches</p>
//     <p className="link link-hover text-[13px] my-[8px]">Books</p>
//     <p className="link link-hover text-[13px] my-[8px]">Dogs</p>
//    </div>
//   </div>
  
//   <div>
//     <h4 className="footer-title font-bold text-[14px] text-slate-700">ABOUT US</h4>
//    <div className='mt-5'>
    
//    <p className="link link-hover text-[13px] my-[8px]">About Dubizzle Group</p>
//     <p className="link link-hover text-[13px] my-[8px]">OLX Blog</p>
//     <p className="link link-hover text-[13px] my-[8px]">Contact Us</p>
//     <p className="link link-hover text-[13px] my-[8px]">OLX for Businesses</p>
//    </div>
//   </div>
 

//   <div>

//     <h4 className="footer-title font-bold text-[14px] text-slate-700">OLX</h4>
//    <div className='mt-5'>
    
//    <p className="link link-hover text-[13px] my-[8px]">About Dubizzle Group</p>
//     <p className="link link-hover text-[13px] my-[8px]">Sitemap</p>
//     <p className="link link-hover text-[13px] my-[8px]">Terms of use</p>
//     <p className="link link-hover text-[13px] my-[8px]">Privacy Policy</p>
//    </div>
//   </div>
 

//   <div>

//     <h4 className="footer-title font-bold text-[14px] text-slate-700">FOLLOW US</h4>
  
//    <div className='mt-5 flex gap-1'>
//      <img src={twitter} alt="twitter" width={28} height={28} />
//     <img src={facebook} alt="facebook" width={28} height={28} />
//     <img src={youtube} alt="youtube" width={28} height={28} />
//     <img src={insta} alt="insta" width={28} height={28} />
//    </div>
  
//   <div className='flex gap-2 my-10'>
//     <img src={appstore} alt="appstore" width={110} height={70} />
//     <img src={playstore} alt="playstore" width={110} height={70} />
//     <img src={appgallery} alt="appgallery" width={110} height={70} />

//   </div>
//   </div>
// </footer>

// <div className='bg-[#002f34]'> 

// <div className='text-white flex justify-end p-4 mx-5'>
//   <p className='text-[13px] font-bold'>Free Classifieds in Pakistan </p>
//   <p  className='text-[13px] font-bold'></p>
//   <p  className='text-[13px] font-bold'>.</p>
//   <p className='text-[12px] font-bold'>© 2006-2024 OLX</p>
// </div>
// </div>

// </section>

//    </>
//   )
// }


const Footer = () => {
  return (
    <>
      <section className="">

        <footer className="footer flex flex-wrap justify-around md:justify-around bg-[#ebeeef] text-[#557477] p-10">
        
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h4 className="footer-title text-[14px] font-bold text-slate-700">POPULAR CATEGORIES</h4>
            <div className="mt-5">
              <p className="link link-hover text-[13px] my-[8px]">Cars</p>
              <p className="link link-hover text-[13px] my-[8px]">Flats for rent</p>
              <p className="link link-hover text-[13px] my-[8px]">Mobile Phones</p>
              <p className="link link-hover text-[13px] my-[8px]">Jobs</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h4 className="footer-title text-[14px] font-bold text-slate-700">TRENDING SEARCHING</h4>
            <div className="mt-5">
              <p className="link link-hover text-[13px] my-[8px]">Bikes</p>
              <p className="link link-hover text-[13px] my-[8px]">Watches</p>
              <p className="link link-hover text-[13px] my-[8px]">Books</p>
              <p className="link link-hover text-[13px] my-[8px]">Dogs</p>
            </div>
          </div>
        
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h4 className="footer-title font-bold text-[14px] text-slate-700">ABOUT US</h4>
            <div className="mt-5">
              <p className="link link-hover text-[13px] my-[8px]">About Dubizzle Group</p>
              <p className="link link-hover text-[13px] my-[8px]">OLX Blog</p>
              <p className="link link-hover text-[13px] my-[8px]">Contact Us</p>
              <p className="link link-hover text-[13px] my-[8px]">OLX for Businesses</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h4 className="footer-title font-bold text-[14px] text-slate-700">OLX</h4>
            <div className="mt-5">
              <p className="link link-hover text-[13px] my-[8px]">About Dubizzle Group</p>
              <p className="link link-hover text-[13px] my-[8px]">Sitemap</p>
              <p className="link link-hover text-[13px] my-[8px]">Terms of use</p>
              <p className="link link-hover text-[13px] my-[8px]">Privacy Policy</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4">
            <h4 className="footer-title font-bold text-[14px] text-slate-700">FOLLOW US</h4>
            <div className="mt-5 flex gap-2">
              <img src={twitter} alt="twitter" width={28} height={28} />
              <img src={facebook} alt="facebook" width={28} height={28} />
              <img src={youtube} alt="youtube" width={28} height={28} />
              <img src={insta} alt="insta" width={28} height={28} />
            </div>
            <div className="flex gap-2 my-10">
              <img src={appstore} alt="appstore"  id='image' width={110} height={70} />
              <img src={playstore} alt="playstore" id='image'  width={110} height={70} />
              <img src={appgallery} alt="appgallery" id='image'  width={110} height={70} />
            </div>
          </div>

        </footer>

        <div className="bg-[#002f34]">
          <div className="text-white flex justify-end p-4 mx-5">
            <p className="text-[13px] font-bold">Free Classifieds in Pakistan </p>
            <p className="text-[13px] font-bold">.</p>
            <p className="text-[12px] font-bold">© 2006-2024 OLX</p>
          </div>
        </div>

      </section>
    </>
  );
}


export default Footer