export interface NavItem {
  title: string
  href: string
}

export interface Plan {
  name: string
  price: string
  period: string
  features: string[]
}

export interface Testimonial {
  quote: string
  author: string
  role: string
}

export interface Project {
  id: string
  title: string
  year: string
  image: string
  tags: string[]
}

export interface Logo {
  src: string
  dot: string
}

