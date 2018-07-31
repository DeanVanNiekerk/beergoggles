import * as actions from '../actions/beerActions'

const defaultState = {
    beers: [],
    fetchingBeers: false,

    beer: [],
    fetchingBeer: false,
    updatingBeer: false,
    insertingBeer: false,

    error: false,
    validationErrors: null
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
                validationErrors: null,
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
        case actions.UPDATING_BEER:
            return {
                ...state,
                updatingBeer: true,
                validationErrors: null
            }
        case actions.UPDATED_BEER:
            return {
                ...state,
                updatingBeer: false
            }
        case actions.INSERTING_BEER:
            return {
                ...state,
                insertingBeer: true,
                validationErrors: null
            }
        case actions.INSERTED_BEER:
            return {
                ...state,
                insertingBeer: false
            }
        case actions.RECIEVE_BEER_VALIDATION_ERRORS:
            return {
                ...state,
                validationErrors: action.errors
            }
        default:
            return state
    }
}

export default store;

