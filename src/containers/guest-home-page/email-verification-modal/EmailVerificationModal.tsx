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
      title={t('signup.confirmEmailTitle')}
      description={
        <Typography variant='body2' component='text'>
          {t('signup.confirmEmailMessage')}
          <Typography
            variant='body2'
            component='span'
            sx={{ fontWeight: 'medium' }}
          >
            {email}
          </Typography>
          {t('signup.confirmEmailDesc')}
        </Typography>
      }
      img={infoImg}
    />
  )
}

export default EmailVerificationModal
