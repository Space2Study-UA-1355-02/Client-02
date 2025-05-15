import { axiosClient } from '~/plugins/axiosClient'
import { AxiosResponse } from 'axios'

import { URLs } from '~/constants/request'
import { ItemsWithCount, OffersParams, Offer } from '~/types'
import { createUrlPath } from '~/utils/helper-functions'

export const offerService = {
  getOffers: (
    query?: Partial<OffersParams>
  ): Promise<AxiosResponse<ItemsWithCount<Offer>>> => {
    return axiosClient.get(createUrlPath(URLs.offers.get, '', query))
  }
}
