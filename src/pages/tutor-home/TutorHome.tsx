import { useAppSelector } from '~/hooks/use-redux'
import PageWrapper from '~/components/page-wrapper/PageWrapper'
import FindBlock from '~/components/find-block/FindBlock'
import InfoGeneralStep from '~/components/info-general-step/InfoGeneralStep'
import HowItWorksBlockTutor from '~/containers/tutor-home-page/how-it-works-block/HowItWorksBlockTutor'

import { translationKey } from '~/components/find-block/find-student-constants'

const TutorHome = () => {
  const { isFirstLogin } = useAppSelector((state) => state.appMain)

  return (
    <PageWrapper data-testid='tutorHome'>
      <FindBlock translationKey={translationKey} />
      <HowItWorksBlockTutor />
      {isFirstLogin && <InfoGeneralStep />}
    </PageWrapper>
  )
}

export default TutorHome
