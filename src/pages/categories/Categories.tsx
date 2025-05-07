import PageWrapper from '~/components/page-wrapper/PageWrapper'
import NotFoundResults from '~/components/not-found-results/NotFoundResults'

const Categories = () => {
  const categories = []

  return (
    <PageWrapper>
      {categories.length ? (
        <div>Category</div>
      ) : (
        <NotFoundResults
          buttonText={'Request a new category'}
          description={
            "We couldn't find what you were searching for. Please try again or suggest a new category that you were looking for."
          }
        />
      )}
    </PageWrapper>
  )
}

export default Categories
