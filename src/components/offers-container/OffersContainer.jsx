import { Grid } from '@mui/material'

import OfferCardSquare from '~/components/offer-card/offer-card-square/OfferCardSquare'
import OfferCardRectangle from '~/components/offer-card/offer-card-rectangle/OfferCardRectangle'
import NotFoundResults from '~/components/not-found-results/NotFoundResults'
import React from 'react'
import Loader from '~/components/loader/Loader'
import { useTranslation } from 'react-i18next'
import { CreateRequest } from '~/containers/find-offer/create-request/CreateRequest'
import { useModalContext } from '~/context/modal-context'

const OffersContainer = ({ isGrid, offers, loading }) => {
  const { t } = useTranslation()
  const { openModal } = useModalContext()

  const handleOpenModal = () => openModal({ component: <CreateRequest /> })

  const content = loading ? (
    <Loader />
  ) : (
    offers.map((item) =>
      isGrid ? (
        <Grid item key={item._id} md={4} sm={6} xs={12}>
          <OfferCardSquare offer={item} />
        </Grid>
      ) : (
        <Grid item key={item._id} xs={12}>
          <OfferCardRectangle offer={item} />
        </Grid>
      )
    )
  )

  if (!offers.length && !loading) {
    return (
      <NotFoundResults
        buttonText={t('errorMessages.buttonRequest', {
          name: t('offerPage.offer')
        })}
        description={t('errorMessages.tryAgainText', {
          name: t('offerPage.offer')
        })}
        onClick={handleOpenModal}
      />
    )
  }

  return (
    <Grid container mt={2} spacing={2}>
      {content}
    </Grid>
  )
}

export default OffersContainer
