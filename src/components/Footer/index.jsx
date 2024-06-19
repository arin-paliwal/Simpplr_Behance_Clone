import React from 'react'
import Promo from './Promo'
import Footer from './Footer'
import Copyright from './Copyright'

const FooterSection = () => {
  return (
    <div className='flex flex-col'>
        <Promo />
        <Footer />
        <Copyright />
    </div>
  )
}

export default FooterSection