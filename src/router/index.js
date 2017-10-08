import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const FindMovie = (resolve) => {
  import('components/find-movie/find-movie').then((module) => {
    resolve(module)
  })
}
const HotPlay = (resolve) => {
  import('components/hot-play/hot-play').then((module)=>{
    resolve(module)
  })
}

const UserCenter = (resolve) => {
  import('components/user-center/user-center').then((module)=> {
    resolve(module)
  })
}

const MovieDetail = (resolve) => { 
  import('components/movie-detail/movie-detail').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/hot'
    },
    {
      path: '/hot',
      component: HotPlay,
      children: [
        {
          path: ':id',
          component: MovieDetail
        }
      ]
    },
    {
      path: '/find',
      component: FindMovie
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
