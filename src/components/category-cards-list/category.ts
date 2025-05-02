import LanguageIcon from '@mui/icons-material/Language'
import Grid3x3Icon from '@mui/icons-material/Grid3x3'
import CodeIcon from '@mui/icons-material/Code'
import ScienceIcon from '@mui/icons-material/Science'
import BrushIcon from '@mui/icons-material/Brush'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import BusinessIcon from '@mui/icons-material/Business'
import PsychologyIcon from '@mui/icons-material/Psychology'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import EmojiNatureIcon from '@mui/icons-material/EmojiNature'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import PetsIcon from '@mui/icons-material/Pets'
import EngineeringIcon from '@mui/icons-material/Engineering'
import PublicIcon from '@mui/icons-material/Public'
import LocalDiningIcon from '@mui/icons-material/LocalDining'
import { SvgIconComponent } from '@mui/icons-material'

export type Category = {
  categoryId: string
  icon: SvgIconComponent
  title: string
  offersCount: number
  iconBgColor?: string
  iconColor?: string
  offerText?: string
}

export const allCategories = [
  {
    categoryId: 'languages',
    icon: LanguageIcon,
    title: 'Languages',
    offersCount: 234,
    iconBgColor: '#e5f4ea',
    iconColor: '#4CAF50'
  },
  {
    categoryId: 'math',
    icon: Grid3x3Icon,
    title: 'Mathematics',
    offersCount: 120,
    iconBgColor: '#fff3cd',
    iconColor: '#ffb300'
  },
  {
    categoryId: 'programming',
    icon: CodeIcon,
    title: 'Programming',
    offersCount: 98,
    iconBgColor: '#e3f2fd',
    iconColor: '#2196F3'
  },
  {
    categoryId: 'science',
    icon: ScienceIcon,
    title: 'Science',
    offersCount: 76,
    iconBgColor: '#f3e5f5',
    iconColor: '#9C27B0'
  },
  {
    categoryId: 'art',
    icon: BrushIcon,
    title: 'Art',
    offersCount: 45,
    iconBgColor: '#fff8e1',
    iconColor: '#ff9800'
  },
  {
    categoryId: 'music',
    icon: MusicNoteIcon,
    title: 'Music',
    offersCount: 64,
    iconBgColor: '#fce4ec',
    iconColor: '#E91E63'
  },
  {
    categoryId: 'sports',
    icon: SportsSoccerIcon,
    title: 'Sports',
    offersCount: 89,
    iconBgColor: '#e8f5e9',
    iconColor: '#4CAF50'
  },
  {
    categoryId: 'history',
    icon: HistoryEduIcon,
    title: 'History',
    offersCount: 52,
    iconBgColor: '#ede7f6',
    iconColor: '#673AB7'
  },
  {
    categoryId: 'business',
    icon: BusinessIcon,
    title: 'Business',
    offersCount: 110,
    iconBgColor: '#fffde7',
    iconColor: '#FBC02D'
  },
  {
    categoryId: 'psychology',
    icon: PsychologyIcon,
    title: 'Psychology',
    offersCount: 70,
    iconBgColor: '#e1f5fe',
    iconColor: '#03A9F4'
  },
  {
    categoryId: 'health',
    icon: HealthAndSafetyIcon,
    title: 'Health',
    offersCount: 92,
    iconBgColor: '#fbe9e7',
    iconColor: '#FF5722'
  },
  {
    categoryId: 'nature',
    icon: EmojiNatureIcon,
    title: 'Nature',
    offersCount: 36,
    iconBgColor: '#f1f8e9',
    iconColor: '#689F38'
  },
  {
    categoryId: 'photography',
    icon: CameraAltIcon,
    title: 'Photography',
    offersCount: 59,
    iconBgColor: '#eceff1',
    iconColor: '#607D8B'
  },
  {
    categoryId: 'travel',
    icon: TravelExploreIcon,
    title: 'Travel',
    offersCount: 44,
    iconBgColor: '#e0f7fa',
    iconColor: '#00ACC1'
  },
  {
    categoryId: 'pets',
    icon: PetsIcon,
    title: 'Pets',
    offersCount: 30,
    iconBgColor: '#fce4ec',
    iconColor: '#EC407A'
  },
  {
    categoryId: 'engineering',
    icon: EngineeringIcon,
    title: 'Engineering',
    offersCount: 80,
    iconBgColor: '#f3e5f5',
    iconColor: '#8E24AA'
  },
  {
    categoryId: 'geography',
    icon: PublicIcon,
    title: 'Geography',
    offersCount: 48,
    iconBgColor: '#f1f8e9',
    iconColor: '#43A047'
  },
  {
    categoryId: 'cooking',
    icon: LocalDiningIcon,
    title: 'Cooking',
    offersCount: 67,
    iconBgColor: '#fff3e0',
    iconColor: '#FB8C00'
  }
]
