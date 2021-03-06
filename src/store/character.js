const GET_CHARACTERS = 'characters/LOAD'

export const allCharacters = payload => {
    return {
        type: GET_CHARACTERS,
        payload
    }
}

export const getAllCharacters = () => async dispatch => {

    async function fetchCharacters(page, characters) {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const data = await response.json()

        const totalPages = Number(data.info.pages)

        characters = [...characters, ...data.results]

        if (page < totalPages) {
            return await fetchCharacters(page + 1, characters)
        } else {
            return characters
        }
    }

    const characterList = () => {
        return fetchCharacters(1, [])
    }

    characterList().then(data => {
        dispatch(allCharacters((data)))
        return data
    })
}

export const initialState = {entries:[], requestInProgress:true}

const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHARACTERS:
            return {...state, entries: [...action.payload], requestInProgress:false}
        default:
            return state
    }
}

export default characterReducer
