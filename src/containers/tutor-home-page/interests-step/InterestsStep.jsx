import { useTranslation } from 'react-i18next'
import SubjectsStep from '~/containers/tutor-home-page/subjects-step/SubjectsStep'
const STORAGE_KEY = 'interestsStepForm'
const InterestsStep = ({ btnsBox, onSubjectsChange }) => {
  const { t } = useTranslation()
  const categoriesInterestsMainLabel = t(
    'becomeTutor.categories.mainInterestsLabel'
  )
  return (
    <SubjectsStep
      btnsBox={btnsBox}
      categoriesMainLabel={categoriesInterestsMainLabel}
      onSubjectsChange={onSubjectsChange}
      storageKey={STORAGE_KEY}
    />
  )
}

export default InterestsStep
