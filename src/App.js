import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <main className=''>
      <Home/>
      <NavBar/>
      <About />
      <Projects/>
      <Contact/>
      </main>
    
  );
}

export default App;
