import React, { useState } from 'react'
import { Box } from '@mui/material'
import { mockOffers } from '~/containers/find-offer/offers-block/__mocks__/mockOffers'

import ListGridSwitcher from '~/components/listGridSwitch/listGridSwitch'
import OffersContainer from '~/components/offers-container/OffersContainer'

const OffersBlock = () => {
  const [isGrid, setIsGrid] = useState(false)

  return (
    <Box sx={{ p: 0 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ListGridSwitcher isGrid={isGrid} setIsGrid={setIsGrid} />
      </Box>

      <OffersContainer isGrid={isGrid} offers={mockOffers} />
    </Box>
  )
}

export default OffersBlock
