import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inventario from './componentes/Dashborad/DashboardInventario.js'
import HomePage from './componentes/HomePage.js';
function App() {
  return (
    
      <div className="App">
        <header className="App-header">
    
          <Inventario/>
        </header>
      </div> 
    
  );
}

export default App;
