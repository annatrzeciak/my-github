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
  loading: "~/components/Loading.vue",
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
        _scheme: "oauth2",
        client_id: "844cfbebea1515df2ca3",
        // In real app secret key should be invisible (for example in env file)
        client_secret: "8e7e2b98aec8eb5e9448dd7f3daa6c995f40410d",
        authorization_endpoint: "https://github.com/login/oauth/authorize",
        token_endpoint: "https://github.com/login/oauth/access_token",
        userinfo_endpoint: "https://api.github.com/user",
        redirect_uri: "http://localhost:3000/search",
        scope: ["user", "email", "repo:status"],
      },
    },
    redirect: {
      login: "/",
      callback: "/search",
    },
  },
  buildModules: [
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: [
              "faAngleDown",
              "faCalendarPlus",
              "faUserTie",
              "faInfo",
              "faClone",
              "faCodeBranch",
            ],
          },
          { set: "@fortawesome/free-brands-svg-icons", icons: ["faElementor"] },
        ],
      },
    ],
  ],
}
