import * as types from './mutation-types'
let mutaions = {
    [types.NAME](state, name) {
        state.name = name
    }
}

export default mutaions
