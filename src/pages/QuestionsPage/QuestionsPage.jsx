import styles from './QuestionsPage.module.css';
import papercut from '../../assets/papercut1.png';
import arrow from '../../assets/arrow-left2.svg';
import undo from '../../assets/undo.svg';
import redo from '../../assets/redo.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from '../../services/api/baseUrl';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setShowAnswer(false);
  }, [index]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data } = await axios.get(
        `${baseUrl}/api/subjects/656bb60c1bd97c0654b31adb/questions`
      );

      setQuestions(data.questions);
      console.log(data.questions);
    };

    fetchQuestions();
  }, []);

  const nextQuestion = () => {
    console.log(index);
    setIndex((index) => (index >= questions.length - 1 ? 0 : index + 1));
  };

  const previousQuestion = () => {
    console.log(index);

    setIndex((index) => (index <= 0 ? questions.length - 1 : index - 1));
  };

  const [user, setUser] = useLocalStorage('user', null);

  if (!user) return <Navigate to='/login' />;

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.papercut}>
          <img src={papercut} />
        </div>
        <div className={styles.back}>
          <a
            className={styles.backButton}
            onClick={() => navigate('/predmeti')}
          >
            <img src={arrow} />
          </a>
        </div>
        <div className={styles.subject}>PITANJA</div>
        {questions.length && (
          <div className={styles.flipcardDiv}>
            <div
              className={styles.flipcardUp}
              onClick={() => setShowAnswer(!showAnswer)}
            >
              {showAnswer
                ? questions[index].answer
                : questions[index].questionText}
            </div>
            <div className={styles.flipcardDown}>
              <div
                className={styles.flipcardButtons}
                onClick={previousQuestion}
              >
                <img src={undo} />
              </div>
              <div>
                {index + 1} / {questions.length}
              </div>
              <div className={styles.flipcardButtons} onClick={nextQuestion}>
                <img src={redo} />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default QuestionsPage;
