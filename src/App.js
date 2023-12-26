import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import About from './components/About/About';
import Room from './components/RoomType/Room';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Map from "./components/Map/Map"
import Footer from './components/Footer/Footer';
import Footer2 from './components/Footer/Footer2';
const App = () => {
  return (
    <Router>
    <Header/>
    <Main/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/room-type' element={<Room/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <About/>
      <Room/>
      <Gallery/>
      <Contact/>
      <Map/>
      <Footer/>
      <Footer2/>
    </Router>
  )
}

export default App
