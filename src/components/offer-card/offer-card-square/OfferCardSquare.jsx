import React, { useState } from 'react'

import { Paper } from '@mui/material'

import UserProfileSquare from '~/components/offer-card/offer-card-square/UserProfileSquare'
import CourseDetailsSquare from '~/components/offer-card/offer-card-square/CourseDetailSquare'
import PriceSectionSquare from '~/components/offer-card/offer-card-square/PriceSectionSquare'
import SendMessageModal from '~/components/send-message-modal/SendMessageModal'

import { styles } from './OfferCardSquare.styles'

const OfferCardSquare = ({ offer }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenMessage = () => setIsModalOpen(true)
  const handleCloseMessage = () => setIsModalOpen(false)

  const handleSendMessage = (message) => {
    console.log('Message sent:', message)
    setIsModalOpen(false)
  }

  return (
    <Paper sx={styles.card}>
      <UserProfileSquare
        name={`${offer.author.firstName} ${offer.author.lastName}`}
        spokenLanguages={offer.author.nativeLanguage}
      />
      <CourseDetailsSquare
        language={offer.languages.join(', ')}
        level={offer.proficiencyLevel}
        title={offer.title}
      />
      <PriceSectionSquare
        onOpenMessage={handleOpenMessage}
        price={offer.price}
      />
      <SendMessageModal
        onClose={handleCloseMessage}
        onSend={handleSendMessage}
        open={isModalOpen}
      />
    </Paper>
  )
}

export default OfferCardSquare
