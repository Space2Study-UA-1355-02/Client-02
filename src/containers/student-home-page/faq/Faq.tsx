import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'

import TitleWithDescription from '~/components/title-with-description/TitleWithDescription'
import { studentRoutes } from '~/router/constants/studentRoutes'
import { styles } from '~/containers/student-home-page/faq/Faq.styles'
import { accordionItems } from '~/containers/student-home-page/faq/accordionItems'

const Faq = () => {
  const { t } = useTranslation()

  return (
    <Box
      className='section'
      id={studentRoutes.navBar.faq.route}
      sx={{ ...styles.container, display: 'flex' }}
    >
      <TitleWithDescription
        description={t('studentHomePage.faq.subtitle')}
        style={styles.titleWithDescription}
        title={t('studentHomePage.faq.title')}
      />

      <Box sx={{ margin: '0 auto', maxWidth: '800px', width: '100%' }}>
        {accordionItems.map((item, index) => (
          <Accordion key={index} sx={styles.accordionItem}>
            <AccordionSummary
              aria-controls={`faq-panel-${index}`}
              expandIcon={<ExpandMoreRoundedIcon />}
              id={`faq-header-${index}`}
            >
              <Typography fontWeight={600} variant='subtitle1'>
                {t(item.title)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body2'>{t(item.description)}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  )
}

export default Faq
