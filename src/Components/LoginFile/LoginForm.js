import React, { useEffect, useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newEntry, setNewEntry] = useState([]);
    const submitHandler = (e) => {
        e.preventDefault();
        const newValue = { email: email, password: password };
        setNewEntry([...newEntry, newValue]);
    }


    return (
        <>
            <form action='#' onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control w-25" autoComplete='off' />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control w-25" autoComplete='off' />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <br /><br />
            <table class="table ">
                <thead>
                    <tr>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        newEntry.map((curElem) => {
                            return (
                                <tr key={curElem.email}>
                                    <td scope="row">{curElem.email}</td>
                                    <td>{curElem.password}</td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default LoginForm
