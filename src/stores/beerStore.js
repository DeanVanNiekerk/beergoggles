import * as actions from '../actions/beerActions'

const defaultState = {
    beers: [],
    fetchingBeers: false,

    beer: [],
    fetchingBeer: false,

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
        case actions.FETCHING_BEER:
            return {
                ...state,
                fetchingBeer: true,
                error: false
            }
        case actions.FETCHING_BEER_FAILURE:
            return {
                ...state,
                error: true,
                fetchingBeer: false
            }
        case actions.RECEIVE_BEER:
            return {
                ...state,
                beer: action.beer,
                fetchingBeer: false
            }
        default:
            return state
    }
}

export default store;

