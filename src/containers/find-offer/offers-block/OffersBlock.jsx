import React, { useState } from 'react'

import { Box, ToggleButtonGroup, ToggleButton } from '@mui/material'

import GridViewIcon from '@mui/icons-material/GridView'
import ListIcon from '@mui/icons-material/List'

import OfferCardRectangle from '~/components/offer-card/offer-card-rectangle/OfferCardRectangle'
import OfferCardSquare from '~/components/offer-card/offer-card-square/OfferCardSquare'
import AvatarSrc from '~/assets/img/tutor-profile-page/avatar.png'

import styles from '~/containers/find-offer/offers-block/OffersBlock.styles'

const mockOffers = [
  {
    id: 1,
    author: {
      name: 'Jennifer W.',
      avatarSrc: AvatarSrc,
      rating: 4.8,
      reviewCount: 32,
      spokenLanguages: 'Ukrainian, English'
    },
    offer: {
      title: 'Ukrainian Literature',
      subject: 'Ukrainian',
      level: 'Beginner – Professional',
      price: 300
    }
  }
]

const OffersBlock = () => {
  const [viewMode, setViewMode] = useState('list') // 'list' or 'grid'

  const handleViewChange = (_, newView) => {
    if (newView) setViewMode(newView)
  }

  return (
    <Box sx={{ p: 3, minHeight: '400px' }}>
      {/* Buttons aligned to the top-right */}
      <Box sx={styles.topBar}>
        <ToggleButtonGroup
          exclusive
          onChange={handleViewChange}
          size='small'
          value={viewMode}
        >
          <ToggleButton value='list'>
            <ListIcon sx={{ mr: 1 }} />
            List View
          </ToggleButton>
          <ToggleButton value='grid'>
            <GridViewIcon sx={{ mr: 1 }} />
            Grid View
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Cards container */}
      {mockOffers.length === 0 ? (
        <Box sx={{ textAlign: 'center', pt: 4 }}>No offers available</Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: viewMode === 'list' ? 'column' : 'row',
            flexWrap: 'wrap',
            gap: 2,
            mt: 2
          }}
        >
          {mockOffers.map((item) =>
            viewMode === 'list' ? (
              <OfferCardRectangle
                author={item.author}
                key={item.id}
                offer={item.offer}
              />
            ) : (
              <OfferCardSquare
                author={item.author}
                key={item.id}
                offer={item.offer}
              />
            )
          )}
        </Box>
      )}
    </Box>
  )
}

export default OffersBlock
