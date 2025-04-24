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
    name: 'Rachel F',
    bio: 'Lead Organiser',
    image: '/images/staff/placeholder.jpg',
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
