import jsonp from 'common/js/jsonp'
import {commonParam, options} from './config'

export function getMovies() {
    const url = 'https://api.douban.com/v2/movie/in_theaters'
    const data = Object.assign({}, commonParam,  {
        city: '北京',
        start: 0,
        count: 20
    })

    return jsonp(url, data, options)
}