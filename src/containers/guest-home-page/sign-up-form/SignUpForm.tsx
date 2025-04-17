import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'

import AppButton from '~/components/app-button/AppButton'
import AppTextField from '~/components/app-text-field/AppTextField'

import { styles } from '~/containers/guest-home-page/sign-up-form/SignUpForm.styles'
import useInputVisibility from '~/hooks/use-input-visibility'
import { useAppSelector } from '~/hooks/use-redux'

import { SignupParams } from '~/types'

interface SignUpFormProps {
  handleSubmit: (event: React.FormEvent<HTMLDivElement>) => void
  handleChange: (
    key: keyof SignupParams
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void
  handleBlur: (
    key: keyof SignupParams
  ) => (event: React.FocusEvent<HTMLInputElement>) => void
  data: SignupParams
  errors: { [K in keyof SignupParams]: string }
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  handleSubmit,
  handleChange,
  handleBlur,
  data,
  errors
}) => {
  const { inputVisibility: passwordVisibility, showInputText: showPassword } =
    useInputVisibility(errors.password)
  const {
    inputVisibility: confirmPasswordVisibility,
    showInputText: confirmPasswordPassword
  } = useInputVisibility(errors.confirmPassword)

  const { authLoading } = useAppSelector((state) => state.appMain)
  const { t } = useTranslation()
  const [agreementConfirmed, setAgreementConfirmed] = useState<boolean>(false)

  const changeAgreementConfirmation = useCallback(
    () => setAgreementConfirmed((prev) => !prev),
    []
  )

  return (
    <Box component='form' onSubmit={handleSubmit} sx={styles.form}>
      <Box sx={styles.firstRow}>
        <AppTextField
          autoFocus
          data-testid={'firsName'}
          errorMsg={t(errors.firstName)}
          fullWidth
          label={t('common.labels.firstName')}
          onBlur={handleBlur('firstName')}
          onChange={handleChange('firstName')}
          required
          size='small'
          sx={{ mb: '5px' }}
          type='text'
          value={data.firstName}
        />

        <AppTextField
          data-testid={'lastName'}
          errorMsg={t(errors.lastName)}
          fullWidth
          label={t('common.labels.lastName')}
          onBlur={handleBlur('lastName')}
          onChange={handleChange('lastName')}
          required
          size='small'
          sx={{ mb: '5px' }}
          type='text'
          value={data.lastName}
        />
      </Box>

      <AppTextField
        data-testid={'email'}
        errorMsg={t(errors.email)}
        fullWidth
        label={t('common.labels.email')}
        onBlur={handleBlur('email')}
        onChange={handleChange('email')}
        required
        size='medium'
        sx={{ mb: '5px' }}
        type='email'
        value={data.email}
      />

      <AppTextField
        InputProps={passwordVisibility}
        errorMsg={t(errors.password)}
        fullWidth
        label={t('common.labels.password')}
        onBlur={handleBlur('password')}
        onChange={handleChange('password')}
        required
        type={showPassword ? 'text' : 'password'}
        value={data.password}
      />

      <AppTextField
        InputProps={confirmPasswordVisibility}
        errorMsg={t(errors.confirmPassword)}
        fullWidth
        label={t('common.labels.confirmPassword')}
        onBlur={handleBlur('confirmPassword')}
        onChange={handleChange('confirmPassword')}
        required
        type={confirmPasswordPassword ? 'text' : 'password'}
        value={data.confirmPassword}
      />

      <Box>
        <FormControlLabel
          checked={agreementConfirmed}
          control={<Checkbox />}
          label={
            <Typography>
              {t('signup.iAgree')}{' '}
              <Typography
                component={ButtonBase}
                sx={styles.agreement}
                variant='subtitle2'
              >
                {t('common.labels.terms')}
              </Typography>{' '}
              {t('signup.and')}{' '}
              <Typography
                component={ButtonBase}
                sx={styles.agreement}
                variant='subtitle2'
              >
                {t('common.labels.privacyPolicy')}
              </Typography>
            </Typography>
          }
          onChange={changeAgreementConfirmation}
        />
      </Box>

      <AppButton
        disabled // disabled for now
        loading={authLoading}
        sx={styles.signUpButton}
        type='submit'
      >
        {t('common.labels.signup')}
      </AppButton>
    </Box>
  )
}

export default SignUpForm
