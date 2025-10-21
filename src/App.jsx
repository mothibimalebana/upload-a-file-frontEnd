import { Outlet, useParams } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function App() {
  const [selectedPage, useSelectedPage] = useState(window.location.pathname.slice(1));

  useGSAP(() => {
    gsap.from(".app-content",{duration: 1, y: '100%', ease: 'power4.out'})
  }, {dependencies:[selectedPage]})


  return (
    <>
    <div id='app' className="app grid overflow-y-hidden overflow-x-hidden md:grid-cols-[250px_minmax(900px,_auto)] bg-[#fff]">
      <Navbar page={useSelectedPage} currPage={selectedPage}/>
      <div className="app-content w-full">
        <Outlet id='outlet'/>
      </div>
    </div>
    </>
  )
}

export default App
