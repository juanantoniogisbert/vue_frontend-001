import { Hotel } from "../common/api.service";
import { HOTEL_LIST, HOTEL_DETAILS } from "./actions.type";

const state = {
    hotels: [],
    hotel: null
}

const getters = {
    hotels(state) {
        console.log(state);
        return state.hotels;
    },
    hotel(state) {
        console.log(state);
        return state.hotel;
    }
}

const actions = {
    async [HOTEL_LIST]({commit}) {
        const { data } = await Hotel.getAll();
        commit(HOTEL_LIST, data);
    },
    async [HOTEL_DETAILS]({commit}, id) {
        const { data } = await Hotel.get(id);
        commit(HOTEL_DETAILS, data);
    }
}

const mutations = {
    [HOTEL_LIST](state, data) {
        state.hotels = data.results;
    },
    [HOTEL_DETAILS](state, data) {
        state.hotel = data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}