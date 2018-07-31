import * as actions from '../actions/beerActions'

const defaultState = {
    beers: [],
    fetchingBeers: false,
    error: false
}

const store = (state = defaultState, action) => {
    switch (action.type) {
        case actions.FETCHING_BEERS:
            return {
                ...state,
                fetchingBeers: true,
                error: false
            }
        case actions.FETCHING_BEERS_FAILURE:
            return {
                ...state,
                error: true,
                fetchingBeers: false
            }
        case actions.RECEIVE_BEERS:
            return {
                ...state,
                beers: action.beers,
                fetchingBeers: false
            }
        default:
            return state
    }
}

export default store;

