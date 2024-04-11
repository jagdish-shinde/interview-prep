import styles from './button.module.css'
import { HiMiniArrowUpRight } from "react-icons/hi2";


export default function CustomBtn ({btnText = '', customStyle, isArrow = false}) {
    return (
        <button className={`${styles.button} ${customStyle}`}>
            {btnText || 'Try Now'}
            {isArrow && <HiMiniArrowUpRight/>}
        </button>
    )
}