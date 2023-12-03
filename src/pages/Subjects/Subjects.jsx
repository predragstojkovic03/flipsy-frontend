import { SlArrowLeftCircle } from 'react-icons/sl';
import { IoSearchCircleOutline } from 'react-icons/io5';
import { BsGraphUpArrow } from 'react-icons/bs';
import { TbMathFunction } from 'react-icons/tb';
import { FaComputer } from 'react-icons/fa6';
import { FaBook } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import { GiBrain } from 'react-icons/gi';

import styles from './Subjects.module.css';

import slika from '../../assets/image.png';
import slika1 from '../../assets/papercut1.png';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

const Subjects = () => {
  const navigate = useNavigate();

  const [user, setUser] = useLocalStorage('user', null);

  if (!user) return <Navigate to='/login' />;

  return (
    <main>
      <div className={styles.back_icon_wraper} onClick={() => navigate('/')}>
        <SlArrowLeftCircle />
      </div>
      <div className={styles.container}>
        <div className={styles.gornjiDeo}>
          <h1 className={styles.naslov}>Zdravo, izabrali ste smer: ISIT </h1>
          <img src={slika1} className={styles.papercut1} />
        </div>
        <div className={styles.donjiDeo}>
          <div className={styles.godine}>
            <button className={styles.godine_btn}>prva</button>
            <button className={styles.godine_btn}>druga</button>
            <button className={styles.godine_btn}>treća</button>
            <button className={styles.godine_btn}>četvrta</button>
          </div>
          <div className={styles.pretraga}>
            <div className={styles.pretraga_icon}>
              <IoSearchCircleOutline />
            </div>
            <input
              className={styles.input_pretraga}
              placeholder='pretrazi predmet'
            />
          </div>
          <div className={styles.predmeti}>
            <div className={styles.vrste}>
              <div
                className={styles.predmet}
                id={styles.predmet1}
                onClick={() => navigate('/pitanja')}
              >
                <div className={styles.predmet_icon}>
                  <BsGraphUpArrow />
                </div>
                <br />
                Ekonomija
              </div>
              <div
                className={styles.predmet}
                id={styles.predmet2}
                onClick={() => navigate('/pitanja')}
              >
                <div className={styles.predmet_icon}>
                  <TbMathFunction />
                </div>
                <br />
                Matematika 1
              </div>
            </div>
            <div className={styles.vrste}>
              <div
                className={styles.predmet}
                id={styles.predmet3}
                onClick={() => navigate('/pitanja')}
              >
                <div className={styles.predmet_icon}>
                  <FaComputer />
                </div>
                <br />
                OIKT
              </div>
              <div
                className={styles.predmet}
                id={styles.predmet4}
                onClick={() => navigate('/pitanja')}
              >
                <div className={styles.predmet_icon}>
                  <FaBook />
                </div>
                <br />
                Engleski jezik
              </div>
            </div>
            <div className={styles.vrste}>
              <div
                className={styles.predmet}
                id={styles.predmet5}
                onClick={() => navigate('/pitanja')}
              >
                <div className={styles.predmet_icon}>
                  <FaPeopleGroup />
                </div>
                <br />
                Menadžment
              </div>
              <div
                className={styles.predmet}
                id={styles.predmet6}
                onClick={() => navigate('/pitanja')}
              >
                <div className={styles.predmet_icon}>
                  <GiBrain />
                </div>
                <br />
                Psihologija
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Subjects;
