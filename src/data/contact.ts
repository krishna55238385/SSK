import { Instagram, Facebook, Linkedin } from "lucide-react"

// Single source of truth for business contact details. The footer and the
// #contact section both read from here, so details change in one place.
export const CONTACT = {
  email: "hello@sskhandlooms.in",
  /** Formatted for display. */
  phone: "+91 82483 22396",
  /** Same number, digits only, for the tel: href. */
  phoneHref: "tel:+918248322396",
  address: "106 Murugan Nagar, Peelamedu, Coimbatore - 641004",
} as const

export const SOCIALS = [
  { name: "Instagram", href: "https://www.instagram.com/ssk_handlooms/", Icon: Instagram },
  { name: "Facebook", href: "https://www.facebook.com/people/SSK-Handlooms/61591727124092/", Icon: Facebook },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/ssk-handlooms/", Icon: Linkedin },
] as const
