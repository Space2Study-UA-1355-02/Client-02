//import { useEffect } from 'react'
import Container from '@mui/material/Container'

import { useAppSelector } from '~/hooks/use-redux'
//import { useModalContext } from '~/context/modal-context'
//import UserStepsWrapper from '~/components/user-steps-wrapper/UserStepsWrapper'
import FindBlock from '~/components/find-block/FindBlock'
import HowItWorksBlock from '~/containers/student-home-page/how-it-works-block/HowItWorksBlock'
import Faq from '~/containers/student-home-page/faq/Faq'
import InfoGeneralStep from '~/components/info-general-step/InfoGeneralStep'
import { translationKey } from '~/components/find-block/find-tutor-constants'
import { accordionItems } from '~/containers/student-home-page/faq/accordionItems'

const StudentHome = () => {
  //const { openModal } = useModalContext()
  const { isFirstLogin } = useAppSelector((state) => state.appMain)

  /*useEffect(() => {
    if (isFirstLogin) {
      openModal({
        component: <InfoGeneralStep />,
        paperProps: {
          sx: {
            maxHeight: { sm: '652px' },
            height: '100%',
            maxWidth: '1130px',
            width: '100%'
          }
        }
      })
    }
  }, [openModal, isFirstLogin, userRole])
*/
  return (
    <Container data-testid='studentHome' sx={{ flex: 1 }}>
      <FindBlock translationKey={translationKey} />
      <HowItWorksBlock />
      <Faq accordionItems={accordionItems} />
      {isFirstLogin && <InfoGeneralStep />}
    </Container>
  )
}

export default StudentHome
