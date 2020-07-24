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
  show(id, { query }) {
    return $axios.$get(`/${resource}/${id}`, { params: query })
  },
  update(id, payload) {
    return $axios.$put(`/${resource}/${id}`, payload)
  },
  delete(id) {
    return $axios.$delete(`/${resource}/${id}`)
  },
})
