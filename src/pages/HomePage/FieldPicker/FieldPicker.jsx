import styles from './FieldPicker.module.css'

import slika from '../../../assets/img/image.png'
import slika1 from '../../../assets/img/papercut1.png'

const FieldPicker = () => {
    return(
        <main>
            <div className={styles.container}>
                <div className = {styles.logo}>
                    <img src={slika} className={styles.pcut1}/>
                </div>
                <div className={styles.gornjiDeo}>
                    <h1 className={styles.naslov}>ZDRAVO, IZABERI SVOJ SMER: </h1>
                    <img src={slika1} className={styles.papercut1} />
                </div>
                <div className={styles.donjiDeo}>
                    <h1 className = {styles.donjiDugme}>
                        ISIT
                    </h1>
                    <h2 className = {styles.donjiText}>
                        ILI
                    </h2>
                    <h1 className = {styles.donjiDugme}>
                        MGMT
                    </h1>
                </div>

            </div> 
        </main>
    )
}

export default FieldPicker;