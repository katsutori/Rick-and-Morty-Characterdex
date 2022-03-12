
import React, { useState } from 'react'
import {useSelector} from 'react-redux'

import OneRoll from './OneRoll'
import './CharacterRoll.css'

const CharacterRoll = () => {
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(48)
    const [show, setShow] = useState(true)

    const characters = useSelector(state=> state.characterState.entries)
    console.log(start, end)



    const handleInc = () => {
        setStart(end + 1)
        setEnd(end + 49)
    }

    const handleDec = () => {
        setStart(start - 49)
        setEnd(end - 49)
    }

    const targets = characters.slice(start, end)
    console.log(targets)
    if (!characters) {
        return (
           null
        )
    }

    return (
        <>
            <div className='page-buttons'>
                {start <= 0 ? <button className='scroll-button' disabled={show}>Previous</button>:<button className='scroll-button'  onClick={handleDec}>Previous</button>}
                {targets.length === 48 ? <button className='scroll-button'  onClick={handleInc}>Next</button>:<button className='scroll-button'  disabled={show}>Next</button>}
            </div>
            <div className='character-roll-container'>
                {targets.map((target, idx) => (
                    <OneRoll key={idx} target={target} />
                ))}
            </div>
            <div className='page-buttons'>
                {start <= 0 ? <button className='scroll-button' disabled={show}>Previous</button>:<button className='scroll-button'  onClick={handleDec}>Previous</button>}
                {targets.length === 48 ? <button className='scroll-button'  onClick={handleInc}>Next</button>:<button className='scroll-button'  disabled={show}>Next</button>}
            </div>
        </>
    )
}

export default CharacterRoll
