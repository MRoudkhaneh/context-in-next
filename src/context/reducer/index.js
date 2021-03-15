export function countReducer(state, action) {
    switch (action.type) {
        case 'ADD': {
            return {...state.filter, ...action.payload}
        }
        case 'DELETE': {
            return {count: state.count - 1}
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}
