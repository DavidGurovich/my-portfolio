import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className='bg-neutral-900 overflow-hidden'>
      <NavBar/>
      <Home/>
      <About />
      <Projects/>
      <Contact/>
      <Footer/>
      </main>
    
  );
}

export default App;
