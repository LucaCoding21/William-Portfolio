import './App.css';
import PortfolioHeader from './components/PortfolioHeader';
import AboutMe from './components/Aboutme';
import NavigationBar from './components/NavigationBar';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <PortfolioHeader />
      <NavigationBar />
      <div id="about">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
      
      
    </div>
  );
}

export default App;
