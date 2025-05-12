import Container from '@mui/material/Container'

import { useAppSelector } from '~/hooks/use-redux'
import FindBlock from '~/components/find-block/FindBlock'
import HowItWorksBlock from '~/containers/student-home-page/how-it-works-block/HowItWorksBlock'
import Faq from '~/containers/student-home-page/faq/Faq'
import InfoGeneralStep from '~/components/info-general-step/InfoGeneralStep'
import { translationKey } from '~/components/find-block/find-tutor-constants'
import { accordionItems } from '~/containers/student-home-page/faq/accordionItems'

const StudentHome = () => {
  const { isFirstLogin } = useAppSelector((state) => state.appMain)
  return (
    <Container data-testid='studentHome' sx={{ flex: 1 }}>
      <FindBlock translationKey={translationKey} />
      <HowItWorksBlock />
      <Faq accordionItems={accordionItems} />
      {isFirstLogin && <InfoGeneralStep role='student' />}
    </Container>
  )
}

export default StudentHome
