import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import { styles } from '~/containers/tutor-home-page/general-info-step/GeneralInfoStep.styles'

const GeneralInfoStep = ({ btnsBox, onErrorChange }) => {
  const countries = ['USA', 'Canada', 'UK']
  const cities = ['New York', 'Toronto', 'London']
  const { t } = useTranslation()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    description: '',
    confirmAge: false
  })
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    description: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const validateForm = () => {
    const newErrors = {
      firstName: form.firstName === '',
      lastName: form.lastName === '',
      description: form.description.length > 100
    }
    setErrors(newErrors)
    onErrorChange(Object.values(newErrors).includes(true))
  }
  const handleDescriptionChange = (e) => {
    const { value } = e.target
    if (value.length <= 100) {
      setForm((prev) => ({ ...prev, description: value }))
    }
  }

  return (
    <>
      <Typography variant='body1'>
        {t('becomeTutor.generalInfo.title')}
      </Typography>
      <Box sx={styles.inputs}>
        <TextField
          error={errors.firstName}
          fullWidth
          helperText={
            errors.firstName && t('becomeTutor.generalInfo.firstNameLabelReq')
          }
          label={t('common.labels.firstName')}
          name='firstName'
          onBlur={() => validateForm()}
          onChange={handleChange}
          required
          value={form.firstName}
        />
        <TextField
          error={errors.lastName}
          fullWidth
          helperText={
            errors.lastName && t('becomeTutor.generalInfo.lastNameLabelReq')
          }
          label={t('common.labels.lastName')}
          name='lastName'
          onBlur={() => validateForm()}
          onChange={handleChange}
          required
          value={form.lastName}
        />
      </Box>
      <Box sx={styles.inputs}>
        <TextField
          fullWidth
          label={t('common.labels.country')}
          name='country'
          onChange={handleChange}
          select
          value={form.country}
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
          onChange={handleChange}
          select
          value={form.city}
        >
          {cities.map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <TextField
        error={errors.description}
        fullWidth
        helperText={`${form.description.length}/100`}
        inputProps={{ maxLength: 100 }}
        label={t('becomeTutor.generalInfo.textFieldLabel')}
        multiline
        name='description'
        onChange={handleDescriptionChange}
        rows={3}
        value={form.description}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={form.confirmAge}
            name='confirmAge'
            onChange={handleChange}
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
