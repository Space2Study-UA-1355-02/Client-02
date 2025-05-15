import React, { useState } from 'react'
import { Card, CardContent, Grid } from '@mui/material'

import UserProfile from '~/components/offer-card/offer-card-rectangle/UserProfile'
import CourseDetails from '~/components/offer-card/offer-card-rectangle/CourseDetails'
import PriceSection from '~/components/offer-card/offer-card-rectangle/PriceSection'

import SendMessageModal from '~/components/send-message-modal/SendMessageModal'

import { styles } from '~/components/offer-card/offer-card-rectangle/OfferCardRectangle.styles'

const OfferCardRectangle = ({ offer }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenMessage = () => setIsModalOpen(true)
  const handleCloseMessage = () => setIsModalOpen(false)
  const handleSendMessage = () => {
    console.log('Message sent!')
  }

  return (
    <>
      <Card sx={styles.card}>
        <CardContent>
          <Grid alignItems='flex-start' container spacing={2}>
            <Grid item md={2} sm={4} sx={{ height: '100%' }} xs={12}>
              <UserProfile
                name={`${offer.author.firstName} ${offer.author.lastName}`}
                rating={offer.author.averageRating.student}
                reviewCount={offer.author.totalReviews.student}
              />
            </Grid>
            <Grid item md={7} sm={8} sx={{ height: '100%' }} xs={12}>
              <CourseDetails
                description={offer.description}
                language={offer.languages.join(', ')}
                level={offer.proficiencyLevel}
                spokenLanguages={offer.author.nativeLanguage}
                title={offer.title}
              />
            </Grid>
            <Grid item md={3} sm={12} sx={{ height: '100%' }} xs={12}>
              <PriceSection
                onOpenMessage={handleOpenMessage}
                price={offer.price}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <SendMessageModal
        onClose={handleCloseMessage}
        onSend={handleSendMessage}
        open={isModalOpen}
      />
    </>
  )
}

export default OfferCardRectangle
