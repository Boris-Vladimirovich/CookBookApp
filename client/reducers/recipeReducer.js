import constants from '../constants/AppConstants';

const initialState = {
    list: [],
    searchQuery: '',
    selectedRecipe: {},
    history: [],
    isDrawerOpen: false,
    isAddModalOpen: false
};

export default function reducer (state = initialState, action) {
    switch (action.type){
        case constants.GET_RECIPES:
            return {...state, list: action.payload };
        case constants.CHANGE_SEARCH_QUERY:
            return {...state, searchQuery: action.payload};
        case constants.SELECT_RECIPE:
            return {...state, selectedRecipe: action.payload};
        case constants.GET_HISTORY:
            return {...state, history: action.payload};
        case constants.OPEN_ADD_MODAL:
            return {...state, isAddModalOpen: true};
        case constants.CLOSE_ADD_MODAL:
            return {...state, isAddModalOpen: false};
        case constants.OPEN_DRAWER:
            return {...state, isDrawerOpen: true};
        case constants.CLOSE_DRAWER:
            return {...state, isDrawerOpen: false};
        default:
            return state;
    }
}