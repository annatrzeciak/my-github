module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "my-github",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        })
      }
    },
  },

  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],

  auth: {
    strategies: {
      github: {
        client_id: "844cfbebea1515df2ca3",
        // In real app secret key should be invisible (for example in env file)
        client_secret: "108d03dc33de2d33842ec1b2bb43f31c0fd5d7a8",
        _scheme: "oauth2",
        authorization_endpoint: "https://github.com/login/oauth/authorize",
        token_endpoint: "https://github.com/login/oauth/access_token",
        userinfo_endpoint: "https://api.github.com/user",
        scope: ["user", "email", "repo:status"],
      },
    },
  },
}
