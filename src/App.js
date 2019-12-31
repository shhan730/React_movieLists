import React from 'react';
import Home from './routes/Home'
import { HashRouter, Route} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Route path='/' component={Home}></Route>
    </HashRouter>
  );
}

export default App;
