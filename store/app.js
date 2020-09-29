export const state = () => ({
  applicationName: 'cBid',
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
