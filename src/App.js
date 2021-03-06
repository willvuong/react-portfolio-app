import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom'

import Header from './components/Header.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'

//data
import aboutData from './data/AboutData.js'
import projectsData from './data/ProjectsData.js'
import contactData from './data/ContactData'

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Switch location={location} key={location.key}>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/about'><About aboutData={aboutData}/></Route>
          <Route exact path='/projects'><Projects projectsData={projectsData}/></Route>
        </Switch>
      </BrowserRouter>
      <Footer contactData={contactData}/>
    </div>
  );
}

export default App;
