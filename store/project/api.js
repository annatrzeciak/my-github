import axios from "axios"

const apiClient = axios.create({
  baseURL: `https://api.github.com/graphql`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

apiClient.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = localStorage
      .getItem("auth._token.github")
      .replace(/%/g, " ")
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export async function searchProjects(search) {
  return await apiClient.post("", {
    query: `
      query SearchRepositoriesQuery {
        search(type: REPOSITORY, first: 100, query: "${search.trim()}") {
          edges {
            node {
              ... on Repository {
                id
                name
                createdAt
                owner {
                  login
                }
              }
            }
          }
          repositoryCount
        }
      }
      `,
  })
}
export async function getDetails(name, owner) {
  return await apiClient.post("", {
    query: `{
  repository(name: "${name}", owner: "${owner}") {
    refs(orderBy: {direction: DESC, field: TAG_COMMIT_DATE}, first: 100, refPrefix: "refs/heads/") {
      edges {
        node {
          name
          target {
            ... on Commit {
              history(first: 10) {
                nodes {
                  message
                  committedDate
                  authoredDate
                  oid
                  author {
                    email
                    name
                  }
                }
              }
            }
          }
        }
      }
      totalCount
    }
    id
    description
    url
  }
      }`,
  })
}
