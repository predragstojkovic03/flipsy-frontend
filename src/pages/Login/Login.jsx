import styles from "./Login.module.css"
import ppcut1 from "./img/papercut1.png"
import ppcut2 from "./img/papercut2.png"
import email from "./img/email.png"
import lock from "./img/lock.png"
import logo from "./img/logo.png"
import { useEffect, useRef } from "react"
import {Navigate} from 'react-router-dom'

import axios from 'axios';
import baseUrl from "../../services/api/baseUrl"
import useLocalStorage from "../../hooks/useLocalStorage"

export default function Login(){
    const emailRef = useRef();
    const passwordRef = useRef();

    const [user, setUser] = useLocalStorage('user', null);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
         const res = await axios.post(`${baseUrl}/api/users/login`, {email: emailRef.current.value, password: passwordRef.current.value})
        setUser(res.data);
        
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // throw new Error('asdasdasdasd')
    }, [])

    if (user) return <Navigate to='/'/>

    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <img src={ppcut1} alt="" className={styles.pcut1} />
          <div className={styles.logo}>
            <img src={logo} alt="" className={styles.logo} />
          </div>
          <form onSubmit={handleSubmit} className={styles.prijava}>
            <div className={styles.icons_input}>
              <img
                src={email}
                alt=""
                id="email_logo"
                className={styles.icons}
              />
              <input
                type="text"
                id="input_email"
                placeholder="email"
                className={styles.form_input}
                ref={emailRef}
              />
            </div>
            <div className={styles.icons_input}>
              <img
                src={lock}
                alt=""
                id="passowrd_logo"
                className={styles.icons}
              />
              <input
                type="text"
                id="input_pasword"
                placeholder="password"
                className={styles.form_input}
                ref={passwordRef}
              />
            </div>
            <button className={styles.log_in} type="submit">Log in</button>
            <br />
            <a className={styles.form_label} href="">
              Forgen password
            </a>
            <br />
            <a className={styles.form_label} href="">
              Dont have an accopunt
            </a>
            <br />
          </form>
          <img src={ppcut2} alt="" className={styles.pcut2} />
        </div>
      </div>
    );
}