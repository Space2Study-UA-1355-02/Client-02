import { Box } from '@mui/material'

import OfferCardSquare from '~/components/offer-card/offer-card-square/OfferCardSquare'
import OfferCardRectangle from '~/components/offer-card/offer-card-rectangle/OfferCardRectangle'

const OffersContainer = ({ offers, isGrid }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isGrid ? 'row' : 'column',
        flexWrap: 'wrap',
        gap: 2,
        mt: 2
      }}
    >
      {offers.map((item) =>
        isGrid ? (
          <Box key={item.id} sx={{ flex: '1 1 calc(33.333% - 16px)' }}>
            <OfferCardSquare author={item.author} offer={item.offer} />
          </Box>
        ) : (
          <OfferCardRectangle
            author={item.author}
            key={item.id}
            offer={item.offer}
          />
        )
      )}
    </Box>
  )
}

export default OffersContainer
