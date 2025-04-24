import { useState } from 'react'
import { Box, Modal, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import StepWrapper from '~/components/step-wrapper/StepWrapper'
import { StepProvider } from '~/context/step-context'

import GeneralInfoStep from '~/containers/tutor-home-page/general-info-step/GeneralInfoStep'
import AddPhotoStep from '~/containers/tutor-home-page/add-photo-step/AddPhotoStep'
import InterestsStep from '~/containers/tutor-home-page/interests-step/InterestsStep'
import LanguageStep from '~/containers/tutor-home-page/language-step/LanguageStep'
import generalImg from '~/assets/img/tutor-home-page/become-tutor/general-info.svg'
import interestImg from '~/assets/img/tutor-home-page/become-tutor/study-category.svg'
import languageImg from '~/assets/img/tutor-home-page/become-tutor/languages.svg'
import {
  studentStepLabels,
  initialValues
} from '~/components/user-steps-wrapper/constants'
import { styles } from './InfoGeneralStep.styles'
import ConfirmDialog from '~/components/confirm-dialog/ConfirmDialog'

const UserStepsModal = () => {
  const [open, setOpen] = useState(true)
  const [openConfirm, setOpenConfirm] = useState(false)
  const [isUserFetched, setIsUserFetched] = useState(false)
  const imageArr = [generalImg, interestImg, languageImg] // Add the images for each step here
  const [activeStep, setActiveStep] = useState(0)
  const childrenArr = [
    <GeneralInfoStep
      isUserFetched={isUserFetched}
      key='1'
      setIsUserFetched={setIsUserFetched}
    />,
    <InterestsStep key='2' />,
    <LanguageStep key='3' />,
    <AddPhotoStep key='4' />
  ]

  const handleClose = () => {
    setOpenConfirm(true)
  }

  return (
    <>
      <Modal onClose={handleClose} open={open} sx={styles.modalBox}>
        <Box sx={styles.modalBox}>
          <IconButton onClick={handleClose} sx={styles.closeButton}>
            <CloseIcon />
          </IconButton>

          <Box
            alt='Stepper illustration'
            component='img'
            src={imageArr[activeStep]}
            sx={styles.imageBox}
          />

          {/* Right: Stepper form */}

          <StepProvider
            initialValues={initialValues}
            stepLabels={studentStepLabels}
          >
            <StepWrapper onStepChange={setActiveStep} steps={studentStepLabels}>
              {childrenArr}
            </StepWrapper>
          </StepProvider>
        </Box>
      </Modal>
      <ConfirmDialog
        message='Are you sure you want exit'
        onConfirm={() => {
          setOpenConfirm(false)
          setOpen(false)
        }}
        onDismiss={() => {
          setOpenConfirm(false)
        }}
        open={openConfirm}
        title='Confirmation'
      />
    </>
  )
}

export default UserStepsModal
