import FeatureCard from '../feature-card/feature-card'
import styles from './features.module.css'
import translate from '../../images/translate.svg'
import link from '../../images/link.svg'
import diagram from '../../images/diagram.svg'
import sidePicLeft from '../../images/side-pic-left.svg'
import sidePicRight from '../../images/side-pic-right.svg'

export default function Features () {
    
    const featuresData = [
        {
            text : 'Customized Multilingual Onboarding',
            image : translate,
            color : '#ffeeb9',
            id : 1

        },
        {
            text : 'Integration with any marketplace',
            image : link,
            color : '#ffcca8',
            id : 2
        },
        {
            text : 'Advanced SEO description Generation',
            image : diagram,
            color : '#ff9d80',
            id : 3
        }
    ]
    return (
        <section className={styles.secStyle}>
            <div className={styles.cards}>
                {
                    featuresData.map(data => (
                        <FeatureCard data = {data}/>
                    ))
                }

            </div>
            <div className={styles.info}>
                <h6>Our Feature Products</h6>
                <p>
                    Vyapar Launchpad helps businesses improve their search engine visibility 
                    and ranking for products across different regions and markets.
                </p>

            </div>

            <img src = {sidePicLeft} className={styles.leftPic}/>
            <img src = {sidePicRight} className={styles.rightPic}/>
            

        </section>
    )
}