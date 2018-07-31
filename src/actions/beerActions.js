export const RECEIVE_BEERS = 'RECEIVE_BEERS'
export const FETCHING_BEERS = 'FETCHING_BEERS'
export const FETCHING_BEERS_FAILURE = 'FETCHING_BEERS_FAILURE'

export const RECEIVE_BEER = 'RECEIVE_BEER'
export const FETCHING_BEER = 'FETCHING_BEER'
export const FETCHING_BEER_FAILURE = 'FETCHING_BEER_FAILURE'

export const fetchBeers = (search) => dispatch => {

    let api = `http://apichallenge.canpango.com/beers/`;
    if(search && search !== '')
        api += `search?q=${search}`;

    dispatch(fetchingBeers())
    return fetch(api)
        .then(response => response.json())
        .then(json => {
            let beers = json.map(b => {
                let beer = { ...b };
                let parts = b.url.split('/'); //Get beer id from the url
                beer.id = parts.pop() || parts.pop();
                return beer;
            });
            dispatch(receiveBeers(beers));
        })
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

export const fetchBeer = (beerId) => dispatch => {
    dispatch(fetchingBeer())
    return fetch(`http://apichallenge.canpango.com/beers/${beerId}`)
        .then(response => response.json())
        .then(json => dispatch(receiveBeer(json)))
        .catch((error) => dispatch(fetchingBeersFailure(error)))
}

export const fetchingBeer = () => ({
    type: FETCHING_BEER
})

export const fetchingBeerFailure = (error) => ({
    type: FETCHING_BEER_FAILURE,
    error
})

export const receiveBeer = (beer) => ({
    type: RECEIVE_BEER,
    beer
})

export const updateBeer = (beer) => dispatch => {
    // dispatch(fetchingBeer())
    // return fetch(`http://apichallenge.canpango.com/beers/${beerId}`)
    //     .then(response => response.json())
    //     .then(json => dispatch(receiveBeer(json)))
    //     .catch((error) => dispatch(fetchingBeersFailure(error)))
}