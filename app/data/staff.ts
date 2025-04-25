interface Staff {
  name: string
  bio: string
  image: string
  email: string
}

const staff: Staff[] = [
  {
    name: 'David Chee',
    bio: 'Head Organiser',
    image: '/images/staff/david.jpg',
    email: 'david@manifest.is',
  },
  {
    name: 'Rachel',
    bio: 'Lead Organiser',
    image: '/images/staff/rachel.jpg',
    email: 'rach@manifest.is',
  },
  {
    name: 'Austin Chen',
    bio: 'Advisor',
    image: '/images/staff/austin.jpg',
    email: 'austin@manifest.is',
  },
]

export default staff
