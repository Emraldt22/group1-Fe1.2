import './App.css';
import Hero from './Hero';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
  <div>
    <nav>
      <Link to="/RyojiBernardo" className="nav-item">Ryoji Bernardo</Link>
      <Link to="/JohnVincentPeregrino" className="nav-item">John Vincent Peregrino</Link>
      <Link to="/MiguelLacanienta" className="nav-item">Miguel Lacanienta</Link>
      <Link to="/ChampagneShengGonzales" className="nav-item">Champagne Sheng Gonzales</Link>
      <Link to="/CedricAnthonyPaz" className="nav-item">Cedric Anthony Paz</Link>
    </nav>
    <Routes>
      <Route path="/RyojiBernardo" element={<Hero name="Ryoji Bernardo" SN="2021107273"/>} />
      <Route path="/JohnVincentPeregrino" element={<Hero name="John Vincent Peregrino" SN="2020115902"/>} />
      <Route path="/ChampagneShengGonzales" element={<Hero name="Champagne Sheng Gonzales" SN="2021106176"/>} />
      <Route path="/CedricAnthonyPaz" element={<Hero name="Cedric Anthony Paz" SN="2022102230"/>} />
    </Routes>
  </div>
  );
}

export default App;
