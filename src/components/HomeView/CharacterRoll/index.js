
import React from 'react'
import {useSelector} from 'react-redux'

import OneRoll from './OneRoll'
import './RecipeRoll.css'

const CharacterRoll = () => {
    const characters = useSelector(state=> state.characterState.entries)

    if (!recipes) {
        return (
           null
        )
    }

    return (
        <div className='character-roll-container'>
            {characters.map((character, idx) => (
                <OneRoll key={idx} character={character} />
            ))}
        </div>
    )
}

export default CharacterRoll
