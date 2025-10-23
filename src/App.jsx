import { Outlet, useParams } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  const [selectedPage, useSelectedPage] = useState(window.location.pathname.slice(1));

  // useEffect(() => {
  //   fetch('localhost:http://localhost:3000')
  // }, [])

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
