import CustomBtn from '../button/button'
import styles from './header.module.css'
import {Link} from 'react-router-dom'

export default function Header () {

    const navOptions = [
        {
            option : 'Home',
            path : '/home'
        },
        {
            option : 'About',
            path : '/about'
        },
        {
            option : 'Pricing',
            path : '/pricing'
        }
    ]

    return (
        <header className={styles.header}>
            <div className={styles.companyName}>
                Vay <span>par</span> Launch<span>pad</span>
            </div>

            <nav className={styles.navbar}>

                {
                    navOptions.map(({option = '', path = ''}) => (
                        <Link to={path} className={styles.option}>
                            {option}
                        </Link>
                    ))
                }
                <CustomBtn/>
            </nav>
        </header>
    )

}