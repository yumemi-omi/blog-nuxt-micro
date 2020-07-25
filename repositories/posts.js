import Constants from '~/config/Constants'

const {
  POSTS: { RESOURCE: resource },
} = Constants

export default ($axios) => ({
  index() {
    return $axios.$get(`/${resource}`)
  },
  create(payload) {
    return $axios.$post(`/${resource}`, payload)
  },
  show(id) {
    return $axios.$get(`/${resource}/${id}`)
  },
  update(id, payload) {
    return $axios.$put(`/${resource}/${id}`, payload)
  },
  delete(id) {
    return $axios.$delete(`/${resource}/${id}`)
  },
})
