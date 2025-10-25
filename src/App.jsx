import { Outlet, useLocation } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import {  useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Header from './components/Header';
import SearchBar from './components/SearchBar';


function App() {
  const [selectedPage, useSelectedPage] = useState(window.location.pathname.slice(1));
  const [userId, setUserId] = useState(null);

  const location = useLocation();
  useEffect(() => {
    setUserId(location.state)
  },[])
  

  useGSAP(() => {
    gsap.from(".outlet",{duration: 2, y: '100%', ease: 'power4.out'})
  }, {dependencies:[selectedPage]})


  return (
    <>
    <div id='app' className="app grid overflow-y-hidden overflow-x-hidden md:grid-cols-[250px_minmax(900px,_auto)] bg-[#fff]">
      <Navbar page={useSelectedPage} currPage={selectedPage}/>
      <div className="app-content w-full">
        <Header page={selectedPage}/>
        <SearchBar/>
        <div className="outlet">
          <Outlet/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
