import * as actions from '../actions/categoryActions'

const defaultState = {
    categories: [],
    selectedCategoryUrl: '',
    fetchingCategories: false,
    error: false
}

const store = (state = defaultState, action) => {
    switch (action.type) {
        case actions.FETCHING_CATEGORIES:
            return {
                ...state,
                fetchingCategories: true,
                error: false
            }
        case actions.FETCHING_CATEGORIES_FAILURE:
            return {
                ...state,
                error: true,
                fetchingCategories: false
            }
        case actions.RECEIVE_CATEGORIES:
            return {
                ...state,
                categories: action.categories,
                fetchingCategories: false
            }
        case actions.RECEIVE_SELECTEDCATEGORYURL:
            return {
                ...state,
                selectedCategoryUrl: action.url
            }
        default:
            return state
    }
}

export default store;

