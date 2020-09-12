export const state = () => ({
  companyName: 'Cygnus, Inc.'
})

export const getters = {
  getCompanyName: (state) => {
    return state.companyName
  },
  getYear: () => {
    return new Date().getFullYear()
  }
}
