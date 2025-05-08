import { axiosClient } from '~/plugins/axiosClient'

import { URLs } from '~/constants/request'

export const locantionsService = {
  getCountries: () => {
    return axiosClient.get(URLs.locantions.countries + '?limit=260')
  },
  getCities: (country) => {
    return axiosClient.get(
      URLs.locantions.cities + '?country=' + country + '&limit=1000'
    )
  }
}
