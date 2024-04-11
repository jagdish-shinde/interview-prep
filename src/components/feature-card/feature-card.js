import styles from './feature-card.module.css'
import translate from '../../images/translate.svg'
import CustomBtn from '../button/button'


export default function FeatureCard ({data}) {

    const {
        text = '',
        image = '',
        color = '',
        id = ''
    } = data || {}

    return (
        <div className={styles.wrapper}>
            <div 
                className={styles.card} 
                style={{
                    background : color,
                    ...(id == 2 && {marginTop : '-70px'})
                }}
            >
                <img src={image}/>
                <p>{text}</p>
            </div>
            {
                id == 2 && (
                    <CustomBtn btnText='See All' customStyle={styles.btnStyle} isArrow/>

                )


            }


        </div>
        
    )
}