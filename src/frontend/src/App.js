import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route

import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes> {/* Wrap your routes within a <Routes> element */}
          <Route path="/teams/:teamName" element={<TeamPage />} /> {/* Use the "element" prop to define the component */}

          <Route path="/teams/:teamName/matches/:year" element={<MatchPage />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
