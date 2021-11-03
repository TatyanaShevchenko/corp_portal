export const SWITCH_LOADING = 'SWITCH_LOADING'

let initialState = {
    isLoading: false,
}

export const switchLoadingAC = (payload) => {
    return { type: SWITCH_LOADING, payload }
}

export const selectIsLoading = state => state.loading.isLoading

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_LOADING:
            return { isLoading: action.payload }
        default:
            return state
    }
}
