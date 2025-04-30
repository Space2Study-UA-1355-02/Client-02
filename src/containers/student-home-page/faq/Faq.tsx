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
import { useMemo } from 'react'

interface AccordionItem {
  title: string
  description: string
}

interface FaqProps {
  accordionItems: AccordionItem[]
}

const Faq: React.FC<FaqProps> = ({ accordionItems }) => {
  const { t } = useTranslation()

  const boxStyles = {
    margin: '0 auto',
    maxWidth: '800px',
    width: '100%'
  }

  const renderedAccordionItems = useMemo(
    () =>
      accordionItems.map((item, index) => (
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
      )),
    [accordionItems, t]
  )

  return (
    <Box
      className='section'
      id={studentRoutes.navBar.faq.route}
      sx={styles.container}
    >
      <TitleWithDescription
        description={t('studentHomePage.faq.subtitle')}
        style={styles.titleWithDescription}
        title={t('studentHomePage.faq.title')}
      />

      <Box sx={boxStyles}>{renderedAccordionItems}</Box>
    </Box>
  )
}

export default Faq
