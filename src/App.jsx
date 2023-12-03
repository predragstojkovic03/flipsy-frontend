import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FieldPicker from './pages/HomePage/FieldPicker/FieldPicker';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<FieldPicker />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
