import React from 'react'

const Home = () => {
    return (
        <div>
            <div className='m-5'>
                <h1 className='pb-3'>Welcome to Home Page....!!</h1>
                <h3>What is React?</h3>
                <p>React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.React is a tool for building UI components.</p>
                <h3>How does React Work?</h3>
                <p>Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</p>
            </div>
        </div>
    )
}

export default Home
