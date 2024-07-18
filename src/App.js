import './App.css';
import Hero from './Hero';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
  <div>
    <nav>
      <Link to="/RyojiBernardo" className="nav-item">Ryoji Bernardo</Link>
      <Link to="/JohnVincentPeregrino" className="nav-item">John Vincent Peregrino</Link>
    </nav>
    <Routes>
      <Route path="/RyojiBernardo" element={<Hero name="Ryoji Bernardo" SN="2021107273"/>} />
      <Route path="/JohnVincentPeregrino" element={<Hero name="John Vincent Peregrino" SN="2020115902"/>} />
    </Routes>
  </div>
  );
}

export default App;
