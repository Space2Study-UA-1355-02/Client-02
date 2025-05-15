import { Grid } from '@mui/material'

import OfferCardSquare from '~/components/offer-card/offer-card-square/OfferCardSquare'
import OfferCardRectangle from '~/components/offer-card/offer-card-rectangle/OfferCardRectangle'

const OffersContainer = ({ offers, isGrid }) => {
  return (
    <Grid container mt={2} spacing={2}>
      {offers.map((item) =>
        isGrid ? (
          <Grid item key={item.id} md={4} sm={6} xs={12}>
            <OfferCardSquare author={item.author} offer={item.offer} />
          </Grid>
        ) : (
          <Grid item key={item.id} xs={12}>
            <OfferCardRectangle author={item.author} offer={item.offer} />
          </Grid>
        )
      )}
    </Grid>
  )
}

export default OffersContainer
