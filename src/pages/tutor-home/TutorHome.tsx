import PopularCategoriesBlock from '~/containers/student-home-page/popular-categories-block/PopularCategoriesBlock'
import FindBlock from '~/components/find-block/FindBlock'
import { translationKey } from '~/components/find-block/find-tutor-constants'
import InfoGeneralStep from '~/components/info-general-step/InfoGeneralStep'
import PageWrapper from '~/components/page-wrapper/PageWrapper'

import Faq from '~/containers/student-home-page/faq/Faq'
import { accordionItems } from '~/containers/student-home-page/faq/accordionItems'
import HowItWorksBlockTutor from '~/containers/tutor-home-page/how-it-works-block/HowItWorksBlockTutor'

import { useAppSelector } from '~/hooks/use-redux'

const TutorHome = () => {
  const { isFirstLogin, userRole } = useAppSelector((state) => state.appMain)

  return (
    <PageWrapper data-testid='tutorHome'>
      <FindBlock translationKey={translationKey} />
      <PopularCategoriesBlock />
      <HowItWorksBlockTutor />
      <Faq accordionItems={accordionItems} />
      {isFirstLogin && <InfoGeneralStep role={userRole} />}
    </PageWrapper>
  )
}

export default TutorHome
