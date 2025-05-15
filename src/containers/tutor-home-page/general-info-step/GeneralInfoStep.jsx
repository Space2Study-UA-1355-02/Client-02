import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import { styles } from '~/containers/tutor-home-page/general-info-step/GeneralInfoStep.styles'
import { locationsService } from '~/services/location-service'
import PaginatedSelect from '~/components/paginated-select/PaginatedSelect'
const GeneralInfoStep = ({ btnsBox, onErrorChange }) => {
  const [countries, setCountries] = useState([])
  const [cities, setCities] = useState([])

  const { t } = useTranslation()
  useEffect(() => {
    locationsService.getCountries().then((response) => {
      if (response.status === 200) {
        setCountries(response.data.data.countries)
      }
    })
  }, [])
  const [form, setForm] = useState(() => {
    const savedForm = localStorage.getItem('generalInfoForm')
    return savedForm
      ? JSON.parse(savedForm)
      : {
          firstName: '',
          lastName: '',
          country: '',
          city: '',
          description: '',
          confirmAge: false
        }
  })
  useEffect(() => {
    localStorage.setItem('generalInfoForm', JSON.stringify(form))
  }, [form])
  useEffect(() => {
    if (!form.country) return
    setCities(['waiting...'])
    locationsService
      .getCities(form.country)
      .then((response) => {
        if (response.status === 200) {
          if (response.data.data.cities.length > 0) {
            setCities(response.data.data.cities)
          } else {
            setCities(['No cities found'])
          }
        }
      })
      .catch(() => {
        setCities(['No cities found'])
      })
  }, [form.country])
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    description: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const newForm = {
      ...form,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'country' ? { city: '' } : {})
    }
    setForm(newForm)
    localStorage.setItem('generalInfoForm', JSON.stringify(newForm))
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
      <Typography sx={styles.describe} variant='body1'>
        {t('becomeTutor.generalInfo.title')}
      </Typography>
      <Box sx={styles.inputs}>
        <TextField
          autoFocus
          error={errors.firstName}
          fullWidth
          helperText={
            errors.firstName && t('becomeTutor.generalInfo.firstNameLabelReq')
          }
          label={t('common.labels.firstName')}
          name='firstName'
          onBlur={validateForm}
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
          onBlur={validateForm}
          onChange={handleChange}
          required
          value={form.lastName}
        />
      </Box>
      <Box sx={styles.inputs}>
        <PaginatedSelect
          label={t('common.labels.country')}
          name='country'
          onChange={handleChange}
          options={countries}
          value={form.country}
        />
        <PaginatedSelect
          label={t('common.labels.city')}
          name='city'
          onChange={handleChange}
          options={cities}
          value={form.city}
        />
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
