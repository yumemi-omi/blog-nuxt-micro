<template>
  <div>
    <h1>Details</h1>
    <div class="post" v-html="body" />
    <br />
    <div class="post" v-html="sanitizeBody" />
  </div>
</template>

<script>
import sanitizeHtml from 'sanitize-html'
import cheerio from 'cheerio'
import hljs from 'highlight.js'

export default {
  async asyncData({ $api, params }) {
    const res = await $api.posts.show(params.id)
    const $ = cheerio.load(
      sanitizeHtml(res.body, { allowedTags: false, allowedAttributes: false })
    )
    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text())
      $(elm).html(result.value)
      $(elm).addClass('hljs')
    })

    return {
      ...res,
      sanitizeBody: sanitizeHtml($.html()),
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
