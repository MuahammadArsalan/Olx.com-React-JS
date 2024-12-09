import React from 'react'
import Header from '../Components/Header.jsx'
import Categories from '../Components/Categories.jsx'
import Footer from '../Components/footer.jsx'
import AllCategories from '../Components/AllCategories.jsx'

  

const Home = () => {
  return (
   <>
   <div>

<Header></Header>
<Categories/>
<AllCategories></AllCategories>
<Footer/>

   </div>
   </>
  )
}

export default Home