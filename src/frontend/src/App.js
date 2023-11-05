import './App.scss';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      
      <Router>
        
        <Routes> {/* Wrap your routes within a <Routes> element */}
          <Route path="/teams/:teamName" element={<TeamPage />} /> {/* Use the "element" prop to define the component */}

          <Route path="/teams/:teamName/matches/:year" element={<MatchPage />} />

          <Route path="/" element={<HomePage />}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
