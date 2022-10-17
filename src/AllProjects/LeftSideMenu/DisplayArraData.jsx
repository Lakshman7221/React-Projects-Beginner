import React, { useState } from 'react'

const DisplayArraData = () => {

    const employeData = [
        { id: "01", name: "Sowjanya", email: "sowjanya@gmail.com", designation: "React", location: "Telanaga" },
        { id: "02", name: "Bhavya", email: "bhavya@gmail.com", designation: "ViewJs", location: "AP" },
        { id: "03", name: "Geetha", email: "geetha@gmail.com", designation: "ViewJs", location: "AP" },
        { id: "04", name: "Vijay Kumar", email: "vijaykumar@gmail.com", designation: "React", location: "Telanaga" },
        { id: "05", name: "Rakesh", email: "rakesha@gmail.com", designation: "React", location: "AP" },
        { id: "06", name: "Naresh", email: "naresh@gmail.com", designation: "Angular", location: "Mumbai" },
        { id: "07", name: "Visnu Kumar", email: "visnukumar@gmail.com", designation: "Angular", location: "Delhi" }
    ]

    const [data, setData] = useState([])

    const addDataHandler = () => setData(employeData)
    const removeHandler = () => setData([]);

    return (
        <>
            <div className='text-center my-4'>
                <h1 className="display-5">Employee Data</h1>
                <button onClick={addDataHandler} className="btn btn-info px-3">Display Array of object Data</button>
                <button onClick={removeHandler} className="btn btn-warning px-3 m-3" >Remove Array</button>
            </div>
            <section>
                <table className="table table-hover  text-center">
                    <thead>
                        <tr >
                            <th scope="col" className='text-info'>ID</th>
                            <th scope="col" className='text-info'>Name</th>
                            <th scope="col" className='text-info'>Email</th>
                            <th scope="col" className='text-info'>Designation</th>
                            <th scope="col" className='text-info'>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((curElem) => {
                            return (
                                <tr key={curElem.id}>
                                    <th scope="row">{curElem.id}</th>
                                    <td>{curElem.name}</td>
                                    <td>{curElem.email}</td>
                                    <td>{curElem.designation}</td>
                                    <td>{curElem.location}</td>
                                </tr>

                            )
                        })
                        }
                    </tbody>
                </table>
            </section>
            <div className='m-5 text-center'>
                <h3 className=' text-dark pb-5'>Array Data Displayed using "map()" Method<br /> <span className='text-info'>"onClick & useState" </span> </h3>
                <img src="images/displayArrayData01.png" width="100%" />
                <img src="images/displayArrayData02.png" width="100%" />
            </div>
        </>
    )
}

export default DisplayArraData
