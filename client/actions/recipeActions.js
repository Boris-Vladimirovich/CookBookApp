import constants from '../constants/AppConstants';
import api from '../api'

export function getRecipes() {
    return (dispatch) => {
        api.getRecipes().then(
            ({data}) => dispatch({
                type: constants.GET_RECIPES,
                payload: data.sort((a,b) => (new Date(b.date) - new Date(a.date)))
            })
        );

    }
}

export function addRecipe(data) {
    return (dispatch) => {
        api.addRecipe(data).then(
            ({data}) => {
                dispatch(selectRecipe(data));
                dispatch(getRecipes());
            }

        );
    }
}

export function changeSearchQuery(data) {
    return {
        type: constants.CHANGE_SEARCH_QUERY,
        payload: data
    }
}

export function selectRecipe(data) {
    return (dispatch, getState) => {
        const selectedRecipe = getState().recipes.selectedRecipe;
        if(selectedRecipe._id !== data._id){
            dispatch({
                type: constants.SELECT_RECIPE,
                payload: data
            });
            if(selectedRecipe.recipeID !== data.recipeID){
                dispatch(getHistory(data.recipeID));
            }
        }
    };
}

export function deleteRecipe(id) {
    return (dispatch) => {
        api.deleteRecipe(id).then(
            dispatch(getRecipes())
        );
    }
}

export function deleteAll(id) {
    return (dispatch) => {
        api.deleteAll(id).then(
            dispatch(getRecipes())
        );
    }
}

export function updateRecipe(id, data) {
    return (dispatch) => {
        api.updateRecipe(id, data).then(
            ({data}) => {
                dispatch(selectRecipe(data));
                dispatch(getHistory(data.recipeID));
                dispatch(getRecipes());
        });
    }
}

export function getHistory(id) {
    return (dispatch) => {
        api.getHistory(id).then(
            ({data}) => dispatch({
                type: constants.GET_HISTORY,
                payload: data.sort((a,b) => (new Date(b.date) - new Date(a.date)))
            })
        );
    }
}

export function openAddModal() {
    return {
        type: constants.OPEN_ADD_MODAL
    }
}

export function closeAddModal() {
    return {
        type: constants.CLOSE_ADD_MODAL
    }
}

export function openDrawer() {
    return {
        type: constants.OPEN_DRAWER
    }
}

export function closeDrawer() {
    return {
        type: constants.CLOSE_DRAWER
    }
}
