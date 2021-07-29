import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Component
import NavBar from './Components/NavBar'

// Routes
import Landing from './Routes/Landing/Index'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
