import React from 'react'
// import './App.css'
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <div>
        {routes}
      </div>
    </BrowserRouter>
    // <MainComponent />
  );
}

export default App