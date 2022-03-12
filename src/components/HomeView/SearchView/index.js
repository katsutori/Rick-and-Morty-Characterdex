import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import OneRoll from '../CharacterRoll/OneRoll';

const SearchView = () => {
    const {id} = useParams()
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(48)
    const [show] = useState(true)
    const characters = useSelector(state=> state.characterState.entries)
    let query = id;
    if (query.includes(' ')) {
        query = query.split(' ')
    } else {
        query = [query]
    }

    const selected = characters?.filter(one => {
        for(let i = 0; i < query.length; i++) {
            if (one?.name?.toLowerCase().includes(query[i].toLowerCase())) {
                return one
            } else if (one?.name?.toLowerCase().includes(query[i].substring(0, 3).toLowerCase())) {
                return one
            } else if (one?.name?.toLowerCase().includes(query[i].substring(query[i].length - 3).toLowerCase())) {
                return one
            }
        }
    })

    const handleInc = () => {
        setStart(end + 1)
        setEnd(end + 49)
    }

    const handleDec = () => {
        setStart(start - 49)
        setEnd(end - 49)
    }

    let targets;

    if (selected?.length) {
        targets = selected.slice(start, end)
    }


    if (!targets?.length) {
        return (
            <div className='category-container'>
                <h1 className='category-h1'>You search for <span className='category-h1-span'>{id}</span> gotcha nothin.</h1>
            </div>
        )
    }

    return (
        <div className='home-container'>
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
        </div>
    )
}

export default SearchView
