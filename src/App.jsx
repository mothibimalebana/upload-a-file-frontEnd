import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [selected, useSelected] = useState('Home');

  return (
    <>
    <div id='app' className="app grid md:grid-cols-[250px_minmax(900px,_auto)] bg-[#fff]">
      <Navbar page={useSelected} currPage={selected}/>
      <div className="app-content">
        <Outlet/>
      </div>
    </div>
    </>
  )
}

export default App
