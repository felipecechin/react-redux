export function numberReducer(state, action) {
    switch (action.type) {
        case 'numberAddN':
            return {...state, number: state.number + action.payload}
        case 'numberDiv25':
            return {...state, number: Math.floor(state.number / 25)}
        case 'numberMul7':
            return {...state, number: state.number * 7}
        case 'numberAdd2':
            return {...state, number: state.number + 2}
        default:
            return state
    }
}
