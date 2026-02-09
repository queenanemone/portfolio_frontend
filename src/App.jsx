import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* Future routes can be added here */}
      </Routes>
    </Router>
  );
}

export default App;
