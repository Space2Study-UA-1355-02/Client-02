import { cloneElement, useEffect, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import EastIcon from '@mui/icons-material/East'
import WestIcon from '@mui/icons-material/West'

import AppButton from '~/components/app-button/AppButton'
import useSteps from '~/hooks/use-steps'
import { styles } from '~/components/step-wrapper/StepWrapper.styles'

const StepWrapper = ({ children, steps, onStepChange }) => {
  const { activeStep, stepErrors, isLastStep, loading, stepOperation } =
    useSteps({
      steps
    })
  const { next, back, setActiveStep, handleSubmit } = stepOperation
  const { t } = useTranslation()
  const [stepErrorState, setStepErrorState] = useState(false)
  useEffect(() => {
    if (onStepChange) {
      onStepChange(activeStep)
    }
  }, [activeStep, onStepChange])

  const isNextDisabled = false
  const isFinishDisabled = stepErrorState || stepErrors.some(Boolean)

  const stepLabels = steps.map((step, index) => (
    <Box
      color={stepErrors[index] ? 'error.500' : 'primary.500'}
      key={step}
      onClick={() => setActiveStep(index)}
      sx={[styles.defaultTab, index === activeStep && styles.activeTab]}
      typography='caption'
    >
      {t(`step.stepLabels.${step}`)}
    </Box>
  ))

  const nextButton = isLastStep ? (
    <AppButton
      disabled={isFinishDisabled}
      loading={loading}
      onClick={handleSubmit}
      size='small'
      sx={styles.finishBtn}
      variant='contained'
    >
      {t('common.finish')}
    </AppButton>
  ) : (
    <AppButton
      disabled={isNextDisabled}
      onClick={next}
      size='small'
      sx={styles.btnRight}
      variant='contained'
    >
      {t('common.next')}
      <EastIcon fontSize='small' />
    </AppButton>
  )

  const btnsBox = (
    <Box sx={styles.btnWrapper}>
      <AppButton
        disabled={activeStep === 0}
        onClick={back}
        size='small'
        sx={styles.btnLeft}
        variant='outlined'
      >
        <WestIcon fontSize='small' />
        {t('common.back')}
      </AppButton>
      {nextButton}
    </Box>
  )

  const handleStepErrorChange = useCallback(
    (hasError) => {
      setStepErrorState(hasError)
      stepOperation.setStepError(steps[activeStep], { file: hasError })
    },
    [activeStep, stepOperation, steps]
  )

  return (
    <Container sx={styles.root}>
      <Box sx={styles.steps}>{stepLabels}</Box>
      <Box sx={styles.stepContent}>
        {cloneElement(children[activeStep], {
          btnsBox,
          stepLabel: steps[activeStep],
          onErrorChange: handleStepErrorChange
        })}
      </Box>
    </Container>
  )
}

export default StepWrapper
