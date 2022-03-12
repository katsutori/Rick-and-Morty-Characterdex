
import React from 'react'
import {Link} from 'react-router-dom'
import './OneRoll.css'



const OneRoll = ({target}) => {

    console.log(target)

    return (
        <div className='one-roll-container'>
            <div className='one-roll-image' style={{backgroundImage: `url(${target.image})`}}></div>
            <div className='one-roll-title'>
                <h2>{target.name}</h2>
            </div>
            <div className='one-roll-bottom'>

            </div>
        </div>
    )
}


export default OneRoll
