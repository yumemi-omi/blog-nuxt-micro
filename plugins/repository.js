import createRepository from '~/api/repository.js'

export default ({ $axios }, inject) => {
  const repositoryWithAxios = createRepository($axios)

  const repositories = {
    posts: repositoryWithAxios('posts'),
  }

  inject('repositories', repositories)
}
