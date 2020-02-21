import Axios from "axios";
import Vue from 'vue';
import VueAxios from "vue-axios";
import { API_URL } from './constants';
import { getToken } from './jwt.service';

const ApiService = {
    init() {
        Vue.use(VueAxios, Axios);
        Vue.axios.defaults.baseURL = API_URL;
        
        if (getToken()) {
            this.setHeader();
        }
    },

    setHeader() {
        Vue.axios.defaults.headers.common["Authorization"] = `Token ${getToken()}`;
    },

    destroyHeader() {
        delete Vue.axios.defaults.headers.common["Authorization"];
    },

    get(resource) {
        return Vue.axios.get(resource);
    },

    post(resource, data) {
        return Vue.axios.post(resource, data);
    },

    update() {

    },

    delete() {

    }
};

export default ApiService;

export const Hotel = {
    getAll() {
        return ApiService.get('/hotels');
    },
    get(id){
        return ApiService.get(`/hotels/${id}`);
    } 
};

export const Auth = {
    current() {
        return ApiService.get('/user') 
    },
    
    login(data) {
        return ApiService.post('/login', { user: data });
    },

    register(data) {
        return ApiService.post('/register', {user:data})
    }
};