import { FC } from 'react'
import { Box, Button, Typography, Paper } from '@mui/material'
import subjectImage from '~/assets/img/find-offer/subject_icon.png'
import { useTranslation } from 'react-i18next'
import { useModalContext } from '~/context/modal-context'
import { CreateRequest } from '~/containers/find-offer/create-request/CreateRequest'
import { CreateOffer } from '~/containers/find-offer/create-offer/CreateOffer'

import { styles } from './CreateRequest.styles'

type UserRole = 'tutor' | 'student'

interface PrivateLessonCardProps {
  role: UserRole
}

export const CreateRequestBlock: FC<PrivateLessonCardProps> = ({ role }) => {
  const { openModal } = useModalContext()
  const { t } = useTranslation()

  const onCreateRequest = () => {
    if (role === 'tutor') {
      openModal({ component: <CreateOffer /> })
    } else {
      openModal({ component: <CreateRequest /> })
    }
  }

  const title =
    role === 'student'
      ? t('createRequest.tutorLessons')
      : t('createRequest.studentLessons')
  const buttonText =
    role === 'student'
      ? t('createRequest.createRequest')
      : t('createRequest.createOffer')

  return (
    <Paper sx={styles.container}>
      <Box sx={styles.content}>
        <Box sx={styles.leftSide}>
          <Typography sx={styles.title} variant='h4'>
            {title}
          </Typography>
          <Typography sx={styles.subTitle} variant='body2'>
            {t('createRequest.description')}
          </Typography>
          <Button onClick={onCreateRequest} variant='contained'>
            {buttonText}
          </Button>
        </Box>
        <Box
          alt='subject image'
          component='img'
          src={subjectImage}
          sx={styles.subTitle}
        />
      </Box>
    </Paper>
  )
}
