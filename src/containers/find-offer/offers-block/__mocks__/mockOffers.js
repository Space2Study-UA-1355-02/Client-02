const mockOffers = [
  {
    id: 1,
    author: {
      name: 'Jennifer W.',
      avatarSrc: '/img/avatar.png',
      rating: 4.8,
      reviewCount: 32,
      spokenLanguages: 'Ukrainian, English'
    },
    offer: {
      title: 'Ukrainian Literature',
      subject: 'Ukrainian',
      level: 'Beginner – Professional',
      price: 300,
      description: 'Deep dive into Ukrainian classics.'
    }
  },
  {
    id: 2,
    author: {
      name: 'Mark T.',
      avatarSrc: '/img/avatar2.png',
      rating: 4.6,
      reviewCount: 18,
      spokenLanguages: 'English'
    },
    offer: {
      title: 'English Grammar Basics',
      subject: 'English',
      level: 'Beginner',
      price: 200,
      description: 'Simple and fun English lessons for beginners.'
    }
  }
]

export { mockOffers }
