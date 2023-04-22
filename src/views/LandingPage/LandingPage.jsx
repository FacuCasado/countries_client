import React from "react";
import styles from "./landingPage.module.css"
import { Link } from "react-router-dom";
import foto1 from '../../xutils/github.png'
import foto2 from '../../xutils/linkdin.png'

function LandingPage(){
    return(
       <div className={styles.landDiv}>
            <h1 className={styles.title}>THE WORLD PROYECT</h1>
            <div className={styles.divButton}>
                <Link to={`/home`} >
                <button className={styles.button85}>Travel</button>
                </Link>
            </div>
            
            <div className={styles.redes}>
                <a className={styles.logos}href="https://github.com/FacuCasado" target="_blank" rel="noopener noreferrer">
                <img src={foto1} alt="Descripción de la imagen" />
                </a>
                <a className={styles.logos}href="https://www.linkedin.com/in/facufcasado/" target="_blank" rel="noopener noreferrer">
                <img src={foto2} alt="Descripción de la imagen" />
                </a>
            </div>
            
       </div>
    )
}

export default LandingPage;