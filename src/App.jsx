
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Details from './Components/Details'
import Create from './Components/Create'
import Edit from './Components/Edit'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import About from './Components/About'

function App() {

  const { search, pathname } = useLocation();

  return (<div>
    <div className="h-screen w-screen flex">
      {(pathname != "/" || search.length > 0) && (<Link to="/" className="absolute text-red-400 left-[17%] top-[3%]">Home</Link>)}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
    <Footer />
  </div>
  )
}

export default App
