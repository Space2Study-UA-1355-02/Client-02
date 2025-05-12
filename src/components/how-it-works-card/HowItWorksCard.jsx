import { useTranslation } from 'react-i18next'
import ImgTitleDescription from '~/components/img-title-description/ImgTitleDescription'

const HowItWorksCard = ({ card }) => {
  const { t } = useTranslation()

  return (
    <ImgTitleDescription
      description={t(card.description)}
      img={card.image}
      style={{
        root: {
          m: { xs: '100px 10px', sm: '56px', md: '40px 10px' }
        },
        img: {
          margin: '0 auto 16px auto'
        },
        TitleWithDescription: {
          wrapper: {
            '&& .MuiTypography-root': {
              margin: '12px 0'
            },
            '&& .MuiTypography-h5': {
              marginBottom: '12px'
            },
            '&& .MuiTypography-body1': {
              marginTop: '12px'
            }
          }
        }
      }}
      title={t(card.title)}
    />
  )
}

export default HowItWorksCard
