import { Fragment, useState } from "react"

export default function List (props) {

    const [count, setCount] = useState(0)

    function handleClick () {
        alert(2)

    }
    return (
        <Fragment>
            <form>
                <input/>
                <div onClick={(e) => handleClick(e, 'other data')}>Click</div>
            </form>
            <h1>{count}</h1>
        </Fragment>
    )
}