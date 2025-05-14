import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import studentSignUpImg from '~/assets/img/signup-dialog/student.svg'
import tutorSignUpImg from '~/assets/img/signup-dialog/tutor.svg'

import { snackbarVariants } from '~/constants'

import EmailVerificationModal from '~/containers/guest-home-page/email-verification-modal/EmailVerificationModal'
import SignUpForm from '~/containers/guest-home-page/sign-up-form/SignUpForm'

import styles from '~/containers/guest-home-page/sign-up-dialog/SignUpDialog.styles'

import { useModalContext } from '~/context/modal-context'
import { useSnackBarContext } from '~/context/snackbar-context'

import useConfirm from '~/hooks/use-confirm'
import useForm from '~/hooks/use-form'

import { useSignUpMutation } from '~/services/auth-service'

import {
  confirmPassword,
  email,
  firstName,
  lastName,
  password
} from '~/utils/validations/login'

import { ErrorResponse, SignupParams, UserRole, UserRoleEnum } from '~/types'

interface SignUpDialogProps {
  role: UserRole
}

const SignUpDialog: FC<SignUpDialogProps> = ({ role }) => {
  const { t } = useTranslation()
  const { closeModal, openModal } = useModalContext()
  const { setAlert } = useSnackBarContext()
  const { setNeedConfirmation } = useConfirm()
  const [signUpUser] = useSignUpMutation()

  const { handleSubmit, handleInputChange, handleBlur, data, errors, isDirty } =
    useForm<SignupParams>({
      onSubmit: async () => {
        try {
          await signUpUser(data).unwrap()
          closeModal()
        } catch (e) {
          const error = e as FetchBaseQueryError & { data: ErrorResponse }
          setAlert({
            severity: snackbarVariants.error,
            message: `errors.${error.data.code}`
          })
        } finally {
          openModal({
            component: <EmailVerificationModal email={data.email} />
          })
        }
      },
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: role
      },
      validations: { firstName, lastName, email, password, confirmPassword }
    })

  useEffect(() => {
    setNeedConfirmation(isDirty)
  }, [isDirty])

  return (
    <Box sx={styles.root}>
      <Box sx={styles.imgContainer}>
        <Box
          alt='signup'
          component='img'
          src={
            role === UserRoleEnum.Student ? studentSignUpImg : tutorSignUpImg
          }
          sx={styles.img}
        />
      </Box>

      <Box sx={styles.formContainer}>
        <Typography sx={styles.title} variant='h2'>
          {t(
            role === UserRoleEnum.Student
              ? 'signup.head.student'
              : 'signup.head.tutor'
          )}
        </Typography>
        <Box sx={styles.form}>
          <SignUpForm
            data={data}
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default SignUpDialog
