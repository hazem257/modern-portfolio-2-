import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import { useEffect, useState } from 'react'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Projects from './components/main/Projects'
function App() {

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 300 ){
setshowScroll(true)
      }else{
        setshowScroll(false)
      }
    })

  },[])
  const [count, setCount] = useState(0)
const [showScroll , setshowScroll] = useState(false)
  return (
    <div id='up' className='container'>
    <Header/>
    <Hero/>
    <div className='divider'/>
   <Projects/>
    <div className='divider'/>
    <Contact/>
    <div className='divider'/>
    <Footer/>
   
      <a style={{opacity: showScroll? 1 : 0 , transition:"3s"}} href="#up">
    <button className='scroll2Top icon-keyboard_arrow_up'></button>
    </a>
  
    </div>
  )
}

export default App
