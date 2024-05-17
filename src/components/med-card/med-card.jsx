import { useEffect, useState } from 'react'
import styles from './med-card.module.css'

export default function MedCard ({data}) {

    const [forms, setForms] = useState([])
    const [strengths, setStrengths] = useState([])
    const [pacakging, setPackaging] = useState([])
    const [lowestPrice, setLowestPrice] = useState(null)

    const [selectedCombo, setSelectedCombo] = useState({
        form : '',
        strength : '',
        pacakging : ''
    })

    function handleChnageSelection (value, key) {

        const newSelectionCombo = {
            ...selectedCombo,
            [key] : value
        }

        const {
            form = '',
            strength = '',
            pacakging = ''
        } = newSelectionCombo || {}

        if(key == 'form'){

            const defaultForm = value
            // getting strengths 
            const availableStrengths = Object.keys(data?.forms?.[defaultForm])
            const defaultStrength = availableStrengths?.[0]
            setStrengths(availableStrengths)

            //getting packagings
            const availablePackagings = Object.keys(data?.forms?.[defaultForm]?.[defaultStrength])
            const defaultPackaging = availablePackagings?.[0]
            setPackaging(availablePackagings)

            setSelectedCombo({
                form : defaultForm,
                strength : defaultStrength,
                pacakging : defaultPackaging
            })

            const shops = Object.values(forms?.[defaultForm]?.[defaultStrength]?.[defaultPackaging])
            let sellingSops = []
            shops?.forEach((shops) => {
                if(shops){
                    sellingSops = [
                        ...sellingSops,
                        ...shops
                    ]
                }
            })

            sellingSops.sort((a, b) => a?.selling_price - b?.selling_price)
            console.log(sellingSops?.[0]?.selling_price)
            setLowestPrice(sellingSops?.[0]?.selling_price)

            return ;
        }



        setSelectedCombo(newSelectionCombo)

        const shops = Object.values(data?.forms?.[form]?.[strength]?.[pacakging])
        let sellingSops = []
        console.log({shops})
        shops?.forEach((shops) => {
            if(shops){
                sellingSops = [
                    ...sellingSops,
                    ...shops
                ]
            }
        })
        sellingSops?.sort((a, b) => a?.selling_price - b?.selling_price)
        setLowestPrice(sellingSops?.[0]?.selling_price)

    }

    useEffect(() => {
        const {
            medicine = '',
            forms = {}
        } = data || {}
        // getting forms
        const availableForms = Object.keys(forms)
        const defaultForm = Object.keys(forms)?.[0]
        setForms(availableForms)

        // getting strengths 
        const availableStrengths = Object.keys(forms?.[defaultForm])
        const defaultStrength = availableStrengths?.[0]
        setStrengths(availableStrengths)

        //getting packagings
        const availablePackagings = Object.keys(forms?.[defaultForm]?.[defaultStrength])
        
        const defaultPackaging = availablePackagings?.[0]

        setPackaging(availablePackagings)

        setSelectedCombo({
            form : defaultForm,
            strength : defaultStrength,
            pacakging : defaultPackaging
        })

        const shops = Object.values(forms?.[defaultForm]?.[defaultStrength]?.[defaultPackaging])
        let sellingSops = []
        shops?.forEach((shops) => {
            if(shops){
                sellingSops = [
                    ...sellingSops,
                    ...shops
                ]
            }
        })

        sellingSops.sort((a, b) => a?.selling_price - b?.selling_price)
        console.log(sellingSops?.[0]?.selling_price)
        setLowestPrice(sellingSops?.[0]?.selling_price)
    },[])

    return (
        <div className={styles.card}>
            <div className={styles.medDetails}>
                <div className={styles.medForms}>
                    <p className={styles.headText}>Form</p>
                    <div>
                        {
                            
                            forms?.map((form) => (
                            <div className={`${styles.buttons} ${form === selectedCombo?.form && styles.selectedStyle}`} onClick={
                                () => handleChnageSelection (form, 'form')
                            }>{form}</div>
                           )) 
                        }
                        {/* {
                            Object.keys(forms)?.length > 2 && (
                                <span className={styles.moreOption}>More ...</span>

                            )
                        } */}
                    </div>
                </div>
                {/*  */}
                <div className={styles.medForms}>
                    <p className={styles.headText}>Strength</p>
                    <div>
                        {
                           strengths?.map((strength) => (
                            <div 
                                className={`${styles.buttons} ${strength === selectedCombo?.strength && styles.selectedStyle}`}
                                onClick={
                                    () => handleChnageSelection (strength, 'strength')
                                }
                                >{strength}</div>
                           )) 
                        }
                    </div>
                </div>
                {/*  */}
                <div className={styles.medForms}>
                    <p className={styles.headText}>Packaging</p>
                    <div>
                        {
                           pacakging?.map((packaging) => (
                            <div 
                            className={`${styles.buttons} ${packaging === selectedCombo?.pacakging && styles.selectedStyle}`}
                            onClick={
                                () => handleChnageSelection (packaging, 'pacakging')
                            }
                            >{packaging}</div>
                           )) 
                        }
                    </div>
                </div>
            </div>
            <div className={styles.combination}>
                <h6>Paracitemol</h6>
                <div>
                    <p>{selectedCombo?.form}</p>
                    <p>{selectedCombo?.pacakging}</p>
                    <p>{selectedCombo?.strength}</p>
                </div>
            </div>

            <div className={`${styles.price} ${!lowestPrice && styles.noStoreStyle}`}>
                {
                    lowestPrice ? (
                        <span>From Rs. {lowestPrice}</span>
                    ) : (
                        <span>
                            No store Selling this product near you.
                        </span>
                    )
                }
                
            </div>
        </div>
    )
}