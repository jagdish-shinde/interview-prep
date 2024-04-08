import { Fragment, useRef } from "react"

export default function UseRef () {

    // use ref is used to take refrence of dom elements
    // so that we can update the element dorectly.

    const h4Reference = useRef(null)
    
    // create input ref
    // add refrence 
    // inputRef.current.focus() in on click function 

    const inputRef = useRef(null)


    function handleClickBtn () {
        // console.log(h4Reference.current)
        // h4Reference.current.style.color = 'red'
        // h4Reference.current.innerHTML = 'I am changed content'
        // console.log(inputRef.current)
        inputRef.current.focus()

    }

    const fileRef = useRef(null)

    function pickFile () {
        // console.log(fileRef.current)
        fileRef.current.click()

    }

    return (
        <Fragment>
            <h4 ref={h4Reference}> this is use ref ...</h4>
            
            <input ref={inputRef}/>
            <button onClick={handleClickBtn}>Click</button>
            <br/>  <br/>  <br/>
            <input type="file" style={{display : 'none'}} ref={fileRef}/>
            <button onClick={pickFile}>Pick File</button>

        </Fragment>
    )
}