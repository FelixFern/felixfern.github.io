import React from 'react'
import './Loading.css'

function Loading({loading}) {
    return (
        <div className={ loading ? 'loading-parent loading-show' : 'loading-parent loading-hide'}>
            <div className="shape-1"></div>
            <div className="ground"></div>
            <div className="ground-2"></div>
        </div>
    )
}

export default Loading