import React, {useEffect} from 'react'
import { useDispatch} from 'react-redux'

import './HomeView.css'

const HomeView = () => {

    useEffect(() => {
        window.scrollTo({top:0, behavior:'smooth'})
    })

    return (
        <>
            <div className='home-container'>
            </div>
        </>
    )
}

export default HomeView
