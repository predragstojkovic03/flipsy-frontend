import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FieldPicker from './pages/HomePage/FieldPicker/FieldPicker';
import HomePage from './pages/HomePage/HomePage';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';
import Login from './pages/Login/Login';
import Subjects from './pages/Subjects/Subjects';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<FieldPicker />} />
          <Route path='/login' element={<Login />} />
          <Route path='/predmeti' element={<Subjects />} />
          <Route path='/pitanja' element={<QuestionsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
