import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const PrintArrayData = () => {
    const biodata = [
        { SNo: 1, Name: "Laxman", Email: "laxman@gmail.com", Phone: 953254044 },
        { SNo: 2, Name: "Prakash", Email: "prakash@gmail.com", Phone: 953484065 },
        { SNo: 3, Name: "Yuva", Email: "yuva@gmail.com", Phone: 953484344 },
        { SNo: 4, Name: "Kumari", Email: "kumari@gmail.com", Phone: 953484124 },
        { SNo: 5, Name: "Divya", Email: "divya@gmail.com", Phone: 954484044 },
        { SNo: 6, Name: "Vijaya", Email: "vijaya@gmail.com", Phone: 912484144 },
    ]

    const [myArray, setMyArray] = useState(biodata)
    const clearArray = () => setMyArray([]);
    const addArray = () => setMyArray(biodata);
    const removeEle = (x) => {

        const myNewArray = myArray.filter((curElem) => {
            return curElem.SNo !== x;
        })
        setMyArray(myNewArray)
    }

    return (
        <>
            <h2 className='display-6'>Makro-Tech User Information</h2>
            <div className='pt-3'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Eamil</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myArray.map((curElem) =>

                                <tr key={curElem.SNo}>
                                    <th scope="row">{curElem.SNo}</th>
                                    <td>{curElem.Name}</td>
                                    <td>{curElem.Email}</td>
                                    <td>{curElem.Phone}</td>
                                    <td><button onClick={() => removeEle(curElem.SNo)} className='btn' style={{ color: "red" }}><DeleteIcon></DeleteIcon></button></td>
                                </tr>
                            )}
                    </tbody>
                </table>
                <button onClick={addArray} className='btn btn-primary m-2'>Add Array Data</button>
                <button onClick={clearArray} className='btn btn-warning m-2'>Delete all Data</button>
            </div>
        </>
    )
}

export default PrintArrayData

