import React from 'react';
import './App.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import  Home from './pages/Home';
import {NotFound} from './pages/NotFound'
import Almbumes from './pages/Albumes';
import Canciones from './pages/Canciones';
import Reproduciendo from './pages/Reproduciendo';


function App() {
  return (
    <div className="App-artistas-bkg ">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/albumes/' component={Almbumes} />
          <Route path='/canciones/' component={Canciones} />
          <Route path='/reproduciendo/' component={Reproduciendo} />
          <Route component={NotFound} />
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
