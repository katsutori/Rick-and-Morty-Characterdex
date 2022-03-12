const GET_CHARACTERS = 'characters/LOAD'

export const allCharacters = payload => {
    return {
        type: GET_CHARACTERS,
        payload
    }
}

export const getAllCharacters = () => async dispatch => {
    console.log('henlo world')
}

export const initialState = {entries:[]}

const characterReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case GET_CHARACTERS:
            return {...state, entries: [...action.payload]}
        default:
            return state
    }
}

export default characterReducer
