import './App.css';
import PortfolioHeader from './components/PortfolioHeader';
import AboutMe from './components/Aboutme';
import NavigationBar from './components/NavigationBar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <PortfolioHeader />
      <NavigationBar />
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      
    </div>
  );
}

export default App;
