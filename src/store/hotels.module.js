import ApiService from "../common/api.service";
import { HOTEL_LIST } from "./actions.type";

const state = {
    hotels: []
}

const getters = {
    hotels(state) {
        console.log(state);
        return state.hotels;
    }
}

const actions = {
    async [HOTEL_LIST]({commit}) {
        const { data } = await ApiService.get('/hotels');
        commit(HOTEL_LIST, data);
    }
}

const mutations = {
    [HOTEL_LIST](state, data) {
        state.hotels = data.results;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}