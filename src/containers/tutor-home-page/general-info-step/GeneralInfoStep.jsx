import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import AppTextField from '~/components/app-text-field/AppTextField'
import PaginatedSelect from '~/components/paginated-select/PaginatedSelect'

import { useForm } from '~/hooks/use-form'

import { styles } from '~/containers/tutor-home-page/general-info-step/GeneralInfoStep.styles'

import { locationsService } from '~/services/location-service'

const GeneralInfoStep = ({ btnsBox, onErrorChange }) => {
  const { t } = useTranslation()
  const [countries, setCountries] = useState([])
  const [cities, setCities] = useState([])

  const saved = localStorage.getItem('generalInfoForm')
  const initialValues = saved
    ? JSON.parse(saved)
    : {
        firstName: '',
        lastName: '',
        country: '',
        city: '',
        description: '',
        confirmAge: false
      }

  const {
    data,
    errors,
    handleInputChange,
    handleNonInputValueChange,
    handleBlur
  } = useForm({
    initialValues,
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
    localStorage.setItem('generalInfoForm', JSON.stringify(data))
  }, [data])

  useEffect(() => {
    locationsService.getCountries().then((response) => {
      if (response.status === 200) {
        const rawCountries = response.data.data.countries
        const uniqueCountries = Array.from(new Set(rawCountries))
        setCountries(uniqueCountries)
      }
    })
  }, [])

  useEffect(() => {
    if (!data.country) return
    setCities(['waiting...'])

    locationsService
      .getCities(data.country)
      .then((response) => {
        if (response.status === 200) {
          const cityList = response.data.data.cities
          setCities(cityList.length ? cityList : ['No cities found'])
        }
      })
      .catch(() => {
        setCities(['No cities found'])
      })
  }, [data.country])
  useEffect(() => {
    onErrorChange(Boolean(errors.firstName || errors.lastName))
  }, [errors, onErrorChange])

  return (
    <>
      <Typography variant='body1'>
        {t('becomeTutor.generalInfo.title')}
      </Typography>
      <Box sx={styles.inputs}>
        <AppTextField
          autoFocus
          errorMsg={errors.firstName}
          fullWidth
          label={t('common.labels.firstName')}
          name='firstName'
          onBlur={handleBlur('firstName')}
          onChange={handleInputChange('firstName')}
          required
          value={data.firstName}
        />
        <AppTextField
          errorMsg={errors.lastName}
          fullWidth
          label={t('common.labels.lastName')}
          name='lastName'
          onBlur={handleBlur('lastName')}
          onChange={handleInputChange('lastName')}
          required
          value={data.lastName}
        />
      </Box>
      <Box sx={styles.inputs}>
        <PaginatedSelect
          label={t('common.labels.country')}
          name='country'
          onChange={(e) => handleNonInputValueChange('country', e.target.value)}
          options={countries}
          value={data.country}
        />
        <PaginatedSelect
          label={t('common.labels.city')}
          name='city'
          onChange={(e) => handleNonInputValueChange('city', e.target.value)}
          options={cities}
          value={data.city}
        />
      </Box>
      <AppTextField
        errorMsg={errors.description}
        fullWidth
        helperText={`${data.description.length}/100`}
        inputProps={{ maxLength: 100 }}
        label={t('becomeTutor.generalInfo.textFieldLabel')}
        multiline
        name='description'
        onChange={handleInputChange('description')}
        rows={3}
        value={data.description}
        withHelperText
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
