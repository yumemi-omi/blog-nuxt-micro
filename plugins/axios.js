export default function ({ $axios, redirect, $config }) {
  $axios.setHeader('X-API-KEY', $config.apiKeyGet, ['get'])
  $axios.setHeader('X-WRITE-API-KEY', $config.apiKeyPost, ['post'])

  $axios.onRequest((config) => {
    // eslint-disable-next-line no-console
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
