<template>
  <div>
    <h1>Details</h1>
    <div class="post" v-html="body" />
  </div>
</template>

<script>
import sanitizeHtml from 'sanitize-html'
import cheerio from 'cheerio'
import hljs from 'highlight.js'

export default {
  async asyncData({ $api, params, payload }) {
    let response
    if (payload) {
      response = payload
    } else {
      response = await $api.posts.show(params.id)
    }

    const $ = cheerio.load(
      sanitizeHtml(response.body, {
        allowedTags: false,
        allowedAttributes: false,
      })
    )
    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text())
      $(elm).html(result.value)
      $(elm).addClass('hljs')
    })

    return {
      ...response,
      body: $.html(),
    }
  },
  data() {
    return {
      body: '',
    }
  },
  computed: {},
}
</script>
