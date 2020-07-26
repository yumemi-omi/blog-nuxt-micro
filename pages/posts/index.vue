<template>
  <div class="container">
    <h1>Index</h1>
    <ul>
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`posts/${content.id}`" prefetch>{{
          content.title
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $api }) {
    const res = await $api.posts.index()
    return { ...res }
  },
  data() {
    return {}
  },
  computed: {},
}
</script>
