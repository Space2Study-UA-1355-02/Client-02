import { useTranslation } from 'react-i18next'
import PageWrapper from '~/components/page-wrapper/PageWrapper'
import OfferCardRectangle from '~/components/offer-card/offer-card-square/offer-card-rectangle/OfferCardRectangle'
import CategoryCardsList from '~/components/category-cards-list/CategoryCardsList'
import { allCategories } from '~/components/category-cards-list/category'

const FindOffers = () => {
  const { t } = useTranslation()

  return (
    <PageWrapper>
      <OfferCardRectangle />
      <h2>{t('studentHomePage.popularCategories.title')}</h2>
      <CategoryCardsList hideTexts items={allCategories} />
    </PageWrapper>
  )
}

export default FindOffers
