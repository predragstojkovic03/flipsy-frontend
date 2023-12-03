import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FieldPicker from './pages/HomePage/FieldPicker/FieldPicker';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/biranje-smera' element={<FieldPicker />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
