import React, { useState } from 'react'

const IncDec = () => {

    const [count, setCount] = useState(0)

    const Increment = () => setCount(count + 1)
    const Decrement = () => setCount(count - 1)
    const Multification = () => setCount(count * 2)
    const Increment5 = () => setCount(count + 5)
    const clear = () => setCount(0)

    return (
        <>

            <div className='my-3 text-center'>
                <h1 className='display-1 text-danger'>{count}</h1>
                <button onClick={Increment} className='btn btn-success m-2'>Increment</button>
                <button onClick={Decrement} className="btn btn-warning  m-2">Decrement</button>
                <button onClick={Multification} className="btn btn-danger m-2">Num * 2</button>
                <button onClick={Increment5} className="btn btn-dark m-2">Add + 5</button>
                <button onClick={clear} className="btn btn-info  m-2">Clear</button>
            </div>
            <div className='m-5 text-center'>
                <h3 className=' text-dark pb-5'>Inc, Dec, Mult, Sub & Clear<br />using <span className='text-info'>"onClick" </span>event & <span className='text-info'>"useState" </span> </h3>
                <img src="images/inc&dec.png" width="100%" />
            </div>
        </>
    )
}

export default IncDec

