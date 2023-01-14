import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <Image src='/images/Header.jpg' alt='Image by Ameer Basheer on Unsplash' width={750} height={250} layout='responsive'/>   
    </div>
  )
}

export default Header
