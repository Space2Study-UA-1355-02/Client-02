import React, { useState } from 'react'
import { Card, CardContent, Grid } from '@mui/material'
import UserProfile from '~/components/offer-card/offer-card-square/offer-card-rectangle/UserProfile'
import CourseDetails from '~/components/offer-card/offer-card-square/offer-card-rectangle/CourseDetails'
import PriceSection from '~/components/offer-card/offer-card-square/offer-card-rectangle/PriceSection'
import SendMessageModal from '~/components/send-message-modal/SendMessageModal'
import { styles } from './OfferCardRectagle.styles'

const OfferCardRectangle = () => {
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
            <Grid item xs={2}>
              <UserProfile />
            </Grid>
            <Grid item xs={7}>
              <CourseDetails />
            </Grid>
            <Grid item xs={3}>
              <PriceSection onOpenMessage={handleOpenMessage} />
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
