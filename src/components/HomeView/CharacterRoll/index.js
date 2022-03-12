
import React, { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'

import OneRoll from './OneRoll'
import pic from '../../../img/rmload.png'
import './CharacterRoll.css'

const CharacterRoll = () => {
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(48)
    const [show] = useState(true)
    const [wait, setWait] = useState(false)

    const characters = useSelector(state=> state.characterState.entries)
    const {requestInProgress} = useSelector(state => state.characterState)

    const handleInc = () => {
        setStart(end + 1)
        setEnd(end + 49)
        window.scrollTo({top:0, behavior:'smooth'})
    }

    const handleDec = () => {
        setStart(start - 49)
        setEnd(end - 49)
        window.scrollTo({top:0, behavior:'smooth'})
    }

    useEffect(() => {
        setTimeout(() => {
            setWait(true)
        }, 3000)
    }, [])

    const targets = characters.slice(start, end)

    if (!characters) {
        return (
           null
        )
    }

    if (requestInProgress) {
        return (
            <>
                <div className='loading-container'>
                    <div className='rm-load'>Characterdex is loading...</div>
                    <div className='lds-dual-ring'></div>
                    {wait === true ? <div className='rm-load wait'>Hold your horses! There's a lot of characters loading.</div>:<></>}
                    {wait === true ? <div className='wait-img-container'><img className='wait-img' src={pic}/></div>:<></>}
                </div>
            </>
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
