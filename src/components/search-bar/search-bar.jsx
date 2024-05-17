import { Fragment, useState } from 'react';
import styles from './search-bar.module.css'
import { RiSearchLine } from "react-icons/ri";


export default function SearchBar({setMedicine = () => {}}) {

    const [inputVal, setInputVal] = useState('')

    function handleOnChnage (e) {
        setInputVal(e.target.value)
    }
    function handleClickSearch () {
        setMedicine(inputVal)
    }
    function handleKeyDown (e) {
        if (e.key === 'Enter') {
            setMedicine(inputVal)
        }
    }

    return (
        <Fragment>
            <div className={styles.wrapper}>
                <RiSearchLine className={styles.searchIcon}/>
                <input 
                    className={styles.input} 
                    placeholder='Type your medicine name here'
                    onChange={handleOnChnage}
                    onKeyDown={handleKeyDown}
                />
                <button 
                    className={styles.searchBtn}
                    onClick={handleClickSearch}
                >Search</button>
            </div>
            <hr className={styles.hrLine}/>
        </Fragment>

    )

}