import { axiosClient } from '~/plugins/axiosClient'

import { URLs } from '~/constants/request'

export const locationsService = {
  getCountries: (limit = 260) => {
    return axiosClient.get(`${URLs.locations.countries}?limit=${limit}`)
  },
  getCities: (country, limit = 1000) => {
    return axiosClient.get(
      `${URLs.locations.cities}?country=${country}&limit=${limit}`
    )
  }
}
