export function countReducer(state={filters: []}, action) {
    // debugger
    switch (action.type) {
        case 'ADD_ITEM': {
            return {filters: [...state.filters, action.payload]}
        }
        case 'DELETE': {
            return {count: state.count - 1}
        }
        default: {
            // throw new Error(`Unhandled action type: ${action.type}`)
            return state
        }
    }
}
