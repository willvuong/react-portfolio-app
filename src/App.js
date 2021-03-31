import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import Header from './components/Header.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Footer from './components/Footer.js'

//data
import AboutData from './data/AboutData.js'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/about'><About aboutData={AboutData}/></Route>
          <Route exact path='/projects'></Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
