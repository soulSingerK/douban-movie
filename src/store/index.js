import Vue from 'vue'
import vuex from 'vuex'

import * as actions from './actions'
import state from './store'
import mutations from './mutation'
import * as getters from './getters'
import createLogger from 'vuex/dist/logger'

Vue.use(vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new vuex.Store({
    actions,
    state,
    mutations,
    getters,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
