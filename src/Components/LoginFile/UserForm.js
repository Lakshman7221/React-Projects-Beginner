import React, { useState } from 'react'


const UserForm = () => {
    const [data, setData] = useState({
        user: "",
        email: "",
        password: ""
    })
    const { user, email, password } = data;
    const changeHandler = (e) => setData({ ...data, [e.target.name]: [e.target.value] });

    const [newData, setNewData] = useState([]);
    const submitHandler = (e) => {
        e.preventDefault();
        const x = { user: user, email: email, password: password }
        setNewData([...newData, x]);
    }
    const deleteHander = (x) => {
        const newEntry = newData.filter((curElem) => user !== x);
        setNewData(newEntry)
    }

    return (
        <>
            <form action="" onSubmit={submitHandler}>
                <input type="text" value={user} name="user" onChange={changeHandler} autoComplete="off" placeholder="User Name" /><br /><br />
                <input type="text" value={email} name="email" onChange={changeHandler} autoComplete="off" placeholder="Email" /><br /><br />
                <input type="password" value={password} name="password" onChange={changeHandler} autoComplete="off" placeholder="Password" /><br /><br />
                <input type="submit" value="submit" />
            </form><br /> <br />
            <div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">User</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newData.map((curElem) => {
                                return (
                                    <tr key={curElem.user}>
                                        <th scope="row">{curElem.user}</th>
                                        <td>{curElem.email}</td>
                                        <td>{curElem.password}</td>
                                        <td><button onClick={() => deleteHander(curElem.user)} className="btn btn-danger btn-sm">Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default UserForm
