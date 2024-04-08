import { Fragment, useState } from "react"

export default function UseState () {

    // when to use use state
    // 1. to save data that need to be update on any change
    // using variable will not hold the value after update of component

    const [count, setCount] = useState(0)
    let num = 0
    console.log('value after update',{num})

    function handleClickBtn () {
        setCount(count + 1)
        num = num + 1
        console.log('updated number', num)
    }


    return (
        <Fragment>
            <h4>{count}</h4>
            <button onClick={handleClickBtn}>Click</button>
        </Fragment>
    )
}