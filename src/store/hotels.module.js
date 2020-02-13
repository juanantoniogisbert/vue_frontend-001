import ApiService from "../common/api.service";
import { HOTEL_LIST } from "./actions.type";

const state = {
    hotels: []
}

const getters = {
    hotels(state) {return state.hotels}
}

const actions = {
    [HOTEL_LIST]() {
        return ApiService.get('/hotels')
    }
}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}