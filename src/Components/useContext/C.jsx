import React from 'react'
import { newValue } from './UseContextHook'
const C = () => {
    return (
        <div>
            <h1>
                <newValue.Consumer>
                    {value => <div>{value}</div>}
                </newValue.Consumer>
            </h1>
        </div>
    )
}

export default C
