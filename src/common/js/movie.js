export class Movie{
    constructor({id, title, director, collect_count, casts, average, images}) {
        this.id = id
        this.title = title  //电影名
        this.director = director  //导演
        this.collect_count = collect_count   //多少人看过
        this.casts = casts //主演 type : Array
        this.average = average  //评分
        this.images = images
    }
}