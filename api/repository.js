export default ($axios) => (resource) => ({
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
