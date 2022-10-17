import React from 'react'
import Header from "./Header/Header"
import RightSideData from "./RightSideData/RightSideData"
import LeftSideMenu from './LeftSideMenu/LeftSideMenu'

const MyApp = () => {
    return (
        <>
            <section className=''>
                <div className="row">
                    <Header />
                </div>
                <div className="row" >
                    <div className="col-md-3 bg-success "><LeftSideMenu /></div>
                    <div className="col-md-9 bg-light "><RightSideData /></div>
                </div>
                <div className="row">
                    <div className="col bg-danger p-3">
                        <center className="text-light display-7">
                            abc@copryright.com
                        </center></div>
                </div>
            </section>
        </>
    )
}

export default MyApp
