export const RECEIVE_BEERS = 'RECEIVE_BEERS'
export const FETCHING_BEERS = 'FETCHING_BEERS'
export const FETCHING_BEERS_FAILURE = 'FETCHING_BEERS_FAILURE'

export const RECEIVE_BEER = 'RECEIVE_BEER'
export const FETCHING_BEER = 'FETCHING_BEER'
export const FETCHING_BEER_FAILURE = 'FETCHING_BEER_FAILURE'

export const UPDATING_BEER = 'UPDATING_BEER'
export const UPDATED_BEER = 'UPDATED_BEER'

export const RECIEVE_BEER_VALIDATION_ERRORS = 'RECIEVE_BEER_VALIDATION_ERRORS'

const BASEAPI = 'http://apichallenge.canpango.com/beers';

export const fetchBeers = (search) => dispatch => {

    let api = `${BASEAPI}/`;
    if(search && search !== '')
        api += `search?q=${search}`;

    dispatch(fetchingBeers())
    return fetch(api)
        .then(response => response.json())
        .then(json => {
            let beers = json.map(beer => {
                let parts = beer.url.split('/'); //Get beer id from the url
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
    return fetch(`${BASEAPI}/${beerId}/`)
        .then(response => response.json())
        .then(beer => {
            beer.id = beerId;
            dispatch(receiveBeer(beer))
        })
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
    dispatch(updatingBeer())
    return fetch(`${BASEAPI}/${beer.id}/`, 
        { 
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(beer)
        })
        .then((response) => {
            dispatch(updatedBeer())
            if(!response.ok)
                response.json().then(errors => dispatch(receiveValidationErrors(errors)));
        });
}

export const updatingBeer = () => ({
    type: UPDATING_BEER
})

export const updatedBeer = () => ({
    type: UPDATED_BEER
})

export const receiveValidationErrors = (errors) => ({
    type: RECIEVE_BEER_VALIDATION_ERRORS,
    errors
})
