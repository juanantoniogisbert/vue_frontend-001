import ApiService, { Auth } from "../common/api.service";
import { destroyToken, getToken, saveToken } from "../common/jwt.service";
import { CHECK_AUTH, LOGIN, LOGOUT, REGISTER } from "./actions.type";


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
    },
    [REGISTER](state, result) {
        state.user = {
            username: result.data.user.username,
            email: result.data.user.email,
        };
    },
    [CHECK_AUTH](state, result) {
        state.user = {
            username: result.data.user.username,
            email: result.data.user.email,
        };
    }
};

const actions = {
    async [LOGIN]({ commit }, login) {
        const res = await Auth.login(login);
        console.log('LOGIN', res);
        commit(LOGIN, res);
    },

    async [CHECK_AUTH]({ commit }) {
        if (getToken()) {
            ApiService.setHeader();
            console.log('GET CURRENT');
            
            let user = await Auth.current();
            commit(CHECK_AUTH, user)
        }
    },

    [LOGOUT]({ commit }) {
        commit(LOGOUT);
    },

    async [REGISTER]({ commit }, register) {
        const log = await Auth.register(register);
        console.log(REGISTER, log);
        commit(REGISTER, log);
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