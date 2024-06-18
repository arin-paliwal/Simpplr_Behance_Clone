import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/SearchBar/Search'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import Copyright from '../components/Footer/Copyright'

const HomePage = () => {
  return (
    <div className='px-4 py-2'>
        <Navbar />
        <Search />
        <Content />
        <Footer />
        <Copyright />
    </div>
  )
}

export default HomePage