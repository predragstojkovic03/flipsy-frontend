import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Subjects from './pages/Subjects/Subjects';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/predmeti' element={<Subjects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
