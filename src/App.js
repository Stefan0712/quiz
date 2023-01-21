import './App.css';
import { Routes, Route, Link } from 'react-router-dom'; 
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link to='/not-found' className="navbar-brand" >LOGO</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/quiz-page' className='nav-link'>Take the quiz</Link>
            <Link to='/about' className='nav-link'>About</Link>
            <Link to='/contact' className='nav-link'>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
    <footer>
      <p>This is a footer</p>
      <p>© 2023 Copyright to LSUOC</p>
    </footer>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/quiz-page' element={<QuizPage />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/' element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App;
