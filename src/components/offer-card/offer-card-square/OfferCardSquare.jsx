import React, { useState } from 'react'

import { Paper } from '@mui/material'

import UserProfileSquare from '~/components/offer-card/offer-card-square/UserProfileSquare'
import CourseDetailsSquare from '~/components/offer-card/offer-card-square/CourseDetailSquare'
import PriceSectionSquare from '~/components/offer-card/offer-card-square/PriceSectionSquare'
import SendMessageModal from '~/components/send-message-modal/SendMessageModal'

import { styles } from './OfferCardSquare.styles'

const OfferCardSquare = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenMessage = () => setIsModalOpen(true)
  const handleCloseMessage = () => setIsModalOpen(false)

  const handleSendMessage = (message) => {
    console.log('Message sent:', message)
    setIsModalOpen(false)
  }

  return (
    <Paper sx={styles.card}>
      <UserProfileSquare />
      <CourseDetailsSquare />
      <PriceSectionSquare onOpenMessage={handleOpenMessage} />
      <SendMessageModal
        onClose={handleCloseMessage}
        onSend={handleSendMessage}
        open={isModalOpen}
      />
    </Paper>
  )
}

export default OfferCardSquare
