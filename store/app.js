export const state = () => ({
  applicationName: 'OutBid',
  companyName: 'Cygnus, Inc.'
})

export const getters = {
  getApplicationName: (state) => {
    return state.applicationName
  },
  getCompanyName: (state) => {
    return state.companyName
  },
  getYear: () => {
    return new Date().getFullYear()
  }
}
