// Formspree form IDs. These are public by design — they ship in the client
// bundle and only identify which inbox a submission lands in.
// Swap an ID here to point a form at a different Formspree endpoint.
export const NEWSLETTER_FORM_ID = "xgawzgyo"

// TODO: create a second Formspree form for enquiries and swap this ID.
// Until then, newsletter signups and contact enquiries share one inbox —
// they're distinguishable by the _subject each form sends.
export const CONTACT_FORM_ID = "xgawzgyo"
