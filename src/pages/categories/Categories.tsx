import PageWrapper from '~/components/page-wrapper/PageWrapper'
import CategoryCardsList from '~/components/category-cards-list/CategoryCardsList'
import { allCategories } from '~/components/category-cards-list/category'

const Categories = () => {
  return (
    <PageWrapper>
      <h1>Categories</h1>
      <CategoryCardsList hideTexts items={allCategories} />
    </PageWrapper>
  )
}

export default Categories
