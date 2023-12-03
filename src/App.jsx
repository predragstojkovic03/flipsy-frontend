import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/pitanja' element={<QuestionsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
