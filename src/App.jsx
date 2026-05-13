import Aboutme from './components/Aboutme';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Header />
      <Projects />
      <Skills />
      <Aboutme />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
