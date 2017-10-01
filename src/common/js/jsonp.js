import orignJsonp from 'jsonp'

export default function jsonp(url, data, option) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
    return new Promise((resolve, reject) => {
        orignJsonp(url, option, (err, data) => {
            if (!err) {
                resolve(data)
            } else{
                reject(err) 
            }
        })
    })
}

function param(option) {
    let url = ''
    for(var key in option) {
        let value = option[key] !== undefined ? option[key] : ''
        url += `&${key}=${encodeURIComponent(value)}`
    }
    return url ? url.substr(1) : ''
}