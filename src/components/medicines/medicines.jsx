import { useEffect, useState } from 'react'
import styles from './medicines.module.css'
import MedCard from '../med-card/med-card'

export default function Medicines ({medicine = ''}) {

    const [medicines, setMedicines] = useState(null)
    // const [isLoading, setIsLoading] = useState(false)

    async function getMedicines () {
        try {
            // setIsLoading(true)
            // get medicine details
            const response  = await fetch(`https://backend.cappsule.co.in/api/v1/new_search?q=${medicine}&pharmacyIds=1,2,3`)
            // https://backend.cappsule.co.in/api/v1/new_search?q=paracetamol&pharmacyIds=1,2,3
            const data = await response.json()

            const {
                saltSuggestions = []
            } = data?.data || {}

            const details = []
            // console.log({saltSuggestions,data})

            saltSuggestions.forEach((saltData) => {
                const {
                    salt, 
                    salt_forms_json = {}
                } = saltData || {}
                
                const data = {
                    medicine : salt,
                    forms : {}
                }
                for(const form in salt_forms_json){
                    data.forms[form] = {}
                    Object.keys(salt_forms_json[form]).forEach((strength) => {
                        data.forms[form][strength] = salt_forms_json?.[form]?.[strength]
                    })
                }
                details?.push(data)
                
            })

            console.log({details})
            setMedicines(details)
            


        }
        catch(error){
            console.log(`
                Error in searching for Medicine: ${error.message}
            `)
        }
        finally{
            // setIsLoading(false)
        }
    }


    useEffect(() => {
        if(!medicine) return ;
        // alert(medicine)
        getMedicines()

    }, [medicine])

    // if(isLoading) {
    //     <section className={styles.secStyle}>
    //         <p>Fetching Medicines ...</p>
    //     </section>
    // }

    return (
        <section className={styles.secStyle}>
            {
                !medicines && (
                    <p>Find Medicines with amazing discounts</p>
                )
            }
            {
                medicines?.map((data) => (
                    <MedCard data = {data}/>
                ))

            }
            {/* <MedCard/>
            <MedCard/> */}

        </section>
    )
}