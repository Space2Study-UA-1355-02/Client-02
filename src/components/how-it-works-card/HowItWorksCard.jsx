import { useTranslation } from 'react-i18next'
import ImgTitleDescription from '~/components/img-title-description/ImgTitleDescription'

const HowItWorksCard = ({ card }) => {
  const { t } = useTranslation()

  return (
    <ImgTitleDescription
      description={t(card.description)}
      img={card.image}
      title={t(card.title)}
    />
  )
}

export default HowItWorksCard
