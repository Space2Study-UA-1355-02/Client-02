import Box from '@mui/material/Box'

import { styles } from '~/containers/tutor-home-page/interests-step/InterestsStep.styles'
import img from '~/assets/img/tutor-home-page/become-tutor/languages.svg'

const InterestsStep = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.imgContainer}>
        <Box component='img' src={img} sx={styles.img} />
      </Box>
      <Box sx={styles.rigthBox}>
        <Box>InterestsStep here</Box>
      </Box>
    </Box>
  )
}

export default InterestsStep
