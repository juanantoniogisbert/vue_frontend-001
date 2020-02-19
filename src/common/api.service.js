import Vue from 'vue';
import Axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from './constants';

const ApiService = {
    init() {
        Vue.use(VueAxios, Axios)
        Vue.axios.defaults.baseURL = API_URL;
    },

    get(resource) {
        return Vue.axios.get(resource)
    },

    post(resource, data) {
        return Vue.axios.post(resource, data)
    },

    update() {

    },

    delete() {

    }
};

export default ApiService;

export const Hotel = {
    getAll() {
        return ApiService.get('/hotels')
    }
}

export const Auth = {
    login(data) {
        return ApiService.post('/login', {user:data})
    }
}