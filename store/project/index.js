import * as Project from "./api"

export const constans = {
  SET_SEARCH: "SET_SEARCH",
  ADD_FOUND_PROJECTS: "ADD_FOUND_PROJECTS",
  ADD_DETAILS: "ADD_DETAILS",
}

export const state = () => ({
  searchValue: "",
  projects: [],
  projectsDetails: [],
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
}

export const mutations = {
  [constans.SET_SEARCH](state, search) {
    state.searchValue = search
  },

  [constans.ADD_FOUND_PROJECTS](state, data) {
    state.projects = data
  },

  [constans.ADD_DETAILS](state, data) {
    state.projectsDetails = { [data.id]: data }
  },
}

export const actions = {
  async searchProjects({ commit }, search) {
    return Project.searchProjects(search)
      .then((response) => {
        commit(constans.SET_SEARCH, search)
        commit(constans.ADD_FOUND_PROJECTS, response.data.data.search.edges)
        return Promise.resolve(response.data.data)
      })
      .catch((err) => Promise.reject(err))
  },
}
