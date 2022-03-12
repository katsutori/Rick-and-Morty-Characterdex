import React, {useEffect} from 'react'

import Scroll from './Scroll'
import CharacterRoll from './CharacterRoll'

import './HomeView.css'

const HomeView = () => {

    useEffect(() => {
        window.scrollTo({top:0, behavior:'smooth'})
    })

    return (
        <>
            <div className='home-container'>
                <CharacterRoll />
            </div>
            <Scroll />
        </>
    )
}

export default HomeView
