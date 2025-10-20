import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <div id='app' className="app grid md:grid-cols-[250px_minmax(900px,_auto)] bg-[#fff]">
      <Navbar/>
      <Outlet/>
    </div>
    </>
  )
}

export default App
