import React, { useState } from 'react'

import { Paper } from '@mui/material'

import UserProfileSquare from '~/components/offer-card/offer-card-square/UserProfileSquare'
import CourseDetailsSquare from '~/components/offer-card/offer-card-square/CourseDetailSquare'
import PriceSectionSquare from '~/components/offer-card/offer-card-square/PriceSectionSquare'
import SendMessageModal from '~/components/send-message-modal/SendMessageModal'

import { styles } from './OfferCardSquare.styles'

const OfferCardSquare = ({ author, offer }) => {
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
        avatarSrc={author.avatarSrc}
        name={author.name}
        rating={author.rating}
        reviewCount={author.reviewCount}
      />
      <CourseDetailsSquare
        language={offer.subject}
        level={offer.level}
        spokenLanguages={author.spokenLanguages}
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
