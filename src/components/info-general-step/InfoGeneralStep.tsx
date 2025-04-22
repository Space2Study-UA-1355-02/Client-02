import { useState } from 'react'
import { Box, Modal, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import StepWrapper from '~/components/step-wrapper/StepWrapper'
import { StepProvider } from '~/context/step-context'

import GeneralInfoStep from '~/containers/tutor-home-page/general-info-step/GeneralInfoStep'
import AddPhotoStep from '~/containers/tutor-home-page/add-photo-step/AddPhotoStep'
import SubjectsStep from '~/containers/tutor-home-page/subjects-step/SubjectsStep'
import LanguageStep from '~/containers/tutor-home-page/language-step/LanguageStep'
import generalImg from '~/assets/img/tutor-home-page/become-tutor/general-info.svg'
import {
  tutorStepLabels,
  initialValues
} from '~/components/user-steps-wrapper/constants'
import { styles } from './InfoGeneralStep.styles'

const UserStepsModal = () => {
  const [open, setOpen] = useState(true)
  const [isUserFetched, setIsUserFetched] = useState(false)

  const childrenArr = [
    <GeneralInfoStep
      isUserFetched={isUserFetched}
      key='1'
      setIsUserFetched={setIsUserFetched}
    />,
    <SubjectsStep key='2' />,
    <LanguageStep key='3' />,
    <AddPhotoStep key='4' />
  ]

  const handleClose = () => setOpen(false)

  return (
    <Modal onClose={handleClose} open={open} sx={styles.modalBox}>
      <Box sx={styles.modalBox}>
        <IconButton onClick={handleClose} sx={styles.closeButton}>
          <CloseIcon />
        </IconButton>

        {/* Left: Illustration */}
        <Box
          alt='Stepper illustration'
          component='img'
          src={generalImg}
          sx={styles.imageBox}
        />

        {/* Right: Stepper form */}

        <StepProvider
          initialValues={initialValues}
          stepLabels={tutorStepLabels}
        >
          <StepWrapper steps={tutorStepLabels}>{childrenArr}</StepWrapper>
        </StepProvider>
      </Box>
    </Modal>
  )
}

export default UserStepsModal
