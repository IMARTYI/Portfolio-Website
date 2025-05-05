import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import Intro from './Intro'
import Header from '../components/header'
import ContactPage from '../contact'
import Pastprojects from './port'
import AboutMe from './about'


function Appication() {
 const [count, setCount] = useState(0)
 const [activeSection,setActiveSection] = useState("Home");
  let content;

  content= <Intro/>
  return (

    <div class=''>
      <div  class="">      
        {content}
      </div>
      
    </div>
    
  )   
}

export default Appication