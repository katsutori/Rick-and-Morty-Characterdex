
import React from 'react'
import {Link} from 'react-router-dom'
import './OneRoll.css'



const OneRoll = ({target}) => {

    console.log(target)

    return (
        <div className='one-roll-container'>
            <div className='one-roll-image' style={{backgroundImage: `url(${target.image})`}}></div>
            <div className='one-roll-title'>
                <h2 className='rollH2'>{target.name}</h2>
                <p className='rollP'><strong>Species:</strong> {target.species}</p>
                <p className='rollP'><strong>Gender:</strong> {target.gender}</p>
                {target.type ? <p className='rollP'><strong>Type:</strong> {target.type}</p>:<></>}
            </div>
            <div className='one-roll-bottom'>
                <div>
                    <button className='get-character-button'><strong>Status:</strong> {target.status}</button>
                </div>
            </div>
        </div>
    )
}


export default OneRoll
