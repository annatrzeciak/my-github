import * as Project from "./api"

export const constans = {
  SET_SEARCH: "SET_SEARCH",
  ADD_FOUND_PROJECTS: "ADD_FOUND_PROJECTS",
  ADD_DETAILS: "ADD_DETAILS",
  SET_TOTAL_COUNT: "SET_TOTAL_COUNT",
}

export const state = () => ({
  searchValue: "",
  projects: [],
  projectsDetails: [],
  totalProjectsCount: "",
})

export const getters = {
  searchedValue(state) {
    return state.searchValue
  },
  projects(state) {
    return state.projects
  },
  projectsDetails(state) {
    return state.projectsDetails
  },
  totalProjectsCount(state) {
    return state.totalProjectsCount
  },
}

export const mutations = {
  [constans.SET_SEARCH](state, search) {
    state.searchValue = search
  },

  [constans.ADD_FOUND_PROJECTS](state, data) {
    state.projects = data
  },

  [constans.ADD_DETAILS](state, data) {
    const master = data.repository.refs.edges.find(
      (branch) => branch.node.name === "master"
    )
    let firstBranch = null
    if (!master) {
      firstBranch = data.repository.refs.edges[0]
    }
    const commits = master ? master.node.target.history.nodes : firstBranch

    state.projectsDetails = {
      ...state.projectsDetails,
      [data.repository.id]: {
        url: data.repository.url,
        description: data.repository.description,
        commits: commits,
      },
    }
  },
  [constans.SET_TOTAL_COUNT](state, data) {
    state.totalProjectsCount = data
  },
}

export const actions = {
  async searchProjects({ commit }, search) {
    return Project.searchProjects(search)
      .then((response) => {
        console.log(response.data.data)
        commit(constans.SET_SEARCH, search)
        commit(constans.ADD_FOUND_PROJECTS, response.data.data.search.edges)
        commit(
          constans.SET_TOTAL_COUNT,
          String(response.data.data.search.repositoryCount)
        )
        return Promise.resolve(response.data.data)
      })
      .catch((err) => Promise.reject(err))
  },
  async getProjectDetails({ commit }, { name, owner }) {
    return Project.getDetails(name, owner)
      .then((response) => {
        commit(constans.ADD_DETAILS, response.data.data)
        return Promise.resolve(response.data.data)
      })
      .catch((err) => Promise.reject(err))
  },

  clearBeforeFoundProjects({ commit, getters }) {
    if (getters.totalProjectsCount !== "") {
      console.log("clear")
      commit(constans.SET_SEARCH, "")
      commit(constans.ADD_FOUND_PROJECTS, [])
      commit(constans.SET_TOTAL_COUNT, "")
    }
  },
}
