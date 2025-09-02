import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import { Routes, Route, Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <>
    <div id='app' className="app grid md:grid-cols-[250px_minmax(900px,_auto)]">
      <Navbar/>
    </div>
    </>
  )
}

export default App
