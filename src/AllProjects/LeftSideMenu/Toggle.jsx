import React, { useState } from 'react'

const Toggle = () => {

    const [myName, setMyName] = useState("Hellow")

    const toggleHandler = () => {
        let x = myName;

        // ----if condition used-----------------------------------------

        // if (x === "Hiii....") {
        //     setMyName("Hellow")
        // } else { setMyName("Hiii....") }

        // ----Ternary Operator -----------------------------------------

        (x === "Hiii....") ? setMyName("Hellow") : setMyName("Hiii....")
    }

    return (
        <>
            <div className='text-center'>
                <h1 className='display-1 py-5'>{myName}</h1>
                <button onClick={toggleHandler} className='btn btn-warning btn-lg'>Toggle</button>
            </div>
            <div className='m-5 text-center'>
                <h3 className=' text-dark pb-5'>Toggle using <br /> <span className='text-info'>"onClick & useState" </span> <span className='text-info'>"if conditon / Ternary Operator" </span> </h3>
                <img src="images/toggle.png" width="100%" />
            </div>
        </>
    )
}

export default Toggle
