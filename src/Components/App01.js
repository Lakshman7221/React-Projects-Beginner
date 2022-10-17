import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import PrintArrayData from './PrintArrayData'
// import UpdateData from "./UpdateData"
// import LoginForm from "./Components/LoginForm"
// import UserForm from "./Components/UserForm"
// import UseEff from "./Components/UseEff"
// import MainFile from "./Components/API/MainFile"
// import UseRef from "./Components/useRef/UseRef"
// import UseContextHook from "./Components/useContext/UseContextHook"
import UseLocation from "./Components/UseLocation/UseLocation"
const App = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row vh-100">
                    <div className="col-md-12 bg-light p-5 "><UseLocation /></div>
                </div>
                {/* <div className="row">
          <div className="col-md"></div>
          <div className="col-md"></div>
          <div className="col-md"></div>
        </div> */}
            </div>
        </>
    )
}

export default App
