import * as types from './mutation-types'
let mutaions = {
    [types.NAME](state, name) {
        state.name = name
    },
    [types.MOVIE](state, movie) {
        state.movie = movie
    }
}

export default mutaions
