import styles from './footer.module.css'
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { GrTwitter } from "react-icons/gr";
import { ImLinkedin2 } from "react-icons/im";
import {Link} from 'react-router-dom'
import { Fragment } from 'react';



export default function Footer () {

    const socialLinks = [
        {
            icon : <RiFacebookFill className={styles.mediaIcon}/>,
            path : 'https://www.facebook.com'
        },
        {
            icon : <GrTwitter className={styles.mediaIcon}/>,
            path : 'https://www.twitter.com'
        },
        {
            icon : <RiInstagramLine className={styles.mediaIcon}/>,
            path : 'https://www.instagram.com'
        },
        {
            icon : <ImLinkedin2 className={styles.mediaIcon}/>,
            path : 'https://www.linkedin.com'
        }
    ]
    function handleRedirect (path){

    }

    return (
        <footer className={styles.footerStyle}>
            <p>Write Us at :  team@civiccraft.in</p>
            <div className={styles.socialLinks}>
                {
                    socialLinks.map(({path,icon}) => (
                        <Fragment>
                            <Link 
                                key={path} 
                                to={path} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                {icon}
                            </Link>
                        </Fragment>
                    ))
                }

            </div>
        </footer>
    )
}