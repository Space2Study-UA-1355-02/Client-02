import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import { useForm } from '~/hooks/use-form'
import { styles } from '~/containers/tutor-home-page/general-info-step/GeneralInfoStep.styles'

const GeneralInfoStep = ({ btnsBox, onErrorChange }) => {
  const countries = ['USA', 'Canada', 'UK']
  const cities = ['New York', 'Toronto', 'London']
  const { t } = useTranslation()
  const {
    data,
    errors,
    handleInputChange,
    handleNonInputValueChange,
    handleBlur
  } = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      country: '',
      city: '',
      description: '',
      confirmAge: false
    },
    validations: {
      firstName: (val) =>
        !val ? t('becomeTutor.generalInfo.firstNameLabelReq') : undefined,
      lastName: (val) =>
        !val ? t('becomeTutor.generalInfo.lastNameLabelReq') : undefined,
      description: (val) =>
        typeof val === 'string' && val.length > 100
          ? t('becomeTutor.generalInfo.descriptionMaxLength')
          : undefined
    }
  })

  useEffect(() => {
    onErrorChange(Boolean(errors.firstName || errors.lastName))
  }, [errors, onErrorChange])

  useEffect(() => {
    const input = document.querySelector('input[name="firstName"]')
    input?.focus()
  }, [])

  return (
    <>
      <Typography variant='body1'>
        {t('becomeTutor.generalInfo.title')}
      </Typography>
      <Box sx={styles.inputs}>
        <TextField
          error={Boolean(errors.firstName)}
          fullWidth
          helperText={errors.firstName}
          label={t('common.labels.firstName')}
          name='firstName'
          onBlur={handleBlur('firstName')}
          onChange={handleInputChange('firstName')}
          required
          value={data.firstName}
        />
        <TextField
          error={Boolean(errors.lastName)}
          fullWidth
          helperText={errors.lastName}
          label={t('common.labels.lastName')}
          name='lastName'
          onBlur={handleBlur('lastName')}
          onChange={handleInputChange('lastName')}
          required
          value={data.lastName}
        />
      </Box>
      <Box sx={styles.inputs}>
        <TextField
          fullWidth
          label={t('common.labels.country')}
          name='country'
          onChange={(e) => handleNonInputValueChange('country', e.target.value)}
          select
          value={data.country}
        >
          {countries.map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          label={t('common.labels.city')}
          name='city'
          onChange={(e) => handleNonInputValueChange('city', e.target.value)}
          select
          value={data.city}
        >
          {cities.map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <TextField
        error={Boolean(errors.description)}
        fullWidth
        helperText={`${data.description.length}/100`}
        inputProps={{ maxLength: 100 }}
        label={t('becomeTutor.generalInfo.textFieldLabel')}
        multiline
        name='description'
        onChange={handleInputChange('description')}
        rows={3}
        value={data.description}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={data.confirmAge}
            name='confirmAge'
            onChange={(e) =>
              handleNonInputValueChange('confirmAge', e.target.checked)
            }
          />
        }
        label={t('becomeTutor.generalInfo.ageComfir')}
      />
      <Typography sx={styles.assign} variant='caption'>
        {t('becomeTutor.generalInfo.helperText')}
      </Typography>
      <Box sx={styles.container}>{btnsBox}</Box>
    </>
  )
}

export default GeneralInfoStep
