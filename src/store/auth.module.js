import { LOGIN, REGISTER } from "./actions.type";
import { Auth } from "../common/api.service";

const state = {
    errors: null,
    user: {}
};

const mutations = {
    [LOGIN](state, result) {
        state.user = {
            username: result.data.user.username,
            email: result.data.user.email,
        };
        console.log("state", state.user);
        console.log("res", result);
    },
    [REGISTER](state, result) {
        state.user = {
            username: result.data.user.username,
            email: result.data.user.email,
        }
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
    async [REGISTER]({ commit }, register) {
        try {
            const log = await Auth.register(register);
            console.log(REGISTER, log);
            commit(REGISTER, log);
        } catch (error) {
            console.log("axant register");
        }
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