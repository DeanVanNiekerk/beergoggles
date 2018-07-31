export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_SELECTEDCATEGORYURL = 'RECEIVE_SELECTEDCATEGORYURL'
export const FETCHING_CATEGORIES = 'FETCHING_CATEGORIES'
export const FETCHING_CATEGORIES_FAILURE = 'FETCHING_CATEGORIES_FAILURE'

export const fetchCategories = () => dispatch => {
    dispatch(fetchingCategories())
    return fetch(`http://apichallenge.canpango.com/categories/`)
        .then(response => response.json())
        .then(json => {
            dispatch(receiveCategories(json));
            dispatch(receiveSelectedCategoryUrl(json[0].url));
        })
        .catch((error) => dispatch(fetchingCategoriesFailure(error)))
}

export const fetchingCategories = () => ({
    type: FETCHING_CATEGORIES
})

export const fetchingCategoriesFailure = (error) => ({
    type: FETCHING_CATEGORIES_FAILURE,
    error
})

export const receiveCategories = (categories) => ({
    type: RECEIVE_CATEGORIES,
    categories
})

export const receiveSelectedCategoryUrl = (url) => ({
    type: RECEIVE_SELECTEDCATEGORYURL,
    url
})