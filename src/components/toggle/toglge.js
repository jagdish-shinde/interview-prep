import { useState } from 'react';
import styles from './toggle.module.css'
import { BsBrightnessHigh } from "react-icons/bs";
import { MdBrightness2 } from "react-icons/md";




export default function ToggleSwitch () {

    const [theme, setTheme] = useState(false);
    const handleClick = () => {
      setTheme(!theme);
    };
    return (
        <div className = {styles.toggleSlide} onClick={handleClick}>
          <div className={`${styles.switch} ${theme ? styles.slide : ""}`}>
            {
                theme ? 
                <MdBrightness2 
                  className={styles.icons}
                /> :             
                <BsBrightnessHigh 
                  className={styles.icons}
                />
            }
          </div>
        </div>
    );
}