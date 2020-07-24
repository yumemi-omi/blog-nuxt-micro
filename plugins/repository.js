import posts from '~/repositories/posts'

export default ({ $axios }, inject) => {
  const repositories = {
    posts: posts($axios),
  }

  inject('repositories', repositories)
}
