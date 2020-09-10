
//ACTION TYPES
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const NEW_COUNTER = 'NEW_COUNTER'
//ACTION CREATORS
export const incrementCount = (index) => {
    return {
        type: INCREMENT,
        payload: { index }
    }
}

export const decrementCount = (index) => {
    return {
        type: DECREMENT,
        payload: { index }
    }
}


export const newCounter = (name) => {
    return{
        type: NEW_COUNTER,
        payload: { name }
    }
}