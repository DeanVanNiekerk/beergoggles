export const RECEIVE_BEERS = 'RECEIVE_BEERS'
export const FETCHING_BEERS = 'FETCHING_BEERS'
export const FETCHING_BEERS_FAILURE = 'FETCHING_BEERS_FAILURE'

export const fetchBeers = () => dispatch => {
    dispatch(fetchingBeers())
    return fetch(`http://apichallenge.canpango.com/beers/`)
        .then(response => response.json())
        .then(json => dispatch(receiveBeers(json)))
        .catch((error) => dispatch(fetchingBeersFailure(error)))
}

export const fetchingBeers = () => ({
    type: FETCHING_BEERS
})

export const fetchingBeersFailure = (error) => ({
    type: FETCHING_BEERS_FAILURE,
    error
})

export const receiveBeers = (beers) => ({
    type: RECEIVE_BEERS,
    beers
})