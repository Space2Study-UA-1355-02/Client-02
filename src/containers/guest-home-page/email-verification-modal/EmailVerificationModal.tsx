import React from 'react'
import ImgTitleDescription from '~/components/img-title-description/ImgTitleDescription'
import { useTranslation } from 'react-i18next'
import infoImg from '~/assets/img/guest-home-page/info.svg'
import Typography from '@mui/material/Typography'

interface EmailVerificationModalProps {
  email: string
}

const EmailVerificationModal: React.FC<EmailVerificationModalProps> = ({
  email
}) => {
  const { t } = useTranslation()

  return (
    <ImgTitleDescription
      description={
        <Typography component='text' variant='body2'>
          {t('signup.confirmEmailMessage')}
          <Typography
            component='span'
            sx={{ fontWeight: 'medium' }}
            variant='body2'
          >
            {email}
          </Typography>
          {t('signup.confirmEmailDesc')}
        </Typography>
      }
      img={infoImg}
      title={t('signup.confirmEmailTitle')}
    />
  )
}

export default EmailVerificationModal
