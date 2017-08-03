import axios from 'axios';
import { apiPrefix } from '../../etc/config.json';

export default {
    getRecipes () {
        return axios.get(`${apiPrefix}/recipes`);
    },
    addRecipe (data) {
        return axios.post(`${apiPrefix}/recipes`, data);
    },
    deleteRecipe (id) {
        return axios.delete(`${apiPrefix}/recipes/${id}`);
    },
    updateRecipe (id, data) {
        return axios.post(`${apiPrefix}/recipes/${id}`, data);
    },
    getHistory (id) {
        return axios.get(`${apiPrefix}/recipes/history/${id}`);
    },
    deleteAll (id) {
        return axios.delete(`${apiPrefix}/recipes/${id}/all`);
    }
}