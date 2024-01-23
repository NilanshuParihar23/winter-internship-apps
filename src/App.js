import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './winter-internship-apps/Navbar';
import Weather from './winter-internship-apps/weather-app/Weather';
// import News from './winter-internship-apps/news-app/News';
import News from './winter-internship-apps/news-app/News';
import Emp from './winter-internship-apps/empmanagement/Emp';

const App = () => {
  return (
  <>
  <Router>
  <Navbar/>
    <Routes>
        <Route path="/News" element={<News/>} />
        <Route path="/Weather" element={<Weather/>} />
        <Route path="/Emp" element={<Emp/>} />
      </Routes>
  </Router>
 
  </>
  )
}

export default App