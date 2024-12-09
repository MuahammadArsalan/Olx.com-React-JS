import React from 'react'
import Header from '../Components/Header.jsx'
import Categories from '../Components/Categories.jsx'
import Footer from '../Components/footer.jsx'
import AllCategories from '../Components/AllCategories.jsx'
import BeforeFooter from '../Components/BeforeFooter.jsx'

  

const Home = () => {
  return (
   <>
   <div>

<Header></Header>
<Categories/>
<AllCategories></AllCategories>
<BeforeFooter/>
<Footer/>

   </div>
   </>
  )
}

export default Home