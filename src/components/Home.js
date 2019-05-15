import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

export default function Home() {
  return (
    <div>
        <Header/> 
       <Main user={{name: "cent", gender: "Male"}} />
       <Footer/>
    </div>
  )
}
