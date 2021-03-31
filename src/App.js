import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import Header from './components/Header.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'

//data
import aboutData from './data/AboutData.js'
import projectsData from './data/ProjectsData.js'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/about'><About aboutData={aboutData}/></Route>
          <Route exact path='/projects'><Projects projectsData={projectsData}/></Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
