import styles from './QuestionsPage.module.css'
import papercut from '../../assets/papercut1.png'
import arrow from '../../assets/arrow-left2.svg'
import undo from '../../assets/undo.svg'
import redo from '../../assets/redo.svg'


const QuestionsPage = () => {
    return (
        <main>
            <div className = {styles.container}>
                <div className = {styles.papercut}>
                    <img src = {papercut} />
                </div>
                <div className = {styles.back}>
                    <a className = {styles.backButton} href=''>
                        <img src = {arrow} />
                    </a>
                </div>
                <div className = {styles.subject}>
                    EKONOMIJA
                </div>
                <div className = {styles.flipcardDiv}>
                    <div className = {styles.flipcardUp}>
                        NAJSBD JDNSJL JHF IOIDALJFLAJ KLKAD I ABSDKB JOADBFJOASNOD JNAS JOJANFO ONASND?
                    </div>
                    <div className = {styles.flipcardDown}>
                        <div className = {styles.flipcardButtons}>
                            <img src = {undo} />
                        </div>
                        <div>
                            1 / 100
                        </div>
                        <div className = {styles.flipcardButtons}>
                            <img src = {redo} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default QuestionsPage