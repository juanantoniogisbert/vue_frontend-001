import ApiService, { Auth } from "../common/api.service";
import { getToken, saveToken, destroyToken } from "../common/jwt.service";
import { CHECK_AUTH, LOGIN, LOGOUT } from "./actions.type";

const state = {
    errors: null,
    user: null
};

const mutations = {
    [LOGIN](state, result) {
        state.user = {
            username: result.data.user.username,
            email: result.data.user.email,
        };

        saveToken(result.data.user.token);
        ApiService.setHeader();

        console.log("state", state.user);
        console.log("res", result);
    },
    [LOGOUT](state) {
        state.user = null;
        ApiService.destroyHeader();
        destroyToken();
    }
};

const actions = {
    async [LOGIN]({ commit }, login) {
        try {
            const res = await Auth.login(login);
            console.log('LOGIN', res);
            commit(LOGIN, res);
        } catch (error) {
            console.log(error);
        }
    },
    [CHECK_AUTH]() {
        if (getToken()) {
            ApiService.setHeader();
        }
    },
    [LOGOUT]({ commit }) {
        commit(LOGOUT);
        
    }
};

const getters = {
    currentUser() {
        return state.user;
    }
};

export default {
    state,
    mutations,
    actions,
    getters,
};