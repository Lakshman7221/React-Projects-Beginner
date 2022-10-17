import React, { useState } from 'react'

const UpdateData = () => {
    const [updata, SetUpdate] = useState(
        { companyName: "Manthra Tech", Location: "Hyderabad" },

    )
    const updateHandler = () => {
        return SetUpdate({ companyName: "Amazon" })
    }
    const allupdate = () => {
        return SetUpdate({ ...updata, companyName: "Amazon" })
    }

    return (
        <div>
            <h2 className='display:3'>My Company Name is <b style={{ color: "red" }}>{updata.companyName} </b>It Located in <b style={{ color: "red" }}>{updata.Location} </b></h2>
            <p>kindly change company name only..</p>
            <button onClick={allupdate} className='btn btn-success m-3'>Update with Spread Operator</button>

            <button onClick={updateHandler} className='btn btn-primary m-3'>update without Spread Operator</button>

        </div>
    )
}
export default UpdateData
